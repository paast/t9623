import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import Left from './left.js';
import Right from './right/right.js';

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <Left />
        <Right />
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
