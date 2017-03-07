import React, {Component} from 'react';

import FormField from './FormField';

import '../../css/SignUpForm.css';

class LoginForm extends Component {
    
    constructor(props) {
        super(props);
    }

   /* onChangeFirstNameInput = () => {
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
    };*/

    onChangeInput = (e, type) => {
        console.log('form component - ', e);
        console.log('form component type - ', type);
        this.props.onChangeInput(e, type);
    };

    handleSubmitForm = (e) => {
        this.props.handleSubmitForm(e);
    };
    
    render() {
        return(
            <div className="b-form-wrap">
                <form
                    action="#"
                    className={`b-form ${this.props.formSubmitStatus.formIsSubmitted ? 'hide' : ''}`}
                    >

                    <FormField
                        inputValue={this.props.userData.firstName}
                        inputType='text'
                        onChangeInput={this.props.onChangeInput.bind(this, 'firstName')}
                        label='First name'
                        inputIsValid={this.props.isValid.firstNameIsValid}
                    />

                    <FormField
                        inputValue={this.props.userData.lastName}
                        inputType='text'
                        onChangeInput={this.props.onChangeInput.bind(this, 'lastName')}
                        label='Last name'
                        inputIsValid={this.props.isValid.lastNameIsValid}
                    />

                    <FormField
                        inputValue={this.props.userData.email}
                        inputType='text'
                        onChangeInput={this.props.onChangeInput.bind(this, 'email')}
                        label='E-mail'
                        inputIsValid={this.props.isValid.emailIsValid}
                    />

                    <FormField
                        inputValue={this.props.userData.password}
                        inputType='password'
                        //onChangeInput={(e) => this.onChangeInput(e, 'addPassword')}
                        onChangeInput={this.props.onChangeInput.bind(this, 'password')}
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
