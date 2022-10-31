import{D as W,d as Y}from"./DeleteOutlineOutlined.2aaccfce.js";import{S as G,n as E,d as F,r as K,u as V,a as y,c as J,b as X,i as Z,e as ee,f as I,j as d,F as _,B as m,T as b,g as o,h as Q,G as x,k as te,l as re,A as se,m as ne,I as j,o as oe}from"./index.78223688.js";import{a as ie}from"./request.3b3d933e.js";import{u as H}from"./useQueryOption.e50dc1ea.js";import"./useModalContext.7736d1f3.js";import{u as T}from"./useModal.0208b160.js";import{m as ae,a as ue,b as le,c as ce,d as de,e as he}from"./board.00c7585c.js";import{g as fe,a as pe,b as me}from"./board.162b58da.js";import{d as D}from"./dayjs.min.e68d731b.js";import{u as N}from"./useInput.abb41087.js";import"./ko.9597df00.js";import{u as M}from"./useMutation.esm.c6276784.js";import{O as P}from"./OutlinedInput.3923174a.js";import{Q as be,u as Ce,a as ye}from"./useQuery.esm.45014ca3.js";import{d as ve}from"./LocalFireDepartmentOutlined.307f46a5.js";import{q as ge}from"./qsToJson.ed475caa.js";import{u as xe}from"./utils.esm.ac796d1f.js";import"./GlobalStyles.bcd1f971.js";function Oe(p,a){for(var r=0;r<a.length;r++){const s=a[r];if(typeof s!="string"&&!Array.isArray(s)){for(const i in s)if(i!=="default"&&!(i in p)){const t=Object.getOwnPropertyDescriptor(s,i);t&&Object.defineProperty(p,i,t.get?t:{enumerable:!0,get:()=>s[i]})}}}return Object.freeze(Object.defineProperty(p,Symbol.toStringTag,{value:"Module"}))}class Me extends G{constructor(a,r){super(),this.client=a,this.queries=[],this.result=[],this.observers=[],this.observersMap={},r&&this.setQueries(r)}onSubscribe(){this.listeners.length===1&&this.observers.forEach(a=>{a.subscribe(r=>{this.onUpdate(a,r)})})}onUnsubscribe(){this.listeners.length||this.destroy()}destroy(){this.listeners=[],this.observers.forEach(a=>{a.destroy()})}setQueries(a,r){this.queries=a,E.batch(()=>{const s=this.observers,i=this.findMatchingObservers(this.queries);i.forEach(e=>e.observer.setOptions(e.defaultedQueryOptions,r));const t=i.map(e=>e.observer),f=Object.fromEntries(t.map(e=>[e.options.queryHash,e])),h=t.map(e=>e.getCurrentResult()),l=t.some((e,u)=>e!==s[u]);s.length===t.length&&!l||(this.observers=t,this.observersMap=f,this.result=h,this.hasListeners()&&(F(s,t).forEach(e=>{e.destroy()}),F(t,s).forEach(e=>{e.subscribe(u=>{this.onUpdate(e,u)})}),this.notify()))})}getCurrentResult(){return this.result}getOptimisticResult(a){return this.findMatchingObservers(a).map(r=>r.observer.getOptimisticResult(r.defaultedQueryOptions))}findMatchingObservers(a){const r=this.observers,s=a.map(n=>this.client.defaultQueryOptions(n)),i=s.flatMap(n=>{const c=r.find(C=>C.options.queryHash===n.queryHash);return c!=null?[{defaultedQueryOptions:n,observer:c}]:[]}),t=i.map(n=>n.defaultedQueryOptions.queryHash),f=s.filter(n=>!t.includes(n.queryHash)),h=r.filter(n=>!i.some(c=>c.observer===n)),l=n=>{const c=this.client.defaultQueryOptions(n),C=this.observersMap[c.queryHash];return C!=null?C:new be(this.client,c)},e=f.map((n,c)=>{if(n.keepPreviousData){const C=h[c];if(C!==void 0)return{defaultedQueryOptions:n,observer:C}}return{defaultedQueryOptions:n,observer:l(n)}}),u=(n,c)=>s.indexOf(n.defaultedQueryOptions)-s.indexOf(c.defaultedQueryOptions);return i.concat(e).sort(u)}onUpdate(a,r){const s=this.observers.indexOf(a);s!==-1&&(this.result=K(this.result,s,r),this.notify())}notify(){E.batch(()=>{this.listeners.forEach(a=>{a(this.result)})})}}function Be({queries:p,context:a}){const r=V({context:a}),s=Ce(),i=y.exports.useMemo(()=>p.map(h=>{const l=r.defaultQueryOptions(h);return l._optimisticResults=s?"isRestoring":"optimistic",l}),[p,r,s]),[t]=y.exports.useState(()=>new Me(r,i)),f=t.getOptimisticResult(i);return xe(y.exports.useCallback(h=>s?()=>{}:t.subscribe(E.batchCalls(h)),[t,s]),()=>t.getCurrentResult(),()=>t.getCurrentResult()),y.exports.useEffect(()=>{t.setQueries(i,{listeners:!1})},[i,t]),f}var U={exports:{}};(function(p,a){(function(r,s){p.exports=s()})(J,function(){return function(r,s,i){r=r||{};var t=s.prototype,f={future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"};function h(e,u,n,c){return t.fromToBase(e,u,n,c)}i.en.relativeTime=f,t.fromToBase=function(e,u,n,c,C){for(var B,v,w,k=n.$locale().relativeTime||f,A=r.thresholds||[{l:"s",r:44,d:"second"},{l:"m",r:89},{l:"mm",r:44,d:"minute"},{l:"h",r:89},{l:"hh",r:21,d:"hour"},{l:"d",r:35},{l:"dd",r:25,d:"day"},{l:"M",r:45},{l:"MM",r:10,d:"month"},{l:"y",r:17},{l:"yy",d:"year"}],L=A.length,S=0;S<L;S+=1){var g=A[S];g.d&&(B=c?i(e).diff(n,g.d,!0):n.diff(e,g.d,!0));var O=(r.rounding||Math.round)(Math.abs(B));if(w=B>0,O<=g.r||!g.r){O<=1&&S>0&&(g=A[S-1]);var q=k[g.l];C&&(O=C(""+O)),v=typeof q=="string"?q.replace("%d",O):q(O,u,g.l,w);break}}if(u)return v;var R=w?k.future:k.past;return typeof R=="function"?R(v):R.replace("%s",v)},t.to=function(e,u){return h(e,u,this,!0)},t.from=function(e,u){return h(e,u,this)};var l=function(e){return e.$u?i.utc():i()};t.toNow=function(e){return this.to(l(this),e)},t.fromNow=function(e){return this.from(l(this),e)}}})})(U);const we=U.exports,Se=Oe({__proto__:null,default:we},[U.exports]);var $={},Qe=Z.exports;Object.defineProperty($,"__esModule",{value:!0});var z=$.default=void 0,_e=Qe(X()),De=ee,ke=(0,_e.default)((0,De.jsx)("path",{d:"m19 15-6 6-1.42-1.42L15.17 16H4V4h2v10h9.17l-3.59-3.58L13 9l6 6z"}),"SubdirectoryArrowRight");z=$.default=ke;function Ae({ip:p,create_date:a,content:r,comment_id:s,std_id:i,myId:t}){const{option:f,token:h}=H(),l=T(),e=T(),u=N(r),{mutate:n}=M(["updateComment"],ae,{...f,onSuccess:()=>{I()}}),{mutate:c}=M(["deleteComment"],ue,{...f,onSuccess:()=>{I()}});return d(_,{children:[d(m,{width:"100%",children:[d(m,{display:"flex",justifyContent:"space-between",children:[d(m,{display:"flex",children:[d(b,{mr:"5px",variant:"caption",children:["\uC775\uBA85( ",p," )"]}),o(b,{variant:"caption",children:D(a).fromNow()})]}),t&&t===String(i)&&d(m,{display:"flex",children:[o(Q,{size:"small",color:"inherit",onClick:()=>e.open?e.onClose():e.onOpen(),children:o(b,{variant:"caption",children:"\uC218\uC815"})}),o(Q,{size:"small",color:"inherit",onClick:()=>l.onOpen(),children:o(b,{variant:"caption",children:"\uC0AD\uC81C"})})]})]}),o(m,{p:2,children:o(b,{variant:"caption",children:r})})]}),t&&t===String(i)&&d(_,{children:[d(m,{pl:4,display:`${e.open?"flex":"none"}`,children:[o(z,{sx:{mt:2}}),d(m,{flex:"1",children:[o(b,{variant:"caption",children:"\uB313\uAE00 \uC218\uC815"}),d(m,{display:"flex",children:[o(P,{multiline:!0,fullWidth:!0,rows:3,...u,placeholder:"\uB0B4\uC6A9\uC744 \uC785\uB825\uD558\uC138\uC694..."}),o(Q,{variant:"contained",color:"disable",sx:{boxShadow:"none"},onClick:()=>{h&&n({comment_id:s,content:u.value,token:h}),e.onClose()},children:"\uC81C\uCD9C"})]})]})]}),o(W,{...l,submit:()=>h&&c({comment_id:s,token:h})})]})]})}D.locale("ko");D.extend(Se);function qe({bulletinId:p,myId:a}){const{option:r,token:s}=H(),[i,t]=y.exports.useState(""),f=N(""),{mutate:h}=M(["createComment"],le,{...r,onSuccess:()=>{f.onChange(""),I()}}),{data:l}=ye(["getComments",String(p)],fe,{refetchOnMount:!1,refetchOnWindowFocus:!1});y.exports.useEffect(()=>{ie.get("https://api.ipify.org?format=json").then(u=>{const n=u.data.ip.split("."),c=[n[2],n[3]];t(c.join("."))}).catch(u=>{})},[]);const e={content:f.value,bulletin_id:p,ip:i,token:s};return d(_,{children:[d(x,{item:!0,xs:12,p:2,children:[d(b,{children:["\uB313\uAE00 ",l==null?void 0:l.data.count,"\uAC1C"]}),d(m,{display:"flex",children:[o(P,{multiline:!0,fullWidth:!0,rows:3,...f,placeholder:"\uB0B4\uC6A9\uC744 \uC785\uB825\uD558\uC138\uC694..."}),o(Q,{variant:"contained",color:"disable",sx:{boxShadow:"none"},onClick:()=>{s&&f.value&&h(e)},children:"\uC81C\uCD9C"})]})]}),o(x,{item:!0,xs:12,p:2,children:l==null?void 0:l.data.rows.map((u,n)=>y.exports.createElement(Ae,{myId:a,...u,key:u.comment_id+n}))})]})}function Je(){const p=te(),a=re(),r=T(),{option:s,token:i}=H(),[t,f]=y.exports.useState(),{getUserData:h}=y.exports.useContext(se);y.exports.useEffect(()=>{h().then(v=>{f(v.Username)})},[]);const l=ge(p.search).id,[{data:e},{data:u}]=Be({queries:[{queryKey:["getAnnonymousDetail",l],queryFn:pe,refetchOnMount:!1,refetchOnWindowFocus:!1},{queryKey:["getAnnonymousImage",l],queryFn:me,refetchOnMount:!1,refetchOnWindowFocus:!1}]}),n=()=>{a("/board/annonymous/update",{state:{detail:e==null?void 0:e.data,image:u==null?void 0:u.data}})},{mutate:c}=M(["deleteBulletinItem"],ce,{...s,onSuccess:()=>a(-1)}),{mutate:C}=M(["viewBulletin"],he),{mutate:B}=M(["clickHot"],de,{...s,onSuccess:()=>ne(),onError:()=>alert("\uC774\uC804\uC5D0 \uD55C\uBC88\uC774\uC0C1 \uB204\uB974\uC168\uC2B5\uB2C8\uB2E4.")});return y.exports.useEffect(()=>{i&&C({bulletin_id:l})},[]),d(_,{children:[d(x,{maxWidth:"md",margin:"auto",container:!0,children:[o(x,{item:!0,xs:12,mt:5,p:2,children:o(b,{variant:"h6",children:e==null?void 0:e.data.title})}),d(x,{item:!0,xs:12,pl:2,display:"flex",justifyContent:"space-between",borderBottom:1,pb:2,borderColor:"gainsboro",children:[d(m,{display:"flex",letterSpacing:1,children:[d(b,{mr:"10px",children:[e==null?void 0:e.data.std_name," "]}),o(b,{mr:"10px",children:D().format("YYYY-MM-DD")}),o(b,{children:"\uB313\uAE00:0\uAC1C"})]}),t&&t===String(e==null?void 0:e.data.std_id)&&d(m,{display:"flex",letterSpacing:1,children:[o(j,{onClick:r.onOpen,children:o(Y,{})}),o(j,{onClick:n,children:o(oe,{})})]})]}),u&&u.data.map((v,w)=>o(x,{item:!0,xs:12,p:2,children:o("img",{src:v.path})},w)),o(x,{item:!0,xs:12,p:2,children:o(b,{variant:"caption",sx:{wordBreak:"break-all"},children:e==null?void 0:e.data.content})}),o(x,{item:!0,xs:12,borderBottom:1,pb:2,borderColor:"gainsboro",children:o(m,{display:"flex",alignItems:"center",justifyContent:"center",children:o(m,{border:1,borderRadius:2,borderColor:"gainsboro",children:d(j,{onClick:()=>{i&&B({bulletin_id:p.state.bulletin_id,token:i})},children:[o(ve,{}),o(b,{variant:"caption",children:e==null?void 0:e.data.hot})]})})})}),o(qe,{bulletinId:e==null?void 0:e.data.bulletin_id,myId:String(e==null?void 0:e.data.std_id)})]}),o(W,{...r,submit:()=>i&&c({bulletin_id:e==null?void 0:e.data.bulletin_id,token:i})})]})}export{Je as default};
