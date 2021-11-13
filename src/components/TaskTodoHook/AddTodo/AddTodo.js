import React, {useState} from 'react';
import shortid from 'shortid';
import styles from './AddTodo.module.css';
import {Row, Col, Button, FormControl} from 'react-bootstrap';


const AddTodo = ({todo, setTodo}) => {
    const [value, setValue] = useState(''); 

    const saveTodo = () => {
        value.length > 0 && setTodo(
            [...todo, {
                id: shortid.generate(),
                title: value,
                status: true,
            }]
        )
        setValue('');
    }

    return (
    <Row>
        <Col className={styles.addTodoForm}>
        <FormControl placeholder="Введите задачу" value={value} onChange={(e) => setValue(e.target.value)}/>
        <Button onClick={saveTodo} className={styles.btn}>Сохранить</Button>
        </Col>
    </Row>
    )
};

export default AddTodo;