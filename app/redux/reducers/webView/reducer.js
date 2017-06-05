import {
  HIDE_DUMMY_ERROR
} from './actions';

const initialState = {
    webViewEnable: true
};

export default function reducer (state = initialState, action) {
    switch (action.type) {
        case HIDE_DUMMY_ERROR:
            console.log('change');
            return { ...state, webViewEnable: action.switchWebView };
        default:
            return state;
    }
}
