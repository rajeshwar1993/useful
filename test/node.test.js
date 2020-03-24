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
    //creating node array for integers
    let intNodeArray = [];
    intNodeArray.push(new BTNode(2));
    intNodeArray.push(new BTNode(12));
    intNodeArray.push(new BTNode(22));
    intNodeArray.push(new BTNode(24));
    intNodeArray.push(new BTNode(5));
    intNodeArray.push(new BTNode(8));
    intNodeArray.push(new BTNode(30));
    intNodeArray.push(new BTNode(17));
    intNodeArray.push(new BTNode(21));
    intNodeArray.push(new BTNode(16));

    // simple heap tests
    let root1 = new BTNode(10);
    let compareFunction = () => {};
    let heap = new Heap(root1, compareFunction);

    describe("Tests for General heap", () => {
      it("Heap should be a class(function)", () => {
        expect(typeof Heap).to.equal("function");
      });
      it("Heap node data should be integer", () => {
        expect(typeof heap.root.getData()).to.equal("number");
      });
      it("Heap node data should be 10", () => {
        expect(heap.root.getData()).to.equal(10);
      });
    });

    // integer Min Heap
    let root2 = new BTNode(10);
    let integerMinHeapCompareFunction = () => {};
    let integerMinHeap = new Heap(root2, integerMinHeapCompareFunction);

    //creating minHeap
    intNodeArray.forEach(i => {
      integerMinHeap.insert(i);
    });

    describe("Tests for Integer Min Heap", () => {
      it("Root node data should be number", () => {
        expect(typeof integerMinHeap.root.getData()).to.equal("number");
      });
      it("Root node data should be minimum", () => {
        expect(integerMinHeap.root.getData()).to.equal(2);
      });
    });
  });
});
