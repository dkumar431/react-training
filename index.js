import React, { Component } from 'react';
import { render } from 'react-dom';
import PureComponentDemo from './PureComponentDemo/PureComponentDemo';
import './style.css';

class App extends Component {
 
  render() {
    return (
      <PureComponentDemo />
    );
  }
}

render(<App />, document.getElementById('root'));




