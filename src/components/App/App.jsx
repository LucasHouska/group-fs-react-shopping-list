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

    const addItem = (itemToAdd) => {
        axios.post('/list', itemToAdd)
        .then(response => {
            console.log(response);
            getItems();
        }).catch(error => {
            console.log(error);
        })
    }

    useEffect(() => {
        getItems();
    }, [])


    return (
        <div className="App">
            <Header />
            <main>
                <ShoppingForm 
                addItem={addItem}
                />
                <ShoppingList 
                shoppingList={shoppingList}

                deleteItem={deleteItem}

                clearList={clearList}

                />
            </main>
        </div>
    );
}

export default App;
