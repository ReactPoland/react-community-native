import { CALL_API } from '../../middleware/api';

export const GET_USERS_REQUEST = 'GET_USERS_REQUEST';
export const GET_USERS_SUCCESS = 'GET_USERS_SUCCESS';
export const GET_USERS_FAILURE = 'GET_USERS_FAILURE';

export const GET_EVENTS_REQUEST = 'GET_EVENTS_REQUEST';
export const GET_EVENTS_SUCCESS = 'GET_EVENTS_SUCCESS';
export const GET_EVENTS_FAILURE = 'GET_EVENTS_FAILURE';

export const getUsers = () => ({
    [CALL_API]: {
        types: [GET_USERS_REQUEST, GET_USERS_SUCCESS, GET_USERS_FAILURE],
        endpoint: '/getToken',
        method: 'POST'
    }
});
export const getEvents = () => ({
    [CALL_API]: {
        types: [GET_EVENTS_REQUEST, GET_EVENTS_SUCCESS, GET_EVENTS_FAILURE],
        endpoint: '/getToken',
        method: 'POST'
    }
});
