import{i as v}from"./useModalContext.42a8ccd4.js";import{a as s,b as I,i as w,e as h}from"./index.cde5efb9.js";const x=async i=>{try{return await v(i,{maxSizeMb:1,maxWidthOrHeight:300})}catch(r){console.log(r)}};function V(i){const r=s.exports.useRef(0),[m,c]=s.exports.useState([]),[p,u]=s.exports.useState([]),g=a=>{const e=new FileReader;return e.readAsDataURL(a),new Promise(t=>{e.onload=()=>{u(n=>[...n,e.result]),t(void 0)}})};return{value:m,previewImgArr:p,removeImageItem:a=>{c(e=>{let t=e;return t.splice(a,1),[...t]}),u(e=>{let t=e;return t.splice(a,1),[...t]})},onChange:async a=>{const e=a.target.files;if(e&&e[0]){const t=e[0],n=await x(t),l=t.name.split("."),d=new File([n],l[0]+r.current+++"."+l[1],{type:"image/png"});c(f=>[...f,d]),await g(n)}}}}var o={},_=w.exports;Object.defineProperty(o,"__esModule",{value:!0});var y=o.default=void 0,R=_(I()),A=h,S=(0,R.default)((0,A.jsx)("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-4.86 8.86-3 3.87L9 13.14 6 17h12l-3.86-5.14z"}),"ImageOutlined");y=o.default=S;export{y as d,V as u};