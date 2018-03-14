(function(window) {
  "use strict";
  var FORM_SELECTOR = "[data-payment-form=\"form\"]";
  var App = window.App;
  var FormHandler = App.FormHandler;
  var $ = window.jQuery;

  var formHandler = new FormHandler(FORM_SELECTOR);

  formHandler.addSubmitHandler(function(data) {
    var text = "Thank you for your payment, " + data.title + " " + data.username;
    $("#thank-you > p").text(text);

    $("#thank-you").modal();
  });
  console.log(formHandler);
})(window);
