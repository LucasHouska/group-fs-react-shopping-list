import { useState } from 'react';

function ShoppingForm({addItem}) {
    const [itemName, setName] = useState({ itemName: '' });
    const [itemQuantity, setQuantity] = useState({ itemQuantity: '' });
    const [itemUnit, setUnit] = useState({ itemUnit: '' })

    const handleSubmit = () => {
        event.preventDefault();

        console.log('Passing form inputs to POST...')

        let newItem = {itemName, itemQuantity, itemUnit}


        addItem(newItem);

        console.log(newItem);
    }
    return (
        <>
            <h3>Add an Item</h3>
            <form onSubmit={handleSubmit}>
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
                <input
                    onChange={(event) => setUnit({ itemUnit: event.target.value })}
                    placeholder="quantity"
                    value={itemUnit.itemUnit}
                />
                <input type="submit" value="Save" />
            </form>
        </>
    )
}

export default ShoppingForm;