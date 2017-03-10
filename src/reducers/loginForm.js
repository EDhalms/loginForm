let initialState = {
    userData : {
        firstName: '',
        lastName: '',
        email: '',
        password: ''
    },
    errors: {
        firstNameIsValid: true,
        lastNameIsValid: true,
        emailIsValid: true,
        passwordIsValid: true
    },
    formSubmit: {
        formIsSubmitted: false
    }
};

export default function loginForm(state = initialState, action) {
    switch (action.type) {
        case 'CHANGE_INPUT':
            return {
                ...state, ...{userData: action.userData}
            };
        case 'VALIDATE_INPUT':
            return {
                ...state, ...{errors: action.errors}
            };
        case 'FORM_SUBMIT':
            return {
                ...state, ...{formSubmit: action.status}
            };
        default:
            return state;
    }
}
