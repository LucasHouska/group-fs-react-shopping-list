import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Header from '../Header/Header.jsx'
import ShoppingList from '../ShoppingList/ShoppingList.jsx'
import ShoppingForm from '../ShoppingForm/ShoppingForm.jsx'
import './App.css';


function App() {

    const [shoppingList, setShoppingList] = useState([]);
    
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
                clearList={clearList}
                />
            </main>
        </div>
    );
}

export default App;
