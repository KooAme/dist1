import{a3 as x,a as o,j as h,F as N,g as c}from"./index.cde5efb9.js";import{D as l,M as w}from"./MobileBoard.c1294996.js";import{q as C}from"./qsToJson.ed475caa.js";import{h as S}from"./board.f632b663.js";import{r as M}from"./request.527db9f2.js";import{u as P}from"./InputAdornment.e010a845.js";import{a as y}from"./useQuery.esm.c30cf766.js";import"./dayjs.min.5f4d6963.js";import"./useModalContext.42a8ccd4.js";import"./useInput.a71396c8.js";import"./OutlinedInput.9de19efa.js";import"./GlobalStyles.99815698.js";import"./FormControl.9937e9c9.js";import"./Select.bf9523f4.js";import"./LocalFireDepartmentOutlined.6a08316a.js";import"./useModal.3835343a.js";import"./utils.esm.58b1171b.js";function A(){const u=x(),a=P(u.breakpoints.down("sm")),[s,f]=o.exports.useState(1),[e,g]=o.exports.useState(10),[d,i]=o.exports.useState(1),{data:r}=y(["getNotice",String(s),String(e)],S,{refetchOnWindowFocus:!1});o.exports.useEffect(()=>{M.get("/bulletin/count").then(t=>{t.data%e&&i(t.data/e),i(parseInt(String(t.data/e))+1)})},[e]),o.exports.useLayoutEffect(()=>{const t=C(location.search),m=Number(t==null?void 0:t.page),p=Number(t==null?void 0:t.viewCount);isNaN(m)||f(m),isNaN(p)||g(p)},[location.search]);const n={data:r==null?void 0:r.data,currentViewCount:e,currentPage:s,maxPage:d};return h(N,{children:[!a&&c(l,{...n}),a&&c(w,{...n})]})}export{A as default};