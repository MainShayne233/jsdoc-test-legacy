module.exports=function(t){function e(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,e),r.l=!0,r.exports}var n={};return e.m=t,e.c=n,e.i=function(t){return t},e.d=function(t,n,o){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:o})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=16)}([function(t,e){/*!
 * Chai - flag utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
t.exports=function(t,e,n){var o=t.__flags||(t.__flags=Object.create(null));if(3!==arguments.length)return o[e];o[e]=n}},function(t,e){t.exports={includeStack:!1,showDiff:!0,truncateThreshold:40}},function(t,e,n){function o(t,e,n,o){return r({showHidden:e,seen:[],stylize:function(t){return t}},t,void 0===n?2:n)}function r(t,n,o){if(n&&"function"==typeof n.inspect&&n.inspect!==e.inspect&&(!n.constructor||n.constructor.prototype!==n)){var d=n.inspect(o);return"string"!=typeof d&&(d=r(t,d,o)),d}var y=i(t,n);if(y)return y;if(x(n)){if("outerHTML"in n)return n.outerHTML;try{if(document.xmlVersion){return(new XMLSerializer).serializeToString(n)}var w=document.createElementNS("http://www.w3.org/1999/xhtml","_");return w.appendChild(n.cloneNode(!1)),html=w.innerHTML.replace("><",">"+n.innerHTML+"<"),w.innerHTML="",html}catch(t){}}var m=v(n),j=t.showHidden?g(n):m;if(0===j.length||l(n)&&(1===j.length&&"stack"===j[0]||2===j.length&&"description"===j[0]&&"stack"===j[1])){if("function"==typeof n){var O=b(n),M=O?": "+O:"";return t.stylize("[Function"+M+"]","special")}if(f(n))return t.stylize(RegExp.prototype.toString.call(n),"regexp");if(p(n))return t.stylize(Date.prototype.toUTCString.call(n),"date");if(l(n))return s(n)}var S="",_=!1,E=["{","}"];if(h(n)&&(_=!0,E=["[","]"]),"function"==typeof n){var O=b(n),M=O?": "+O:"";S=" [Function"+M+"]"}if(f(n)&&(S=" "+RegExp.prototype.toString.call(n)),p(n)&&(S=" "+Date.prototype.toUTCString.call(n)),l(n))return s(n);if(0===j.length&&(!_||0==n.length))return E[0]+S+E[1];if(o<0)return f(n)?t.stylize(RegExp.prototype.toString.call(n),"regexp"):t.stylize("[Object]","special");t.seen.push(n);var P;return P=_?a(t,n,o,m,j):j.map(function(e){return c(t,n,o,m,e,_)}),t.seen.pop(),u(P,S,E)}function i(t,e){switch(typeof e){case"undefined":return t.stylize("undefined","undefined");case"string":var n="'"+JSON.stringify(e).replace(/^"|"$/g,"").replace(/'/g,"\\'").replace(/\\"/g,'"')+"'";return t.stylize(n,"string");case"number":return 0===e&&1/e==-1/0?t.stylize("-0","number"):t.stylize(""+e,"number");case"boolean":return t.stylize(""+e,"boolean")}if(null===e)return t.stylize("null","null")}function s(t){return"["+Error.prototype.toString.call(t)+"]"}function a(t,e,n,o,r){for(var i=[],s=0,a=e.length;s<a;++s)Object.prototype.hasOwnProperty.call(e,String(s))?i.push(c(t,e,n,o,String(s),!0)):i.push("");return r.forEach(function(r){r.match(/^\d+$/)||i.push(c(t,e,n,o,r,!0))}),i}function c(t,e,n,o,i,s){var a,c;if(e.__lookupGetter__&&(e.__lookupGetter__(i)?c=e.__lookupSetter__(i)?t.stylize("[Getter/Setter]","special"):t.stylize("[Getter]","special"):e.__lookupSetter__(i)&&(c=t.stylize("[Setter]","special"))),o.indexOf(i)<0&&(a="["+i+"]"),c||(t.seen.indexOf(e[i])<0?(c=null===n?r(t,e[i],null):r(t,e[i],n-1),c.indexOf("\n")>-1&&(c=s?c.split("\n").map(function(t){return"  "+t}).join("\n").substr(2):"\n"+c.split("\n").map(function(t){return"   "+t}).join("\n"))):c=t.stylize("[Circular]","special")),void 0===a){if(s&&i.match(/^\d+$/))return c;a=JSON.stringify(""+i),a.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)?(a=a.substr(1,a.length-2),a=t.stylize(a,"name")):(a=a.replace(/'/g,"\\'").replace(/\\"/g,'"').replace(/(^"|"$)/g,"'"),a=t.stylize(a,"string"))}return a+": "+c}function u(t,e,n){var o=0;return t.reduce(function(t,e){return o++,e.indexOf("\n")>=0&&o++,t+e.length+1},0)>60?n[0]+(""===e?"":e+"\n ")+" "+t.join(",\n  ")+" "+n[1]:n[0]+e+" "+t.join(", ")+" "+n[1]}function h(t){return Array.isArray(t)||"object"==typeof t&&"[object Array]"===d(t)}function f(t){return"object"==typeof t&&"[object RegExp]"===d(t)}function p(t){return"object"==typeof t&&"[object Date]"===d(t)}function l(t){return"object"==typeof t&&"[object Error]"===d(t)}function d(t){return Object.prototype.toString.call(t)}var b=n(7),g=n(31),v=n(28);t.exports=o;var x=function(t){return"object"==typeof HTMLElement?t instanceof HTMLElement:t&&"object"==typeof t&&1===t.nodeType&&"string"==typeof t.nodeName}},function(t,e,n){t.exports=n(41)},function(t,e,n){function o(t){return t.split("\n").map(function(t,e){return[t,e]}).filter(function(t){return(0,s.stringContains)(t[0],c)}).map(function(t){return t[1]})}function r(t,e){var n=t.split("\n"),o=[];for(e+=1;!(0,s.stringContains)(n[e],a);)o.push(n[e]),e+=1;return o.map(function(t){return(0,s.removeSubStrings)(t,["*"]).trim()}).join("\n")}function i(t,e){var n=[],o=t.split("\n");for(e++;;){if(void 0===o[e])throw new Error("could not find expected return for example (expected return denoated by //=>)");if((0,s.stringContains)(o[e],a))break;e++}for(;;){if(void 0===o[e])throw new Error("could not find end of return value delimiter");if((0,s.stringContainsAny)(o[e],u))break;n.push((0,s.removeSubStrings)(o[e],[a,"*"].concat(u))),e++}return n.map(function(t){return t.trim()}).join("\n")}var s=n(17),a="* //=>",c="@example",u=["*/","* @example"];t.exports={exampleLineNumbersFor:o,functionCallStringFor:r,returnValueStringFor:i}},function(t,e){/*!
 * assertion-error
 * Copyright(c) 2013 Jake Luer <jake@qualiancy.com>
 * MIT Licensed
 */
/*!
 * Return a function that will copy properties from
 * one object to another excluding any originally
 * listed. Returned function will create a new `{}`.
 *
 * @param {String} excluded properties ...
 * @return {Function}
 */
function n(){function t(t,n){Object.keys(n).forEach(function(o){~e.indexOf(o)||(t[o]=n[o])})}var e=[].slice.call(arguments);return function(){for(var e=[].slice.call(arguments),n=0,o={};n<e.length;n++)t(o,e[n]);return o}}function o(t,e,o){var r=n("name","message","stack","constructor","toJSON"),i=r(e||{});this.message=t||"Unspecified AssertionError",this.showDiff=!1;for(var s in i)this[s]=i[s];if((o=o||arguments.callee)&&Error.captureStackTrace)Error.captureStackTrace(this,o);else try{throw new Error}catch(t){this.stack=t.stack}}/*!
 * Primary Exports
 */
t.exports=o,/*!
 * Inherit from Error.prototype
 */
o.prototype=Object.create(Error.prototype),/*!
 * Statically set name
 */
o.prototype.name="AssertionError",/*!
 * Ensure correct constructor
 */
o.prototype.constructor=o,o.prototype.toJSON=function(t){var e=n("constructor","toJSON","stack"),o=e({name:this.name},this);return!1!==t&&this.stack&&(o.stack=this.stack),o}},function(t,e){/*!
 * Chai - getActual utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
t.exports=function(t,e){return e.length>4?e[4]:t._obj}},function(t,e){/*!
 * Chai - getName utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
t.exports=function(t){if(t.name)return t.name;var e=/^\s?function ([^(]*)\(/.exec(t);return e&&e[1]?e[1]:""}},function(t,e,n){/*!
 * ## parsePath(path)
 *
 * Helper function used to parse string object
 * paths. Use in conjunction with `_getPathValue`.
 *
 *      var parsed = parsePath('myobject.property.subprop');
 *
 * ### Paths:
 *
 * * Can be as near infinitely deep and nested
 * * Arrays are also valid using the formal `myobject.document[3].property`.
 * * Literal dots and brackets (not delimiter) must be backslash-escaped.
 *
 * @param {String} path
 * @returns {Object} parsed
 * @api private
 */
function o(t){return t.replace(/([^\\])\[/g,"$1.[").match(/(\\\.|[^.]+?)+/g).map(function(t){var e=/^\[(\d+)\]$/,n=e.exec(t);return n?{i:parseFloat(n[1])}:{p:t.replace(/\\([.\[\]])/g,"$1")}})}/*!
 * ## _getPathValue(parsed, obj)
 *
 * Helper companion function for `.parsePath` that returns
 * the value located at the parsed address.
 *
 *      var value = getPathValue(parsed, obj);
 *
 * @param {Object} parsed definition from `parsePath`.
 * @param {Object} object to search against
 * @param {Number} object to search against
 * @returns {Object|Undefined} value
 * @api private
 */
function r(t,e,n){var o,r=e;n=void 0===n?t.length:n;for(var i=0,s=n;i<s;i++){var a=t[i];r?(void 0!==a.p?r=r[a.p]:void 0!==a.i&&(r=r[a.i]),i==s-1&&(o=r)):o=void 0}return o}/*!
 * Chai - getPathInfo utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
var i=n(9);t.exports=function(t,e){var n=o(t),s=n[n.length-1],a={parent:n.length>1?r(n,e,n.length-1):e,name:s.p||s.i,value:r(n,e)};return a.exists=i(a.name,a.parent),a}},function(t,e,n){/*!
 * Chai - hasProperty utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
var o=n(3),r={number:Number,string:String};t.exports=function(t,e){var n=o(e);return"null"!==n&&"undefined"!==n&&(r[n]&&"object"!=typeof e&&(e=new r[n](e)),t in e)}},function(t,e,n){/*!
 * Chai - flag utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
/*!
 * Module dependancies
 */
var o=n(2),r=n(1);t.exports=function(t){var e=o(t),n=Object.prototype.toString.call(t);if(r.truncateThreshold&&e.length>=r.truncateThreshold){if("[object Function]"===n)return t.name&&""!==t.name?"[Function: "+t.name+"]":"[Function]";if("[object Array]"===n)return"[ Array("+t.length+") ]";if("[object Object]"===n){var i=Object.keys(t);return"{ Object ("+(i.length>2?i.splice(0,2).join(", ")+", ...":i.join(", "))+") }"}return e}return e}},function(t,e){/*!
 * Chai - transferFlags utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
t.exports=function(t,e,n){var o=t.__flags||(t.__flags=Object.create(null));e.__flags||(e.__flags=Object.create(null)),n=3!==arguments.length||n;for(var r in o)(n||"object"!==r&&"ssfi"!==r&&"message"!=r)&&(e.__flags[r]=o[r])}},function(module,exports,__webpack_require__){function exampleFunctionReturnValueFor(modulePath,file,index){var functionCallString=(0,_parsers.functionCallStringFor)(file,index),evalString="require('"+modulePath+"')."+functionCallString;try{return eval(evalString)}catch(t){throw new Error("Failed to eval function return value: "+evalString)}}function expectedReturnValueFor(file,exampleIndex){var string=(0,_parsers.returnValueStringFor)(file,exampleIndex);try{return eval("( "+string+" )")}catch(t){throw new Error("Failed to eval expected return value string: "+string)}}var _parsers=__webpack_require__(4);module.exports={expectedReturnValueFor:expectedReturnValueFor,exampleFunctionReturnValueFor:exampleFunctionReturnValueFor}},function(t,e,n){t.exports=n(18)},function(t,e){t.exports=require("fs")},function(t,e){t.exports=require("path")},function(t,e,n){function o(t){return t&&t.__esModule?t:{default:t}}function r(t,e){(0,a.expect)(t).to.eql(e)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=f.default.join(process.cwd(),t),o=e.testingFunction||r,a=u.default.readFileSync(t,"utf8");(0,s.exampleLineNumbersFor)(a).map(function(t){var e=(0,i.expectedReturnValueFor)(a,t),r=(0,i.exampleFunctionReturnValueFor)(n,a,t);o(r,e)})};var i=n(12),s=n(4),a=n(13),c=n(14),u=o(c),h=n(15),f=o(h)},function(t,e){function n(t,e){return 0===e.length?t:n(t.split(e[0]).join(""),e.slice(1,e.length))}function o(t,e){return 0!==e.length&&(!!r(t,e[0])||o(t,e.slice(1,e.length)))}function r(t,e){return-1!==t.indexOf(e)}t.exports={removeSubStrings:n,stringContains:r,stringContainsAny:o}},function(t,e,n){/*!
 * chai
 * Copyright(c) 2011-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
var o=[],e=t.exports={};/*!
 * Chai version
 */
e.version="3.5.0",/*!
 * Assertion Error
 */
e.AssertionError=n(5);/*!
 * Utils for plugins (not exported)
 */
var r=n(32);e.use=function(t){return~o.indexOf(t)||(t(this,r),o.push(t)),this},/*!
 * Utility Functions
 */
e.util=r;/*!
 * Configuration
 */
var i=n(1);e.config=i;/*!
 * Primary `Assertion` prototype
 */
var s=n(19);e.use(s);/*!
 * Core Assertions
 */
var a=n(20);e.use(a);/*!
 * Expect interface
 */
var c=n(22);e.use(c);/*!
 * Should interface
 */
var u=n(23);e.use(u);/*!
 * Assert interface
 */
var h=n(21);e.use(h)},function(t,e,n){/*!
 * chai
 * http://chaijs.com
 * Copyright(c) 2011-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
var o=n(1);t.exports=function(t,e){/*!
   * Assertion Constructor
   *
   * Creates object for chaining.
   *
   * @api private
   */
function n(t,e,n){i(this,"ssfi",n||arguments.callee),i(this,"object",t),i(this,"message",e)}/*!
   * Module dependencies.
   */
var r=t.AssertionError,i=e.flag;/*!
   * Module export.
   */
t.Assertion=n,Object.defineProperty(n,"includeStack",{get:function(){return console.warn("Assertion.includeStack is deprecated, use chai.config.includeStack instead."),o.includeStack},set:function(t){console.warn("Assertion.includeStack is deprecated, use chai.config.includeStack instead."),o.includeStack=t}}),Object.defineProperty(n,"showDiff",{get:function(){return console.warn("Assertion.showDiff is deprecated, use chai.config.showDiff instead."),o.showDiff},set:function(t){console.warn("Assertion.showDiff is deprecated, use chai.config.showDiff instead."),o.showDiff=t}}),n.addProperty=function(t,n){e.addProperty(this.prototype,t,n)},n.addMethod=function(t,n){e.addMethod(this.prototype,t,n)},n.addChainableMethod=function(t,n,o){e.addChainableMethod(this.prototype,t,n,o)},n.overwriteProperty=function(t,n){e.overwriteProperty(this.prototype,t,n)},n.overwriteMethod=function(t,n){e.overwriteMethod(this.prototype,t,n)},n.overwriteChainableMethod=function(t,n,o){e.overwriteChainableMethod(this.prototype,t,n,o)},n.prototype.assert=function(t,n,s,a,c,u){var h=e.test(this,arguments);if(!0!==u&&(u=!1),!0!==o.showDiff&&(u=!1),!h){var n=e.getMessage(this,arguments),f=e.getActual(this,arguments);throw new r(n,{actual:f,expected:a,showDiff:u},o.includeStack?this.assert:i(this,"ssfi"))}},/*!
   * ### ._obj
   *
   * Quick reference to stored `actual` value for plugin developers.
   *
   * @api private
   */
Object.defineProperty(n.prototype,"_obj",{get:function(){return i(this,"object")},set:function(t){i(this,"object",t)}})}},function(t,e){/*!
 * chai
 * http://chaijs.com
 * Copyright(c) 2011-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
t.exports=function(t,e){function n(t,n){n&&k(this,"message",n),t=t.toLowerCase();var o=k(this,"object"),r=~["a","e","i","o","u"].indexOf(t.charAt(0))?"an ":"a ";this.assert(t===e.type(o),"expected #{this} to be "+r+t,"expected #{this} not to be "+r+t)}function o(){k(this,"contains",!0)}function r(t,n){e.expectTypes(this,["array","object","string"]),n&&k(this,"message",n);var o=k(this,"object"),r=!1;if("array"===e.type(o)&&"object"===e.type(t)){for(var i in o)if(e.eql(o[i],t)){r=!0;break}}else if("object"===e.type(t)){if(!k(this,"negate")){for(var s in t)new P(o).property(s,t[s]);return}var a={};for(var s in t)a[s]=o[s];r=e.eql(a,t)}else r=void 0!=o&&~o.indexOf(t);this.assert(r,"expected #{this} to include "+e.inspect(t),"expected #{this} to not include "+e.inspect(t))}function i(){var t=k(this,"object"),e=Object.prototype.toString.call(t);this.assert("[object Arguments]"===e,"expected #{this} to be arguments but got "+e,"expected #{this} to not be arguments")}function s(t,e){e&&k(this,"message",e);var n=k(this,"object");if(k(this,"deep"))return this.eql(t);this.assert(t===n,"expected #{this} to equal #{exp}","expected #{this} to not equal #{exp}",t,this._obj,!0)}function a(t,n){n&&k(this,"message",n),this.assert(e.eql(t,k(this,"object")),"expected #{this} to deeply equal #{exp}","expected #{this} to not deeply equal #{exp}",t,this._obj,!0)}function c(t,e){e&&k(this,"message",e);var n=k(this,"object");if(k(this,"doLength")){new P(n,e).to.have.property("length");var o=n.length;this.assert(o>t,"expected #{this} to have a length above #{exp} but got #{act}","expected #{this} to not have a length above #{exp}",t,o)}else this.assert(n>t,"expected #{this} to be above "+t,"expected #{this} to be at most "+t)}function u(t,e){e&&k(this,"message",e);var n=k(this,"object");if(k(this,"doLength")){new P(n,e).to.have.property("length");var o=n.length;this.assert(o>=t,"expected #{this} to have a length at least #{exp} but got #{act}","expected #{this} to have a length below #{exp}",t,o)}else this.assert(n>=t,"expected #{this} to be at least "+t,"expected #{this} to be below "+t)}function h(t,e){e&&k(this,"message",e);var n=k(this,"object");if(k(this,"doLength")){new P(n,e).to.have.property("length");var o=n.length;this.assert(o<t,"expected #{this} to have a length below #{exp} but got #{act}","expected #{this} to not have a length below #{exp}",t,o)}else this.assert(n<t,"expected #{this} to be below "+t,"expected #{this} to be at least "+t)}function f(t,e){e&&k(this,"message",e);var n=k(this,"object");if(k(this,"doLength")){new P(n,e).to.have.property("length");var o=n.length;this.assert(o<=t,"expected #{this} to have a length at most #{exp} but got #{act}","expected #{this} to have a length above #{exp}",t,o)}else this.assert(n<=t,"expected #{this} to be at most "+t,"expected #{this} to be above "+t)}function p(t,n){n&&k(this,"message",n);var o=e.getName(t);this.assert(k(this,"object")instanceof t,"expected #{this} to be an instance of "+o,"expected #{this} to not be an instance of "+o)}function l(t,n){n&&k(this,"message",n);var o=k(this,"object");this.assert(o.hasOwnProperty(t),"expected #{this} to have own property "+e.inspect(t),"expected #{this} to not have own property "+e.inspect(t))}function d(t,n,o){"string"==typeof n&&(o=n,n=null),o&&k(this,"message",o);var r=k(this,"object"),i=Object.getOwnPropertyDescriptor(Object(r),t);i&&n?this.assert(e.eql(n,i),"expected the own property descriptor for "+e.inspect(t)+" on #{this} to match "+e.inspect(n)+", got "+e.inspect(i),"expected the own property descriptor for "+e.inspect(t)+" on #{this} to not match "+e.inspect(n),n,i,!0):this.assert(i,"expected #{this} to have an own property descriptor for "+e.inspect(t),"expected #{this} to not have an own property descriptor for "+e.inspect(t)),k(this,"object",i)}function b(){k(this,"doLength",!0)}function g(t,e){e&&k(this,"message",e);var n=k(this,"object");new P(n,e).to.have.property("length");var o=n.length;this.assert(o==t,"expected #{this} to have a length of #{exp} but got #{act}","expected #{this} to not have a length of #{act}",t,o)}function v(t,e){e&&k(this,"message",e);var n=k(this,"object");this.assert(t.exec(n),"expected #{this} to match "+t,"expected #{this} not to match "+t)}function x(t){var n,o=k(this,"object"),r=!0,i="keys must be given single argument of Array|Object|String, or multiple String arguments";switch(e.type(t)){case"array":if(arguments.length>1)throw new Error(i);break;case"object":if(arguments.length>1)throw new Error(i);t=Object.keys(t);break;default:t=Array.prototype.slice.call(arguments)}if(!t.length)throw new Error("keys required");var s=Object.keys(o),a=t,c=t.length,u=k(this,"any"),h=k(this,"all");if(u||h||(h=!0),u){r=a.filter(function(t){return~s.indexOf(t)}).length>0}if(h&&(r=t.every(function(t){return~s.indexOf(t)}),k(this,"negate")||k(this,"contains")||(r=r&&t.length==s.length)),c>1){t=t.map(function(t){return e.inspect(t)});var f=t.pop();h&&(n=t.join(", ")+", and "+f),u&&(n=t.join(", ")+", or "+f)}else n=e.inspect(t[0]);n=(c>1?"keys ":"key ")+n,n=(k(this,"contains")?"contain ":"have ")+n,this.assert(r,"expected #{this} to "+n,"expected #{this} to not "+n,a.slice(0).sort(),s.sort(),!0)}function y(t,n,o){o&&k(this,"message",o);var r=k(this,"object");new P(r,o).is.a("function");var i=!1,s=null,a=null,c=null;0===arguments.length?(n=null,t=null):t&&(t instanceof RegExp||"string"==typeof t)?(n=t,t=null):t&&t instanceof Error?(s=t,t=null,n=null):"function"==typeof t?(!(a=t.prototype.name)||"Error"===a&&t!==Error)&&(a=t.name||(new t).name):t=null;try{r()}catch(o){if(s)return this.assert(o===s,"expected #{this} to throw #{exp} but #{act} was thrown","expected #{this} to not throw #{exp}",s instanceof Error?s.toString():s,o instanceof Error?o.toString():o),k(this,"object",o),this;if(t&&(this.assert(o instanceof t,"expected #{this} to throw #{exp} but #{act} was thrown","expected #{this} to not throw #{exp} but #{act} was thrown",a,o instanceof Error?o.toString():o),!n))return k(this,"object",o),this;var u="error"===e.type(o)&&"message"in o?o.message:""+o;if(null!=u&&n&&n instanceof RegExp)return this.assert(n.exec(u),"expected #{this} to throw error matching #{exp} but got #{act}","expected #{this} to throw error not matching #{exp}",n,u),k(this,"object",o),this;if(null!=u&&n&&"string"==typeof n)return this.assert(~u.indexOf(n),"expected #{this} to throw error including #{exp} but got #{act}","expected #{this} to throw error not including #{act}",n,u),k(this,"object",o),this;i=!0,c=o}var h="",f=null!==a?a:s?"#{exp}":"an error";i&&(h=" but #{act} was thrown"),this.assert(!0===i,"expected #{this} to throw "+f+h,"expected #{this} to not throw "+f+h,s instanceof Error?s.toString():s,c instanceof Error?c.toString():c),k(this,"object",c)}function w(t,n){n&&k(this,"message",n);var o=k(this,"object"),r=k(this,"itself"),i="function"!==e.type(o)||r?o[t]:o.prototype[t];this.assert("function"==typeof i,"expected #{this} to respond to "+e.inspect(t),"expected #{this} to not respond to "+e.inspect(t))}function m(t,n){n&&k(this,"message",n);var o=k(this,"object"),r=t(o);this.assert(r,"expected #{this} to satisfy "+e.objDisplay(t),"expected #{this} to not satisfy"+e.objDisplay(t),!this.negate,r)}function j(t,n,o){o&&k(this,"message",o);var r=k(this,"object");if(new P(r,o).is.a("number"),"number"!==e.type(t)||"number"!==e.type(n))throw new Error("the arguments to closeTo or approximately must be numbers");this.assert(Math.abs(r-t)<=n,"expected #{this} to be close to "+t+" +/- "+n,"expected #{this} not to be close to "+t+" +/- "+n)}function O(t,e,n){return t.every(function(t){return n?e.some(function(e){return n(t,e)}):-1!==e.indexOf(t)})}function M(t,e){e&&k(this,"message",e);var n=k(this,"object");new P(t).to.be.an("array"),this.assert(t.indexOf(n)>-1,"expected #{this} to be one of #{exp}","expected #{this} to not be one of #{exp}",t,n)}function S(t,e,n){n&&k(this,"message",n);var o=k(this,"object");new P(t,n).to.have.property(e),new P(o).is.a("function");var r=t[e];o(),this.assert(r!==t[e],"expected ."+e+" to change","expected ."+e+" to not change")}function _(t,e,n){n&&k(this,"message",n);var o=k(this,"object");new P(t,n).to.have.property(e),new P(o).is.a("function");var r=t[e];o(),this.assert(t[e]-r>0,"expected ."+e+" to increase","expected ."+e+" to not increase")}function E(t,e,n){n&&k(this,"message",n);var o=k(this,"object");new P(t,n).to.have.property(e),new P(o).is.a("function");var r=t[e];o(),this.assert(t[e]-r<0,"expected ."+e+" to decrease","expected ."+e+" to not decrease")}var P=t.Assertion,k=(Object.prototype.toString,e.flag);["to","be","been","is","and","has","have","with","that","which","at","of","same"].forEach(function(t){P.addProperty(t,function(){return this})}),P.addProperty("not",function(){k(this,"negate",!0)}),P.addProperty("deep",function(){k(this,"deep",!0)}),P.addProperty("any",function(){k(this,"any",!0),k(this,"all",!1)}),P.addProperty("all",function(){k(this,"all",!0),k(this,"any",!1)}),P.addChainableMethod("an",n),P.addChainableMethod("a",n),P.addChainableMethod("include",r,o),P.addChainableMethod("contain",r,o),P.addChainableMethod("contains",r,o),P.addChainableMethod("includes",r,o),P.addProperty("ok",function(){this.assert(k(this,"object"),"expected #{this} to be truthy","expected #{this} to be falsy")}),P.addProperty("true",function(){this.assert(!0===k(this,"object"),"expected #{this} to be true","expected #{this} to be false",!this.negate)}),P.addProperty("false",function(){this.assert(!1===k(this,"object"),"expected #{this} to be false","expected #{this} to be true",!!this.negate)}),P.addProperty("null",function(){this.assert(null===k(this,"object"),"expected #{this} to be null","expected #{this} not to be null")}),P.addProperty("undefined",function(){this.assert(void 0===k(this,"object"),"expected #{this} to be undefined","expected #{this} not to be undefined")}),P.addProperty("NaN",function(){this.assert(isNaN(k(this,"object")),"expected #{this} to be NaN","expected #{this} not to be NaN")}),P.addProperty("exist",function(){this.assert(null!=k(this,"object"),"expected #{this} to exist","expected #{this} to not exist")}),P.addProperty("empty",function(){var t=k(this,"object"),e=t;Array.isArray(t)||"string"==typeof object?e=t.length:"object"==typeof t&&(e=Object.keys(t).length),this.assert(!e,"expected #{this} to be empty","expected #{this} not to be empty")}),P.addProperty("arguments",i),P.addProperty("Arguments",i),P.addMethod("equal",s),P.addMethod("equals",s),P.addMethod("eq",s),P.addMethod("eql",a),P.addMethod("eqls",a),P.addMethod("above",c),P.addMethod("gt",c),P.addMethod("greaterThan",c),P.addMethod("least",u),P.addMethod("gte",u),P.addMethod("below",h),P.addMethod("lt",h),P.addMethod("lessThan",h),P.addMethod("most",f),P.addMethod("lte",f),P.addMethod("within",function(t,e,n){n&&k(this,"message",n);var o=k(this,"object"),r=t+".."+e;if(k(this,"doLength")){new P(o,n).to.have.property("length");var i=o.length;this.assert(i>=t&&i<=e,"expected #{this} to have a length within "+r,"expected #{this} to not have a length within "+r)}else this.assert(o>=t&&o<=e,"expected #{this} to be within "+r,"expected #{this} to not be within "+r)}),P.addMethod("instanceof",p),P.addMethod("instanceOf",p),P.addMethod("property",function(t,n,o){o&&k(this,"message",o);var r=!!k(this,"deep"),i=r?"deep property ":"property ",s=k(this,"negate"),a=k(this,"object"),c=r?e.getPathInfo(t,a):null,u=r?c.exists:e.hasProperty(t,a),h=r?c.value:a[t];if(s&&arguments.length>1){if(void 0===h)throw o=null!=o?o+": ":"",new Error(o+e.inspect(a)+" has no "+i+e.inspect(t))}else this.assert(u,"expected #{this} to have a "+i+e.inspect(t),"expected #{this} to not have "+i+e.inspect(t));arguments.length>1&&this.assert(n===h,"expected #{this} to have a "+i+e.inspect(t)+" of #{exp}, but got #{act}","expected #{this} to not have a "+i+e.inspect(t)+" of #{act}",n,h),k(this,"object",h)}),P.addMethod("ownProperty",l),P.addMethod("haveOwnProperty",l),P.addMethod("ownPropertyDescriptor",d),P.addMethod("haveOwnPropertyDescriptor",d),P.addChainableMethod("length",g,b),P.addMethod("lengthOf",g),P.addMethod("match",v),P.addMethod("matches",v),P.addMethod("string",function(t,n){n&&k(this,"message",n);var o=k(this,"object");new P(o,n).is.a("string"),this.assert(~o.indexOf(t),"expected #{this} to contain "+e.inspect(t),"expected #{this} to not contain "+e.inspect(t))}),P.addMethod("keys",x),P.addMethod("key",x),P.addMethod("throw",y),P.addMethod("throws",y),P.addMethod("Throw",y),P.addMethod("respondTo",w),P.addMethod("respondsTo",w),P.addProperty("itself",function(){k(this,"itself",!0)}),P.addMethod("satisfy",m),P.addMethod("satisfies",m),P.addMethod("closeTo",j),P.addMethod("approximately",j),P.addMethod("members",function(t,n){n&&k(this,"message",n);var o=k(this,"object");new P(o).to.be.an("array"),new P(t).to.be.an("array");var r=k(this,"deep")?e.eql:void 0;if(k(this,"contains"))return this.assert(O(t,o,r),"expected #{this} to be a superset of #{act}","expected #{this} to not be a superset of #{act}",o,t);this.assert(O(o,t,r)&&O(t,o,r),"expected #{this} to have the same members as #{act}","expected #{this} to not have the same members as #{act}",o,t)}),P.addMethod("oneOf",M),P.addChainableMethod("change",S),P.addChainableMethod("changes",S),P.addChainableMethod("increase",_),P.addChainableMethod("increases",_),P.addChainableMethod("decrease",E),P.addChainableMethod("decreases",E),P.addProperty("extensible",function(){var t,e=k(this,"object");try{t=Object.isExtensible(e)}catch(e){if(!(e instanceof TypeError))throw e;t=!1}this.assert(t,"expected #{this} to be extensible","expected #{this} to not be extensible")}),P.addProperty("sealed",function(){var t,e=k(this,"object");try{t=Object.isSealed(e)}catch(e){if(!(e instanceof TypeError))throw e;t=!0}this.assert(t,"expected #{this} to be sealed","expected #{this} to not be sealed")}),P.addProperty("frozen",function(){var t,e=k(this,"object");try{t=Object.isFrozen(e)}catch(e){if(!(e instanceof TypeError))throw e;t=!0}this.assert(t,"expected #{this} to be frozen","expected #{this} to not be frozen")})}},function(t,e){/*!
 * chai
 * Copyright(c) 2011-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
t.exports=function(t,e){/*!
   * Chai dependencies.
   */
var n=t.Assertion,o=e.flag,r=t.assert=function(e,o){new n(null,null,t.assert).assert(e,o,"[ negation message unavailable ]")};r.fail=function(e,n,o,i){throw o=o||"assert.fail()",new t.AssertionError(o,{actual:e,expected:n,operator:i},r.fail)},r.isOk=function(t,e){new n(t,e).is.ok},r.isNotOk=function(t,e){new n(t,e).is.not.ok},r.equal=function(t,e,i){var s=new n(t,i,r.equal);s.assert(e==o(s,"object"),"expected #{this} to equal #{exp}","expected #{this} to not equal #{act}",e,t)},r.notEqual=function(t,e,i){var s=new n(t,i,r.notEqual);s.assert(e!=o(s,"object"),"expected #{this} to not equal #{exp}","expected #{this} to equal #{act}",e,t)},r.strictEqual=function(t,e,o){new n(t,o).to.equal(e)},r.notStrictEqual=function(t,e,o){new n(t,o).to.not.equal(e)},r.deepEqual=function(t,e,o){new n(t,o).to.eql(e)},r.notDeepEqual=function(t,e,o){new n(t,o).to.not.eql(e)},r.isAbove=function(t,e,o){new n(t,o).to.be.above(e)},r.isAtLeast=function(t,e,o){new n(t,o).to.be.least(e)},r.isBelow=function(t,e,o){new n(t,o).to.be.below(e)},r.isAtMost=function(t,e,o){new n(t,o).to.be.most(e)},r.isTrue=function(t,e){new n(t,e).is.true},r.isNotTrue=function(t,e){new n(t,e).to.not.equal(!0)},r.isFalse=function(t,e){new n(t,e).is.false},r.isNotFalse=function(t,e){new n(t,e).to.not.equal(!1)},r.isNull=function(t,e){new n(t,e).to.equal(null)},r.isNotNull=function(t,e){new n(t,e).to.not.equal(null)},r.isNaN=function(t,e){new n(t,e).to.be.NaN},r.isNotNaN=function(t,e){new n(t,e).not.to.be.NaN},r.isUndefined=function(t,e){new n(t,e).to.equal(void 0)},r.isDefined=function(t,e){new n(t,e).to.not.equal(void 0)},r.isFunction=function(t,e){new n(t,e).to.be.a("function")},r.isNotFunction=function(t,e){new n(t,e).to.not.be.a("function")},r.isObject=function(t,e){new n(t,e).to.be.a("object")},r.isNotObject=function(t,e){new n(t,e).to.not.be.a("object")},r.isArray=function(t,e){new n(t,e).to.be.an("array")},r.isNotArray=function(t,e){new n(t,e).to.not.be.an("array")},r.isString=function(t,e){new n(t,e).to.be.a("string")},r.isNotString=function(t,e){new n(t,e).to.not.be.a("string")},r.isNumber=function(t,e){new n(t,e).to.be.a("number")},r.isNotNumber=function(t,e){new n(t,e).to.not.be.a("number")},r.isBoolean=function(t,e){new n(t,e).to.be.a("boolean")},r.isNotBoolean=function(t,e){new n(t,e).to.not.be.a("boolean")},r.typeOf=function(t,e,o){new n(t,o).to.be.a(e)},r.notTypeOf=function(t,e,o){new n(t,o).to.not.be.a(e)},r.instanceOf=function(t,e,o){new n(t,o).to.be.instanceOf(e)},r.notInstanceOf=function(t,e,o){new n(t,o).to.not.be.instanceOf(e)},r.include=function(t,e,o){new n(t,o,r.include).include(e)},r.notInclude=function(t,e,o){new n(t,o,r.notInclude).not.include(e)},r.match=function(t,e,o){new n(t,o).to.match(e)},r.notMatch=function(t,e,o){new n(t,o).to.not.match(e)},r.property=function(t,e,o){new n(t,o).to.have.property(e)},r.notProperty=function(t,e,o){new n(t,o).to.not.have.property(e)},r.deepProperty=function(t,e,o){new n(t,o).to.have.deep.property(e)},r.notDeepProperty=function(t,e,o){new n(t,o).to.not.have.deep.property(e)},r.propertyVal=function(t,e,o,r){new n(t,r).to.have.property(e,o)},r.propertyNotVal=function(t,e,o,r){new n(t,r).to.not.have.property(e,o)},r.deepPropertyVal=function(t,e,o,r){new n(t,r).to.have.deep.property(e,o)},r.deepPropertyNotVal=function(t,e,o,r){new n(t,r).to.not.have.deep.property(e,o)},r.lengthOf=function(t,e,o){new n(t,o).to.have.length(e)},r.throws=function(t,e,r,i){("string"==typeof e||e instanceof RegExp)&&(r=e,e=null);var s=new n(t,i).to.throw(e,r);return o(s,"object")},r.doesNotThrow=function(t,e,o){"string"==typeof e&&(o=e,e=null),new n(t,o).to.not.Throw(e)},r.operator=function(t,r,i,s){var a;switch(r){case"==":a=t==i;break;case"===":a=t===i;break;case">":a=t>i;break;case">=":a=t>=i;break;case"<":a=t<i;break;case"<=":a=t<=i;break;case"!=":a=t!=i;break;case"!==":a=t!==i;break;default:throw new Error('Invalid operator "'+r+'"')}var c=new n(a,s);c.assert(!0===o(c,"object"),"expected "+e.inspect(t)+" to be "+r+" "+e.inspect(i),"expected "+e.inspect(t)+" to not be "+r+" "+e.inspect(i))},r.closeTo=function(t,e,o,r){new n(t,r).to.be.closeTo(e,o)},r.approximately=function(t,e,o,r){new n(t,r).to.be.approximately(e,o)},r.sameMembers=function(t,e,o){new n(t,o).to.have.same.members(e)},r.sameDeepMembers=function(t,e,o){new n(t,o).to.have.same.deep.members(e)},r.includeMembers=function(t,e,o){new n(t,o).to.include.members(e)},r.includeDeepMembers=function(t,e,o){new n(t,o).to.include.deep.members(e)},r.oneOf=function(t,e,o){new n(t,o).to.be.oneOf(e)},r.changes=function(t,e,o){new n(t).to.change(e,o)},r.doesNotChange=function(t,e,o){new n(t).to.not.change(e,o)},r.increases=function(t,e,o){new n(t).to.increase(e,o)},r.doesNotIncrease=function(t,e,o){new n(t).to.not.increase(e,o)},r.decreases=function(t,e,o){new n(t).to.decrease(e,o)},r.doesNotDecrease=function(t,e,o){new n(t).to.not.decrease(e,o)},/*!
   * ### .ifError(object)
   *
   * Asserts if value is not a false value, and throws if it is a true value.
   * This is added to allow for chai to be a drop-in replacement for Node's
   * assert class.
   *
   *     var err = new Error('I am a custom error');
   *     assert.ifError(err); // Rethrows err!
   *
   * @name ifError
   * @param {Object} object
   * @namespace Assert
   * @api public
   */
r.ifError=function(t){if(t)throw t},r.isExtensible=function(t,e){new n(t,e).to.be.extensible},r.isNotExtensible=function(t,e){new n(t,e).to.not.be.extensible},r.isSealed=function(t,e){new n(t,e).to.be.sealed},r.isNotSealed=function(t,e){new n(t,e).to.not.be.sealed},r.isFrozen=function(t,e){new n(t,e).to.be.frozen},r.isNotFrozen=function(t,e){new n(t,e).to.not.be.frozen},/*!
   * Aliases.
   */
function t(e,n){return r[n]=r[e],t}("isOk","ok")("isNotOk","notOk")("throws","throw")("throws","Throw")("isExtensible","extensible")("isNotExtensible","notExtensible")("isSealed","sealed")("isNotSealed","notSealed")("isFrozen","frozen")("isNotFrozen","notFrozen")}},function(t,e){/*!
 * chai
 * Copyright(c) 2011-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
t.exports=function(t,e){t.expect=function(e,n){return new t.Assertion(e,n)},t.expect.fail=function(e,n,o,r){throw o=o||"expect.fail()",new t.AssertionError(o,{actual:e,expected:n,operator:r},t.expect.fail)}}},function(t,e){/*!
 * chai
 * Copyright(c) 2011-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
t.exports=function(t,e){function n(){function e(){return this instanceof String||this instanceof Number||this instanceof Boolean?new o(this.valueOf(),null,e):new o(this,null,e)}function n(t){Object.defineProperty(this,"should",{value:t,enumerable:!0,configurable:!0,writable:!0})}Object.defineProperty(Object.prototype,"should",{set:n,get:e,configurable:!0});var r={};return r.fail=function(e,n,o,i){throw o=o||"should.fail()",new t.AssertionError(o,{actual:e,expected:n,operator:i},r.fail)},r.equal=function(t,e,n){new o(t,n).to.equal(e)},r.Throw=function(t,e,n,r){new o(t,r).to.Throw(e,n)},r.exist=function(t,e){new o(t,e).to.exist},r.not={},r.not.equal=function(t,e,n){new o(t,n).to.not.equal(e)},r.not.Throw=function(t,e,n,r){new o(t,r).to.not.Throw(e,n)},r.not.exist=function(t,e){new o(t,e).to.not.exist},r.throw=r.Throw,r.not.throw=r.not.Throw,r}var o=t.Assertion;t.should=n,t.Should=n}},function(t,e,n){/*!
 * Chai - addChainingMethod utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
/*!
 * Module dependencies
 */
var o=n(11),r=n(0),i=n(1),s="__proto__"in Object,a=/^(?:length|name|arguments|caller)$/,c=Function.prototype.call,u=Function.prototype.apply;t.exports=function(t,e,n,h){"function"!=typeof h&&(h=function(){});var f={method:n,chainingBehavior:h};t.__methods||(t.__methods={}),t.__methods[e]=f,Object.defineProperty(t,e,{get:function(){f.chainingBehavior.call(this);var e=function t(){r(this,"ssfi")&&!1===i.includeStack&&r(this,"ssfi",t);var e=f.method.apply(this,arguments);return void 0===e?this:e};if(s){var n=e.__proto__=Object.create(this);n.call=c,n.apply=u}else{Object.getOwnPropertyNames(t).forEach(function(n){if(!a.test(n)){var o=Object.getOwnPropertyDescriptor(t,n);Object.defineProperty(e,n,o)}})}return o(this,e),e},configurable:!0})}},function(t,e,n){/*!
 * Chai - addMethod utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
var o=n(1),r=n(0);t.exports=function(t,e,n){t[e]=function(){r(this,"ssfi")&&!1===o.includeStack&&r(this,"ssfi",t[e]);var i=n.apply(this,arguments);return void 0===i?this:i}}},function(t,e,n){/*!
 * Chai - addProperty utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
var o=n(1),r=n(0);t.exports=function(t,e,n){Object.defineProperty(t,e,{get:function t(){r(this,"ssfi")&&!1===o.includeStack&&r(this,"ssfi",t);var e=n.call(this);return void 0===e?this:e},configurable:!0})}},function(t,e,n){/*!
 * Chai - expectTypes utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
var o=n(5),r=n(0),i=n(3);t.exports=function(t,e){var t=r(t,"object");e=e.map(function(t){return t.toLowerCase()}),e.sort();var n=e.map(function(t,n){var o=~["a","e","i","o","u"].indexOf(t.charAt(0))?"an":"a";return(e.length>1&&n===e.length-1?"or ":"")+o+" "+t}).join(", ");if(!e.some(function(e){return i(t)===e}))throw new o("object tested must be "+n+", but "+i(t)+" given")}},function(t,e){/*!
 * Chai - getEnumerableProperties utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
t.exports=function(t){var e=[];for(var n in t)e.push(n);return e}},function(t,e,n){/*!
 * Chai - message composition utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
/*!
 * Module dependancies
 */
var o=n(0),r=n(6),i=(n(2),n(10));t.exports=function(t,e){var n=o(t,"negate"),s=o(t,"object"),a=e[3],c=r(t,e),u=n?e[2]:e[1],h=o(t,"message");return"function"==typeof u&&(u=u()),u=u||"",u=u.replace(/#\{this\}/g,function(){return i(s)}).replace(/#\{act\}/g,function(){return i(c)}).replace(/#\{exp\}/g,function(){return i(a)}),h?h+": "+u:u}},function(t,e,n){/*!
 * Chai - getPathValue utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * @see https://github.com/logicalparadox/filtr
 * MIT Licensed
 */
var o=n(8);t.exports=function(t,e){return o(t,e).value}},function(t,e){/*!
 * Chai - getProperties utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
t.exports=function(t){function e(t){-1===n.indexOf(t)&&n.push(t)}for(var n=Object.getOwnPropertyNames(t),o=Object.getPrototypeOf(t);null!==o;)Object.getOwnPropertyNames(o).forEach(e),o=Object.getPrototypeOf(o);return n}},function(t,e,n){/*!
 * chai
 * Copyright(c) 2011 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
/*!
 * Main exports
 */
var e=t.exports={};/*!
 * test utility
 */
e.test=n(36),/*!
 * type utility
 */
e.type=n(3),/*!
 * expectTypes utility
 */
e.expectTypes=n(27),/*!
 * message utility
 */
e.getMessage=n(29),/*!
 * actual utility
 */
e.getActual=n(6),/*!
 * Inspect util
 */
e.inspect=n(2),/*!
 * Object Display util
 */
e.objDisplay=n(10),/*!
 * Flag utility
 */
e.flag=n(0),/*!
 * Flag transferring utility
 */
e.transferFlags=n(11),/*!
 * Deep equal utility
 */
e.eql=n(37),/*!
 * Deep path value
 */
e.getPathValue=n(30),/*!
 * Deep path info
 */
e.getPathInfo=n(8),/*!
 * Check if a property exists
 */
e.hasProperty=n(9),/*!
 * Function name
 */
e.getName=n(7),/*!
 * add Property
 */
e.addProperty=n(26),/*!
 * add Method
 */
e.addMethod=n(25),/*!
 * overwrite Property
 */
e.overwriteProperty=n(35),/*!
 * overwrite Method
 */
e.overwriteMethod=n(34),/*!
 * Add a chainable method
 */
e.addChainableMethod=n(24),/*!
 * Overwrite chainable method
 */
e.overwriteChainableMethod=n(33)},function(t,e){/*!
 * Chai - overwriteChainableMethod utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
t.exports=function(t,e,n,o){var r=t.__methods[e],i=r.chainingBehavior;r.chainingBehavior=function(){var t=o(i).call(this);return void 0===t?this:t};var s=r.method;r.method=function(){var t=n(s).apply(this,arguments);return void 0===t?this:t}}},function(t,e){/*!
 * Chai - overwriteMethod utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
t.exports=function(t,e,n){var o=t[e],r=function(){return this};o&&"function"==typeof o&&(r=o),t[e]=function(){var t=n(r).apply(this,arguments);return void 0===t?this:t}}},function(t,e){/*!
 * Chai - overwriteProperty utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
t.exports=function(t,e,n){var o=Object.getOwnPropertyDescriptor(t,e),r=function(){};o&&"function"==typeof o.get&&(r=o.get),Object.defineProperty(t,e,{get:function(){var t=n(r).call(this);return void 0===t?this:t},configurable:!0})}},function(t,e,n){/*!
 * Chai - test utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
/*!
 * Module dependancies
 */
var o=n(0);t.exports=function(t,e){var n=o(t,"negate"),r=e[0];return n?!r:r}},function(t,e,n){t.exports=n(38)},function(t,e,n){function o(t,e,n){return!!r(t,e)||("date"===b(t)?s(t,e):"regexp"===b(t)?a(t,e):d.isBuffer(t)?f(t,e):"arguments"===b(t)?c(t,e,n):!!i(t,e)&&("object"!==b(t)&&"object"!==b(e)&&"array"!==b(t)&&"array"!==b(e)?r(t,e):l(t,e,n)))}/*!
 * Strict (egal) equality test. Ensures that NaN always
 * equals NaN and `-0` does not equal `+0`.
 *
 * @param {Mixed} a
 * @param {Mixed} b
 * @return {Boolean} equal match
 */
function r(t,e){return t===e?0!==t||1/t==1/e:t!==t&&e!==e}/*!
 * Compare the types of two given objects and
 * return if they are equal. Note that an Array
 * has a type of `array` (not `object`) and arguments
 * have a type of `arguments` (not `array`/`object`).
 *
 * @param {Mixed} a
 * @param {Mixed} b
 * @return {Boolean} result
 */
function i(t,e){return b(t)===b(e)}/*!
 * Compare two Date objects by asserting that
 * the time values are equal using `saveValue`.
 *
 * @param {Date} a
 * @param {Date} b
 * @return {Boolean} result
 */
function s(t,e){return"date"===b(e)&&r(t.getTime(),e.getTime())}/*!
 * Compare two regular expressions by converting them
 * to string and checking for `sameValue`.
 *
 * @param {RegExp} a
 * @param {RegExp} b
 * @return {Boolean} result
 */
function a(t,e){return"regexp"===b(e)&&r(t.toString(),e.toString())}/*!
 * Assert deep equality of two `arguments` objects.
 * Unfortunately, these must be sliced to arrays
 * prior to test to ensure no bad behavior.
 *
 * @param {Arguments} a
 * @param {Arguments} b
 * @param {Array} memoize (optional)
 * @return {Boolean} result
 */
function c(t,e,n){return"arguments"===b(e)&&(t=[].slice.call(t),e=[].slice.call(e),o(t,e,n))}/*!
 * Get enumerable properties of a given object.
 *
 * @param {Object} a
 * @return {Array} property names
 */
function u(t){var e=[];for(var n in t)e.push(n);return e}/*!
 * Simple equality for flat iterable objects
 * such as Arrays or Node.js buffers.
 *
 * @param {Iterable} a
 * @param {Iterable} b
 * @return {Boolean} result
 */
function h(t,e){if(t.length!==e.length)return!1;for(var n=0,o=!0;n<t.length;n++)if(t[n]!==e[n]){o=!1;break}return o}/*!
 * Extension to `iterableEqual` specifically
 * for Node.js Buffers.
 *
 * @param {Buffer} a
 * @param {Mixed} b
 * @return {Boolean} result
 */
function f(t,e){return!!d.isBuffer(e)&&h(t,e)}/*!
 * Block for `objectEqual` ensuring non-existing
 * values don't get in.
 *
 * @param {Mixed} object
 * @return {Boolean} result
 */
function p(t){return null!==t&&void 0!==t}/*!
 * Recursively check the equality of two objects.
 * Once basic sameness has been established it will
 * defer to `deepEqual` for each enumerable key
 * in the object.
 *
 * @param {Mixed} a
 * @param {Mixed} b
 * @return {Boolean} result
 */
function l(t,e,n){if(!p(t)||!p(e))return!1;if(t.prototype!==e.prototype)return!1;var r;if(n){for(r=0;r<n.length;r++)if(n[r][0]===t&&n[r][1]===e||n[r][0]===e&&n[r][1]===t)return!0}else n=[];try{var i=u(t),s=u(e)}catch(t){return!1}if(i.sort(),s.sort(),!h(i,s))return!1;n.push([t,e]);var a;for(r=i.length-1;r>=0;r--)if(a=i[r],!o(t[a],e[a],n))return!1;return!0}/*!
 * deep-eql
 * Copyright(c) 2013 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
/*!
 * Module dependencies
 */
var d,b=n(39);try{d=n(42).Buffer}catch(t){d={},d.isBuffer=function(){return!1}}/*!
 * Primary Export
 */
t.exports=o},function(t,e,n){t.exports=n(40)},function(t,e){function n(t){var e=Object.prototype.toString.call(t);return r[e]?r[e]:null===t?"null":void 0===t?"undefined":t===Object(t)?"object":typeof t}function o(){this.tests={}}/*!
 * type-detect
 * Copyright(c) 2013 jake luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
/*!
 * Primary Exports
 */
var e=t.exports=n,r={"[object Array]":"array","[object RegExp]":"regexp","[object Function]":"function","[object Arguments]":"arguments","[object Date]":"date"};e.Library=o,o.prototype.of=n,o.prototype.define=function(t,e){return 1===arguments.length?this.tests[t]:(this.tests[t]=e,this)},o.prototype.test=function(t,e){if(e===n(t))return!0;var o=this.tests[e];if(o&&"regexp"===n(o))return o.test(t);if(o&&"function"===n(o))return o(t);throw new ReferenceError('Type test "'+e+'" not defined or invalid.')}},function(t,e){function n(t){var e=Object.prototype.toString.call(t).match(r)[1].toLowerCase();return"function"==typeof Promise&&t instanceof Promise?"promise":null===t?"null":void 0===t?"undefined":e}function o(){if(!(this instanceof o))return new o;this.tests={}}/*!
 * type-detect
 * Copyright(c) 2013 jake luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
/*!
 * Primary Exports
 */
var r=/^\[object (.*)\]$/;(t.exports=n).Library=o,o.prototype.of=n,o.prototype.define=function(t,e){return 1===arguments.length?this.tests[t]:(this.tests[t]=e,this)},o.prototype.test=function(t,e){if(e===n(t))return!0;var o=this.tests[e];if(o&&"regexp"===n(o))return o.test(t);if(o&&"function"===n(o))return o(t);throw new ReferenceError('Type test "'+e+'" not defined or invalid.')}},function(t,e){t.exports=require("buffer")}]);