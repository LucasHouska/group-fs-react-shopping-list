import Items from '../Items/Items.jsx'

function ShoppingList({ shoppingList, clearList, deleteItem, purchaseItem, resetItems}) {
        
    const handleClear = () => {
        console.log('handleClear func');
        clearList()
    }

    const handleReset = () => {
        console.log(`handleReset func`);
        resetItems();
    }

    const showHide = () => {
        setIsShowing(!isShowing)
    }
    
    return (
        <>
            <div className='shoppingListHeader'>
                <h3 className='colorfulText'>Shopping List</h3>
                <button onClick={handleReset}>Reset</button>
                <button onClick={handleClear}>Clear</button>
            </div>
            <div className='itemList'>
                {shoppingList.map(item =>
                    <Items 
                    key = {item.id}
                    item = {item}
                    deleteItem = {deleteItem}
                    purchaseItem = {purchaseItem}
                    />)}
            </div>
        </>
    )
}

export default ShoppingList;