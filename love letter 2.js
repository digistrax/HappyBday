$(document).ready(function () {
  var envelope = $("#envelope");
  var btn_open = $("#open");
  var btn_reset = $("#reset");

  // Function to update CSS variable --env-width dynamically
  function updateEnvWidth() {
    var width = envelope.outerWidth(); // get envelope's current width
    envelope.css("--env-width", width + "px");
  }

  // Initial update
  updateEnvWidth();

  // Update on window resize
  $(window).resize(function () {
    updateEnvWidth();
  });

  envelope.click(function () {
    open();
  });
  btn_open.click(function () {
    open();
  });
  btn_reset.click(function () {
    close();
  });

  function open() {
    envelope.addClass("open").removeClass("close");
  }
  function close() {
    envelope.addClass("close").removeClass("open");
  }
});
