import {useState} from 'react';

function ShoppingForm() {
    const handleSubmit = () => {
        const [name, setName] = useState('');
        const [quantity, setQuantity] = useState('');
        const [unit, setUnit] = useState

        console.log('Passing form inputs to POST...')

        // addItem();
    }
    return (
        <>
            <h3>Add an Item</h3>
            <form>
                <input placeholder="name" />
                <input placeholder="quantity" />
                <input placeholder="unit" />
                <button onClick={handleSubmit}>SAVE</button>
            </form>
        </>
    )
}

export default ShoppingForm;