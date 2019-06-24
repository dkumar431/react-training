import React, { Component } from 'react';
import { render } from 'react-dom';
import PureComponentDemo from './PureComponentDemo/PureComponentDemo';
import RefDemo from './RefDemo';
import FriendZone, {FriendList, ChatZone, FriendPosts} from './Composition';
import './style.css';

class App extends Component {
 
  render() {
    return (
      <FriendZone left={<FriendList />} right={<ChatZone />} >
        <FriendPosts/>
      </FriendZone>
    );
  }
}

render(<App />, document.getElementById('root'));




