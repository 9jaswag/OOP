"use strict";

/**
 * Bank Account class
 * 
 * @param {string} name name of the bank account holder
 * @param {number} balance bank account balance
 */
class BankAccount {
    constructor(name) {
        this.name = name;
        this.balance = 0;
    }

    /**
     * Deposit an amount into the account
     * 
     * @param {number} amount the amount to be deposited
     */

    deposit(amount) {
        this.balance += amount;
        return this.balance;
    }

    /**
     * Withdraw an amount from the account
     * 
     * @param {number} amount the amount to be withdrawn
     */

    withdraw(amount) {
        if (amount > this.balance) {
            return "Insufficient Funds";
        }else {
            this.balance -= amount;
            return this.balance;
        }
    }

    /**
     * get account balance
     * 
     */

    getBalance() {
        return `${this.name} your account balance is ${this.balance}`;
    }

    
}


/**
 * Kids Bank Account sub-class that extends bank account class
 */

class KiddiesAccount extends BankAccount {
    constructor (name) {
        super();
        this.name = name;
    }
}
