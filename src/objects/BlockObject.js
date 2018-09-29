
export default class BlockObject {
  constructor() {
    let rgb = [1,1,1].map(x => 255 - Math.floor(Math.random() * 128))
    this.color = "rgb(" + rgb[0] + ", " + rgb[1] + ", " + rgb[2] + ")";
    this.id = i;
    i ++;
  }
}

let i = 0;
