define([
  'jquery',
  'lodash',
  'text!../templates/bling.html',
  'i18n!../nls/bling',
  'json!../json/feed.json',
  'css!../css/bling.css'
], function($, _, tmpl, i18n, data) {

  var compTmpl = _.template(tmpl);
  data = $.extend({}, i18n, data);

  $.fn.bling = function() {
    return $(this).html(compTmpl(data));
  };

  return {
    bling: function($elem) {
      $elem.bling().show();
    }
  }
});