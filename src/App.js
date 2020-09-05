import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
import { Login } from './Components/Login';
import Home from './Components/Home';


export class App extends Component {


     constructor(props) {
            super(props);
            this.state = {items: [], text: '', priority: 0, dueDate: new Date()};

        }


  render() {


  const LoginView = () => (
          <Login/>
      );

      const HomeView = () => (
        <Home />
    );

  

      const bool = localStorage.getItem('isLoggedIn');
      const isLoggedIn = bool;



        return (
            <Router>
                <div className="App">
                 
                    <div>
                    <Route exact path="/" component={LoginView}/>
                    <Route exact path="/Home" component={HomeView}/>
                    </div>
                </div>
            </Router>
        );
    }

}

export default App;