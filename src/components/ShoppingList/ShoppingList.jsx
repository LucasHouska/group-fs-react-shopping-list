import Items from '../Items/Items.jsx'




function ShoppingList({ shoppingList, clearList}) {

        
    const handleClear = () => {
        console.log('handleClear func');
        clearList()
    }
    
    return (
        <>
            <div>
                <h3>Shopping List</h3>
                <button>Reset</button>
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