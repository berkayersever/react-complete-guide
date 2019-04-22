import React, { useEffect, useRef } from 'react';
import styles from './Cockpit.module.css';

const cockpit = (props) => {
    const toggleBtnRef = useRef(null);

    useEffect(() => {
        console.log('[Cockpit.js] 1st useEffect');
        // HTTP Request
        // setTimeout(() => {
        //     alert('Saved data to cloud!');
        // }, 1000);
        toggleBtnRef.current.click();
        return () => {
            console.log('[Cockpit.js] cleanup work in 1st useEffect');
        };
    }, []);

    useEffect(() => {
        console.log('[Cockpit.js] 2nd useEffect');
        return () => {
            console.log('[Cockpit.js] cleanup work in 2nd useEffect');
        };
    });

    const classes = [];
    let btnClass = '';
    if (props.showPersons) {
        btnClass = styles.Red;
    }
    if (props.personsLength <= 2) {
        classes.push(styles.red);    // classes = ['red']
    }
    if (props.personsLength <= 1) {
        classes.push(styles.bold);   // classes = ['red', 'bold']
    }

    return (
        <div className={styles.Cockpit}>
            {/*<h1>Hi, I'm a React App</h1>*/}
            <h1>{props.title}</h1>
            <p className={classes.join(' ')}>This is really working!</p>
            <button ref={toggleBtnRef} className={btnClass} onClick={props.clicked}>Toggle Persons</button>
            <button></button>
        </div>
    );
};

export default React.memo(cockpit);