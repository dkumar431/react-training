import React, { Component } from 'react';
import Message from './Message';
import MessageList from './MessageList';
import '../style.css';

class PureComponentDemo extends Component {
  constructor() {
    super();
    this.state = {
      messageList: []
    };
  }

  getLastMessage = () => {
    const lastMessage = this.state.messageList[this.state.messageList.length - 1]
    return lastMessage === undefined ? "" : lastMessage;
  }

  onValueChange = (event) => {
    const messages = [...this.state.messageList];
    messages.push(event.target.value);
    this.setState({
      messageList : messages
    })
  }

  render() {
    return (
      <div>
        <input type="text"
          value= {this.getLastMessage()}
          onChange={this.onValueChange} />
          <hr />
          <MessageList messageList={this.state.messageList}/>
      </div>
    );
  }
}

export default PureComponentDemo;