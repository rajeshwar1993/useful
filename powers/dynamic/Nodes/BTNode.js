class BTNode {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }

  getData() {
    return this.data;
  }

  setData(data) {
    this.data = data;
  }
}

export default BTNode;
