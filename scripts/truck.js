(function(window) {
  "use strict";
  var App = window.App || {};

  function Truck(truckId, db) {
    this.truckId = truckId;
    this.db = db;
  }

  Truck.prototype.createOrder = function(order) {
    console.log("Adding order for " + order.emailAddress);
    this.db.add(order.emailAddress, order);
  };

  Truck.prototype.deliverOrder = function(customerId) {
    console.log("Delivering order for " + customerId);
    this.db.remove(customerId);
  };

  Truck.prototype.printOrders = function(fn) {
    // var customerIdArray = Object.keys(this.db.getAll());
    var customerArray = this.db.getAll(fn);
    console.log("Customer Array\n" + customerArray);

    // console.log("Truck #" + this.truckId + " has pending orders:");
    // customerArray.forEach(function(customer) {
    //   // console.log(this.db.get(customer.id));
    //   fn.call(obj, customer);
    // }.bind(this));
  };

  App.Truck = Truck;
  window.App = App;

})(window);
