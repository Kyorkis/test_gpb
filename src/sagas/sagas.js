import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import getData from '../middlewares/loadComponentsMiddleware'

import {FETCH_REQUEST,fetchRequest} from '../actions/fetchRequest'
import {FETCH_REQUEST_SUCCESS,fetchRequestSuccess} from '../actions/fetchRequestSuccess'
import {FETCH_REQUEST_ERROR,fetchRequestError} from '../actions/errorFetchServices'

import {START_LOAD_DETAIL} from '../actions/startLoadDetail'
import {SUCCESS_LOAD_DETAIL,successLoadDetail} from '../actions/successLoadDetail'
import {ERROR_LOAD_DETAIL,errorLoadDetail} from '../actions/errorLoadDetail'


const urlForData="http://localhost:3000/data.json"
const url ="http://localhost:7070/api/services"
 
const urlForDetails="http://localhost:7070/api"

export function* watchFetchData(){
    yield takeEvery("FETCH_REQUEST",fetchData)
}

export function* getDataWithSaga(action){
    try{
        const data = yield call(getData(urlForData),action)
        yield put({type:"FETCH_SUCCEEDED",data})
    }catch(error){
        yield put({type:"FETCH_FAILED",error})
    }
}

function* fetchData(){
    try{
        const data = yield fetch(url)
        const body = yield data.json()
        yield put(fetchRequestSuccess(body))
    }catch(error){
        yield put(fetchRequestError())
    }
}

export function* watchFetchDetailData(){
    yield takeEvery("START_LOAD_DETAIL",fetchDetailData)
}

function* fetchDetailData(action){
    let nowUrl = urlForDetails+action.url
    try {
        const data = yield fetch(nowUrl)
        const body = yield data.json()
        yield put(successLoadDetail(body))
    }catch(error){
        yield put(errorLoadDetail())
    }
}

