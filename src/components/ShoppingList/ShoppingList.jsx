import Items from '../Items/Items.jsx'

function ShoppingList({ shoppingList, deleteItem }) {
    return (
        
        <>
            <div>
                <h3>Shopping List</h3>
                <button>Reset</button>
                <button>Clear</button>
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