import React from 'react';

export default class Timer extends React.Component{
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