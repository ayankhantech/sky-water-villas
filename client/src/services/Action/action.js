import {ADD_TO_CART,REMOVE_TO_CART,CLEAR_ITEM}  from "../constant"
export const addtoCart = (data)=>{
    console.log(data)
    return {
        type:ADD_TO_CART,
        data:data
    }
}

export const removetoCart = (data)=>{
    return {
        type:REMOVE_TO_CART,
        data:data
    }
}
export const clearItems = (data)=>{
    return {
        type:CLEAR_ITEM,
        data:data
    }
}