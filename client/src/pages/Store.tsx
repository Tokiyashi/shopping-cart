import React, {useState} from 'react';
import StoreItemsList from "../components/StoreItemsList/StoreItemsList";
import Cart from "../components/Cart/Cart";

const Store = () => {
    const [storeItems, setStoreItems] = useState([
        {name: "book", id: 0, price: 2000, imgUrl:"imgs/A_book.jpg"},
        {name: "boots", id: 22, price: 50, imgUrl:"imgs/para5_1-400x400.jpg"},
        {name: "boots", id: 22, price: 50, imgUrl:"imgs/para5_1-400x400.jpg"},
        {name: "boots", id: 22, price: 50, imgUrl:"imgs/para5_1-400x400.jpg"},
        {name: "book", id: 1412, price: 2000, imgUrl:"imgs/A_book.jpg"},
    ])

    return (
        <div className="pt-28">
            <StoreItemsList storeItems={storeItems}/>
        </div>
    );
};

export default Store;