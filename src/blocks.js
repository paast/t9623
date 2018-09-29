import React, {Component} from 'react';

import BlockStore from "./stores/BlockStore";
import dispatcher from './dispatcher';

export default class Blocks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      blocks: []
    };
  }

  componentWillMount() {
    BlockStore.on("change", () => {
      this.setState({
        blocks: BlockStore.getAll()
      })
    })
  }

  render() {
    return (
      <div className="blocks">
        {Object.values(this.state.blocks).map(x => <Block key={x.id} block={x} />)}
      </div>
    );
  }
}

class Block extends Component {
  deleteBlock(e) {
    dispatcher.dispatch({
      type: "DELETE_BLOCK",
      id: this.props.block.id
    });
    e.stopPropagation();
  }

  setActiveBlock() {
    dispatcher.dispatch({
      type: "SET_ACTIVE_BLOCK",
      id: this.props.block.id
    })
  }

  render() {
    return (
      <div className="block" style={{backgroundColor: this.props.block.color}} onClick={this.setActiveBlock.bind(this)}>
        block #{this.props.block.id}
        <button className="remove" onClick={this.deleteBlock.bind(this)}>x</button>
      </div>
    );
  }
}
