import React, {PureComponent} from 'react';

class Message extends PureComponent {
  render(){
    console.log("Render called")
    return(
      <li>{this.props.msg}</li>
    )
  }
}

export default Message;