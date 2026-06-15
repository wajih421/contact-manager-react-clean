import './App.css';
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import AddContact from './components/AddContact';
import ContactList from './components/ContactList';

function App() {
  const LOCAL_STORAGE_KEY = 'contacts';

  // on loading page we pick data from local storage 
  const [contacts, setContacts] = useState(() => {
    const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
    return saved ? JSON.parse(saved) : [];
  });

  const [darkMode, setDarkMode] = useState(false);

  const addContactHandler = (contact) => {
    // every new contact is getting new id 
    const newContact = { ...contact, id: Date.now(), favorite: false };
    setContacts([...contacts, newContact]);
  };

  const deleteContactHandler = (id) => {
    setContacts(contacts.filter((contact) => contact.id !== id));
  };

  const toggleFavoriteHandler = (id) => {
    setContacts(
      contacts.map((contact) =>
        contact.id === id ? { ...contact, favorite: !contact.favorite } : contact
      )
    );
  };

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  const toggleDarkMode = () => setDarkMode((prev) => !prev);

  const favoriteCount = contacts.filter((c) => c.favorite).length;

  return (
    <div className={`app-wrapper ${darkMode ? 'dark-mode' : ''}`}>
      <div className='app-container'>
        <Header
          contactsCount={contacts.length}
          darkMode={darkMode}
          toggleDarkMode={toggleDarkMode}
        />

        <div className='stats-bar'>
          <div className='stat-card'>
            <div className='stat-number'>{contacts.length}</div>
            <div className='stat-label'>Total Contacts</div>
          </div>
          <div className='stat-card'>
            <div className='stat-number'>{favoriteCount}</div>
            <div className='stat-label'>Favorites </div>
          </div>
        </div>

        <AddContact addContactHandler={addContactHandler} />

        <ContactList
          contacts={contacts}
          deleteContactHandler={deleteContactHandler}
          toggleFavoriteHandler={toggleFavoriteHandler}
        />

        <footer className='app-footer'>MADE BY ME USING REACT</footer>
      </div>
    </div>
  );
}

export default App;