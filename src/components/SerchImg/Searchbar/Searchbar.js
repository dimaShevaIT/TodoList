import React from 'react';
import styles from './Searchbar.module.css';



const Searchbar = ({ value, onChange, onSubmit }) => (
            <div>
            <header className={styles.searchbar}>
                <form onSubmit={onSubmit} className={styles.searchForm}>
                <button type="submit" className={styles.button}>
                <span className={styles.label}>Search</span>
                </button>

                <input
                onChange={onChange}
                className={styles.input}
                value={value}
                type="text"
                autocomplete="off"
                autofocus
                placeholder="Search images and photos"
                />
                </form>
            </header>
            </div>
        );
export default Searchbar;