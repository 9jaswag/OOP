"use strict";

/**
 * Shopping Cart class
 */

class ShoppingCart {
    constructor () {
        this.total = 0;
        this.item = {};
    }

    /**
     * Add an item to the shopping cart
     * 
     * @param {string} itemName the name of the item to be added
     * @param {number} quantity the quantity of the item to be added
     * @param {number} price the price of the item to be added
     */

    addItem (itemName, quantity, price){
        let itemTotal = quantity * price;
        this.total += itemTotal;
        this.items[itemName] = quantity;
    }

    /**
     * Remove an item from the shopping cart
     * 
     * @param {string} itemName the name of the item to be removed
     * @param {number} quantity the quantity of the item to be removed
     * @param {number} price the price of the item to be removed
     */

    removeItem (itemName, quantity, price){
        if(quantity > this.items.itemName){
            delete this.items[itemName];
        }else{
            this.items[itemName] = this.items[itemName] - quantity;
        }
        let itemTotal = quantity * price;
        this.total -= itemTotal;
    }

    /**
     * Accept payment and checkout
     * 
     * @param {number} cashPaid the amount paid at checkout.
     */

    checkout(cashPaid){
        let balance;
        if(cashPaid < this.total){
            return "Cash paid not sufficient";
        }else {
            balance = cashPaid - this.total;
            return balance
        }
    }
}

/**
 * Shop class
 */

class Shop {
    constructor() {
        super();
        this.quantity = 100;
    }

    /**
     * Reduce item quantity in shop class by 1 when method is called
     * 
     */

    removeItem (){
        this.quantity -= 1;
    }
}