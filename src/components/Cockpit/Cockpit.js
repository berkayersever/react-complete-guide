import React, {useEffect} from 'react';
import styles from './Cockpit.module.css';

const cockpit = (props) => {
    useEffect(() => {
        console.log('[Cockpit.js] 1st useEffect');
        // HTTP Request
        setTimeout(() => {
            alert('Saved data to cloud!');
        }, 1000);
        return () => {
            console.log('[Cockpit.js] cleanup work in useEffect');
        };
    }, []);

    useEffect(() => {
        console.log('[Cockpit.js] 2nd useEffect');
    });

    const classes = [];
    let btnClass = '';
    if (props.showPersons) {
        btnClass = styles.Red;
    }
    if (props.persons.length < 3) {
        classes.push(styles.red);    // classes = ['red']
    }
    if (props.persons.length < 2) {
        classes.push(styles.bold);   // classes = ['red', 'bold']
    }

    return (
        <div className={styles.Cockpit}>
            {/*<h1>Hi, I'm a React App</h1>*/}
            <h1>{props.title}</h1>
            <p className={classes.join(' ')}>This is really working!</p>
            <button className={btnClass} onClick={props.clicked}>Toggle Persons</button>
        </div>
    );
};

export default cockpit;