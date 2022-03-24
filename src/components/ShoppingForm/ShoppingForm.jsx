import { useState } from 'react';

function ShoppingForm() {
    const handleSubmit = () => {
        const [itemName, setName] = useState({ itemName: '' });
        const [itemQuantity, setQuantity] = useState({itemQuantity: ''});
        const [unit, setUnit] = useState

        console.log('Passing form inputs to POST...')

        // addItem();
    }
    return (
        <>
            <h3>Add an Item</h3>
            <form>
                <input
                    onChange={(event) => setName({ itemName: event.target.value })}
                    placeholder="name"
                    value={itemName.itemName}

                />
                <input
                    onChange={(event) => setQuantity({ itemQuantity: event.target.value })}
                    placeholder="quantity"
                    value={itemQuantity.itemQuantity}
                />
                <input placeholder="unit" />
                <button onClick={handleSubmit}>SAVE</button>
            </form>
        </>
    )
}

export default ShoppingForm;