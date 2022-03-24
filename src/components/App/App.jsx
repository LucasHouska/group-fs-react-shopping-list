import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Header from '../Header/Header.jsx'
import ShoppingList from '../ShoppingList/ShoppingList.jsx'
import ShoppingForm from '../ShoppingForm/ShoppingForm.jsx'
import './App.css';


function App() {

    const [shoppingList, setShoppingList] = useState([]);
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

    const addItem = () => {
        axios.post('/list', )
    }

    useEffect(() => {
        getItems();
    }, [])


    return (
        <div className="App">
            <Header />
            <main>
                <ShoppingForm />
                <ShoppingList 
                shoppingList={shoppingList}
                />
            </main>
        </div>
    );
}

export default App;
