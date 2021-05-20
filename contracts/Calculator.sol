//SPDX-License-Identifier: Unlicense

pragma solidity ^0.8.0;

contract Calculator {
    int256 public c;

    function add(int256 a, int256 b) public {
        c = a + b;
    }

    function sub(int256 a, int256 b) public {
        c = a - b;
    }

    function mul(int256 a, int256 b) public {
        c = a * b;
    }

    function div(int256 a, int256 b) public {
        require(b > 0, "The second parameter should be larger than 0");

        c = a / b;
    }

    function modulo(int256 a, int256 b) public {
        require(b > 0, "The second parameter should be larger than 0");

        c = a % b;
    }

    function getResult() public view returns (int256 x) {
        return c;
    }
}
