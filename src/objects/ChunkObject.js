
import NodeObject from './NodeObject'


export default class ChunkObject {
  constructor(block, parent) {
    setBlock(block);
    setParent(parent); // parent should come in as [parentChunk, chunkNode]??
    this.id = i;
    i++;
  }

  setBlock = (block) => {
    this.block = block.Id;
    block.chunks.push(this);
  }

  setParent = (parent) => {
    this.parent = parent;
  }
}

let i = 1000;
