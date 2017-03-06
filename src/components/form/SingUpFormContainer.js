import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import '../../css/SignUpForm.css';

import LoginForm from './SignUpForm';

//import of actions
import * as formFieldsActions from '../../actions/formFields';
import * as formErrorsActions from '../../actions/formErrors';
import * as formSubmitActions from '../../actions/formSubmitted';
//import of actions

function mapStateToProps(state) {
    return {
        userData: state.formFields.userData,
        formErrors: state.formErrors,
        formSubmitStatus: state.formSubmitted
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
        validatePassword: formErrorsActions.validatePassword,
        // form errors

        //submitted form
        formSubmitted: formSubmitActions.formSubmitted,
        changeInput : formSubmitActions.changeInput
    }, dispatch)
}

class SingUpFormContainer extends Component {

    constructor(props) {
        super(props);
    }

    handleSubmitForm = (e) => {
        e.preventDefault();

        this.validateForm();

        //console.log('this.props.userData', this.props.userData);
        //console.log('THIS IS SUBMIT');
    };

    validateForm = () => {
        let patterns = {
            name: /^[A-Za-zА-Яа-я_ -]{1,}$/,
            email: /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i,
            password: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).*$/
        };

        let errors = [];

        this.validateField(patterns.name, this.props.userData.firstName, this.props.validateFirstName, errors);
        this.validateField(patterns.name, this.props.userData.lastName, this.props.validateLastName, errors);
        this.validateField(patterns.email, this.props.userData.email, this.props.validateEmail, errors);
        this.validateField(patterns.password, this.props.userData.password, this.props.validatePassword, errors);

        if (!errors.length) {
            console.log('submit');
            this.props.formSubmitted(true);
        } else {
            console.log('errors');
        }
    };

    validateField = (pattern, fieldValue, dispatcherError, errorsArray) => {
        if (pattern.test(fieldValue) && fieldValue.length) {
            dispatcherError(true);
        } else {
            dispatcherError(false);
            errorsArray.push(fieldValue);
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

    onChangeInput = (type, text) => {
        let tmpPayload = {};
        let payload = {};
        tmpPayload[type] = text;
        payload = Object.assign({}, this.props.userData, tmpPayload);

        this.props.changeInput(payload);

        // console.log(this.props.type);
        // console.log('container component - ', e);
        // console.log('container component type - ', type);

    };

    render() {
        return (
            <div className="App">
                <LoginForm
                    onChangeFirstName={this.onChangeFirstNameInput}
                    onChangeLastName={this.onChangeLastNameInput}
                    onChangePassword={this.onChangePassword}
                    onChangeEmailInput={this.onChangeEmailInput}

                    onChangeInput={this.onChangeInput}

                    handleSubmitForm={this.handleSubmitForm}

                    userData={this.props.userData}

                    formSubmitStatus={this.props.formSubmitStatus}

                    isValid={this.props.formErrors}
                />
            </div>
        );
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SingUpFormContainer);

