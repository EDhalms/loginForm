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
        errors: state.formFields.errors,

        formErrors: state.formErrors,
        formSubmitStatus: state.formSubmitted
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        //form fields values
        changeInput : formFieldsActions.changeInput,
        //form fields values

        // form errors
        validateInput : formFieldsActions.validateInput,

        validateFirstName: formErrorsActions.validateFirstName,
        validateLastName: formErrorsActions.validateLastName,
        validateEmail: formErrorsActions.validateEmail,
        validatePassword: formErrorsActions.validatePassword,
        // form errors

        //submitted form
        formSubmitted: formSubmitActions.formSubmitted
        //submitted form
    }, dispatch)
}

class SingUpFormContainer extends Component {

    constructor(props) {
        super(props);
    }

    handleSubmitForm = (e) => {
        e.preventDefault();
        this.validateForm();
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

        this.validateInput(this.props.userData, patterns);

        if (!errors.length) {
            console.log('submit');
            this.props.formSubmitted(true);
        } else {
            console.log('errors');
        }
    };

    //new
    validateInput = (userData, patterns) => {
        let errors = {};

        for (let field in userData) {
            if (field === 'firstName') {
                this.checkInputOnValid(field, userData[field], patterns.name, errors);
            } else if ( field === 'lastName') {
                this.checkInputOnValid(field, userData[field], patterns.name, errors);
            } else if (field === 'email') {
                this.checkInputOnValid(field, userData[field], patterns.email, errors);
            } else if (field === 'password') {
                this.checkInputOnValid(field, userData[field], patterns.password, errors);
            }
        }

        this.props.validateInput(errors);
    };

    checkInputOnValid = (field, fieldValue, pattern, errorsObj) => {
        if (pattern.test(fieldValue) && fieldValue.length) {
            console.log(field, ' is valid');
            errorsObj[field] = true;
        } else {
            console.log(field, ' is NOT valid');
            errorsObj[field] = false;
        }
    };
    //new

    validateField = (pattern, fieldValue, dispatcherError, errorsArray) => {
        if (pattern.test(fieldValue) && fieldValue.length) {
            dispatcherError(true);
        } else {
            dispatcherError(false);
            errorsArray.push(fieldValue);
        }
    };

    onChangeInput = (type, text) => {
        let tmpPayload = {},
            payload = {};

        tmpPayload[type] = text;
        payload = {...this.props.userData, ...tmpPayload};

        this.props.changeInput(payload);

    };

    render() {
        return (
            <div className="App">
                <LoginForm
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

