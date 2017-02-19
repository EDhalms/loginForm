let initialState = {
    firstNameIsValid: false,
    lastNameIsValid: false,
    emailIsValid: false,
    passwordIsValid: false
};

export default function formErrors(state = initialState, action) {
    switch (action.type) {
        case 'VALIDATE_FIRST_NAME':
            return {
                ...state, ...{firstNameIsValid: action.value}
            };
            break;
        case 'VALIDATE_LAST_NAME':
            return {
                ...state, ...{lastNameIsValid: action.value}
            };
            break;
        case 'VALIDATE_EMAIL':
            return {
                ...state, ...{emailIsValid: action.value}
            };
            break;
        case 'VALIDATE_PASSWORD':
            return {
                ...state, ...{passwordIsValid: action.value}    
            };
            break;
        default:
            return state;
            break;
    }
}