import {
  GET_TOKEN_REQUEST, GET_TOKEN_SUCCESS, GET_TOKEN_FAILURE,
  SHOW_DUMMY_ERROR, HIDE_DUMMY_ERROR
} from './actions';

const initialState = {
    authToken: null,
    errorToken: null
};

export default function reducer (state = initialState, action) {
    switch (action.type) {
        case GET_TOKEN_REQUEST:
            return { ...state, authToken: null };
        case GET_TOKEN_SUCCESS:
            return { ...state, authToken: action.response.token };
        case GET_TOKEN_FAILURE:
            return { ...state, errorToken: action.error };

        case SHOW_DUMMY_ERROR:
            return { ...state, errorToken: 'ERROR IS HERE !!!' };
        case HIDE_DUMMY_ERROR:
            return { ...state, errorToken: null };

        default:
            return state;
    }
}
