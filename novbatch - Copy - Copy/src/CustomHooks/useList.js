import { useState } from "react";

const useList = ()=>{
    const [list,setList] = useState(["ADfar","Monika","Jishnu"]);
    const push = (value)=>{
        const newList = list.concat(value);
        setList(newList)
    }
    const pull =(index)=>{
         const newList = list.filter((item,listIndex)=>{
            return listIndex !== index;
         })
         setList(newList);
    }
    return {
        list: list,
        push:push,
        pull:pull
    }
}
export default useList