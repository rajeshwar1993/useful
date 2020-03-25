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

  extract() {
    let top = this.heap[0];
    let end = this.heap.pop();
    if (this.heap.length === 0) return top;
    this.heap[0] = end;

    let i = 0;
    let len = this.heap.length;

    while (true) {
      let el = this.heap[i];
      let left = 2 * i + 1;
      let right = 2 * i + 2;
      let leftEl, rightEl;
      let swap = null;

      if (left < len) {
        leftEl = this.heap[left];
        if (this.compare(el, leftEl) === -1) {
          swap = left;
        }
      }

      if (right < len) {
        rightEl = this.heap[right];
        if (
          (swap === null && this.compare(el, rightEl) === -1) ||
          (swap !== null && this.compare(rightEl, leftEl) === -1)
        ) {
          swap = right;
        }
      }

      if (swap === null) break;
      this.heap[i] = this.heap[swap];
      this.heap[swap] = el;
      i = swap;
    }

    return top;
  }

  getHeap() {
    return [...this.heap];
  }

  getTop() {
    return this.heap[0];
  }
}

export default Heap;
