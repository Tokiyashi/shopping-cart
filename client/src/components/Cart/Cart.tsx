import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useTypeSelector} from "../../hooks/useTypeSelector/useTypeSelector";
import {CartActionTypes} from "../../types/store";

const Cart = () => {

    const {items: storeItems, isVisible} = useTypeSelector(state => state.cart)
    const dispatch = useDispatch();

    return (
            <div className={((isVisible)?" ":"hidden w-0" ) + "fixed w-56 bg-white h-full p-5 right-0 top-0 z-1 justify-center border-pink-200 border-l-4"}>
                <button onClick={()=>dispatch({type: CartActionTypes.HIDE_CART})} className="w-full text-center bg-pink-100"> Выйти </button>
                <div className="w-full h-full mt-10">
                    {
                        storeItems.map((item)=>
                            <h1 key={item.id} className="text-center bg-pink-100 border-2 border-pink-200 border-r-4 mb-4"> {item.name} X {item.quantity} </h1>
                        )
                    }
                </div>
            </div>
    );
};

export default Cart;