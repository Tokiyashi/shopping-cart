import {CartActionTypes, CartState, IStoreItem, UserAction} from "../../types/store";

const initialState: CartState = {
    items: []
}

export const cartReducer = (state: CartState = initialState, action: UserAction):CartState => {
    switch (action.type){
        case CartActionTypes.ADD_ITEM:
            return {items:{...state.items, [action.payload.name]: action.payload.quantity}}
        default:
            return state
    }
}