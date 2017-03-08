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
    }
};

export default function formFields(state = initialState, action) {
    switch (action.type) {
        case 'CHANGE_INPUT':
            return {
                ...state, ...{userData: action.userData}
            };
        case 'VALIDATE_INPUT':
            return {
                ...state, ...{userData: action.errors}
            };
        /*case 'FORM_SUBMIT':
            return {
                ...state, ...{userData: action.userData}
            };*/
        default:
            return state;
    }
}
