import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import Cookies from 'js-cookie'
export const PrivateRouter = ({children}) => {

    console.log(Cookies.get("token"),"inprivate route")
    console.log(Cookies.get("refreshToken"),"also")
  return (
    children
  )
}
