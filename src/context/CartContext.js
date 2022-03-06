import { createContext, useReducer } from "react";

import { productReducer } from "./Reducers";

export const CartContext = createContext();

const CartContextProvider = (props) => {


  const [productState, productDispatch] = useReducer(productReducer, {
    byFastDelivery: false,
    byRating: 0,
    searchQuery: ''
  });

  return (
    <CartContext.Provider value={{ productState, productDispatch }}>
      {props.children}
    </CartContext.Provider>
  )

}

export default CartContextProvider;