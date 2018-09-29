import {EventEmitter} from "events";

import dispatcher from '../dispatcher';
import BlockObject from '../objects/BlockObject';

class BlockStore extends EventEmitter {
  constructor() {
    super();
    this.blocks = {};
    this.activeBlock = null;
  }

  handleActions(action) {
    switch(action.type) {
      case "CREATE_BLOCK": {
        this.createBlock();
        break;
      }
      case "DELETE_BLOCK": {
        this.deleteBlock(action.id);
        break;
      }
      case "SET_ACTIVE_BLOCK": {
        this.setActiveBlock(action.id);
        break;
      }
      default: console.log(action);
    }
  }

  createBlock() {
    const newBlock = new BlockObject();
    this.blocks[newBlock.id] = newBlock;

    this.emit("change");
  }

  deleteBlock(id) {
    if (this.activeBlock === id) {
      this.activeBlock = null;
      this.emit("changeActiveBlock");
    }
    delete this.blocks[id];

    this.emit("change");
  }

  setActiveBlock(id) {
    if (this.activeBlock === id) {
      this.activeBlock = null;
    } else {
      this.activeBlock = id;
    }

    this.emit("changeActiveBlock");
  }

  getActiveBlock() {
    return this.blocks[this.activeBlock];
  }

  getById(id) {
    if (this.blocks[id]) {
      return this.blocks[id];
    }
    return false;
  }

  getAll() {
    return this.blocks;
  }
}

const blockStore = new BlockStore();
dispatcher.register(blockStore.handleActions.bind(blockStore));

export default blockStore;
