import{a3 as S,k as l,a as o,j as y,F as C,g as f}from"./index.7f05ac80.js";import{D as N,M as k}from"./MobileBoard.d28cbde3.js";import{q as d}from"./qsToJson.ed475caa.js";import{d as M}from"./board.f66fabf0.js";import{r as P}from"./request.14419b89.js";import{u as F}from"./InputAdornment.d59037a1.js";import{a as b}from"./useQuery.esm.4cf8627c.js";import"./dayjs.min.6d074ec0.js";import"./useModalContext.281b6642.js";import"./useInput.88cbc4df.js";import"./OutlinedInput.0fa8e325.js";import"./GlobalStyles.d559ddb8.js";import"./FormControl.ec0cdc5c.js";import"./Select.ee04e3c2.js";import"./LocalFireDepartmentOutlined.8449f0d2.js";import"./useModal.1b90a912.js";import"./utils.esm.3b047390.js";function K(){const g=S(),n=F(g.breakpoints.down("sm")),s=l(),r=d(s.search),[c,h]=o.exports.useState(1),[e,x]=o.exports.useState(10),[w,i]=o.exports.useState(1),{data:a}=b(["getSearchedAnnonymouseInfo",String(c),String(e),r.content],M,{refetchOnWindowFocus:!1,refetchOnMount:!1});o.exports.useEffect(()=>{P.get("/bulletin/search/count",{params:{keyword:r.content}}).then(t=>{t.data%e&&i(t.data/e),i(parseInt(String(t.data/e))+1)})},[e]),o.exports.useLayoutEffect(()=>{const t=d(s.search),u=Number(t==null?void 0:t.page),p=Number(t==null?void 0:t.viewCount);isNaN(u)||h(u),isNaN(p)||x(p)},[s.search]);const m={data:a==null?void 0:a.data,currentViewCount:e,currentPage:c,maxPage:w};return y(C,{children:[!n&&f(N,{...m,keyword:r.content}),n&&f(k,{...m,keyword:r.content})]})}export{K as default};