import React from 'react';
import StoreItem from "./StoreItem";
import {IStoreItem} from "../../types/store";

interface StoreItemsListProps{
    storeItems: IStoreItem[],
}

const StoreItemsList: React.FC<StoreItemsListProps> = ({storeItems}) => {
    return (
        <div className="grid lg:grid-cols-3 md:grid-cols-2">
            {
                storeItems.map((item, index) =>
                <StoreItem storeItem={item}/>
            )
            }
        </div>
    );
};

export default StoreItemsList;