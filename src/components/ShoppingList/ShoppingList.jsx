import Items from '../Items/Items.jsx'




function ShoppingList({ shoppingList, clearList, deleteItem}) {

        
    const handleClear = () => {
        console.log('handleClear func');
        clearList()
    }
    
    return (
        <>
            <div className='shoppingListHeader'>
                <h3 className='colorfulText'>Shopping List</h3>
                <button>Reset</button>
                <button onClick={handleClear}>Clear</button>
            </div>
            <div className='itemList'>
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