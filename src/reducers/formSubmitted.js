let initialState = {
    formIsSubmitted: false
};

export default function formSubmitted(state = initialState, action) {
    switch (action.type) {
        case 'FORM_SUBMIT':
            return {
                ...state, ...{formIsSubmitted: action.value}
            };
            break;
        default:
            return state;
            break;
    }
}