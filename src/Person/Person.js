import React from 'react';

const person = (props) => {
    return (
    <div>
    <button onClick={props.click}> change from person</button>
    <p>I am a person my name is {props.name} and age is {props.age}</p>
    <p>{props.children}</p>
    <input type='text' onChange={props.nameChange} value={props.name}/>
    </div>
)
};

export default person;