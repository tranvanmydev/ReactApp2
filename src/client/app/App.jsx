import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactDom from 'react-dom';

class App extends Component {
   constructor(props) {
      super(props);
      this.state = {
         data: [
            {
               "id": 1,
               "name": "Foo",
               "age": "20"
            },
            {
               "id": 2,
               "name": "Bar",
               "age": "30"
            },
            {
               "id": 3,
               "name": "Baz",
               "age": "40"
            }
         ],
         header: "Header from state ...",
         content: "Content from state alolo ...",
         demo: []
      }
      this.setStateHandle = this.setStateHandle.bind(this);

      // Force update
      this.forceUpdateHandler = this.forceUpdateHandler.bind(this);

      // Find Dom Node
      this.findDomNodeHandler = this.findDomNodeHandler.bind(this);
   };

   setStateHandle() {
      var item = "setState ...";
      var myArray = this.state.demo.slice();
      myArray.push(item);
      this.setState({ demo: myArray });
   };

   forceUpdateHandler() {
      this.forceUpdate();
   };

   findDomNodeHandler() {
      var myDiv = document.getElementById('myDiv');
      ReactDom.findDOMNode(myDiv).style.color = 'green';
   };

   render() {
      return (
         <div>
            <Header headerProp={this.state.header} />
            <h1>{this.state.header}</h1>
            <h1>{this.state.content} </h1>
            <table>
               <tbody>
                  {
                     this.state.data.map((person, i) => <TableRow key={i} data={person} />)
                  }
               </tbody>
            </table>
            <Content contentProp={this.state.content} />

            <h1>{this.props.headerProp} </h1>
            <h2>{this.props.contentProp}</h2>
            <h1>{this.props.footerProp} </h1>
            <h1>Set State</h1>
            <button onClick={this.setStateHandle}>SET STATE</button>
            <h4>State Array: {this.state.demo}</h4>

            <h1>Force Update</h1>
            <button onClick={this.forceUpdateHandler}>FORCE UPDATE</button>
            <h4>Random number: {Math.random()}</h4>

            <h1>Find dom node</h1>

            <button onClick = {this.findDomNodeHandler}>FIND DOME NODE</button>
            <div id = "myDiv">NODE</div>

         </div>
      );
   }
}

class Header extends Component {
   render() {
      return (
         <div>
            <h1>{this.props.headerProp}</h1>
         </div>
      );
   }
}

class TableRow extends Component {
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
class Content extends Component {
   componentWillMount()
   {
      console.log('Component will mount');
   }

   componentDidMount() {

   }

   componentWillReceiveProps(newProps) {

   }

   shouldComponentUpdate(newProps, newState) {

   }

   componentWillUpdate(nextProps, newState) {

   }

   componentDidUpdate(prevProps, prevState) {

   }

   componentWillUnmount() {

   }
   render() {
      return (
         <div>
            <h2>Content</h2>
            <p>{this.props.contentProp}</p>
         </div>
      );
   }
}

App.defaultProps = {
   footerProp: "Footer from props ..."
}


Content.propTypes = {
   propArray: PropTypes.array,
   propBool: PropTypes.bool,
   propFunc: PropTypes.func,
   propNumber: PropTypes.number,
   propString: PropTypes.string,
   propObject: PropTypes.object
}

Content.defaultProps = {
   propArray: [1, 2, 3, 4, 5],
   propBool: true,
   propFunc: function (e) { return e },
   propNumber: 1,
   propString: "String value...",

   propObject: {
      objectName1: "objectValue1",
      objectName2: "objectValue2",
      objectName3: "objectValue3"
   }
}
export default App;