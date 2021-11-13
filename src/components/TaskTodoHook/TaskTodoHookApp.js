import React, {useState} from 'react';
import Header from './Header/Header';
import AddTodo from './AddTodo/AddTodo';
import TodoList from './TodoList/TodoList';
import {Container} from 'react-bootstrap';

const TaskTodoHook = () => {
    const [todo, setTodo] = useState([
        {id: 1, title: 'first todo', status: true},
        {id: 2, title: 'secound todo', status: false},
        {id: 3, title: 'last todo', status: true},
    ])

        return (
            <Container>
            <Header />
            <AddTodo todo={todo} setTodo={setTodo}/>
            <TodoList todo={todo} setTodo={setTodo}/>
            </Container>
        )
};

export default TaskTodoHook;