import React, {Component} from 'react';
import Message from './Message';

class MessageList extends Component {
  render(){
    return(
      <ul>
        {this.props.messageList.map(message => {
          return <Message msg={message} />
        })}
      </ul>
    )
  }
}

export default MessageList;