import {
  SWITCH_WEBVIEW
} from './actions';

const initialState = {
    webViewEnable: true
};

export default function reducer (state = initialState, action) {
    switch (action.type) {
        case SWITCH_WEBVIEW:
            return { ...state, webViewEnable: action.switchWebView };
        default:
            return state;
    }
}
