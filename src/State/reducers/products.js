import { SET_PRODUCTS } from "../Constants/actionTypes";


const INIT_STATE =[]

const productsReducer=(state=INIT_STATE, action)=>{
    switch (action.type) {
        case SET_PRODUCTS:
          return [...action.payload];
    
        default:
          return state;
      }
}

export default productsReducer;