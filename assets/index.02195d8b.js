import{a3 as x,a as o,j as h,F as N,g as c}from"./index.4b9d08d7.js";import{D as l,M as w}from"./MobileBoard.cb2d26ec.js";import{q as C}from"./qsToJson.ed475caa.js";import{h as S}from"./board.524c7712.js";import{r as M}from"./request.3f29df96.js";import{u as P}from"./InputAdornment.7669b5ab.js";import{a as y}from"./useQuery.esm.d109e3f2.js";import"./dayjs.min.159666b8.js";import"./useModalContext.28eeed22.js";import"./useInput.7f2aff69.js";import"./OutlinedInput.36d8867f.js";import"./GlobalStyles.48d223b5.js";import"./FormControl.2871b7f9.js";import"./Select.1b0b91e0.js";import"./LocalFireDepartmentOutlined.99b6ae93.js";import"./useModal.8429b3ac.js";import"./utils.esm.576e56a8.js";function A(){const u=x(),a=P(u.breakpoints.down("sm")),[s,f]=o.exports.useState(1),[e,g]=o.exports.useState(10),[d,i]=o.exports.useState(1),{data:r}=y(["getNotice",String(s),String(e)],S,{refetchOnWindowFocus:!1});o.exports.useEffect(()=>{M.get("/bulletin/count").then(t=>{t.data%e&&i(t.data/e),i(parseInt(String(t.data/e))+1)})},[e]),o.exports.useLayoutEffect(()=>{const t=C(location.search),m=Number(t==null?void 0:t.page),p=Number(t==null?void 0:t.viewCount);isNaN(m)||f(m),isNaN(p)||g(p)},[location.search]);const n={data:r==null?void 0:r.data,currentViewCount:e,currentPage:s,maxPage:d};return h(N,{children:[!a&&c(l,{...n}),a&&c(w,{...n})]})}export{A as default};