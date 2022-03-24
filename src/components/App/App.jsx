import React from 'react';
import {useEffect, useState} from 'react';

import Header from '../Header/Header.jsx'
import ShoppingList from '../ShoppingList/ShoppingList.jsx'
import ShoppingForm from '../ShoppingForm/ShoppingForm.jsx'
import './App.css';


function App() {

const [shoppingList, setShoppingList] = useState([]);    
const getItems = () => {

    axios.get('/list')
    .then ((response) => {
        console.log('Entire response:', response);
        console.log('Just the data:', response.data);
        setShoppingList(response.data);
    }).catch((error) => {
        console.log('Error on get:', error);
    });

} 

useEffect( () => {
    getItems();
}, [])


    return (
        <div className="App">
            <Header />
            <main>
                <h3>Add an Item</h3>
                <form>
                    <input placeholder="name"/>
                    <input placeholder="quantity"/>
                    <input placeholder="unit"/>
                    <button>SAVE</button>
                </form>
                <div>
                    <h3>Shopping List</h3>
                    <button>Reset</button>
                    <button>Clear</button>
                </div>
                <div>
                    <div>
                        <p>apples</p>
                        <p>5 <span>lbs</span></p>
                        <button>Buy</button>
                        <button>Remove</button>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default App;
