import React from 'react';

import Blocks from './blocks';
import dispatcher from './dispatcher';

export default class Left extends React.Component {
  render() {
    return (
      <div className="left">
        <AddBlock />
        <Blocks />
      </div>
    )
  }
}

class AddBlock extends React.Component {
  createBlock = () => {
    dispatcher.dispatch({
      type: "CREATE_BLOCK"
    });
  }

  render() {
    return (
      <div className="addBlock" onClick={this.createBlock}>
        <div className="plus-x"></div>
        <div className="plus-y"></div>
      </div>
    )
  }
}
