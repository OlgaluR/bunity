// this is collections.js for bunity
// this collection stores all the products available in the master product base 
this.Products = new Mongo.Collection("products");
console.log(Products.find().count());