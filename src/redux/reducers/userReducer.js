const userReducer = (state={},action)=>{
    if(action.type==='LOGIN'){
        return action.payload
    }
    else return state
}

export default userReducer