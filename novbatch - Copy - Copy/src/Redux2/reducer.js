const initialState = {
    backgroundColor: "violet"
}
const backgroundReducer = (state = initialState,action)=>{
   switch(action.type){
    case "setBackgroundcolor":
        return {
            ...state,
            backgroundColor : action.payload,
        }
    default:
        return state
   }
}
export default backgroundReducer