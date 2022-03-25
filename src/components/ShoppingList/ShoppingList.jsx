import Items from '../Items/Items.jsx'




function ShoppingList({ shoppingList, clearList, deleteItem, resetItems}) {

        
    const handleClear = () => {
        console.log('handleClear func');
        clearList()
    }

    const handleReset = () => {
        console.log(`handleReset func`);
        resetItems()
    }
    
    return (
        <>
            <div>
                <h3>Shopping List</h3>
                <button onClick={handleReset}>Reset</button>
                <button onClick={handleClear}>Clear</button>
            </div>
            <div>
                {shoppingList.map(item =>
                    <Items 
                    key = {item.id}
                    item = {item}
                    deleteItem = {deleteItem}
                    />)}
            </div>
        </>
    )
}

export default ShoppingList;