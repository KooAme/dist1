import{a3 as x,a as o,j as h,F as N,g as c}from"./index.9b069709.js";import{D as l,M as w}from"./MobileBoard.a36a31c7.js";import{q as C}from"./qsToJson.ed475caa.js";import{h as S}from"./board.a7407e65.js";import{r as M}from"./request.52304258.js";import{u as P}from"./InputAdornment.bb53c9fa.js";import{a as y}from"./useQuery.esm.c5008099.js";import"./dayjs.min.24de2469.js";import"./useModalContext.a4f63f9a.js";import"./useInput.cc82d155.js";import"./OutlinedInput.4174db71.js";import"./GlobalStyles.fe01e8ba.js";import"./FormControl.aee36b64.js";import"./Select.4702d03b.js";import"./LocalFireDepartmentOutlined.d3be20bd.js";import"./useModal.38bc9403.js";import"./utils.esm.a7727a57.js";function A(){const u=x(),a=P(u.breakpoints.down("sm")),[s,f]=o.exports.useState(1),[e,g]=o.exports.useState(10),[d,i]=o.exports.useState(1),{data:r}=y(["getNotice",String(s),String(e)],S,{refetchOnWindowFocus:!1});o.exports.useEffect(()=>{M.get("/bulletin/count").then(t=>{t.data%e&&i(t.data/e),i(parseInt(String(t.data/e))+1)})},[e]),o.exports.useLayoutEffect(()=>{const t=C(location.search),m=Number(t==null?void 0:t.page),p=Number(t==null?void 0:t.viewCount);isNaN(m)||f(m),isNaN(p)||g(p)},[location.search]);const n={data:r==null?void 0:r.data,currentViewCount:e,currentPage:s,maxPage:d};return h(N,{children:[!a&&c(l,{...n}),a&&c(w,{...n})]})}export{A as default};