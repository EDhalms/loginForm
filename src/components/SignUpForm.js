import React, {Component} from 'react';

import '../css/SignUpForm.css';

class LoginForm extends Component {
    
    constructor(props) {
        super(props);
    }

    onChangeFirstNameInput = () => {
        this.props.onChangeFirstName(this.firstNameInput.value);
    };

    onChangeLastNameInput = () => {
        this.props.onChangeLastName(this.lastNameInput.value);
    };

    onChangePasswordInput = () => {
        this.props.onChangePassword(this.passwordInput.value);
    };

    onChangeEmailInput = () => {
        this.props.onChangeEmailInput(this.emailInput.value);
    };

    handleSubmitForm = (e) => {
        this.props.handleSubmitForm(e);
    };
    
    render() {

        return(
            <form action="#" className="b-form">
                <label className="b-form__label">
                    <input
                        className="b-form__input"
                        type="text"
                        placeholder="First name"
                        ref={(input) => this.firstNameInput = input}
                        onChange={this.onChangeFirstNameInput}
                    />
                    <div className={`b-form__notification ${this.props.firstNameIsValid ? '' : 'show'}`}>Invalid first name</div>
                </label>
                <label className="b-form__label">
                    <input
                        className="b-form__input"
                        type="text"
                        placeholder="Last name"
                        ref={(input) => this.lastNameInput = input}
                        onChange={this.onChangeLastNameInput}
                    />
                </label>
                <label className="b-form__label">
                    <input
                        className="b-form__input"
                        type="text"
                        placeholder="E-mail"
                        ref={(input) => this.emailInput = input}
                        onChange={this.onChangeEmailInput}
                    />
                </label>
                <label className="b-form__label">
                    <input
                        className="b-form__input"
                        type="text"
                        placeholder="Password"
                        ref={(input) => this.passwordInput = input}
                        onChange={this.onChangePasswordInput}
                    />
                </label>
                

                <button onClick={this.handleSubmitForm}>Sign Up</button>

            </form>
        )
    }
}

export default LoginForm;
