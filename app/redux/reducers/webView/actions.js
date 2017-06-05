export const SWITCH_WEBVIEW = 'SWITCH_WEBVIEW';

export const showWebView = (switchWebView) => {
    return {
        type: 'SWITCH_WEBVIEW',
        switchWebView
    };
};
