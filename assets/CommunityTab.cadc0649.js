import{e as s}from"./board.f632b663.js";import n from"./BoardCard.65df15c2.js";import{l as i,j as o,F as m,g as t,as as p,T as u}from"./index.cde5efb9.js";import{a as c}from"./useQuery.esm.c30cf766.js";import"./request.527db9f2.js";import"./dayjs.min.5f4d6963.js";import"./LocalFireDepartmentOutlined.6a08316a.js";import"./utils.esm.58b1171b.js";function y(){const e=i(),{data:r}=c(["getHotInfo","1","2"],s,{refetchOnWindowFocus:!1,refetchOnMount:!1});return o(m,{children:[r==null?void 0:r.data.map(a=>t(n,{...a})),t(p,{p:1,textAlign:"center",borderTop:1,borderColor:"gainsboro",children:o(u,{color:"primary",sx:{cursor:"pointer"},onClick:()=>{e("/board/hot")},children:["\uB354 \uBCF4\uB7EC\uAC00\uAE30 ","->"]})})]})}export{y as default};
