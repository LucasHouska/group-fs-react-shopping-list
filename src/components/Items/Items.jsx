function Items({item, deleteItem}) {

    const handleDelete = () => {
        console.log('clicked');

        deleteItem(item);
    }
    return (
        <>
            <div className="item">
                <p>{item.name}</p>
                <p>{item.quantity} <span>{item.unit}</span></p>
                <button>Buy</button>
                <button onClick={handleDelete}>Remove</button>
            </div>
        </>
    )
}

export default Items;