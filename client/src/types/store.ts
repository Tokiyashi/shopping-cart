export interface IStoreItem{
    id: number,
    name: string,
    price: number,
    imgUrl : string,
}

//===================REDUCER

export interface CartState{
    items: {
        name: string,
        price: number,
        quantity: number
    }[];
}

export enum CartActionTypes{
    ADD_ITEM = "ADD_ITEM",
    REMOVE_ITEM = "REMOVE_ITEM"
}
interface AddItemAction{
    type: CartActionTypes.ADD_ITEM;
    payload: {
        name:string,
        price: number,
        quantity: number,
    };
}
interface RemoveItemAction{
    type: CartActionTypes.REMOVE_ITEM
}
export type UserAction = AddItemAction | RemoveItemAction;
