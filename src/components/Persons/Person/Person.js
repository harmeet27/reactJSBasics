import React from 'react';
import classes from './Person.css';
//import Radium from 'radium';

const person = (props) => {
    /*const style =  
    {
        '@media ( min-width : 500px)' : 
        {
            width : '450px'
        }
    }*/
    return (
    <div className={classes.Person}> {/* style = {style}*/}
    <button onClick={props.click}> change from person</button>
    <p onClick={props.click}>I am a person my name is {props.name} and age is {props.age}</p>
    <p>{props.children}</p>
    <input type='text' onChange={props.nameChange} value={props.name}/>
    </div>
)
};

//export default Radium(person);
export default person;