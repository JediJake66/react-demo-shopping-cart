// existing products 
export const productReducer = (state, action) => {
  switch (action.type) {
    case "FILTER_BY_DELIVERY":
      return { ...state, byFastDelivery: !state.byFastDelivery };
    case "FILTER_BY_RATING":
      return { ...state, byRating: action.payload }
    case "FILTER_BY_SEARCH":
      return { ...state, searchQuery: action.payload }
    case "CLEAR_FILTERS":
      return { byFastDelivery: false, byRating: 0 }
    default:
      return state;
  }
}

// a cart waiting for products to be added or removed 