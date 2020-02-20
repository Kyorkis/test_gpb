import initReducers from '../reducers'
import { createStore,applyMiddleware,compose  } from 'redux';
import middlewares from '../middlewares'
import { routerMiddleware } from 'connected-react-router'
import { createBrowserHistory } from 'history';

import createSagaMiddleware from 'redux-saga'
import {watchFetchData} from '../sagas/sagas'
import {watchFetchDetailData} from '../sagas/sagas'

export const history = createBrowserHistory()

export const sagaMiddleware = createSagaMiddleware()

export default function initStore(){
    
    const store = createStore(
        initReducers(history),
        compose(
            applyMiddleware(routerMiddleware(history),sagaMiddleware,...middlewares),
            
        ) 
    )
    sagaMiddleware.run(watchFetchData)
    sagaMiddleware.run(watchFetchDetailData)
    return store      
}







