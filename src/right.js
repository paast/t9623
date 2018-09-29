import React from 'react';

import BlockStore from './stores/BlockStore';

export default class Right extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeBlock: null
    };
  }

  componentWillMount() {
    BlockStore.on("changeActiveBlock", () => {
      this.setState({
        activeBlock: BlockStore.getActiveBlock()
      });
    })
  }

  render() {
    if (this.state.activeBlock) {
      return (
        <div className="right">
          <div className="active-block" style={{backgroundColor: this.state.activeBlock.color}}>
            active block: {this.state.activeBlock.id}
          </div>
        </div>
      );
    } else {
      return (
        <div className="right">
          <div className="active-block">
            active block: none
          </div>
        </div>
      );
    }
  }
}
