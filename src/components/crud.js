import React, {Component, useState, useEffect } from "react";
import api from "../api/url";
import ContactList from "./ContactList";


function UseApi() {

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
    <div className="ui container">
 
              <ContactList
                contacts={contacts}
              />
            

    </div>
  );
}

export default UseApi;

