/*export function addFirstName(firstName) {
    return {
        type: 'ADD_FIRST_NAME',
        firstName
    }
}

export function addLastName(lastName) {
    return {
        type: 'ADD_LAST_NAME',
        lastName
    }
}

export function addEmail(email) {
    return {
        type: 'ADD_EMAIL',
        email
    }
}

export function addPassword(password) {
    return {
        type: 'ADD_PASSWORD',
        password
    }
}*/


export function changeInput(userData) {
    return {
        type: 'CHANGE_INPUT_FIELD',
        userData
    }
}

export default {
    changeInput,
};

// let actions = {
//     changeInput (userData) {
//         return {
//             type: 'CHANGE_INPUT_FIELD',
//             userData
//         }
//     }
// }

// export default actions
