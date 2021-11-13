import React from 'react';
import styles from './Header.module.css';
import {Row, Col} from 'react-bootstrap';
const Header = () => (
    <Row>
        <Col>
        <div className={styles.root}>Todo List</div>
        </Col>
    </Row>
    
);

export default Header;