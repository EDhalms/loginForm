export function changeInput(userData) {
    return {
        type: 'CHANGE_INPUT',
        userData
    }
}
export function validateInput(errors) {
    return {
        type: 'VALIDATE_INPUT',
        errors
    }
}

export function formSubmit(status) {
    return {
        type: 'FORM_SUBMIT',
        status
    }
}
