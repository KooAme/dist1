import{k as D,a as C,l as _,j as u,g as e,G as r,I as s,B as R,h}from"./index.4f6cb32c.js";import"./request.707945aa.js";import{u as j}from"./useQueryOption.8bba6344.js";import{u as w,d as O}from"./ImageOutlined.69da1e00.js";import{u as f}from"./useInput.f8aa70dd.js";import"./useModalContext.67702c7f.js";import{f as P}from"./board.45629934.js";import{R as g}from"./index.8a8c69da.js";import{u as S}from"./useMutation.esm.e03828ae.js";import{F as x}from"./FormControl.1a91d2a8.js";import{O as v}from"./OutlinedInput.2be38b6e.js";import"./utils.esm.9c9e0e5a.js";import"./GlobalStyles.78d748c9.js";function J(){const n=D(),l=f(n.state.detail.title),m=f(n.state.detail.content),o=w(),a=C.exports.useRef(null),[c,B]=C.exports.useState([]),d=_(),{option:I,token:p}=j(),{mutate:b}=S(["updateBulletin"],P,{...I,onSuccess:()=>d("/board/annonymous")}),k={bulletin_id:n.state.detail.bulletin_id,title:l.value,content:m.value,images:o.value,should_delete_img:c,token:p},y=()=>{d(-1)};return u(g,{children:[e(g.Title,{title:"\uAC8C\uC2DC\uAE00 \uC218\uC815"}),u(r,{xs:12,item:!0,px:2,textAlign:"end",children:[e(s,{onClick:()=>{var t;a&&((t=a.current)==null||t.click())},color:"primary",sx:{border:1,borderRadius:1},children:e(O,{})}),e("input",{style:{display:"none"},ref:a,type:"file",accept:"image/*",onChange:o.onChange,multiple:!1}),n.state.image.map((t,i)=>c.includes(t.image_id)?e("span",{},"none"+i):e(s,{onClick:()=>{B(A=>[...A,t.image_id])},children:e("img",{src:t.path,width:40})},"image"+i)),o.previewImgArr.map((t,i)=>t&&e(s,{onClick:()=>o.removeImageItem(i),children:e("img",{src:t,width:40})},"image"+i))]}),e(r,{xs:12,item:!0,p:2,children:e(x,{fullWidth:!0,children:e(v,{placeholder:"\uC81C\uBAA9\uC744 \uC785\uB825\uD558\uC138\uC694...",...l})})}),e(r,{xs:12,item:!0,p:2,children:e(x,{fullWidth:!0,children:e(v,{multiline:!0,rows:15,placeholder:"\uB0B4\uC6A9\uC744 \uC785\uB825\uD558\uC138\uC694...",...m})})}),e(r,{xs:12,item:!0,p:2,children:u(R,{display:"flex",justifyContent:"end",children:[e(h,{onClick:y,variant:"contained",color:"disable",children:"\uCDE8\uC18C"}),e(h,{variant:"contained",sx:{ml:2},onClick:()=>p&&b(k),children:"\uC81C\uCD9C"})]})})]})}export{J as default};