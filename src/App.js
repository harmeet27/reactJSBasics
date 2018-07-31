import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person.js'

class App extends Component {
  state = {
    persons : [
      {name:'harmeet', age:'25'
      },
      {
        name:'anu', age:'18'
      }
    ]
   
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

  nameChange = (event) =>
  {
    this.setState({
      persons : [
        {name: event.target.value, age:'25'
        },
        {
          name:'anu', age:'10'
        }
      ]
    }
     )

  }

  render() {

   const style ={
     backgroundColor : 'grey',
     font : 'inherit',
     border : '5px solid black',
     padding : '8px'

   };

    return (
      <div className="App">
        <h1>My react app </h1>
        <button style={style} onClick={() => this.switchName('Faran')}>Change name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} 
        click={this.switchName.bind(this,'Ankita')} nameChange={this.nameChange}>children are</Person>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age} >anu is</Person>
      </div>
    );
  }
}

export default App;
