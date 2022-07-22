import{USEROTP,USERNAME} from "./actiontype"




export const userotp=(payload)=>{
    return{
        type:USEROTP,
        payload
    }
}

export const username=(payload)=>{
    return{
        type:USERNAME,
        payload
    }
}