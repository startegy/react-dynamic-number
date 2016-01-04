!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t(require("react"));else if("function"==typeof define&&define.amd)define(["react"],t);else{var r=t("object"==typeof exports?require("react"):e.React);for(var n in r)("object"==typeof exports?exports:e)[n]=r[n]}}(this,function(e){return function(e){function t(n){if(r[n])return r[n].exports;var a=r[n]={exports:{},id:n,loaded:!1};return e[n].call(a.exports,a,a.exports,t),a.loaded=!0,a.exports}var r={};return t.m=e,t.c=r,t.p="",t(0)}([function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var u=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}();Object.defineProperty(t,"__esModule",{value:!0});var s=r(1),l=n(s),c=r(2),p=n(c),h=function(e){function t(e){a(this,t);var r=i(this,Object.getPrototypeOf(t).call(this,e));return r.dynamicNumber=new p["default"],r.dynamicNumber.separator=r.props.separator,r.dynamicNumber.integer=r.props.integer,r.state={modelValue:0,viewValue:"0"},r.onChange=r.onChange.bind(r),r}return o(t,e),u(t,[{key:"onChange",value:function(e){this.dynamicNumber.calculate(e.target.value,this.state.modelValue,this.state.viewValue);var t=this.dynamicNumber.modelValue,r=this.dynamicNumber.viewValue;this.props.onChange&&this.props.onChange(e,t,r),this.props.onModelChange&&this.props.onModelChange(t),this.props.onViewChange&&this.props.onViewChange(r),this.setState({modelValue:t,viewValue:r})}},{key:"render",value:function(){return l["default"].createElement("input",{type:"text",className:this.props.className,value:this.state.viewValue,onChange:this.onChange})}}]),t}(l["default"].Component);h.propTypes={value:l["default"].PropTypes.number,integer:l["default"].PropTypes.number,separator:function(e,t){return","!==e[t]&&"."!==e[t]?new Error("separator have to be comma or dot char"):void 0}},t["default"]=h},function(t,r){t.exports=e},function(e,t){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var n=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}();Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(){r(this,e),this._separator=".",this._integer=10,this._fraction=10,this._regexp=this._buildRegexp()}return n(e,[{key:"calculate",value:function(){var e=arguments.length<=0||void 0===arguments[0]?0:arguments[0],t=arguments.length<=1||void 0===arguments[1]?0:arguments[1],r=arguments.length<=2||void 0===arguments[2]?0:arguments[2];this._rawViewValue=e,this._oldModelValue=t,this._oldViewValue=r,this._newModelValue=0,this._newViewValue="";var n=String(this._rawViewValue);return n=this._removeLeadingZero(n),""===n&&"0"===String(this._rawViewValue).charAt(0)?(this._newModelValue=0,this._newViewValue="0",0):void 0===n||""===n?(this._newModelValue=0,void(this._newViewValue="")):"-"===n?(this._newModelValue=0,void(this._newViewValue="-")):this._regexp.test(n)===!1?(this._newModelValue=this._oldModelValue,void(this._newViewValue=this._oldViewValue)):(this._newModelValue=this._createModelValue(n),void(this._newViewValue=n))}},{key:"_buildRegexp",value:function(){var e="-?",t="[0-9]{0,"+this._integer+"}";0===this._integer&&(t="0");var r="(\\"+this._separator+"([0-9]){0,"+this._fraction+"})";return 0===this._fraction&&(r=""),new RegExp("^"+e+t+r+"?$")}},{key:"_removeLeadingZero",value:function(e){return e.replace(/^0+/g,"").replace(/^-0(\d+)/g,"-$1").replace(/^-([\.,])/,"-0$1").replace(/^[\.,]/g,"0$&")}},{key:"_createModelValue",value:function(e){return","===this._separator?e.replace(/\./g,"").replace(",","."):e.replace(/,/g,"")}},{key:"separator",set:function(e){this._separator="."===e||","===e?e:this._separator,this._regexp=this._buildRegexp()}},{key:"integer",set:function(e){if(e>=0){var t=parseInt(e,10);isNaN(t)===!1&&isFinite(t)&&t>=0&&(this._integer=t)}this._regexp=this._buildRegexp()}},{key:"modelValue",get:function(){return this._newModelValue}},{key:"viewValue",get:function(){return this._newViewValue}}]),e}();t["default"]=a}])});