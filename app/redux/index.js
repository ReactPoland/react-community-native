import { applyMiddleware, createStore, compose } from 'redux';
import { createLogger } from 'redux-logger';
import api from './middleware/api';
import rootReducer from './reducers';

const logger = createLogger();
const middleware = [api, logger];

const createAppStore = compose(applyMiddleware(...middleware))(createStore);
const store = (createAppStore)(rootReducer);

export default store;
