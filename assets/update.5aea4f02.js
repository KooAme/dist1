import{u as c}from"./useInput.f8aa70dd.js";import{R as l}from"./index.8a8c69da.js";import{u as k,F as v,a as A,C as b}from"./useCheckBox.b6728146.js";import{u as D}from"./useQueryOption.8bba6344.js";import{a as F}from"./reservation.79c92599.js";import{k as j,l as _,j as o,g as t,G as s,B as C,h as m}from"./index.4f6cb32c.js";import{u as g}from"./useMutation.esm.e03828ae.js";import{F as p}from"./FormControl.1a91d2a8.js";import{O as d}from"./OutlinedInput.2be38b6e.js";import"./request.707945aa.js";import"./utils.esm.9c9e0e5a.js";import"./GlobalStyles.78d748c9.js";function M(){const e=j(),u=c(e.state.title),r=c(e.state.content),a=k(e.state.vst_check),{option:h,token:i}=D(),n=_(),{mutate:f}=g(["createAs"],F,{...h,onSuccess:()=>{n(-1)}}),x={as_id:e.state.as_id,title:u.value,content:r.value,vst_check:a.checked,token:i},B=()=>{n("/reservation/as/lookup")};return o(l,{children:[t(l.Title,{title:"A/S \uC2E0\uCCAD  "}),t(s,{xs:12,item:!0,sx:{p:2},children:t(p,{fullWidth:!0,children:t(d,{placeholder:"\uC81C\uBAA9\uC744 \uC785\uB825\uD558\uC138\uC694...",...u})})}),t(s,{xs:12,item:!0,sx:{p:2},children:t(p,{fullWidth:!0,children:t(d,{multiline:!0,rows:15,placeholder:"\uB0B4\uC6A9\uC744 \uC785\uB825\uD558\uC138\uC694...",...r})})}),o(s,{xs:12,item:!0,sx:{p:2},children:[t(C,{children:t(v,{children:t(A,{label:"\uBD80\uC7AC\uC911 \uBC29\uBB38 \uB3D9\uC758",control:t(b,{...a})})})}),o(C,{display:"flex",justifyContent:"end",children:[t(m,{onClick:B,variant:"contained",color:"disable",children:"\uCDE8\uC18C"}),t(m,{onClick:()=>{i&&f(x)},variant:"contained",sx:{ml:2},children:"\uC81C\uCD9C"})]})]})]})}export{M as default};