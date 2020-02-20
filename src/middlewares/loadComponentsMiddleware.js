import {START_LOADING_COMPONENTS} from '../actions/startLoad.js'
import {completeLoading} from '../actions/completeLoading.js'
const urlForGettingData = "https://api.myjson.com/bins/p41t0"
const urlForData="http://localhost:3000/data.json"

const getData = async(url)=>{
    const res = await fetch(url)
    if(!res.ok){
        throw new Error(`Could not fetch ${url} ` + `,recieved ${res.status}`)    
    }
    const body = await res.json()
    return body
}


export default store => next => (action) =>{
    switch(action.type){
        case START_LOADING_COMPONENTS:{
            const getDataLoaded = async () =>{
                let answer = await getData(action.payload)
                store.dispatch(completeLoading(answer))
            }
            getDataLoaded()
        }   
    }
    return next(action)
}