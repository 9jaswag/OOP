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

    describe('Return properties of a class', ()=>{
        it('Should return the account balance when deposit is made', () => {
            let chuks = new BankAccount('chuks');
			assert.equal(chuks.deposit(5000), 5000);
        });
        it('Should return insufficient funds if amount less than balance is withdrawn', () => {
            let chuks = new BankAccount('chuks');
			assert.equal(chuks.withdraw(60000), "Insufficient Funds");
        });
        it('Should return balance when withdrawal is made', () => {
            let chuks = new BankAccount('chuks');
            chuks.deposit(5000)
			assert.equal(chuks.withdraw(6000), 44000);
        });
        it('Should return balance when getBalance is invoked', () => {
            let chuks = new BankAccount('chuks');
            chuks.deposit(5000)
			assert.equal(chuks.getBalance(), 5000);
        });
    });
})