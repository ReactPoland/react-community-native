import {
  GET_ARTICLES_REQUEST, GET_ARTICLES_SUCCESS, GET_ARTICLES_FAILURE
} from './actions';

const initialState = {
    articles: [],
    error: null
};

export default function reducer (state = initialState, action) {
    switch (action.type) {
        case GET_ARTICLES_REQUEST:
            return { ...state, articles: null };
        case GET_ARTICLES_SUCCESS:
            return { ...state, articles: action.response.message };
        case GET_ARTICLES_FAILURE:
            return { ...state, error: action.error };
        default:
            return state;
    }
}
