import {
  GET_USERS_REQUEST, GET_USERS_SUCCESS, GET_USERS_FAILURE,
  GET_EVENTS_REQUEST, GET_EVENTS_SUCCESS, GET_EVENTS_FAILURE
} from './actions';

const initialState = {
    usersMarkers: [],
    eventsMarkers: [],
    error: null
};

export default function reducer (state = initialState, action) {
    switch (action.type) {
        case GET_USERS_REQUEST:
            return { ...state, usersMarkers: null };
        case GET_USERS_SUCCESS:
            return { ...state, usersMarkers: action.response.message };
        case GET_USERS_FAILURE:
            return { ...state, error: action.error };

        case GET_EVENTS_REQUEST:
            return { ...state, eventsMarkers: null };
        case GET_EVENTS_SUCCESS:
            return { ...state, eventsMarkers: action.response.message };
        case GET_EVENTS_FAILURE:
            return { ...state, error: action.error };

        default:
            return state;
    }
}
