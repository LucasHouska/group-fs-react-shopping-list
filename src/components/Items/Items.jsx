function Items({item, deleteItem, purchaseItem}) {

    const handleDelete = () => {
        console.log('clicked delete');

        deleteItem(item);
    }

    const handlePurchase = () => {
        console.log('clicked buy');
        purchaseItem(item);
    }

    return (
        <>
            <div>
                <p>{item.name}</p>
                <p>{item.quantity} <span>{item.unit}</span></p>
                <button onClick={handlePurchase}>Buy</button>
                <button onClick={handleDelete}>Remove</button>
            </div>
        </>
    )
}

export default Items;