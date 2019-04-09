import React from 'react';

const cockpit = () => {
    const classes = [];
    if (props.persons.length < 3) {
        classes.push(styles.red);    // classes = ['red']
    }
    if (props.persons.length < 2) {
        classes.push(styles.bold);   // classes = ['red', 'bold']
    }

    return (
        <div>
            <h1>Hi, I'm a React App</h1>
            <p className={classes.join(' ')}>This is really working!</p>
            <button className={btnClass} onClick={this.togglePersonsHandler}>Toggle Persons</button>
        </div>
    );
};

export default cockpit;