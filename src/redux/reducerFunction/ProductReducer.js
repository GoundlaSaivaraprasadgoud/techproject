const initialState={
    cartData: JSON.parse(localStorage.getItem('cartData')) || [],
};
export const productReducer=(state=initialState,action)=>{
    switch(action.type){
        case "ADD_TO_CART":
            const existingProduct = state.cartData.find(
                (item) => item.id === action.payload.id
            );
            
            let updatedCartData;

            if (existingProduct) {
                if (existingProduct.quantity < 5) {
                    updatedCartData = state.cartData.map((item) =>
                        item.id === action.payload.id
                            ? { ...item, quantity: item.quantity + 1 }
                            : item
                    );
                } else {
                    updatedCartData = state.cartData; // No change
                }
            } else {
                updatedCartData = [...state.cartData, action.payload];
            };
            localStorage.setItem('cartData', JSON.stringify(updatedCartData));
            return { ...state, cartData: updatedCartData };
        
                    
         case "REMOVE_FROM_CART":
            const filterProduct=state.cartData.filter((cartProduct)=>cartProduct.id!==action.payload);
               localStorage.setItem('cartData', JSON.stringify(filterProduct));
                   return{
                   ...state,cartData:filterProduct,
            }
            
        default:
     return state;
    }
};