import{a2 as i}from"./index.4b9d08d7.js";var r={exports:{}},y="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",l=y,u=l;function p(){}function s(){}s.resetWarningCache=p;var m=function(){function e(h,T,S,b,O,c){if(c!==u){var n=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw n.name="Invariant Violation",n}}e.isRequired=e;function t(){return e}var o={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:s,resetWarningCache:p};return o.PropTypes=o,o};r.exports=m();function f(e){return e==null||Object.keys(e).length===0}const a=i(e=>{const{styles:t,defaultTheme:o={}}=e;return typeof t=="function"?t(f(e.theme)?o:e.theme):t}),g=a;a.propTypes={defaultTheme:r.exports.object,styles:r.exports.oneOfType([r.exports.string,r.exports.object,r.exports.func])};export{g as S,r as p};