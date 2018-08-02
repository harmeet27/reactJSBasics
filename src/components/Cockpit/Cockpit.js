
import React from 'react';
import Appclasses from './Cockpit.css'

const Cockpit = (props) => {

    let classes =[]
    let btnClass = ''
   if(props.showPerson)
   {
       btnClass = Appclasses.Red;
   }
   if(props.persons.length <=2)
   {
     classes.push(Appclasses.red);
   }
   if(props.persons.length <=1)
   {
     classes.push(Appclasses.bold);
   }

    return(
   <div className = {Appclasses.Cockpit}>
    <h1>My react app </h1>
        <p className={classes.join(' ')}>This is working</p>
        {/* <button style={style} onClick={() => this.switchName('Faran')}>Change name</button> */}
        <button className={btnClass} onClick={props.toggleName}>Change name</button> 
        </div>
    );
}

export default Cockpit;