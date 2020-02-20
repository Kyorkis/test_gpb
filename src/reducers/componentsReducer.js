import {START_LOADING_COMPONENTS} from '../actions/startLoad'
import {COMPLETED_LOADING_COMPONENTS} from '../actions/completeLoading'
import {FETCH_REQUEST} from '../actions/fetchRequest'
import {FETCH_REQUEST_SUCCESS,fetchRequestSuccess} from '../actions/fetchRequestSuccess'
import {FETCH_REQUEST_ERROR,fetchRequestError} from '../actions/errorFetchServices'
import {START_LOAD_DETAIL} from '../actions/startLoadDetail'
import {SUCCESS_LOAD_DETAIL} from '../actions/successLoadDetail'
import {ERROR_LOAD_DETAIL} from '../actions/errorLoadDetail'



const initialState={
    componentsList:[],
    isLoading:false,
    servicesLoading:true,
    servicesList:[],
    error:false,
    detail:{},
    isDetailLoading:false,
    errorDetail:false
}


function componentsReducer(state=initialState,action){
    switch(action.type){
        case START_LOADING_COMPONENTS:{
            return Object.assign(
                {},state,{isLoading:true},{error:false}
            )
        }
        case COMPLETED_LOADING_COMPONENTS:{
            return Object.assign(
                {},state,{componentsList:action.payload},{isLoading:false}
            )
        }
        case FETCH_REQUEST:{
            return Object.assign(
                {},state,{servicesLoading:true},{error:false}
            ) 
        }
        case FETCH_REQUEST_SUCCESS:{
            return Object.assign(
                {},state,{servicesList:action.payload},{servicesLoading:false}
            )
        }
        case FETCH_REQUEST_ERROR:{
            return Object.assign(
                {},state,{error:true},{servicesLoading:false}
            )
        }
        case START_LOAD_DETAIL:{
            return Object.assign(
                {},state,{isDetailLoading:true},{errorDetail:false}
                )
        }
        case SUCCESS_LOAD_DETAIL:{
            return Object.assign(
                {},state,{detail:action.payload},{isDetailLoading:false}
            )
        }
        case ERROR_LOAD_DETAIL:{
            return Object.assign(
                {},state,{errorDetail:true},{isDetailLoading:false}
            )
        }
        default:
            return state
    }
}
export default componentsReducer

