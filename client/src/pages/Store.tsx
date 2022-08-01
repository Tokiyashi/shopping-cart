import React, {useState} from 'react';
import StoreItemsList from "../components/StoreItemsList/StoreItemsList";

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
            <StoreItemsList storeItems={storeItems}/>
        </div>
    );
};

export default Store;