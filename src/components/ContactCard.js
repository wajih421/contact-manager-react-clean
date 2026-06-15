import React from "react";
import user from "../images/user.png";

const ContactCard = ({ contact, deleteContactHandler, toggleFavoriteHandler }) => {
    const { id, name, email, favorite } = contact;

    return (
        <div className='contact-card'>
            <img src={user} alt="user" className='contact-avatar' />

            <div className='contact-info'>
                <div className='contact-name'>{name}</div>
                <div className='contact-email'>{email}</div>
            </div>

            <button
                className={`icon-btn favorite-btn ${favorite ? 'active' : ''}`}
                onClick={() => toggleFavoriteHandler(id)}
                title="Toggle favorite"
            >
                {favorite ? '⭐' : '☆'}
            </button>

            <button
                className='icon-btn delete-btn'
                onClick={() => deleteContactHandler(id)}
                title="Delete contact"
            >
                🗑️
            </button>
        </div>
    );
};

export default ContactCard;