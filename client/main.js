// set up the iron router
Router.configure({
  layoutTemplate: 'ApplicationLayout'
});

// 'home' page
Router.route('/', function () {
  this.render("mainheader", {to:"header"});
  this.render("info", {to:"main"});  
});

// catalogue page
Router.route('/catalogue', function () {
  this.render("mainheader", {to:"header"});
  this.render("mastercat", {to:"main"});  
});


Template.mastercat.helpers({
  // find all products in catalogue
  products:function(){
    return Products.find({},{sort:{Description:1}});
  },
   myproducts:function(){
    return Myselection.find({},{sort:{Description:1}});
  },
   // find current product
  document:function(){
    return Products.findOne({_id:Session.get("prod_id")});
  }, 
});

Template.mastercat.events({
'click .js-addtolist':function(event){
	console.log("add product");
   var prodid = this._id;
   Meteor.call("addprodto", prodid);
   },
'click .js-delfromlist':function(event){
	console.log("remove product");
   var itemid = this._id;
   Meteor.call("delprodfrom", itemid);
   },
'click .js-product-info':function(event){
   var prodid = this._id;
   Session.set("prod_id",prodid);
   console.log(Session.get("prod_id"))
   $("#product_detail").modal('show');
   },
'submit .js-add-image':function(event){
  event.preventDefault();
  var img_src, prodid;
  img_src = event.target.img_src.value;
  prodid = Session.get("prod_id")
  console.log(prodid, img_src);
  Meteor.call("addimage", img_src,prodid);
  return false;
}   
});
Template.mastercat.rendered = function() {
   $('a[rel=tooltip]').tooltip() //initialize all tooltips in this template
};

