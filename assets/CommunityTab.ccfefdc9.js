import{e as s}from"./board.524c7712.js";import n from"./BoardCard.ae5f41a3.js";import{l as i,j as o,F as m,g as t,as as p,T as u}from"./index.4b9d08d7.js";import{a as c}from"./useQuery.esm.d109e3f2.js";import"./request.3f29df96.js";import"./dayjs.min.159666b8.js";import"./LocalFireDepartmentOutlined.99b6ae93.js";import"./utils.esm.576e56a8.js";function B(){const e=i(),{data:r}=c(["getHotInfo","1","2"],s,{refetchOnWindowFocus:!1,refetchOnMount:!1});return o(m,{children:[r==null?void 0:r.data.map(a=>t(n,{...a})),t(p,{p:1,textAlign:"center",borderTop:1,borderColor:"gainsboro",children:o(u,{color:"primary",sx:{cursor:"pointer"},onClick:()=>{e("/board/hot")},children:["\u3082\u3063\u3068\u898B\u308B ","->"]})})]})}export{B as default};
