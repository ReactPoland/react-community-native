import { combineReducers } from 'redux';
import login from './login/reducer';
import webView from './webView/reducer';
import reactMap from './reactMap/reducer';
import reactWall from './reactWall/reducer';

const reducers = combineReducers({
    login,
    webView,
    reactMap,
    reactWall
});

// to reset data from reducers
export const resetReducsersAction = 'LOGOUT_USER';
const rootReducer = (state, action) => {
    if (action.type === resetReducsersAction) {
        state = undefined;
    }
    return reducers(state, action);
};

export default rootReducer;
