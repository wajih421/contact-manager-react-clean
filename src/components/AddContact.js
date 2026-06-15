import React from 'react';

const funContacts = [
    { name: "Tony Stark", email: "tony@starkindustries.com" },
    { name: "Maria Zafar", email: "hermione@hogwarts.edu" },
    { name: "Hashir khan", email: "bruce@wayneenterprises.com" },
    { name: "Meesam tammar", email: "peter@dailybugle.com" },
    { name: "darpok singh", email: "diana@themyscira.gov" },
    { name: "jaskirat", email: "heisenberg@bb.com" },
    { name: "ronaldo", email: "sherlock@221b.com" },
    { name: "virat kohli", email: "kohli@jackson.org" },
];

class AddContact extends React.Component {
    state = {
        name: "",
        email: "",
    }

    add = (e) => {
        e.preventDefault();

        if (this.state.name === "" || this.state.email === "") {
            alert("All the fields are mandatory");
            return;
        }
        this.props.addContactHandler(this.state)
        this.setState({ name: "", email: "" }) 
    }

    // we fill the contact w any random contact
    surpriseMe = () => {
        const randomContact = funContacts[Math.floor(Math.random() * funContacts.length)];
        this.setState({ name: randomContact.name, email: randomContact.email });
    }

    render() {
        return (
            <div className='add-contact-card'>
                <h1> Add Contact</h1>

                <form onSubmit={this.add}>

                    <div className='form-group'>
                        <label>Name</label>
                        <input
                            type="text"
                            placeholder='Enter name'
                            value={this.state.name}
                            onChange={(e) => this.setState({ name: e.target.value })}
                        />
                    </div>

                    <div className='form-group'>
                        <label>Email</label>
                        <input
                            type="text"
                            placeholder='Enter email'
                            value={this.state.email}
                            onChange={(e) => this.setState({ email: e.target.value })}
                        />
                    </div>

                    <div className='button-row'>
                        <button className='btn btn-primary' type='submit'>Add Contact</button>
                        <button className='btn btn-fun' type='button' onClick={this.surpriseMe}>
                             Surprise Me
                        </button>
                    </div>
                </form>
            </div>
        );
    }
}

export default AddContact;