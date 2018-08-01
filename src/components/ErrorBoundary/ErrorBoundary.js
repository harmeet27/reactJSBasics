
import React , {Component} from 'react';

class ErrorBoundary extends Component{
  
   state ={
       hasError : 'false',
       errorMessage : ''
   }

 componentErrorcatch = (error , info) => {
    this.setState(
        {
            hasError : 'true',
            errorMessage: error
        }
    );

 }


    render(){
        if(this.state.hasError){
            return <p>{this.state.errorMessage}</p>;
        }
        else{
            return this.state.children;
        }
    

    }
}

export default ErrorBoundary;