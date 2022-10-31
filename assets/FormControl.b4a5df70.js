import{U as k,R as q,V as D,O as d,Z as M,a as o,W as I,_ as w,am as c,g as E,X as O,$ as V}from"./index.ef2b8ab2.js";import{i as X,a as Z,F as G}from"./OutlinedInput.7a476f46.js";function H(e){return k("MuiFormControl",e)}q("MuiFormControl",["root","marginNone","marginNormal","marginDense","fullWidth","disabled"]);const J=["children","className","color","component","disabled","error","focused","fullWidth","hiddenLabel","margin","required","size","variant"],K=e=>{const{classes:t,margin:l,fullWidth:n}=e,r={root:["root",l!=="none"&&`margin${M(l)}`,n&&"fullWidth"]};return V(r,H,t)},Q=D("div",{name:"MuiFormControl",slot:"Root",overridesResolver:({ownerState:e},t)=>d({},t.root,t[`margin${M(e.margin)}`],e.fullWidth&&t.fullWidth)})(({ownerState:e})=>d({display:"inline-flex",flexDirection:"column",position:"relative",minWidth:0,padding:0,margin:0,border:0,verticalAlign:"top"},e.margin==="normal"&&{marginTop:16,marginBottom:8},e.margin==="dense"&&{marginTop:8,marginBottom:4},e.fullWidth&&{width:"100%"})),Y=o.exports.forwardRef(function(t,l){const n=I({props:t,name:"MuiFormControl"}),{children:r,className:N,color:m="primary",component:f="div",disabled:a=!1,error:p=!1,focused:g,fullWidth:C=!1,hiddenLabel:h=!1,margin:R="none",required:F=!1,size:x="medium",variant:v="outlined"}=n,U=w(n,J),W=d({},n,{color:m,component:f,disabled:a,error:p,fullWidth:C,hiddenLabel:h,margin:R,required:F,size:x,variant:v}),A=K(W),[_,$]=o.exports.useState(()=>{let i=!1;return r&&o.exports.Children.forEach(r,s=>{if(!c(s,["Input","Select"]))return;const y=c(s,["Select"])?s.props.input:s;y&&X(y.props)&&(i=!0)}),i}),[z,S]=o.exports.useState(()=>{let i=!1;return r&&o.exports.Children.forEach(r,s=>{!c(s,["Input","Select"])||Z(s.props,!0)&&(i=!0)}),i}),[b,u]=o.exports.useState(!1);a&&b&&u(!1);const B=g!==void 0&&!a?g:b;let L;const P=o.exports.useCallback(()=>{S(!0)},[]),T=o.exports.useCallback(()=>{S(!1)},[]),j={adornedStart:_,setAdornedStart:$,color:m,disabled:a,error:p,filled:z,focused:B,fullWidth:C,hiddenLabel:h,size:x,onBlur:()=>{u(!1)},onEmpty:T,onFilled:P,onFocus:()=>{u(!0)},registerEffect:L,required:F,variant:v};return E(G.Provider,{value:j,children:E(Q,d({as:f,ownerState:W,className:O(A.root,N),ref:l},U,{children:r}))})}),te=Y;export{te as F};