// import "../contracts/Calculator.sol"
// const { expect } = require('chai');

const { expect } = require("chai")
const { ethers } = require("hardhat");

// describe('Calculator', () => {
//   let Calculator, New;
//   it("shouldn't allow division by zero", async function () {
//     let error;
//     const fail = await Calculator.deploy();
//     try {
//       await fail.div(5, 0);
//     } catch (e) {
//       error = e;
//     }

//     assert.isDefined(error, "No exception thrown during divison");
//     assert.isTrue(error.message.search("revert") >= 0, "Expected transaction revert");
//   });
// });
// const calculator = artifacts.require("Calculator");

describe("Calculator", function() {
let calculator;

  this.beforeEach(async () => {
    const Calculator = await ethers.getContractFactory("Calculator");
    calculator = await Calculator.deploy();
  })


  describe('add', () => {
    it('are you add friend', async () => {
      expect(await calculator.add(2, 5)).to.equal(7)
    })
    
  })
    
  describe('sub', () => {
    it('are you sub friend', async () => {
    expect(await calculator.sub(5, 2)).to.equal(3)
    })
    
  })

  describe('mul', () => {
    it('are you mul friend', async () => {
    expect(await calculator.mul(2, 5)).to.equal(10)
    })
    
  })
  describe('div', () => {
    it('are you div friend', async () => {
    expect(await calculator.div(10, 2)).to.equal(5)
    })
    
  })
  describe('modulo', () => {
    it('are you modulo friend', async () => {
    expect(await calculator.modulo(10, 6)).to.equal(4)
    })
    
  })
  })
