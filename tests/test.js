"use strict";
const assert = require('chai').assert;
const myApp = require('../oop.js');

describe('Object Oriented Programming', ()=>{

    describe('Create an instance of a class', () => {
        let chuks = new BankAccount('chuks');
        let isTypeOf = chuks instanceof BankAccount;
        assert.equal(isTypeOf, true);
    });
})