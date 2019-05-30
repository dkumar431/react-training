import React, { Component } from 'react';
import { render } from 'react-dom';
import PureComponentDemo from './PureComponentDemo/PureComponentDemo';
import RefDemo from './RefDemo';
import './style.css';

class App extends Component {
 
  render() {
    return (
      <RefDemo />
    );
  }
}

render(<App />, document.getElementById('root'));




