import { combineReducers } from 'redux';
import login from './login/reducer';
import switcher from './webView/reducer';

const reducers = combineReducers({
    login,
    switcher
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
