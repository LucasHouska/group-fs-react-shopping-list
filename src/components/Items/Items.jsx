function Items({item, deleteItem}) {
    return (
        <>
            <div>
                <p>{item.name}</p>
                <p>{item.quantity} <span>{item.unit}</span></p>
                <button>Buy</button>
                <button>Remove</button>
            </div>
        </>
    )
}

export default Items;