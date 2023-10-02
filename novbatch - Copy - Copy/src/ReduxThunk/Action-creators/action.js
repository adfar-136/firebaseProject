export const incrementCounter = (money)=>{
    return (dispatch)=>{
          dispatch({
             type:"INCREMENT_COUNTER",
             payload:money
          })
    }
 } 
 export const decrementCounter = (money)=>{
     return (dispatch)=>{
           dispatch({
              type:"DECREMENT_COUNTER",
              payload:money
           })
     }
  } 