import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person.js'

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

   const style ={
     backgroundColor : 'grey',
     font : 'inherit',
     border : '5px solid black',
     padding : '8px',
     cursor: 'pointer'

   };

   let persons = null;

   if(this.state.defaultShow)
   {
     persons = (
       
       <div>
         {this.state.persons.map((personArray , index ) => {
           return <Person name={personArray.name} 
           age={personArray.age} click={() => this.deletPerson(index)} 
           key={personArray.id}
           nameChange={(event) => this.nameChange(event , personArray.id)}/>
         })}
        {/*  <Person name={this.state.persons[0].name} age={this.state.persons[0].age} 
           click={this.switchName.bind(this,'Ankita')} nameChange={this.nameChange}>children are</Person>
          <Person name={this.state.persons[1].name} age={this.state.persons[1].age} >anu is</Person> */}
      </div>
     );

   }


    return (
      <div className="App">
        <h1>My react app </h1>
        {/* <button style={style} onClick={() => this.switchName('Faran')}>Change name</button> */}
        <button style={style} onClick={this.toggleName}>Change name</button> 
        {persons}
      </div>
    );
  }
}

export default App;
