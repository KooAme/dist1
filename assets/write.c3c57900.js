import{u as a}from"./useInput.7f2aff69.js";import{R as l}from"./index.02743629.js";import{u as x,F as C,a as v,C as k}from"./useCheckBox.3d08fa3e.js";import{u as b}from"./useQueryOption.0859a797.js";import{b as A}from"./reservation.8fbfdc0e.js";import{l as E,j as t,g as u,G as e,B as c,h as m}from"./index.4b9d08d7.js";import{u as j}from"./useMutation.esm.3bc68b78.js";import{F as p}from"./FormControl.2871b7f9.js";import{O as d}from"./OutlinedInput.36d8867f.js";import"./request.3f29df96.js";import"./utils.esm.576e56a8.js";import"./GlobalStyles.48d223b5.js";function N(){const o=a(""),r=a(""),s=x(!1),{option:h,token:i}=b(),n=E(),{mutate:f}=j(["createAs"],A,{...h,onSuccess:()=>{n(-1)}}),B={title:o.value,content:r.value,vst_check:s.checked,token:i},F=()=>{n("/reservation/as/lookup")};return t(l,{children:[u(l.Title,{title:"\u4FEE\u7406\u306E\u7533\u3057\u8FBC\u307F "}),u(e,{xs:12,item:!0,sx:{p:2},children:u(p,{fullWidth:!0,children:u(d,{placeholder:"\u30BF\u30A4\u30C8\u30EB\u3092\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044...",...o})})}),u(e,{xs:12,item:!0,sx:{p:2},children:u(p,{fullWidth:!0,children:u(d,{multiline:!0,rows:15,placeholder:"\u5185\u5BB9\u3092\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044...",...r})})}),t(e,{xs:12,item:!0,sx:{p:2},children:[u(c,{children:u(C,{children:u(v,{label:"\u7559\u5B88\u756A\u306E\u8A2A\u554F\u540C\u610F",control:u(k,{...s})})})}),t(c,{display:"flex",justifyContent:"end",children:[u(m,{onClick:F,variant:"contained",color:"disable",children:"\u30AD\u30E3\u30F3\u30BB\u30EB"}),u(m,{onClick:()=>{i&&f(B)},variant:"contained",sx:{ml:2},children:"\u63D0\u51FA"})]})]})]})}export{N as default};