import{A as l}from"./ASCard.294d2e32.js";import{B as C}from"./BusCard.39059046.js";import{G as b}from"./GymCard.5bde6cd4.js";import{aL as c,j as e,F as g,g as o,as as f}from"./index.5545ae43.js";import{O as B}from"./OutCard.cd29efee.js";import"./dayjs.min.afd1065b.js";import{u as h}from"./useQueryOption.1a73962d.js";import{g as v,c as y,b as x,a as A}from"./reservation.bd01444b.js";import{a as i}from"./useQuery.esm.b06f28f7.js";import{T,a as m}from"./Tabs.217e6e3b.js";import"./DeleteOutlineOutlined.7ec33ab9.js";import"./useModal.2eac8c76.js";import"./reservation.1e3fb0af.js";import"./request.15ec526e.js";import"./useMutation.esm.05a19952.js";import"./utils.esm.d84cb8c8.js";import"./CardContent.584b2c6a.js";import"./useModalContext.c0793632.js";function J(){const r=c(0),{option:t,token:s}=h(),{data:n}=i(["asInfo",s,"2"],v,t),{data:u}=i(["outingInfo",s,"2"],y,t),{data:p}=i(["gymInfo",s,"2"],x,t),{data:d}=i(["busInfo",s,"2"],A,t);return e(g,{children:[o(f,{sx:{borderBottom:1,borderColor:"divider"},children:e(T,{indicatorColor:"primary",...r,children:[o(m,{label:"A/S"}),o(m,{label:"\uBC84\uC2A4"}),o(m,{label:"\uC678\uCD9C/\uC678\uBC15"}),o(m,{label:"\uCCB4\uC721\uAD00"})]})}),e(f,{children:[r.value===0&&(n==null?void 0:n.data.map(a=>o(l,{...a},a.as_id))),r.value===1&&(d==null?void 0:d.data.map(a=>o(C,{...a},a.bus_req_id))),r.value===2&&(u==null?void 0:u.data.map(a=>o(B,{...a},a.stayout_id))),r.value===3&&(p==null?void 0:p.data.map(a=>o(b,{...a},a.hlth_id)))]})]})}export{J as default};
