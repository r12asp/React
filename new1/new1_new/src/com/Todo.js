import React from 'react';

export default class Todo extends React.Component{
    render(){
        return(
            <div>
            <h2>{this.props.id}</h2>
            <div>{this.props.text}</div>
            </div>
        )
    }
}