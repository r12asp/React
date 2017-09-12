import React, {Component} from 'react';
import { BrowserRouter as Router,Route,Link} from 'react-router-dom'

import './App.css';
import './css/x.css';
import TestComponent from './com/TestComponent';
import Article from './com/Article';
import FluxDemo from './com/FluxDemo';
import ReduxTodoApp from './com/ReduxTodo';


class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <div className="App-header">
          <h2>Welcome to Xiaofeng's React</h2>
          <ul className="header">
            <Link className="myLink" to={`/`}>Home</Link>
            <Link className="myLink" to={`/TestComponent`}>TestComponent</Link>
            <Link className="myLink" to={`/Article`}>Article</Link>
            <Link className="myLink" to={`/FluxDemo`}>FluxDemo</Link>
            <Link className="myLink" to={`/ReduxTodoApp`}>ReduxTodo</Link>
          </ul>
        </div>
        <div className="Main">
          <Route exact={true} path="/" render={()=>(
            <h1>I'm home</h1>
          )}></Route>
          <Route path="/TestComponent" component={TestComponent}></Route>
          <Route path="/Article" component={Article}></Route>
          <Route path="/FluxDemo" component={FluxDemo}></Route>
          <Route path="/ReduxTodoApp" component={ReduxTodoApp}></Route>
          </div>
      </div>
      </Router>
    );
  }
}

export default App;
