import{a as s,l as j,j as l,g as e,G as i,I as p,B as k,h as d}from"./index.78223688.js";import{a as b}from"./request.3b3d933e.js";import{u as D}from"./useQueryOption.e50dc1ea.js";import{u as R,d as w}from"./ImageOutlined.c5e7e9f3.js";import{u as C}from"./useInput.abb41087.js";import"./useModalContext.7736d1f3.js";import{g as E}from"./board.00c7585c.js";import{R as f}from"./index.89771c27.js";import{u as O}from"./useMutation.esm.c6276784.js";import{F as h}from"./FormControl.13e9958e.js";import{O as g}from"./OutlinedInput.3923174a.js";import"./utils.esm.ac796d1f.js";import"./GlobalStyles.bcd1f971.js";function J(){const n=C(""),u=C(""),o=R(),a=s.exports.useRef(null),c=j(),[x,v]=s.exports.useState(""),{option:B,token:m}=D();s.exports.useEffect(()=>{b.get("https://api.ipify.org?format=json").then(t=>{const r=t.data.ip.split("."),A=[r[2],r[3]];v(A.join("."))}).catch(t=>{})},[]);const{mutate:I}=O(["createBulletin"],E,{...B,onSuccess:()=>{c("/board/annonymous")}}),y=()=>{c(-1)};return l(f,{children:[e(f.Title,{title:"\uAC8C\uC2DC\uAE00 \uC791\uC131"}),l(i,{xs:12,item:!0,px:2,textAlign:"end",children:[e(p,{onClick:()=>{var t;a&&((t=a.current)==null||t.click())},color:"primary",sx:{border:1,borderRadius:1},children:e(w,{})}),e("input",{style:{display:"none"},ref:a,type:"file",accept:"image/*",onChange:o.onChange,multiple:!1}),o.previewImgArr.map((t,r)=>t&&e(p,{onClick:()=>o.removeImageItem(r),children:e("img",{src:t,width:40})},"image"+r))]}),e(i,{xs:12,item:!0,p:2,children:e(h,{fullWidth:!0,children:e(g,{placeholder:"\uC81C\uBAA9\uC744 \uC785\uB825\uD558\uC138\uC694...",...n})})}),e(i,{xs:12,item:!0,p:2,children:e(h,{fullWidth:!0,children:e(g,{multiline:!0,rows:15,placeholder:"\uB0B4\uC6A9\uC744 \uC785\uB825\uD558\uC138\uC694...",...u})})}),e(i,{xs:12,item:!0,p:2,children:l(k,{display:"flex",justifyContent:"end",children:[e(d,{onClick:y,variant:"contained",color:"disable",children:"\uCDE8\uC18C"}),e(d,{variant:"contained",sx:{ml:2},onClick:()=>n.value&&u.value&&m&&I({title:n.value,content:u.value,images:o.value,ip:x,token:m}),children:"\uC81C\uCD9C"})]})})]})}export{J as default};