import ItemListMap from "./ItemListMap";

// ItemList component
function ItemList({ items, onDeleteItem }) {
    return (
        <>
            {/* <h2>Food Items</h2>
            <div>
                {items.foodItem.map((item) => (
                    <div key={item.itemId}>
                        <p>
                            Product <b>{item.product}</b>, Price is <b>{item.price}</b>, and ID is <b>{item.itemId}</b>
                        </p>
                        <button onClick={() => onDeleteItem(item.itemId)}>Delete</button>
                    </div>
                ))}
            </div> */}

            <ItemListMap itemName="Food Item" itemCategory={items.foodItem} onDelItem={onDeleteItem} />

            <ItemListMap itemName="Electronics Item" itemCategory={items.electronics} onDelItem={onDeleteItem} />

            <ItemListMap itemName="Skin Item" itemCategory={items.skinCare} onDelItem={onDeleteItem} />



        </>
    );
}

export default ItemList;
