import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          Xiaofeng：To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <p>
          <Timer></Timer>
        </p>
        <p>
          <Welcome name='doudou'></Welcome>
        </p>
        <div>
          <ToggleButton></ToggleButton>
        </div>
      </div>
    );
  }
}

class Welcome extends Component{
  render(){
    return(
      <h2>Welcome {this.props.name}</h2>
    );
  }
}

class Timer extends React.Component{
  constructor(props){
    super(props);
    this.state = {date:new Date()};
  }
  componentDidMount() {
    this.timeID = setInterval(()=>this.tick(),1000);
  }
  componentWillUnmount(){
    clearInterval(this.timeID);
  }
  tick(){
    this.setState({date:new Date()});
  }
  render(){
    return(
      <div>
        <h2>{this.state.date.toLocaleTimeString()}</h2>
      </div>
    );
  }
}

class ToggleButton extends Component{
  constructor(props){
    super(props);
    this.state = {isToggleOn:true};
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(){
    this.setState( prevState=>( {isToggleOn:!prevState.isToggleOn}));
  }
  render(){
    return(
      <button onClick={this.handleClick}>
      {this.state.isToggleOn?'ON':'OFF'}
      </button>
    );
  }
}

export default App;
