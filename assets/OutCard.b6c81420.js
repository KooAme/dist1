import{l as c,bf as f,j as a,B as r,g as t,T as o,I as u,o as p}from"./index.cde5efb9.js";import{d as h,D as x}from"./DeleteOutlineOutlined.52df37c2.js";import{d as i}from"./dayjs.min.5f4d6963.js";import{u as y}from"./useModal.3835343a.js";import{u as g}from"./useQueryOption.bc5d16d3.js";import{h as D}from"./reservation.9b9aede8.js";import{u as M}from"./useMutation.esm.5991efdc.js";import{C as Y,a as B}from"./CardContent.bd290c07.js";function w(e){const s=y(),d=c(),{option:l,token:n}=g(),{mutate:m}=M(["deleteAs"],D,{...l,onSuccess(){f()}}),C=()=>{d("/reservation/outing/update",{state:e})};return a(Y,{sx:{width:"90%",mx:"30px",my:"10px"},children:[a(B,{children:[a(r,{sx:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[t(o,{gutterBottom:!0,variant:"subtitle1",sx:{fontWeight:700},children:"\uC678\uCD9C \uC678\uBC15"}),a(r,{display:"flex",alignItems:"center",justifyContent:"center",children:[t(u,{onClick:s.onOpen,children:t(h,{})}),t(u,{onClick:C,children:t(p,{})})]})]}),t(o,{children:"\uCD9C\uBC1C \uC77C :"+i(e.start_date).format("YYYY-MM-DD")}),t(o,{children:"\uB3C4\uCC29 \uC608\uC815\uC77C :"+i(e.end_date).format("YYYY-MM-DD")})]}),t(x,{...s,submit:()=>n&&m({stayout_id:e.stayout_id,token:n})})]})}export{w as O};