import React, {Component} from 'react';
import { Header } from 'components'
import { Main } from 'containers'
import style from './App.scss'

class App extends Component {
    render() {
        return (
            <div className="container">
                <Header/>
                <Main/>
            </div>
        );
    }
}

export default App;