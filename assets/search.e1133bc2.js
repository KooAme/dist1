import{a3 as S,k as l,a as o,j as y,F as C,g as f}from"./index.78223688.js";import{D as N,M as k}from"./MobileBoard.ef4a390e.js";import{q as d}from"./qsToJson.ed475caa.js";import{d as M}from"./board.162b58da.js";import{r as P}from"./request.3b3d933e.js";import{u as F}from"./InputAdornment.bb4f1593.js";import{a as b}from"./useQuery.esm.45014ca3.js";import"./dayjs.min.e68d731b.js";import"./useModalContext.7736d1f3.js";import"./useInput.abb41087.js";import"./OutlinedInput.3923174a.js";import"./GlobalStyles.bcd1f971.js";import"./FormControl.13e9958e.js";import"./Select.b0e9ba20.js";import"./LocalFireDepartmentOutlined.307f46a5.js";import"./useModal.0208b160.js";import"./utils.esm.ac796d1f.js";function K(){const g=S(),n=F(g.breakpoints.down("sm")),s=l(),r=d(s.search),[c,h]=o.exports.useState(1),[e,x]=o.exports.useState(10),[w,i]=o.exports.useState(1),{data:a}=b(["getSearchedAnnonymouseInfo",String(c),String(e),r.content],M,{refetchOnWindowFocus:!1,refetchOnMount:!1});o.exports.useEffect(()=>{P.get("/bulletin/search/count",{params:{keyword:r.content}}).then(t=>{t.data%e&&i(t.data/e),i(parseInt(String(t.data/e))+1)})},[e]),o.exports.useLayoutEffect(()=>{const t=d(s.search),u=Number(t==null?void 0:t.page),p=Number(t==null?void 0:t.viewCount);isNaN(u)||h(u),isNaN(p)||x(p)},[s.search]);const m={data:a==null?void 0:a.data,currentViewCount:e,currentPage:c,maxPage:w};return y(C,{children:[!n&&f(N,{...m,keyword:r.content}),n&&f(k,{...m,keyword:r.content})]})}export{K as default};
