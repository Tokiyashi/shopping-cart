import React, {useState} from 'react';
import {CartActionTypes, IStoreItem} from "../../types/store";
import {useDispatch} from "react-redux";

interface StoreItemProps{
    storeItem: IStoreItem,
}

const StoreItem: React.FC<StoreItemProps> =
    ({
         storeItem
    }) => {

    const dispatch = useDispatch()
    const [quantity, setQuantity] = useState(0)


        function addToCart() {
            setQuantity(1)
            dispatch({type: CartActionTypes.ADD_ITEM, payload:
                    {
                        id: storeItem.id,
                        imgUrl: storeItem.imgUrl,
                        quantity: 1,
                        name: storeItem.name,
                        price: storeItem.price
                    }})
        }

        function removeFromCart(){
            setQuantity(quantity-1)
        }

        return (
        <div className="border-8 border-fuchsia-100 flex rounded-2xl items-center flex-col justify-between shadow-lg mb-10 mx-5">
            <img
                className="w-full max-h-72 rounded-t-2xl"
                alt="itemImage"
                style={{objectFit: "cover"}}
                src={storeItem.imgUrl}
            />
            <div className="flex flex-col gap-4 items-center justify-center w-full p-10">
                <div className="flex w-11/12 justify-between items-center">
                    <h2 className="font-semibold text-xl">{storeItem.name}</h2> <h2 className="font-light text-xl">{storeItem.price} USD</h2>
                </div>
                {
                    quantity > 0
                    ? <div className="flex items-center gap-3">
                        <button className="bg-pink-500 w-10 h-10 my-3 rounded-md text-center text-white">-</button>
                            <h1>{quantity} Added to cart</h1>
                        <button className="bg-pink-500 w-10 h-10 my-3 rounded-md text-center text-white">+</button>
                    </div>
                    : <button onClick={() => addToCart()} className="bg-pink-500 rounded-2xl w-full text-center p-5 text-white">
                        Buy
                    </button>
                }

            </div>
        </div>
    );
};

export default StoreItem;