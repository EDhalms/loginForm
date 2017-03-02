import React, {Component} from 'react';

import '../../css/SignUpForm.css';

class FormField extends Component {
    constructor(props) {
        super(props);
    }

    handleInputChange = (e) => {
        console.log('1');
        //if(typeof this.props.onChangeInput === 'function') {
            //this.props.onChangeInput(e.target.value);
            //this.props.onChangeInput();

        //}
    };

    render() {
        return (
            <div className="b-form__field">
                <input
                    className={`b-form__input ${this.props.inputValue.length ? 'dirty' : ''}`}
                    type={this.props.inputType}
                    onChange={this.props.handleInputChange}
                />
                <label className="b-form__label">{this.props.label}</label>
                <div className={`b-form__focus-line ${this.props.inputIsValid ? '' : 'error'}`}>&nbsp;</div>
                <div className={`b-form__notification ${this.props.inputIsValid ? '' : 'error'}`}>Invalid {this.props.label}</div>
            </div>
        )
    }
}

export default FormField;
