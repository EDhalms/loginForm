import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import './App.css';

import LoginForm from './components/SignUpForm';

//import of actions
import * as formFieldsActions from './actions/formFields';
import * as formErrorsActions from './actions/formErrors';
//import of actions

function mapStateToProps(state) {
    return {
        userData: state.formFields,
        formErrors: state.formErrors
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        //form fields values
        addFirstName: formFieldsActions.addFirstName,
        addLastName: formFieldsActions.addLastName,
        addEmail: formFieldsActions.addEmail,
        addPassword: formFieldsActions.addPassword,
        //form fields values

        // form errors
        validateFirstName: formErrorsActions.validateFirstName,
        validateLastName: formErrorsActions.validateLastName,
        validateEmail: formErrorsActions.validateEmail,
        validatePassword: formErrorsActions.validatePassword
        // form errors
    }, dispatch)
}

class App extends Component {

    constructor(props) {
        super(props);
    }

    handleSubmitForm = (e) => {
        e.preventDefault();

        this.validateForm();

        //console.log('this.props.userData', this.props.userData);
        console.log('THIS IS SUBMIT');
    };

    validateForm = () => {
        let patterns = {
            name: /^[A-Za-zА-Яа-я_ -]{1,}$/,
            email: /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i,
            password: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).*$/
        };

        let errors = [];

        this.validateField(patterns.name, this.props.userData.firstName, this.props.validateFirstName);
        this.validateField(patterns.name, this.props.userData.lastName, this.props.validateLastName);
        this.validateField(patterns.email, this.props.userData.email, this.props.validateEmail);
        this.validateField(patterns.password, this.props.userData.password, this.props.validatePassword);
    };

    validateField = (pattern, fieldValue, dispatcherError) => {
        if (pattern.test(fieldValue) && fieldValue.length) {
            dispatcherError(true);
        } else {
            dispatcherError(false);
        }
    };

    onChangeFirstNameInput = (firstName) => {
        this.props.addFirstName(firstName);
    };

    onChangeLastNameInput = (lastName) => {
        this.props.addLastName(lastName);
    };

    onChangeEmailInput = (email) => {
        this.props.addEmail(email);
    };

    onChangePassword = (password) => {
        this.props.addPassword(password);
    };
    
    render() {
        return (
            <div className="App">
                <LoginForm
                    onChangeFirstName={this.onChangeFirstNameInput}
                    onChangeLastName={this.onChangeLastNameInput}
                    onChangePassword={this.onChangePassword}
                    handleSubmitForm={this.handleSubmitForm}
                    onChangeEmailInput={this.onChangeEmailInput}
                    userData={this.props.userData}
                    firstNameIsValid={this.props.formErrors.firstNameIsValid}
                />
            </div>
        );
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
