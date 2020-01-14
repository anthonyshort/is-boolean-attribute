
/**
 * https://github.com/kangax/html-minifier/issues/63#issuecomment-18634279
 * https://gist.github.com/ArjanSchouten/0b8574a6ad7f5065a5e7
 */

var attrs = [ 
  "allowfullscreen",
  "async",
  "autofocus",
  "autoplay",
  "checked",
  "contenteditable",
  "controls",
  "declare",
  "default",
  "defer",
  "disabled",
  "formnovalidate",
  "frameborder",
  "hidden",
  "inert",
  "ismap",
  "itemscope",
  "loop",
  "multiple",
  "muted",
  "nomodule",
  "novalidate",
  "nowrap",
  "open",
  "readonly",
  "required",
  "reversed",
  "scoped",
  "selected",
  "truespeed",
  "typemustmatch",
];

module.exports = function(attr){
  return attrs.indexOf(attr) > -1;
};
