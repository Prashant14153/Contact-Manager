import React, {useState} from 'react';
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";


function App() {

  const [contacts , setContacts] = useState([]);

  const addContactHandler = (contact) => {
    setContacts([...contacts,contact])

  }

  return (
    <div>
      
      <Header></Header>
        <AddContact addContactHandler = {addContactHandler} ></AddContact>
        <ContactList contacts = {contacts}></ContactList>
    </div>
  );
}

export default App;
