import React, {Component} from 'react';

import './App.css';

import SingUpFormContainer from './components/form/SingUpFormContainer';


class App extends Component {

    constructor(props) {
        super(props);
    }

    
    render() {
        return (
            <SingUpFormContainer />
        );
    }
}

export default App;
