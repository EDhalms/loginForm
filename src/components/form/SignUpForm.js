import React, {Component} from 'react';

import FormField from './FormField';

import '../../css/SignUpForm.css';

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

    onChangeInput = (e) => {
        //this.props.onChangeInput();
        console.log('form component - ', e);
    };

    handleSubmitForm = (e) => {
        this.props.handleSubmitForm(e);
    };
    
    render() {
        return(
            <div className="b-form-wrap">
                <form action="#" className={`b-form ${this.props.formSubmitStatus.formIsSubmitted ? 'hide' : ''}`}>
                    <div className="b-form__field">

                        <input
                            className={`b-form__input ${this.props.userData.firstName.length ? 'dirty' : ''}`}
                            type="text"
                            ref={(input) => this.firstNameInput = input}
                            onChange={this.onChangeFirstNameInput}
                        />
                        <label className="b-form__label">First name</label>
                        <div className={`b-form__focus-line ${this.props.isValid.firstNameIsValid ? '' : 'error'}`}>&nbsp;</div>
                        <div className={`b-form__notification ${this.props.isValid.firstNameIsValid ? '' : 'error'}`}>Invalid first name</div>
                    </div>
                    <div className="b-form__field">
                        <input
                            className={`b-form__input ${this.props.userData.lastName.length ? 'dirty' : ''}`}
                            type="text"
                            ref={(input) => this.lastNameInput = input}
                            onChange={this.onChangeLastNameInput}
                        />
                        <label className="b-form__label">Last name</label>
                        <div className={`b-form__focus-line ${this.props.isValid.lastNameIsValid ? '' : 'error'}`}>&nbsp;</div>
                        <div className={`b-form__notification ${this.props.isValid.lastNameIsValid ? '' : 'error'}`}>Invalid last name</div>
                    </div>
                    <div className="b-form__field">
                        <input
                            className={`b-form__input ${this.props.userData.email.length ? 'dirty' : ''}`}
                            type="text"
                            ref={(input) => this.emailInput = input}
                            onChange={this.onChangeEmailInput}
                        />
                        <label className="b-form__label">E-mail</label>
                        <div className={`b-form__focus-line ${this.props.isValid.emailIsValid ? '' : 'error'}`}>&nbsp;</div>
                        <div className={`b-form__notification ${this.props.isValid.emailIsValid ? '' : 'error'}`}>Invalid email</div>
                    </div>
                    <div className="b-form__field">
                        <input
                            className={`b-form__input ${this.props.userData.password.length ? 'dirty' : ''}`}
                            type="password"
                            ref={(input) => this.passwordInput = input}
                            onChange={this.onChangePasswordInput}
                        />
                        <label className="b-form__label">Password</label>
                        <div className={`b-form__focus-line ${this.props.isValid.passwordIsValid ? '' : 'error'}`}>&nbsp;</div>
                        <div className={`b-form__notification ${this.props.isValid.passwordIsValid ? '' : 'error'}`}>Invalid password</div>
                    </div>

                    <FormField
                        inputValue={this.props.userData.password}
                        inputType='password'
                        onChangeInput={(e)=> this.onChangeInput(e)}
                        label='Password'
                        inputIsValid={this.props.isValid.passwordIsValid}
                    />

                    <div className="b-form__controls">
                        <button
                            className="b-form__btn"
                            onClick={this.handleSubmitForm}
                        >Sign Up</button>
                    </div>
                </form>
                <div className={`b-form-success-message ${this.props.formSubmitStatus.formIsSubmitted ? '' : 'hide'}`}>
                    Registration is complete
                </div>
            </div>
        )

    }
}

export default LoginForm;
