import{A as D}from"./ASCard.a3c3f1b8.js";import"./dayjs.min.159666b8.js";import{j as m,g as r,G as s,B as g,T as h}from"./index.4b9d08d7.js";import"./request.3f29df96.js";import{u as y}from"./useQueryOption.0859a797.js";import{u as n,L as A,A as Y,D as d}from"./index.16f8a8a7.js";import"./useModalContext.28eeed22.js";import{R as u}from"./index.02743629.js";import{g as v}from"./reservation.7ca7d604.js";import{a as T}from"./useQuery.esm.d109e3f2.js";import{T as c}from"./TextField.1fb10446.js";import"./DeleteOutlineOutlined.15c92253.js";import"./useModal.8429b3ac.js";import"./reservation.8fbfdc0e.js";import"./useMutation.esm.3bc68b78.js";import"./utils.esm.576e56a8.js";import"./CardContent.64299b18.js";import"./InputAdornment.7669b5ab.js";import"./OutlinedInput.36d8867f.js";import"./GlobalStyles.48d223b5.js";import"./popper.824c9986.js";import"./FormControl.2871b7f9.js";import"./InputLabel.7f6210ac.js";import"./Select.1b0b91e0.js";function N(){var a,p;const o=n(),e=n(o),{option:x,token:f}=y(),{data:i}=T(["asInfo",f,void 0,(a=o.value)==null?void 0:a.format("YYYY-MM-DD"),(p=e.value)==null?void 0:p.format("YYYY-MM-DD")],v,x);return m(u,{children:[r(u.Title,{title:"\u4FEE\u7406\u7167\u4F1A"}),r(s,{xs:12,textAlign:"center",sx:{m:2},boxShadow:"0px 2px 0px 1px gainsboro",item:!0,children:r(g,{padding:2,display:"flex",justifyContent:"center",alignItems:"center",children:m(A,{dateAdapter:Y,children:[r(d,{...o,renderInput:t=>r(c,{...t,sx:{mr:2}})}),r(h,{variant:"body2",sx:{mr:2},children:"to"}),r(d,{...e,renderInput:t=>r(c,{...t})})]})})}),i==null?void 0:i.data.map((t,l)=>r(s,{item:!0,xs:12,children:r(D,{...t})},t.as_id+l))]})}export{N as default};
