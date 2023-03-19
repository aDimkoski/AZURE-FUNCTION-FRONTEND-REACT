import './App.css';
import React, {Component} from "react";
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Main from "../Main/main";
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
    render() {
        return (
            <Router>
                <main>
                    <div className="container">
                        <Route path={"/"} exact render={() =>
                            <Main/>}/>
                    </div>
                </main>
            </Router>
        );
    }
}

export default App;