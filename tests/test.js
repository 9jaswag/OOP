"use strict";
const assert = require('chai').assert;
const myApp = require('../oop.js');

describe('Object Oriented Programming', ()=>{

    describe('Create an instance of a class', () => {
        it('Create an instance of the BankAccount class when instanciated', () => {
            let chuks = new BankAccount('chuks');
            let isTypeOf = chuks instanceof BankAccount;
            assert.equal(isTypeOf, true);
        });
        it('Create an instance of the Kiddies BankAccount class when instanciated', () => {
            let chuks = new KiddiesAccount('chuks');
            let isTypeOf = chuks instanceof KiddiesAccount;
            assert.equal(isTypeOf, true);
        });
    });
})