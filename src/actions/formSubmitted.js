export function formSubmitted(value) {
    return {
        type: 'FORM_SUBMIT',
        value
    }
}

export function changeInput(userData) {
    return {
        type: 'CHANGE_INPUT_FIELD',
        userData
    }
}

// let actions = {
//     changeInput (userData) {
//         return {
//             type: 'CHANGE_INPUT_FIELD',
//             userData
//         }
//     }
// }

// export default actions
