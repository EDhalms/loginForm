import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import '../../css/SignUpForm.css';

import LoginForm from './SignUpForm';

//import of actions
import * as formFieldsActions from '../../actions/loginForm';
//import of actions

function mapStateToProps(state) {
    return {
        userData: state.loginForm.userData,
        errors: state.loginForm.errors,
        formSubmitStatus: state.loginForm.formSubmit
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        //form fields values
        changeInput : formFieldsActions.changeInput,
        //form fields values

        // form errors
        validateInput : formFieldsActions.validateInput,
        // form errors

        //submitted form
        formSubmitted: formFieldsActions.formSubmit
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
        let errorsCounter = [],
            formSubmit = {},
            patterns = {
                name: /^[A-Za-zА-Яа-я_ -]{1,}$/,
                email: /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i,
                password: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).*$/
            };


        this.validateInput(this.props.userData, patterns, errorsCounter);

        if (!errorsCounter.length) {
            //console.log('submit');
            formSubmit['formIsSubmitted'] = true;
            this.props.formSubmitted(formSubmit);
        } else {
            //console.log('errors');
        }
    };

    validateInput = (userData, patterns, errorsCounter) => {
        let errors = {};

        for (let field in userData) {
            if (field === 'firstName') {
                this.checkInputOnValid(field, userData[field], patterns.name, errors, errorsCounter);
            } else if ( field === 'lastName') {
                this.checkInputOnValid(field, userData[field], patterns.name, errors, errorsCounter);
            } else if (field === 'email') {
                this.checkInputOnValid(field, userData[field], patterns.email, errors, errorsCounter);
            } else if (field === 'password') {
                this.checkInputOnValid(field, userData[field], patterns.password, errors, errorsCounter);
            }
        }

        this.props.validateInput(errors);
    };

    checkInputOnValid = (field, fieldValue, pattern, errorsObj, errorsCounter) => {
        if (pattern.test(fieldValue) && fieldValue.length) {
            //console.log(field, ' is valid');
            errorsObj[field + 'IsValid'] = true;
        } else {
            //console.log(field, ' is NOT valid');
            errorsObj[field + 'IsValid'] = false;
            errorsCounter.push(field);
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
                    errors={this.props.errors}

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

