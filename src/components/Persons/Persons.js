import React from 'react';

import Person from './Person/Person'

const Persons = (props) =>
{
  return(
      <div>
         {props.persons.map((personArray , index ) => {
           return <Person name={personArray.name} 
           age={personArray.age} click={() => props.deletPerson(index)} 
           
           nameChange={(event) => props.nameChange(event , personArray.id)} key={personArray.id}/>
         })}
      </div>
  )
};

export default Persons;