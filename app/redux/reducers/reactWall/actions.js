import { CALL_API } from '../../middleware/api';

export const GET_ARTICLES_REQUEST = 'GET_USERS_REQUEST';
export const GET_ARTICLES_SUCCESS = 'GET_USERS_SUCCESS';
export const GET_ARTICLES_FAILURE = 'GET_USERS_FAILURE';

export const getArticels = () => ({
    [CALL_API]: {
        types: [GET_ARTICLES_REQUEST, GET_ARTICLES_SUCCESS, GET_ARTICLES_FAILURE],
        endpoint: 'https://react-community-stage.herokuapp.com/api/article/loadArticles/',
        method: 'GET'
    }
});
