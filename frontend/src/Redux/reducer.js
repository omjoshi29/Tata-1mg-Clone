import{USEROTP,USERNAME} from "./actiontype"
import{Loaddata,Savedata} from "../utils/localstorage"

const initState={
    otp:Loaddata("otp")||"",
    username:Loaddata("username")||""
}

export const Userreducer=(state=initState,action)=>{

    switch(action.type)
    {
        case USEROTP:{
            let data=action.payload
            Savedata("otp",data)

            return{
                ...state,
                otp:data
            }
        }

        case USERNAME:{
            let data=action.payload
            Savedata("username",data)

            return{
                ...state,
                username:data
            }
        }

        default:{
            return state;
        }
    }
}

