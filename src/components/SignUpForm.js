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
            <div className="b-form-wrap">
                <form action="#" className="b-form">
                    <div className="b-form__field">
                        <input
                            className="b-form__input"
                            type="text"
                            ref={(input) => this.firstNameInput = input}
                            onChange={this.onChangeFirstNameInput}
                        />
                        <label className="b-form__label">First name</label>
                        <div className="b-form__focus-line">&nbsp;</div>
                        <div className={`b-form__notification ${this.props.firstNameIsValid ? '' : 'show'}`}>Invalid first name</div>
                    </div>
                    <div className="b-form__field">
                        <input
                            className="b-form__input"
                            type="text"
                            ref={(input) => this.lastNameInput = input}
                            onChange={this.onChangeLastNameInput}
                        />
                        <label className="b-form__label">Last name</label>
                        <div className="b-form__focus-line">&nbsp;</div>
                        <div className={`b-form__notification ${this.props.lastNameIsValid ? '' : 'show'}`}>Invalid last name</div>
                    </div>
                    <div className="b-form__field">
                        <input
                            className="b-form__input"
                            type="text"
                            ref={(input) => this.emailInput = input}
                            onChange={this.onChangeEmailInput}
                        />
                        <label className="b-form__label">E-mail</label>
                        <div className="b-form__focus-line">&nbsp;</div>
                        <div className={`b-form__notification ${this.props.emailIsValid ? '' : 'show'}`}>Invalid email</div>
                    </div>
                    <div className="b-form__field">
                        <input
                            className="b-form__input"
                            type="text"
                            ref={(input) => this.passwordInput = input}
                            onChange={this.onChangePasswordInput}
                        />
                        <label className="b-form__label">Password</label>
                        <div className="b-form__focus-line">&nbsp;</div>
                        <div className={`b-form__notification ${this.props.passwordIsValid ? '' : 'show'}`}>Invalid password</div>
                    </div>
                    <div className="b-form__controls">
                        <button
                            className="b-form__btn"
                            onClick={this.handleSubmitForm}
                        >Sign Up</button>
                    </div>

                </form>
            </div>    
        )
    }
}

export default LoginForm;
