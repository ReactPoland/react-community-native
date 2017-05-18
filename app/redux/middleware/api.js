import lodash from 'lodash';
// API configuration
import http from '../../utils/http';

// Action key that carries API call info interpreted by this Redux middleware.
export const CALL_API = 'CALL_API';
const debug = false;

// A Redux middleware that interprets actions with CALL_API info specified.
// Performs the call and promises when such actions are dispatched.
export default store => next => action => {
    const callAPI = action[CALL_API];

    if (typeof callAPI === 'undefined') return next(action);

    let { endpoint } = callAPI;
    const { method, types, data } = callAPI;

    if (typeof endpoint === 'function') {
        endpoint = endpoint(store.getState());
    }

    if (typeof endpoint !== 'string') {
        throw new Error('Specify a string endpoint URL.');
    }

    if (!Array.isArray(types) || types.length !== 3) {
        throw new Error('Expected an array of three action types.');
    }

    if (!types.every(type => typeof type === 'string')) {
        throw new Error('Expected action types to be strings.');
    }

    function actionWith (data) {
        const finalAction = Object.assign({}, action, data);
        delete finalAction[CALL_API];
        return finalAction;
    }

    const [requestType, successType, failureType] = types;
    next(actionWith({ type: requestType }));

    function callApi (endpoint, method = 'GET', body) {
        const accessToken = lodash.get(store.getState(), 'token.authToken', '');
        const handleApi = http.apiHandler(method);

        endpoint = endpoint + '.js';

        if (debug) console.log('[API] call', endpoint, accessToken, method, body);

        return handleApi(endpoint, accessToken, body)
            .then((json) => {
                if (json.error) {
                    return Promise.reject(json.error);
                }

                if (debug) console.log('[API] response', endpoint, json);

                return Object.assign({}, json);
            })
            .catch((error) => {
                if (debug) console.log('[API] error', endpoint, error);
                return Promise.reject(error);
            });
    }

    return callApi(endpoint, method, data).then(
        response => next(actionWith({
            response,
            type: successType
        })),
        error => next(actionWith({
            type: failureType,
            error: error || 'Something bad happened'
        }))
    );
};
