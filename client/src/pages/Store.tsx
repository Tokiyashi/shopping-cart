import React, {useState} from 'react';
import StoreItemsList from "../components/StoreItemsList/StoreItemsList";
import Cart from "../components/Cart/Cart";

const Store = () => {
    const [storeItems, setStoreItems] = useState([
        {name: "book", id: 1, price: 2000, imgUrl:"imgs/A_book.jpg"},
        {name: "book", id: 1, price: 2000, imgUrl:"imgs/A_book.jpg"},
        {name: "book", id: 1, price: 2000, imgUrl:"imgs/A_book.jpg"},
        {name: "book", id: 1, price: 2000, imgUrl:"imgs/A_book.jpg"},
        {name: "book", id: 1, price: 2000, imgUrl:"imgs/A_book.jpg"},
    ])

    return (
        <div>
            <Cart/>
            <StoreItemsList storeItems={storeItems}/>
        </div>
    );
};

export default Store;