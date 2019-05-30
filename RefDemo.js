// https://hackernoon.com/refs-in-react-all-you-need-to-know-fb9c9e2aeb81
import React, {Component} from 'react';

class RefDemo extends Component {
  constructor(){
    super();
    this.state = {
      name: "",
      age: ""
    }
  }
  nameChange = (event) =>{
    // this.setState({
    //   name: event.target.value
    // })
    this.setState({
      name: this.refs.name.value
    })
  }
  ageChange = () => {
    this.setState({
      age: this.ageNode.value
    })
  }
  setAge = (node) =>{
    this.ageNode = node;
  }
  render(){
    return (
      <React.Fragment>
        <input type="text" ref="name" value={this.state.name} onChange={this.nameChange} />
        <input type="age" ref={this.setAge} value={this.state.age} onChange={this.ageChange} />
        <br />
        Your name is {this.state.name}
        <br />
        Your age is {this.state.age}
      </React.Fragment>
    )
  }
}

export default RefDemo;