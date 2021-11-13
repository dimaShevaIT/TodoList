import React, {useState} from 'react';
import styles from './TodoList.module.css';
import {Row, Col, Button, FormControl} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSave, faTrash, faEdit, faLock, faLockOpen } from '@fortawesome/free-solid-svg-icons'

const TodoList = ({todo, setTodo}) => {
    const [edit, setEdit] = useState(false);
    const [value, setValue] = useState('');

    const deleteTodo = (id) => {
        let newTodo = [...todo].filter(item => item.id !== id);
        setTodo(newTodo);
    }


    const statusTodo = (id) => {
        let newTodo = [...todo].filter(item => {
            if(item.id === id) {
               item.status = !item.status;
            }
            return item;
        });
        setTodo(newTodo);
    }

    const editTodo = (id, title) => {
        setEdit(id);
        setValue(title);
    }

    const saveTodo = (id) => {
        let newTodo = [...todo].map(item => {
            if(item.id === id) {
                item.title = value;
            }
            return item;
        })
        setTodo(newTodo);
        setEdit(null);
    }
    return (
    <div >{todo.map(item => (
        <div key={item.id} className={styles.listItems}>
            {
                edit === item.id ?
                <div>
                    <input value={value} onChange={(e)=> setValue(e.target.value)}/>
                </div> :
                <div className={!item.status ? styles.close : ''}>{item.title}</div>
            }

            {
                edit === item.id ?
                <div>
                    <Button onClick={()=> saveTodo(item.id)}><FontAwesomeIcon icon={faSave} /></Button>
                </div> :
                <div>
                     <Button onClick={()=> deleteTodo(item.id)}><FontAwesomeIcon icon={faTrash} size="sm"/></Button>
                     <Button onClick={()=> editTodo(item.id, item.title)} className={styles.btn}><FontAwesomeIcon icon={faEdit} size="sm"/></Button>
                     <Button onClick={()=> statusTodo(item.id)} className={styles.btn}>{item.status ? <FontAwesomeIcon icon={faLockOpen} size="sm"/> : <FontAwesomeIcon icon={faLock} size="sm"/>}</Button>
                </div>
            }
        
       
    </div>
    ))
   
};
</div>
    );
};

export default TodoList;