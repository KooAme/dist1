import{R as x,U as k,V as f,O as l,a as v,W as h,_ as C,j as b,X as g,Z as q,$ as L,a1 as I,g as $}from"./index.e9cc1e82.js";import{u as z,f as F}from"./OutlinedInput.090a7b27.js";function R(s){return k("MuiFormLabel",s)}const y=x("MuiFormLabel",["root","colorSecondary","focused","disabled","error","filled","required","asterisk"]),u=y,M=["children","className","color","component","disabled","error","filled","focused","required"],W=s=>{const{classes:r,color:e,focused:o,disabled:c,error:i,filled:d,required:t}=s,n={root:["root",`color${q(e)}`,c&&"disabled",i&&"error",d&&"filled",o&&"focused",t&&"required"],asterisk:["asterisk",i&&"error"]};return L(n,R,r)},A=f("label",{name:"MuiFormLabel",slot:"Root",overridesResolver:({ownerState:s},r)=>l({},r.root,s.color==="secondary"&&r.colorSecondary,s.filled&&r.filled)})(({theme:s,ownerState:r})=>l({color:(s.vars||s).palette.text.secondary},s.typography.body1,{lineHeight:"1.4375em",padding:0,position:"relative",[`&.${u.focused}`]:{color:(s.vars||s).palette[r.color].main},[`&.${u.disabled}`]:{color:(s.vars||s).palette.text.disabled},[`&.${u.error}`]:{color:(s.vars||s).palette.error.main}})),U=f("span",{name:"MuiFormLabel",slot:"Asterisk",overridesResolver:(s,r)=>r.asterisk})(({theme:s})=>({[`&.${u.error}`]:{color:(s.vars||s).palette.error.main}})),S=v.exports.forwardRef(function(r,e){const o=h({props:r,name:"MuiFormLabel"}),{children:c,className:i,component:d="label"}=o,t=C(o,M),n=z(),a=F({props:o,muiFormControl:n,states:["color","required","focused","disabled","error","filled"]}),p=l({},o,{color:a.color||"primary",component:d,disabled:a.disabled,error:a.error,filled:a.filled,focused:a.focused,required:a.required}),m=W(p);return b(A,l({as:d,ownerState:p,className:g(m.root,i),ref:e},t,{children:[c,a.required&&b(U,{ownerState:p,"aria-hidden":!0,className:m.asterisk,children:["\u2009","*"]})]}))}),O=S;function P(s){return k("MuiInputLabel",s)}x("MuiInputLabel",["root","focused","disabled","error","required","asterisk","formControl","sizeSmall","shrink","animated","standard","filled","outlined"]);const _=["disableAnimation","margin","shrink","variant"],j=s=>{const{classes:r,formControl:e,size:o,shrink:c,disableAnimation:i,variant:d,required:t}=s,a=L({root:["root",e&&"formControl",!i&&"animated",c&&"shrink",o==="small"&&"sizeSmall",d],asterisk:[t&&"asterisk"]},P,r);return l({},r,a)},w=f(O,{shouldForwardProp:s=>I(s)||s==="classes",name:"MuiInputLabel",slot:"Root",overridesResolver:(s,r)=>{const{ownerState:e}=s;return[{[`& .${u.asterisk}`]:r.asterisk},r.root,e.formControl&&r.formControl,e.size==="small"&&r.sizeSmall,e.shrink&&r.shrink,!e.disableAnimation&&r.animated,r[e.variant]]}})(({theme:s,ownerState:r})=>l({display:"block",transformOrigin:"top left",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",maxWidth:"100%"},r.formControl&&{position:"absolute",left:0,top:0,transform:"translate(0, 20px) scale(1)"},r.size==="small"&&{transform:"translate(0, 17px) scale(1)"},r.shrink&&{transform:"translate(0, -1.5px) scale(0.75)",transformOrigin:"top left",maxWidth:"133%"},!r.disableAnimation&&{transition:s.transitions.create(["color","transform","max-width"],{duration:s.transitions.duration.shorter,easing:s.transitions.easing.easeOut})},r.variant==="filled"&&l({zIndex:1,pointerEvents:"none",transform:"translate(12px, 16px) scale(1)",maxWidth:"calc(100% - 24px)"},r.size==="small"&&{transform:"translate(12px, 13px) scale(1)"},r.shrink&&l({userSelect:"none",pointerEvents:"auto",transform:"translate(12px, 7px) scale(0.75)",maxWidth:"calc(133% - 24px)"},r.size==="small"&&{transform:"translate(12px, 4px) scale(0.75)"})),r.variant==="outlined"&&l({zIndex:1,pointerEvents:"none",transform:"translate(14px, 16px) scale(1)",maxWidth:"calc(100% - 24px)"},r.size==="small"&&{transform:"translate(14px, 9px) scale(1)"},r.shrink&&{userSelect:"none",pointerEvents:"auto",maxWidth:"calc(133% - 24px)",transform:"translate(14px, -9px) scale(0.75)"}))),E=v.exports.forwardRef(function(r,e){const o=h({name:"MuiInputLabel",props:r}),{disableAnimation:c=!1,shrink:i}=o,d=C(o,_),t=z();let n=i;typeof n>"u"&&t&&(n=t.filled||t.focused||t.adornedStart);const a=F({props:o,muiFormControl:t,states:["size","variant","required"]}),p=l({},o,{disableAnimation:c,formControl:t,shrink:n,size:a.size,variant:a.variant,required:a.required}),m=j(p);return $(w,l({"data-shrink":n,ownerState:p,ref:e},d,{classes:m}))}),T=E;export{T as I};
