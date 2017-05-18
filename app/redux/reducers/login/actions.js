import { CALL_API } from '../../middleware/api';

export const GET_TOKEN_REQUEST = 'GET_TOKEN_REQUEST';
export const GET_TOKEN_SUCCESS = 'GET_TOKEN_SUCCESS';
export const GET_TOKEN_FAILURE = 'GET_TOKEN_FAILURE';

export const SHOW_DUMMY_ERROR = 'SHOW_DUMMY_ERROR';
export const HIDE_DUMMY_ERROR = 'HIDE_DUMMY_ERROR';

export const getToken = (login, password) => ({
    [CALL_API]: {
        types: [GET_TOKEN_REQUEST, GET_TOKEN_SUCCESS, GET_TOKEN_FAILURE],
        endpoint: '/getToken',
        method: 'POST',
        data: {
            login,
            password
        }
    }
});

export const setDummyError = (state) => {
    return {
        type: (state) ? SHOW_DUMMY_ERROR : HIDE_DUMMY_ERROR
    };
};
