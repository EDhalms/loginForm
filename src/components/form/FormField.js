import React, {Component} from 'react';

import '../../css/SignUpForm.css';

class FormField extends Component {
    constructor(props) {
        super(props);
    }

    handleInputChange = (e) => {
        if(typeof this.props.onChangeInput === 'function') {
            console.log('input component - ', e.target.value);
            this.props.onChangeInput(e.target.value);
        }
    };

    render() {
        return (
            <div className="b-form__field">
                <input
                    className={`b-form__input ${this.props.inputValue.length ? 'dirty' : ''}`}
                    type={this.props.inputType}
                    onChange={(e) => this.handleInputChange(e)}
                />
                <label className="b-form__label">{this.props.label}</label>
                <div className={`b-form__focus-line ${this.props.inputIsValid ? '' : 'error'}`}>&nbsp;</div>
                <div className={`b-form__notification ${this.props.inputIsValid ? '' : 'error'}`}>Invalid {this.props.label}</div>
            </div>
        )
    }
}

export default FormField;
