import { BTNode, Heap } from "../powers/dynamic";

const expect = require("chai").expect;

const btnodeInt = new BTNode(1);
const btnodeFloat = new BTNode(10.3);
const btintNodeArray = new BTNode([1, 2, 3]);
const btnodeObject = new BTNode({ data: 3, count: 4 });

describe("Dynamic Node Tests", function() {
  //BTNode tests
  describe("Tests for Binary Tree nodes", function() {
    describe("Function types", function() {
      it("type for get data should be function", () => {
        expect(typeof btnodeInt.getData).to.equal("function");
      });

      it("type for set data should be function", () => {
        expect(typeof btnodeInt.setData).to.equal("function");
      });
    });

    describe("Return type of Data", function() {
      it("return type for data should be integer", () => {
        expect(typeof btnodeInt.getData()).to.equal("number");
      });
      it("return type for data should be float(number)", () => {
        expect(typeof btnodeFloat.getData()).to.equal("number");
      });
      it("return type for data should be array", () => {
        expect(Array.isArray(btintNodeArray.getData())).to.equal(true);
      });
      it("return type for data should be object", () => {
        expect(typeof btnodeObject.getData()).to.equal("object");
      });
    });
  });

  describe("Tests for Heap", () => {
    //creating array for integers
    let intInputArray = [];
    intInputArray.push(29);
    intInputArray.push(12);
    intInputArray.push(22);
    intInputArray.push(24);
    intInputArray.push(5);
    intInputArray.push(8);
    intInputArray.push(30);
    intInputArray.push(17);
    intInputArray.push(2);
    intInputArray.push(16);

    // simple heap tests
    let heap = new Heap();
    heap.insert(10);

    describe("Tests for General heap", () => {
      it("Heap should be a class(function)", () => {
        expect(typeof Heap).to.equal("function");
      });
      it("Heap node data should be integer", () => {
        expect(typeof heap.heap[0]).to.equal("number");
      });
      it("Heap node data should be 10", () => {
        expect(heap.getTop()).to.equal(10);
      });
    });

    // integer Min Heap
    let integerMinHeap = new Heap("min");

    //creating minHeap
    intInputArray.forEach(i => {
      integerMinHeap.insert(i);
    });

    console.log(integerMinHeap.getHeap());

    describe("Tests for Integer Min Heap", () => {
      it("Root node data should be number", () => {
        expect(typeof integerMinHeap.getTop()).to.equal("number");
      });
      it("Root node data should be minimum", () => {
        expect(integerMinHeap.getTop()).to.equal(2);
      });
    });

    // integer Max Heap
    let integerMaxHeap = new Heap("max");

    //creating maxHeap
    intInputArray.forEach(i => {
      integerMaxHeap.insert(i);
    });

    console.log(integerMaxHeap.getHeap());

    describe("Tests for Integer Max Heap", () => {
      it("Root node data should be number", () => {
        expect(typeof integerMaxHeap.getTop()).to.equal("number");
      });
      it("Root node data should be Maximum", () => {
        expect(integerMaxHeap.getTop()).to.equal(30);
      });
    });

    //object Array

    //creating object array for integers
    let objInputArray = [];
    objInputArray.push({ letter: "X", value: 24 });
    objInputArray.push({ letter: "D", value: 4 });
    objInputArray.push({ letter: "A", value: 1 });
    objInputArray.push({ letter: "C", value: 3 });
    objInputArray.push({ letter: "G", value: 6 });
    objInputArray.push({ letter: "K", value: 11 });
    objInputArray.push({ letter: "O", value: 15 });
    objInputArray.push({ letter: "Q", value: 17 });

    // object Min Heap
    let objectMinCompareFunction = (a, b) => {
      return a["value"] < b["value"] ? 1 : -1;
    };
    let objectMinHeap = new Heap("min", objectMinCompareFunction);

    //creating minHeap
    objInputArray.forEach(i => {
      objectMinHeap.insert(i);
    });

    console.log(objectMinHeap.getHeap());

    describe("Tests for object Min Heap", () => {
      it("Root node data should be number", () => {
        expect(typeof objectMinHeap.getTop()).to.equal("object");
      });
      it("Root node data should be minimum", () => {
        expect(objectMinHeap.getTop().value).to.equal(1);
      });
    });

    // object Max Heap
    let objectMaxCompareFunction = (a, b) => {
      return a["value"] > b["value"] ? 1 : -1;
    };
    let objectMaxHeap = new Heap("max", objectMaxCompareFunction);

    //creating maxHeap
    objInputArray.forEach(i => {
      objectMaxHeap.insert(i);
    });

    console.log(objectMaxHeap.getHeap());

    describe("Tests for object Max Heap", () => {
      it("Root node data should be number", () => {
        expect(typeof objectMaxHeap.getTop()).to.equal("object");
      });
      it("Root node data should be Maximum", () => {
        expect(objectMaxHeap.getTop().value).to.equal(24);
      });
    });
  });
});
