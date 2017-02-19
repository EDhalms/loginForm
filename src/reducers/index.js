import { combineReducers } from 'redux';

import formFields from './formFields';
import formErrors from './formErrors';

export default combineReducers({
    formFields,
    formErrors
})
