export function validateFirstName(value) {
    return {
        type: 'VALIDATE_FIRST_NAME',
        value
    }
}

export function validateLastName(value) {
    return {
        type: 'VALIDATE_LAST_NAME',
        value
    }
}

export function validateEmail(value) {
    return {
        type: 'VALIDATE_EMAIL',
        value
    }
}

export function validatePassword(value) {
    return {
        type: 'VALIDATE_PASSWORD',
        value
    }
}
