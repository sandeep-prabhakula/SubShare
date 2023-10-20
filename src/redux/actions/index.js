export const userLogin = (user)=>{
    return (dispatch)=>{
        dispatch({
            type:"LOGIN",
            payload : user
        })
    }
}
export const userLogout = (user)=>{
    return (dispatch)=>{
        dispatch({
            type:"LOGOUT",
            payload : {}
        })
    }
}