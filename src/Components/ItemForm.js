import React, { useState } from 'react';

// Input component
function InputField({ label, type, name, value, onChange }) {
    return (
        <div>
            <label htmlFor={name}>{label}</label>
            <input type={type} name={name} id={name} value={value} onChange={onChange} /><br /><br />
        </div>
    );
}

// ItemForm component
function ItemForm({ onAddItem }) {
    const [itemId, setItemId] = useState('');
    const [product, setProduct] = useState('');
    const [price, setPrice] = useState('');
    const [category, setCategory] = useState('foodItem');

    const handleSubmit = (e) => {
        e.preventDefault();

        const item = { itemId, product, price, category };
        localStorage.setItem(itemId, JSON.stringify(item));
        onAddItem(item);

        setItemId('');
        setProduct('');
        setPrice('');
    };

    return (
        <form onSubmit={handleSubmit}>
            {/* <label htmlFor="itemId">Item ID</label>
            <input type="number" name="itemId" id="itemId" value={itemId} onChange={(e) => setItemId(e.target.value)} /><br /><br /> */}

            <InputField label="Item ID" type="number" name="itemId" value={itemId} onChange={(e) => setItemId(e.target.value)} />
            <InputField label="Product" type="text" name="product" value={product} onChange={(e) => setProduct(e.target.value)} />
            <InputField label="Price" type="number" name="price" value={price} onChange={(e) => setPrice(e.target.value)} />

            <label htmlFor="category">Category</label>
            <select name="category" id="category" value={category} onChange={(e) => setCategory(e.target.value)}>
                <option value="foodItem">Food Item</option>
                <option value="electronics">Electronics</option>
                <option value="skinCare">Skin Care</option>
            </select><br /><br />

            <button type="submit">Submit</button><br /><br />
        </form>
    );
}

export default ItemForm;
