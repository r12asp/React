import React from 'react';

import Todo from './Todo';
import TodoStore from './stores/TodoStore';
import * as TodoActions from './stores/TodoAction';


export default class FluxDemo extends React.Component{
    constructor(){
        super();
        this.state = {
        todos: TodoStore.getAll(),
        };
    }
    componentWillMount() {
        TodoStore.on("change",()=>{
            this.setState({
                todos: TodoStore.getAll(),
            })
        });
    }
    addTodo(){
        TodoActions.createTodo(Date.now);
    }
    render(){
        const{todos} = this.state;
        const TodoComponents = todos.map((todo)=>{
            return <Todo key={todo.id} {...todo}/>;
        }
        )
        return (
            <div>
                <h1>Todos</h1>
                <button onClick={this.addTodo.bind(this)}>new</button>
                <ul>{TodoComponents}</ul>
                </div>
        );
    }
}