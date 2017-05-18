import React from 'react';
import { Provider } from 'react-redux';
import store from './redux';
import MainLayout from './mainLayout';

export default () => (
    <Provider store={store}>
        <MainLayout />
    </Provider>
);
