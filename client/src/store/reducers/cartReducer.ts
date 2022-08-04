import {CartActionTypes, CartState, IStoreItem, UserAction} from "../../types/store";

const initialState: CartState = {
    isVisible: false,
    items: [
    ]
}

export const cartReducer = (state: CartState = initialState, action: UserAction):CartState => {
    switch (action.type){
        case CartActionTypes.ADD_ITEM:
            return {...state, items:[...state.items, action.payload]}
        case CartActionTypes.SHOW_CART:
            return {...state, isVisible:true};
        case CartActionTypes.HIDE_CART:
            return {...state, isVisible:false};
        default:
            return state
    }
}