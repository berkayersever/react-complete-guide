import React, {Component} from 'react';
import styles from './App.module.css';
import Persons from '../components/Persons/Persons';

class App extends Component {
    state = {
        persons: [
            {id: 1, name: 'Max', age: 28},
            {id: 2, name: 'Manu', age: 29},
            {id: 3, name: 'Stephanie', age: 26}
        ],
        otherState: 'some other value',
        showPersons: false
    }

    nameChangedHandler = (event, id) => {
        const personIndex = this.state.persons.findIndex(p => {
            return p.id === id;
        });

        const person = {
            ...this.state.persons[personIndex]
        };

        // const person = Object.assign({}, this.state.persons[personIndex]);  // Alternative approach

        person.name = event.target.value;

        const persons = [...this.state.persons];
        persons[personIndex] = person;

        this.setState({persons: persons});
    }

    deletePersonHandler = (personIndex) => {
        // const persons = this.state.persons.slice();  // For copying the array with slice method
        const persons = [...this.state.persons];        // For copying the array with spread method
        persons.splice(personIndex, 1);
        this.setState({persons: persons});
    }

    togglePersonsHandler = () => {
        const doesShow = this.state.showPersons;
        this.setState({showPersons: !doesShow});
    }

    render() {
        let persons = null;
        let btnClass = '';
        if (this.state.showPersons) {
            persons = (
                <div>
                    <Persons
                        persons={this.state.persons}
                        clicked={this.deletePersonHandler}
                        changed={this.nameChangedHandler} />
                </div>
            );
            btnClass = styles.Red;
        }

        // let classes = ['red', 'bold'].join(' ');
        const classes = [];
        if (this.state.persons.length < 3) {
            classes.push(styles.red);    // classes = ['red']
        }
        if (this.state.persons.length < 2) {
            classes.push(styles.bold);   // classes = ['red', 'bold']
        }

        return (
            <div className={styles.App}>
                <h1>Hi, I'm a React App</h1>
                <p className={classes.join(' ')}>This is really working!</p>
                <button className={btnClass} onClick={this.togglePersonsHandler}>Toggle Persons</button>
                {persons}
            </div>
        );
        // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
    }
}

export default App;
