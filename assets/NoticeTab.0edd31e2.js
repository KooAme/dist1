import{d as s}from"./dayjs.min.159666b8.js";import{h as n}from"./board.524c7712.js";import{l as c,g as e,F as d,as as m,j as r,T as a}from"./index.4b9d08d7.js";import{a as p}from"./useQuery.esm.d109e3f2.js";import{C as l,a as u}from"./CardContent.64299b18.js";import"./request.3f29df96.js";import"./utils.esm.576e56a8.js";function C(){const{data:i}=p(["getNotice","1","2"],n,{refetchOnWindowFocus:!1}),o=c();return e(d,{children:i==null?void 0:i.data.map(t=>e(m,{sx:{cursor:"pointer"},onClick:()=>{o("/board/notice/detail?id="+t.notice_id)},children:e(l,{sx:{width:"90%",mx:"30px",my:"10px"},children:r(u,{children:[r(a,{gutterBottom:!0,variant:"subtitle1",sx:{fontWeight:700},children:["[\u304A\u77E5\u3089\u305B]",t.title]}),r(a,{sx:{textAlign:"end"},variant:"subtitle2",children:["Date : ",s(t.create_date).format("YYYY-MM-DD")]}),e(a,{sx:{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:t.content})]})})},t.notice_id))})}export{C as default};