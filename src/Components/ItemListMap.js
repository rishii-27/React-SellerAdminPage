import React from 'react'

const ItemListMap = props => {
    return (
        <div>
            <h2>{props.itemName}</h2>
            <div>
                {props.itemCategory.map((item) => (
                    <div key={item.itemId}>
                        <p>
                            Product <b>{item.product}</b>, Price is <b>{item.price}</b>, and ID is <b>{item.itemId}</b>
                        </p>
                        <button onClick={() => props.onDelItem(item.itemId)}>Delete</button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ItemListMap;