import"./dayjs.min.bd0adfbc.js";import{j as p,g as r,G as m,B as D,T as h}from"./index.ef2b8ab2.js";import{u as y}from"./useQueryOption.0df0b6c6.js";import"./request.8b527825.js";import{B as Y}from"./BusCard.b687c07e.js";import{u as n,L as g,A as v,D as u}from"./index.b6810d95.js";import{R as d}from"./index.5bb5f811.js";import{a as B}from"./reservation.1acb72e3.js";import{a as C}from"./useQuery.esm.45752407.js";import{T as c}from"./TextField.2d2534e7.js";import"./DeleteOutlineOutlined.8976c642.js";import"./useModalContext.189fb728.js";import"./useModal.6e2e9ee6.js";import"./reservation.d698acea.js";import"./useMutation.esm.20f4f217.js";import"./utils.esm.b4d2e05d.js";import"./CardContent.d2c5f0f6.js";import"./InputAdornment.2b550c27.js";import"./OutlinedInput.7a476f46.js";import"./GlobalStyles.f7ba56c8.js";import"./popper.824c9986.js";import"./FormControl.b4a5df70.js";import"./InputLabel.6a7e5c8b.js";import"./Select.80e35132.js";function N(){var a,s;const o=n(),e=n(o),{option:x,token:f}=y(),{data:i}=C(["busInfo",f,void 0,(a=o.value)==null?void 0:a.format("YYYY-MM-DD"),(s=e.value)==null?void 0:s.format("YYYY-MM-DD")],B,x);return p(d,{children:[r(d.Title,{title:"\uBC84\uC2A4 \uC870\uD68C"}),r(m,{xs:12,textAlign:"center",sx:{m:2},boxShadow:"0px 2px 0px 1px gainsboro",item:!0,children:r(D,{padding:2,display:"flex",justifyContent:"center",alignItems:"center",children:p(g,{dateAdapter:v,children:[r(u,{...o,renderInput:t=>r(c,{...t,sx:{mr:2}})}),r(h,{variant:"body2",sx:{mr:2},children:"to"}),r(u,{...e,renderInput:t=>r(c,{...t})})]})})}),i==null?void 0:i.data.map((t,l)=>r(m,{item:!0,xs:12,children:r(Y,{...t})},t.bus_req_id+l))]})}export{N as default};