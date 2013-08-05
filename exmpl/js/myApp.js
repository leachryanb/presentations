require(['blinger','jquery'], function(blinger, $) {
  // I get here only when all my dependencies are available
  $elem = $('#blingMe').hide();

  // ... other stuff

  blinger.bling($elem);
});