import{a as g,l as x,j as P,F as _,g as a,at as A,h as N,au as $,aw as w}from"./index.ef2b8ab2.js";import{N as C,P as D}from"./PasswordOutlinedInput.d5536473.js";import{u as o}from"./useInput.921755cd.js";import{r as V}from"./request.8b527825.js";import{u as b}from"./useMutation.esm.20f4f217.js";import"./FormControl.b4a5df70.js";import"./OutlinedInput.7a476f46.js";import"./GlobalStyles.f7ba56c8.js";import"./InputLabel.6a7e5c8b.js";import"./utils.esm.b4d2e05d.js";const F=t=>/^[0-9\b -]{0,13}$/.test(t),j=t=>/[a-z0-9]+@g.yju.ac.kr/.test(t);function y(t){const{std_id:s,std_name:m,password:n,ph_num:l,room_num:r,e_mail:u}=t;return V.post("/signup",{std_id:s,std_name:m,password:n,ph_num:l,room_num:r,e_mail:u})}function Z(){const[t,s]=g.exports.useState(!1),{mutate:m}=b(["signup"],y,{onSuccess:()=>{alert("\uC778\uC99D \uBA54\uC77C\uC744 \uBCF4\uB0C8\uC2B5\uB2C8\uB2E4."),f("/login")}}),n=o("","\uD559\uBC88"),l=o("","\uC774\uB984"),r=o("","\uC774\uBA54\uC77C"),u=o("","\uD578\uB4DC\uD3F0 \uBC88\uD638"),c=o("","\uBC29 \uBC88\uD638"),i=o("","\uD328\uC2A4\uC6CC\uB4DC"),p=o("","\uD328\uC2A4\uC6CC\uB4DC \uD655\uC778"),f=x(),B=async()=>{s(!0),w.signUp(n.value,i.value,[{Name:"name",Value:l.value},{Name:"email",Value:r.value},{Name:"phone_number",Value:"+82"+u.value.slice(1).replaceAll("-","")},{Name:"custom:room_num",Value:c.value}],null,(e,h)=>{s(!1),e||m({std_id:n.value,std_name:l.value,password:i.value,ph_num:u.value,room_num:c.value,e_mail:r.value})})},d=e=>e===i.value;g.exports.useLayoutEffect(()=>{u.value.length===10&&u.onChange(u.value.replace(/(\d{3})(\d{3})(\d{4})/,"$1-$2-$3")),u.value.length===13&&u.onChange(u.value.replace(/-/g,"").replace(/(\d{3})(\d{4})(\d{4})/,"$1-$2-$3"))},[u.value]);const v=e=>/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(e);return P(_,{children:[a(A.Title,{title:"\uD68C\uC6D0 \uAC00\uC785"}),a(C,{...n}),a(C,{...l}),a(C,{...r,validator:()=>j(r.value),hintMessage:"\uC774\uBA54\uC77C \uD615\uC2DD\uC744 \uD655\uC778\uD574\uC8FC\uC138\uC694 *@g.yju.ac.kr"}),a(C,{value:u.value,onChange:e=>{F(e.target.value)&&u.onChange(e)},label:u.label}),a(C,{...c}),a(D,{...i,validator:v}),a(D,{...p,validator:d}),a(N,{color:"primary",onClick:()=>{d(p.value)&&v(i.value)&&B()},variant:"contained",fullWidth:!0,children:"\uD68C\uC6D0\uAC00\uC785"}),a($,{visible:t})]})}export{Z as default};
