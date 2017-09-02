import {EventEmitter} from 'events';

import dispatcher from './TodoDispatcher';

class TodoStore extends EventEmitter{
    constructor(){
        super()
        this.todos = [
                {
                    id:111,
                    text:"Go shopping",
                    complete:false
                },{
                    id:222,
                    text:"Pay bills2",
                    complete:false
                }
            ]
    }
        getAll(){
            return this.todos;
        }
        createTodo(text){
            const id = Date.now();
            this.todos.push(
                {
                    id,
                    text,
                    complete: false,
                }
            );
            this.emit("change");
        }
        handleActions(action){
            switch(action.type){
                case "CREATE_TODO" :{
                    this.createTodo(action.text);
                }
            }
        }

}

const todoStore = new TodoStore;

dispatcher.register(todoStore.handleActions.bind(todoStore));

window.dispatcher = dispatcher;

export default todoStore;