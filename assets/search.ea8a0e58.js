import{a3 as S,k as l,a as o,j as y,F as C,g as f}from"./index.4b9d08d7.js";import{D as N,M as k}from"./MobileBoard.cb2d26ec.js";import{q as d}from"./qsToJson.ed475caa.js";import{d as M}from"./board.524c7712.js";import{r as P}from"./request.3f29df96.js";import{u as F}from"./InputAdornment.7669b5ab.js";import{a as b}from"./useQuery.esm.d109e3f2.js";import"./dayjs.min.159666b8.js";import"./useModalContext.28eeed22.js";import"./useInput.7f2aff69.js";import"./OutlinedInput.36d8867f.js";import"./GlobalStyles.48d223b5.js";import"./FormControl.2871b7f9.js";import"./Select.1b0b91e0.js";import"./LocalFireDepartmentOutlined.99b6ae93.js";import"./useModal.8429b3ac.js";import"./utils.esm.576e56a8.js";function K(){const g=S(),n=F(g.breakpoints.down("sm")),s=l(),r=d(s.search),[c,h]=o.exports.useState(1),[e,x]=o.exports.useState(10),[w,i]=o.exports.useState(1),{data:a}=b(["getSearchedAnnonymouseInfo",String(c),String(e),r.content],M,{refetchOnWindowFocus:!1,refetchOnMount:!1});o.exports.useEffect(()=>{P.get("/bulletin/search/count",{params:{keyword:r.content}}).then(t=>{t.data%e&&i(t.data/e),i(parseInt(String(t.data/e))+1)})},[e]),o.exports.useLayoutEffect(()=>{const t=d(s.search),u=Number(t==null?void 0:t.page),p=Number(t==null?void 0:t.viewCount);isNaN(u)||h(u),isNaN(p)||x(p)},[s.search]);const m={data:a==null?void 0:a.data,currentViewCount:e,currentPage:c,maxPage:w};return y(C,{children:[!n&&f(N,{...m,keyword:r.content}),n&&f(k,{...m,keyword:r.content})]})}export{K as default};