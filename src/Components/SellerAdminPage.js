import React, { useState } from 'react';
import ItemForm from './ItemForm';
import ItemList from './ItemList';

// SellerAdminPage component
function SellerAdminPage() {
    const [items, setItems] = useState({
        foodItem: [],
        electronics: [],
        skinCare: []
    });

    // const handleAddItem = (item) => {
    //     let updatedItems;
    //     console.log(item);

    //     updatedItems = {
    //         ...items,
    //         [item.category]: [...items[item.category], item]
    //     };
    //     setItems(updatedItems);
    // };


    const handleAddItem = (item) => {
        const updatedItems = { ...items };
        updatedItems[item.category].push(item);
        setItems(updatedItems);
    };

    const handleDeleteItem = (itemId) => {
        const updatedItems = { ...items };
        for (const category in updatedItems) {
            updatedItems[category] = updatedItems[category].filter((item) => item.itemId !== itemId);
        }
        setItems(updatedItems);
        localStorage.removeItem(itemId);
    };

    return (
        <div>
            <ItemForm onAddItem={handleAddItem} />
            <ItemList items={items} onDeleteItem={handleDeleteItem} />
        </div>
    );
}

export default SellerAdminPage;

