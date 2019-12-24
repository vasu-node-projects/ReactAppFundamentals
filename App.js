import React, { Component } from 'react';
import PropValidation  from './PropValidation';
import SetState from './SetState';
import ForceUpdate from './ForceUpdate';
import FindDomNode from './FindDomNode';
import LifeCycleMethod from './LifeCycleMethod';

class App extends Component{

	constructor(props) {
      super(props);
      this.state = {
         data: 
         [
            {
               "id":1,
               "name":"Foo",
               "age":"20"
            },
            {
               "id":2,
               "name":"Bar",
               "age":"30"
            },
            {
               "id":3,
               "name":"Baz",
               "age":"40"
            }
         ],
		  header: "Header from state...",
           content: "Content from state..."
      }
	  
	   
   }
	
	
	
	
   render(){
	   
	   
	   var i = 1;
	   var myStyle = {
         fontSize: 100,
         color: '#FF0000'
      }
	  
	   
	  
	  
	  
      return(
         <div>
            <h1>Header</h1>
            <h2>Content</h2>
            <p>This is the content!!!</p>
			<h1>{1+1}</h1>
			<h1>{i == 1 ? 'True!' : 'False'}</h1>
			<h1 style = {myStyle}>Header</h1>
				
				<Header/>
            <Content/>
			   <Headerprop headerProp = {this.state.header}/>
			   <Contentprop contentProp = {this.state.content}/>
			   
			   <table>
               <tbody>
                  {this.state.data.map((person, i) => <TableRow key = {i} 
                     data = {person} />)}
               </tbody>
            </table>
			
		  <h1>{this.state.header}</h1>
		  
		 
            <h1>{this.props.headerProp}</h1>
            <h2>{this.props.contentProp}</h2>
         <PropValidation/>
         <SetState/>
         <ForceUpdate/>
         <FindDomNode/>
         <LifeCycleMethod/>
         
         </div>
		 
      );
   }
}

class Header extends React.Component {
   render() {
      return (
         <div>
            <h1>Header Content</h1>
         </div>
      );
   }
}
class Content extends React.Component {
   render() {
      return (
         <div>
            <h2>Belongs to the Content</h2>
            <p>The content text!!!</p>
         </div>
      );
   }
}
class TableRow extends React.Component {
   render() {
      return (
         <tr>
            <td>{this.props.data.id}</td>
            <td>{this.props.data.name}</td>
            <td>{this.props.data.age}</td>
         </tr>
      );
   }
}

class Headerprop extends React.Component {
	
   render() {
	   //	alert(this.props.headerProp);

      return (
         <div>
		    <h6>{this.props.headerProp}</h6>
		 </div>
      );
   }
}

class Contentprop extends React.Component {
	
   render() {
	  
      return (
         <div>
		    <h6>{this.props.contentProp}</h6>
		 </div>
      );
   }
}










// Default Props adding here

App.defaultProps = {
   headerProp: "Header from propsdefault...",
   contentProp:"Content from propsdefault..."
}

export default App;