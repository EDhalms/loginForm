let initialState = {
    userData : {
        firstName: '',
        lastName: '',
        email: '',
        password: ''
    }
};

export default function formFields(state = initialState, action) {
    switch (action.type) {
        // case 'ADD_FIRST_NAME':
        //     return {
        //         ...state, ...{firstName : action.firstName}
        //     };
        //     break;
        // case 'ADD_LAST_NAME':
        //     return {
        //         ...state, ...{lastName : action.lastName}
        //     };
        //     break;
        // case 'ADD_EMAIL':
        //     return {
        //         ...state, ...{email: action.email}
        //     };
        //     break;
        // case 'ADD_PASSWORD':
        //     return {
        //         ...state, ...{password : action.password}
        //     };
        //     break;
        case 'CHANGE_INPUT_FIELD' :
            return {
                ...state, ...{userData: action.userData}
            };
        default:
            return state;
    }
}
