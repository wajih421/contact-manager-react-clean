import React from 'react';

const Header = ({ contactsCount, darkMode, toggleDarkMode }) => {
    return (
        <div className='app-header'>
            <div>
                <h2>Contact Manager</h2>
                <p>{contactsCount} {contactsCount === 1 ? 'contact' : 'contacts'} saved</p>
            </div>

            <button className='theme-toggle-btn' onClick={toggleDarkMode} title="Toggle theme">
                {darkMode ? '☀️' : '🌙'}
            </button>
        </div>
    );
};

export default Header;