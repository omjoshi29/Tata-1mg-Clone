import { legacy_createStore as createStore,applyMiddleware,combineReducers } from "redux";

import{Userreducer} from "./reducer"



const middleware1=(store)=>(next)=>(action)=>{
    next(action)
}



export const store=createStore(Userreducer,applyMiddleware(middleware1))