(function(window) {
  "use strict";
  var App = window.App || {};
  var $ = window.jQuery;

  function RemoteDataStore(url) {
    this.data = {};
    if (!url) {
      throw new Error("No remote URL supplied.");
    }

    this.serverUrl = url;
  }

  RemoteDataStore.prototype.add = function(key, val) {
    $.post(this.serverUrl, val, function(serverResponse) {
      this.data[key] = serverResponse.id;
      console.log(serverResponse);
    }.bind(this));
  };

  RemoteDataStore.prototype.getAll = function(cb) {
    $.get(this.serverUrl + "/", function(serverResponse) {
      console.log("getAll response:");
      console.log(serverResponse);
      serverResponse.forEach(function(item) {
        this.data[item.emailAddress] = item.id;
        cb(item);
      }.bind(this));
    }.bind(this));
  };

  RemoteDataStore.prototype.get = function(key, cb) {
    $.get(this.serverUrl + "/" + this.data[key], function(serverResponse) {
      console.log(serverResponse);
      cb(serverResponse);
    });
  };

  RemoteDataStore.prototype.remove = function(key) {
    $.ajax(this.serverUrl + "/" + this.data[key], {
      type: "DELETE"
    });
  };

  App.RemoteDataStore = RemoteDataStore;
  window.App = App;

})(window);
