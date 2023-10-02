const moneyReducer = (state=0,action)=>{
    if(action.type === "INCREMENT_COUNTER"){
        return state+action.payload;
    }
    else if(action.type === "DECREMENT_COUNTER"){
        return state-action.payload;
        
    }
    else {
        return state;
    }
}
export default moneyReducer ;
