import React, { Component } from 'react';
import Appclasses from './App.css';
//import Person from '../components/Persons/Person/Person.js'
import Persons from '../components/Persons/Persons'
//import Radium ,{ StyleRoot }from 'radium';
//import ErrorBoundary from './ErrorBoundary/ErrorBoundary'

class App extends Component {
  state = {
    persons : [
      {id:'1', name:'harmeet', age:'25'
      },
      {
        id:'2' , name:'anu', age:'18'
      }
    ],

    defaultShow : false

   
  }


  switchName = (newName) =>
  {
   console.log('hi harmeet'); 
   this.setState({
    persons : [
      {name: newName, age:'25'
      },
      {
        name:'anu', age:'10'
      }
    ]
  }
   )
  }

  nameChange = (event , id) =>
  {
    const personsId = this.state.persons.findIndex( p => {
      return p.id === id ;
        });
    
    const person = { ...this.state.persons[personsId] };

    //const person = Object.assign({} , this.state.persons[personsId]);

    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personsId] = person;

    this.setState({
      /*persons : [ 
        {id:'1' , name: event.target.value, age:'25'
        },
        {
          id:'2' , name:'anu', age:'10'
        }
      ]*/
      persons : persons
    }
     )

  }

  toggleName = () => {
    const defaultShowconst = this.state.defaultShow;
    this.setState({defaultShow : !defaultShowconst});

  }

  deletPerson = (index) =>
  {
    const persons = [...this.state.persons];
    persons.splice(index , 1);
    this.setState({persons : persons});
  }

  render() {

   /*const style ={
     backgroundColor : 'green',
     color:'white',
     font : 'inherit',
     border : '5px solid black',
     padding : '8px',
     cursor: 'pointer',
     ':hover': {
       backgroundColor : 'lightgreen',
       color:'black'
     }

   };*/

   let persons = null;
   let btnClass = '';

   if(this.state.defaultShow)
   {
     //style.backgroundColor='red';
     //style[':hover']=
     //{
      // backgroundColor : 'salmon',
       //color :'black'
     //}
     persons = (
       <Persons persons={this.state.persons} 
       deletPerson={this.deletPerson} 
       nameChange = {this.nameChange}/>
       
       //<div>
         //{this.state.persons.map((personArray , index ) => {
           //return <Person name={personArray.name} 
           //age={personArray.age} click={() => this.deletPerson(index)} 
           
           //nameChange={(event) => this.nameChange(event , personArray.id)} key={personArray.id}/>
        // })}
        //{/*  <Person name={this.state.persons[0].name} age={this.state.persons[0].age} 
        //   click={this.switchName.bind(this,'Ankita')} nameChange={this.nameChange}>children are</Person>
          //<Person name={this.state.persons[1].name} age={this.state.persons[1].age} >anu is</Person> */}
      //</div>
     );

     btnClass = Appclasses.Red;

   }

   let classes =[]
   if(this.state.persons.length <=2)
   {
     classes.push(Appclasses.red);
   }
   if(this.state.persons.length <=1)
   {
     classes.push(Appclasses.bold);
   }

    return (
      
      <div className={Appclasses.App}>
        <h1>My react app </h1>
        <p className={classes.join(' ')}>This is working</p>
        {/* <button style={style} onClick={() => this.switchName('Faran')}>Change name</button> */}
        <button className={btnClass} onClick={this.toggleName}>Change name</button> 
        {persons}
      </div>

    );
  }
}

//export default Radium(App);
export default App;