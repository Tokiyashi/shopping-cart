export interface IStoreItem{
    id: number,
    name: string,
    price: number,
    imgUrl : string,
}

//===================REDUCER

export interface CartState{
    isVisible: boolean;
    items: {
        id:number
        name: string,
        price: number,
        quantity: number,
        imgUrl: string,
    }[];
}

export enum CartActionTypes{
    ADD_ITEM = "ADD_ITEM",
    REMOVE_ITEM = "REMOVE_ITEM",
    HIDE_CART = "HIDE_CART",
    SHOW_CART = "SHOW_CART",
}
interface AddItemAction{
    type: CartActionTypes.ADD_ITEM;
    payload: {
        name:string,
        price: number,
        quantity: number,
        id: number,
        imgUrl: string,
    };
}
interface RemoveItemAction{
    type: CartActionTypes.REMOVE_ITEM
}

interface ShowCartAction{
    type: CartActionTypes.SHOW_CART
}

interface HideCartAction{
    type: CartActionTypes.HIDE_CART
}
export type UserAction = AddItemAction | RemoveItemAction | ShowCartAction | HideCartAction;
