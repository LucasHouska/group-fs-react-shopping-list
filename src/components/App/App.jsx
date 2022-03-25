import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Header from '../Header/Header.jsx'
import ShoppingList from '../ShoppingList/ShoppingList.jsx'
import ShoppingForm from '../ShoppingForm/ShoppingForm.jsx'
import './App.css';


function App() {

    const [shoppingList, setShoppingList] = useState([]);


    const deleteItem = (itemToDelete) => {
        console.log('you want to delete something...', itemToDelete);

        axios.delete(`/list/${itemToDelete.id}`)
        .then(function(response) {
            console.log('item deleted');
            getItems();
        }).catch(function(err) {
            console.log(err);
        })
    };

    const resetItems = () => {
        console.log('in resetItems');
        axios.put(`/list`)
        .then( response => {
            console.log(`list reset`);
            getItems();
        }).catch(function(err) {
            console.log(err);
        })
    };
    

    const clearList = () => {
        console.log('clearList func')
        axios.delete(`/list`)
        .then( response => {
            console.log('cleared:', response);
            getItems();
        })
        .catch( error => {
            console.log(error)
        })
    }
    

    const getItems = () => {

        axios.get('/list')
            .then((response) => {
                console.log('Entire response:', response);
                console.log('Just the data:', response.data);
                setShoppingList(response.data);
            }).catch((error) => {
                console.log('Error on get:', error);
            })
    }

    useEffect(() => {
        getItems();
    }, [])


    return (
        <div className="App">
            <Header />
            <main>
                <h3>Add an Item</h3>
                <form>
                    <input placeholder="name" />
                    <input placeholder="quantity" />
                    <input placeholder="unit" />
                    <button>SAVE</button>
                </form>
                <ShoppingList 
                shoppingList={shoppingList}
                clearPurchased={resetItems}

                deleteItem={deleteItem}

                clearList={clearList}

                />
            </main>
        </div>
    );
}

export default App;
