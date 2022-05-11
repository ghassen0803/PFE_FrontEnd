import React, { useState, useEffect } from "react";
import { Routes ,Route } from 'react-router-dom';
import Navbar from './components/layouts/Navbar'
import FamilyList from './components/layouts/FamilyList'
import UseApi from './components/crud'
import Cart from './components/layouts/Cart'
import Default from './components/layouts/Default'
import Modal from './components/elements/Modal'
import 'bootstrap/dist/css/bootstrap.min.css'
import api from "../src/api/url";
import ContactList from "../src/components/ContactList";
import './assets/css/App.css'


function App() {

    const [contacts, setContacts] = useState([]);

    //RetrieveContacts
  const  retrieveContacts = async () => {
      const response = await api.get("/articles" );
      return response.data;
    };
    
  
  
    useEffect(() => {
      // const retriveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
      // if (retriveContacts) setContacts(retriveContacts);
      const getAllCOntacts = async () => {
        const allContacts = await retrieveContacts();
        if (allContacts) setContacts(allContacts);
      };
  
      getAllCOntacts();
    }, []);
  
    useEffect(() => { 
      //localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
    }, [contacts]);
  
  

      return (
          <>
                <Navbar />

                <Routes>
                    
                <Route
            path="/articles"
            render={(props) => (
                <ContactList
                  {...props}
                  contacts={contacts}
              />
            )}
          />
                    <Route path="/" exact element={< FamilyList/> } />
                    <Route path="/cart" element={ <Cart/> } />
                    <Route element={< Default/> } />
                </Routes>
                <Modal />
          </>
      )
  }

export default App
