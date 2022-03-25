import { useState } from 'react';

function ShoppingForm({ addItem }) {
    const [itemName, setName] = useState('');
    const [itemQuantity, setQuantity] = useState('');
    const [itemUnit, setUnit] = useState('')

    const handleSubmit = () => {
        event.preventDefault();

        console.log('Passing form inputs to POST...')

        let newItem = { itemName, itemQuantity, itemUnit }


        addItem(newItem);

        console.log(newItem);

        setName('');
        setQuantity('');
        setUnit('');
    }
    return (
        <>
            <div className='form'>
                <h3 className='colorfulText'>Add an Item</h3>
                <form onSubmit={handleSubmit}>
                    <input
                        onChange={(event) => setName(event.target.value)}
                        placeholder="name"
                        value={itemName}

                    />
                    <input
                        onChange={(event) => setQuantity(event.target.value)}
                        placeholder="quantity"
                        value={itemQuantity}
                    />
                    <input
                        onChange={(event) => setUnit(event.target.value)}
                        placeholder="quantity"
                        value={itemUnit}
                    />
                    <input type="submit" value="Save" />
                </form>
            </div>
        </>
    )
}

export default ShoppingForm;