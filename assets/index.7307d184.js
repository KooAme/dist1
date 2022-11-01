import{b as y,i as E,e as j,aw as I,g as e,B as o,I as v,j as t,T as n,a as d,A as R,F as _,G as m,bg as w}from"./index.4b9d08d7.js";import{M}from"./ModalContainer.bfd9cf5e.js";import"./request.3f29df96.js";import{u as S}from"./useModalContext.28eeed22.js";import{u as O}from"./useModal.8429b3ac.js";import{T as P}from"./TextField.1fb10446.js";import"./FormControl.2871b7f9.js";import"./OutlinedInput.36d8867f.js";import"./GlobalStyles.48d223b5.js";import"./InputLabel.7f6210ac.js";import"./Select.1b0b91e0.js";var f={},U=E.exports;Object.defineProperty(f,"__esModule",{value:!0});var B=f.default=void 0,k=U(y()),C=j,N=(0,k.default)([(0,C.jsx)("path",{d:"M19 19V5c0-1.1-.9-2-2-2H7c-1.1 0-2 .9-2 2v14H3v2h18v-2h-2zm-2 0H7V5h10v14z"},"0"),(0,C.jsx)("path",{d:"M9 11h2v2H9z"},"1")],"DoorBackOutlined");B=f.default=N;async function q(r){return await new Promise((a,i)=>{const u=I.getCurrentUser();u==null||u.getSession((s,g)=>{s&&i(s),u.updateAttributes([{Name:"custom:room_num",Value:r}],l=>{l&&i(l),a("value")})})})}function x({Icon:r,text:a,action:i,color:u="black"}){return e(o,{display:"flex",justifyContent:"center",alignItems:"center",width:100,height:100,border:1,borderRadius:2,m:1,borderColor:"gainsboro",children:e(v,{sx:{flex:1,borderRadius:1},onClick:i,children:t(o,{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",color:u,children:[e(r,{}),e(n,{variant:"caption",children:a})]})})})}function H(){return e("img",{src:"asset/cloud.ico",width:24,height:24})}function Y(){const[r,a]=d.exports.useState(""),[i,u]=d.exports.useState(),s=O(),{Provider:g,ctx:l,...p}=S(q),{getUserData:A,logout:b}=d.exports.useContext(R);return d.exports.useEffect(()=>{A().then(c=>{const F=c.UserAttributes.filter(h=>h.Name==="name"),D=c.UserAttributes.filter(h=>h.Name==="custom:room_num");u(D[0].Value),a(F[0].Value)})},[]),t(_,{children:[t(m,{maxWidth:"md",margin:"auto",container:!0,children:[e(m,{item:!0,xs:12,sx:{borderBottom:1,borderBottomColor:"gainsboro"},px:2,children:e(n,{variant:"h6",sx:{p:"10px",fontWeight:700},children:"\u8A2D\u5B9A"})}),t(m,{item:!0,xs:12,borderBottom:1,borderColor:"gainsboro",children:[!r&&e(o,{display:"flex",p:2,m:"auto",children:e(n,{children:"\u30ED\u30B0\u30A4\u30F3\u3057\u3066\u3054\u5229\u7528\u304F\u3060\u3055\u3044\u3002"})}),r&&t(o,{display:"flex",p:2,children:[t(o,{textAlign:"center",children:[e(v,{children:e("img",{src:"asset/avatar.png",width:40})}),e(n,{children:r})]}),e(o,{ml:2,my:"auto",children:t(o,{display:"flex",children:[e(n,{children:"\u53F7\u5BA4 : "}),e(n,{children:i})]})})]})]}),r&&t(m,{item:!0,xs:12,p:2,display:"flex",flexWrap:"wrap",children:[e(x,{Icon:B,text:"\u90E8\u5C4B\u756A\u53F7\u306E\u5909\u66F4",action:s.onOpen}),e(x,{Icon:H,text:"\u30AF\u30E9\u30A6\u30C9\u79FB\u52D5",action:()=>{window.open("https://sdnas.tk")}}),e(x,{Icon:w,text:"\u30ED\u30B0\u30A2\u30A6\u30C8",action:b,color:"red"})]})]}),e(g,{value:p,children:e(M,{ctx:l,...s,title:"\u90E8\u5C4B\u756A\u53F7\u306E\u5909\u66F4",children:t(o,{textAlign:"center",p:2,display:"flex",flexDirection:"column",children:[e(P,{onChange:c=>p.onChange(c.target.value),value:p.value,inputProps:{maxLength:4}}),e(n,{variant:"caption",color:"red",children:"\u6B63\u78BA\u306A\u53F7\u6570\u3092\u5165\u529B\u3057\u306A\u3044\u3068\u3001\u30B5\u30FC\u30D3\u30B9\u63D0\u4F9B\u306B\u4E0D\u5229\u76CA\u304C\u3042\u308B\u53EF\u80FD\u6027\u304C\u3042\u308A\u307E\u3059\u3002"})]})})})]})}export{Y as default};
