import React, { Component } from 'react';
// import { validateAll } from 'indicative';

const Gender = {
    MALE: 'male',
    FEMALE: 'female',
}

// const rules = {
//     login: "required|string",
//     email: "required|email",
//     password: "required|srting|min:6",
// };

// const messages = {
//     "login.required" : "Plase choose a unique username for your account",
//     "email.required" : "Enter a valid email address",
//     "password.required" : "Enter a valid password",
//     "email.email" : "Email is invalid",
//     "password.min" : "Password must be at least 6 characters long",
// };

export default class Form extends Component {
 
    state = {
        login: '',
        email: '',
        password: '',
        agreed: false,
        gender: null,
        age: "",
        errors: null,
    };
    
    handleChange = e => {
        const {name, value, checked, type} = e.target;
        this.setState({ [name]: type === "checkbox" ? checked : value });
    }


    handleFormSubmit = e => {
        e.preventDefault();


        this.setState({
            login: '',
            email: '',
            password: '',
            agreed: false,
            gender: null,
            age: "",
        });
    };

    render() {
        const {login, email, password, agreed, gender, age} = this.state;
        return (
            <form onSubmit={this.handleFormSubmit}>
                <label>
                    Login
                    <input type="text" name="login" value={login} onChange={this.handleChange} />
                </label>
                <br/>
                <label>
                    Email
                    <input type="email" name="email" value={email} onChange={this.handleChange} />
                </label>
                <br/>
                <label>
                    Password
                    <input type="password" name="password" value={password} onChange={this.handleChange} />
                </label>
                <br/>
                <label>
                    Agree to terms
                    <input type="checkbox" name="agreed" checked={agreed} onChange={this.handleChange} />
                </label>
                <br/>
                <section>
                    <h2>Choose your gender</h2>
                    <label>
                        Male
                        <input type="radio" checked={gender === Gender.MALE} name="gender" value={Gender.MALE} onChange={this.handleChange} />
                    </label>
                    <label>
                        Female
                        <input type="radio" checked={gender === Gender.FEMALE} name="gender" value={Gender.FEMALE} onChange={this.handleChange} />
                    </label>
                </section>
                <br />
                <label>
                    Choose your age
                    <select name="age" value={age} onChange={this.handleChange} >
                        <option value="" disabled>
                            ...
                        </option>
                        <option value="18-25">18-25</option>
                        <option value="26-35">26-35</option>
                        <option value="36+">36+</option>
                    </select>
                </label>
                <br />
                <button type="submit">Sing up as {login}</button>
            </form>
        )
    }
}
