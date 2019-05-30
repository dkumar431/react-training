import React, {Component} from 'react';

class RefDemo extends Component {
  constructor(){
    super();
    this.state = {
      name: ""
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
  render(){
    return (
      <React.Fragment>
        <input type="text" ref="name" value={this.state.name} onChange={this.nameChange} />
        Your name is {this.state.name}
      </React.Fragment>
    )
  }
}

export default RefDemo;