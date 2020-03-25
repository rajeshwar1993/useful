class Heap {
  constructor(
    type = "max",
    compareFunction = (a, b) => {
      if (type === "max") {
        return a > b ? 1 : -1;
      } else return a < b ? 1 : -1;
    }
  ) {
    this.heap = [];
    this.type = type;
    this.compare = compareFunction;
  }

  insert(el) {
    this.heap.push(el);

    let currentPos = this.heap.length - 1;

    while (true) {
      if (currentPos === 0) return currentPos;

      let el = this.heap[currentPos];
      let parentIndx = Math.floor((currentPos - 1) / 2);
      let parent = this.heap[parentIndx];

      if (this.compare(parent, el) === 1) return currentPos;

      this.heap[parentIndx] = el;
      this.heap[currentPos] = parent;
      currentPos = parentIndx;
    }
  }

  extract() {}

  getHeap() {
    return [...this.heap];
  }

  getTop() {
    return this.heap[0];
  }
}

export default Heap;
