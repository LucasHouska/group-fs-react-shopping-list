import {useState} from 'react';

function Items({item, deleteItem, purchaseItem, showHide, isShowing}) {
    
    
    const handleDelete = () => {
        console.log('clicked delete');

        deleteItem(item);
    }

    const handlePurchase = () => {
        console.log('clicked buy');
        purchaseItem(item);
        showHide()
    }

    return (
        <>
            <div className="item">
                <p>{item.name}</p>
                <p>{item.quantity} <span>{item.unit}</span></p>
                {item.purchased ? <h3>PURCHASED</h3> : <span>
                <button onClick={handlePurchase}>Buy</button>
                <button onClick={handleDelete}>Remove</button></span>}
            </div>
        </>
    )
}

export default Items;