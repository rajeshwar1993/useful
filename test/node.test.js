import { BTNode } from "../powers/Nodes";

const expect = require("chai").expect;

const btnodeInt = new BTNode(1);
const btnodeFloat = new BTNode(10.3);
const btnodeArray = new BTNode([1, 2, 3]);
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
        expect(Array.isArray(btnodeArray.getData())).to.equal(true);
      });
      it("return type for data should be object", () => {
        expect(typeof btnodeObject.getData()).to.equal("object");
      });
    });
  });
});
