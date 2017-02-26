import { combineReducers } from 'redux';

import formFields from './formFields';
import formErrors from './formErrors';
import formSubmitted from './formSubmitted';

export default combineReducers({
    formFields,
    formErrors,
    formSubmitted
})
