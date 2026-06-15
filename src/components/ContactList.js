import React, { useState } from 'react';
import ContactCard from './ContactCard';

const ContactList = ({ contacts, deleteContactHandler, toggleFavoriteHandler }) => {
    const [searchTerm, setSearchTerm] = useState("");

    const filteredContacts = contacts.filter((contact) =>
        contact.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div>
            <div className='search-box'>
                <input
                    type="text"
                    placeholder=' Search contacts by name...'
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>

            <h3 className='contact-list-title'>Your Contacts</h3>

            {filteredContacts.length === 0 ? (
                <div className='empty-state'>
                    <span className='emoji'>{contacts.length === 0 ? '📭' : '🤷'}</span>
                    <p>
                        {contacts.length === 0
                            ? "No contacts yet. Add your first one above!"
                            : "No contacts match your search."}
                    </p>
                </div>
            ) : (
                filteredContacts.map((contact) => (
                    <ContactCard
                        key={contact.id}
                        contact={contact}
                        deleteContactHandler={deleteContactHandler}
                        toggleFavoriteHandler={toggleFavoriteHandler}
                    />
                ))
            )}
        </div>
    );
};

export default ContactList;