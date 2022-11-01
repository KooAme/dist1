import{D as W,d as Y}from"./DeleteOutlineOutlined.15c92253.js";import{S as G,n as F,d as $,r as K,u as V,a as v,c as J,b as X,i as Z,e as ee,f as A,j as d,F as Q,B as m,T as b,g as o,h as E,G as O,k as te,l as re,A as se,m as ne,I as j,o as oe}from"./index.4b9d08d7.js";import{a as ie}from"./request.3f29df96.js";import{u as T}from"./useQueryOption.0859a797.js";import"./useModalContext.28eeed22.js";import{u as I}from"./useModal.8429b3ac.js";import{m as ae,a as ue,b as le,c as ce,d as de,e as he}from"./board.b5ce875f.js";import{g as fe,a as pe,b as me}from"./board.524c7712.js";import{d as _}from"./dayjs.min.159666b8.js";import{u as N}from"./useInput.7f2aff69.js";import"./ko.89bdb30d.js";import{u as M}from"./useMutation.esm.3bc68b78.js";import{O as P}from"./OutlinedInput.36d8867f.js";import{Q as be,u as ye,a as ve}from"./useQuery.esm.d109e3f2.js";import{d as ge}from"./LocalFireDepartmentOutlined.99b6ae93.js";import{q as xe}from"./qsToJson.ed475caa.js";import{u as Oe}from"./utils.esm.576e56a8.js";import"./GlobalStyles.48d223b5.js";function Ce(p,a){for(var r=0;r<a.length;r++){const s=a[r];if(typeof s!="string"&&!Array.isArray(s)){for(const i in s)if(i!=="default"&&!(i in p)){const t=Object.getOwnPropertyDescriptor(s,i);t&&Object.defineProperty(p,i,t.get?t:{enumerable:!0,get:()=>s[i]})}}}return Object.freeze(Object.defineProperty(p,Symbol.toStringTag,{value:"Module"}))}class Me extends G{constructor(a,r){super(),this.client=a,this.queries=[],this.result=[],this.observers=[],this.observersMap={},r&&this.setQueries(r)}onSubscribe(){this.listeners.length===1&&this.observers.forEach(a=>{a.subscribe(r=>{this.onUpdate(a,r)})})}onUnsubscribe(){this.listeners.length||this.destroy()}destroy(){this.listeners=[],this.observers.forEach(a=>{a.destroy()})}setQueries(a,r){this.queries=a,F.batch(()=>{const s=this.observers,i=this.findMatchingObservers(this.queries);i.forEach(e=>e.observer.setOptions(e.defaultedQueryOptions,r));const t=i.map(e=>e.observer),f=Object.fromEntries(t.map(e=>[e.options.queryHash,e])),h=t.map(e=>e.getCurrentResult()),l=t.some((e,u)=>e!==s[u]);s.length===t.length&&!l||(this.observers=t,this.observersMap=f,this.result=h,this.hasListeners()&&($(s,t).forEach(e=>{e.destroy()}),$(t,s).forEach(e=>{e.subscribe(u=>{this.onUpdate(e,u)})}),this.notify()))})}getCurrentResult(){return this.result}getOptimisticResult(a){return this.findMatchingObservers(a).map(r=>r.observer.getOptimisticResult(r.defaultedQueryOptions))}findMatchingObservers(a){const r=this.observers,s=a.map(n=>this.client.defaultQueryOptions(n)),i=s.flatMap(n=>{const c=r.find(y=>y.options.queryHash===n.queryHash);return c!=null?[{defaultedQueryOptions:n,observer:c}]:[]}),t=i.map(n=>n.defaultedQueryOptions.queryHash),f=s.filter(n=>!t.includes(n.queryHash)),h=r.filter(n=>!i.some(c=>c.observer===n)),l=n=>{const c=this.client.defaultQueryOptions(n),y=this.observersMap[c.queryHash];return y!=null?y:new be(this.client,c)},e=f.map((n,c)=>{if(n.keepPreviousData){const y=h[c];if(y!==void 0)return{defaultedQueryOptions:n,observer:y}}return{defaultedQueryOptions:n,observer:l(n)}}),u=(n,c)=>s.indexOf(n.defaultedQueryOptions)-s.indexOf(c.defaultedQueryOptions);return i.concat(e).sort(u)}onUpdate(a,r){const s=this.observers.indexOf(a);s!==-1&&(this.result=K(this.result,s,r),this.notify())}notify(){F.batch(()=>{this.listeners.forEach(a=>{a(this.result)})})}}function Be({queries:p,context:a}){const r=V({context:a}),s=ye(),i=v.exports.useMemo(()=>p.map(h=>{const l=r.defaultQueryOptions(h);return l._optimisticResults=s?"isRestoring":"optimistic",l}),[p,r,s]),[t]=v.exports.useState(()=>new Me(r,i)),f=t.getOptimisticResult(i);return Oe(v.exports.useCallback(h=>s?()=>{}:t.subscribe(F.batchCalls(h)),[t,s]),()=>t.getCurrentResult(),()=>t.getCurrentResult()),v.exports.useEffect(()=>{t.setQueries(i,{listeners:!1})},[i,t]),f}var H={exports:{}};(function(p,a){(function(r,s){p.exports=s()})(J,function(){return function(r,s,i){r=r||{};var t=s.prototype,f={future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"};function h(e,u,n,c){return t.fromToBase(e,u,n,c)}i.en.relativeTime=f,t.fromToBase=function(e,u,n,c,y){for(var B,g,w,k=n.$locale().relativeTime||f,D=r.thresholds||[{l:"s",r:44,d:"second"},{l:"m",r:89},{l:"mm",r:44,d:"minute"},{l:"h",r:89},{l:"hh",r:21,d:"hour"},{l:"d",r:35},{l:"dd",r:25,d:"day"},{l:"M",r:45},{l:"MM",r:10,d:"month"},{l:"y",r:17},{l:"yy",d:"year"}],L=D.length,S=0;S<L;S+=1){var x=D[S];x.d&&(B=c?i(e).diff(n,x.d,!0):n.diff(e,x.d,!0));var C=(r.rounding||Math.round)(Math.abs(B));if(w=B>0,C<=x.r||!x.r){C<=1&&S>0&&(x=D[S-1]);var q=k[x.l];y&&(C=y(""+C)),g=typeof q=="string"?q.replace("%d",C):q(C,u,x.l,w);break}}if(u)return g;var R=w?k.future:k.past;return typeof R=="function"?R(g):R.replace("%s",g)},t.to=function(e,u){return h(e,u,this,!0)},t.from=function(e,u){return h(e,u,this)};var l=function(e){return e.$u?i.utc():i()};t.toNow=function(e){return this.to(l(this),e)},t.fromNow=function(e){return this.from(l(this),e)}}})})(H);const we=H.exports,Se=Ce({__proto__:null,default:we},[H.exports]);var U={},Ee=Z.exports;Object.defineProperty(U,"__esModule",{value:!0});var z=U.default=void 0,Qe=Ee(X()),_e=ee,ke=(0,Qe.default)((0,_e.jsx)("path",{d:"m19 15-6 6-1.42-1.42L15.17 16H4V4h2v10h9.17l-3.59-3.58L13 9l6 6z"}),"SubdirectoryArrowRight");z=U.default=ke;function De({ip:p,create_date:a,content:r,comment_id:s,std_id:i,myId:t}){const{option:f,token:h}=T(),l=I(),e=I(),u=N(r),{mutate:n}=M(["updateComment"],ae,{...f,onSuccess:()=>{A()}}),{mutate:c}=M(["deleteComment"],ue,{...f,onSuccess:()=>{A()}});return d(Q,{children:[d(m,{width:"100%",children:[d(m,{display:"flex",justifyContent:"space-between",children:[d(m,{display:"flex",children:[d(b,{mr:"5px",variant:"caption",children:["\u533F\u540D( ",p," )"]}),o(b,{variant:"caption",children:_(a).fromNow()})]}),t&&t===String(i)&&d(m,{display:"flex",children:[o(E,{size:"small",color:"inherit",onClick:()=>e.open?e.onClose():e.onOpen(),children:o(b,{variant:"caption",children:"\u4FEE\u6B63"})}),o(E,{size:"small",color:"inherit",onClick:()=>l.onOpen(),children:o(b,{variant:"caption",children:"\u524A\u9664"})})]})]}),o(m,{p:2,children:o(b,{variant:"caption",children:r})})]}),t&&t===String(i)&&d(Q,{children:[d(m,{pl:4,display:`${e.open?"flex":"none"}`,children:[o(z,{sx:{mt:2}}),d(m,{flex:"1",children:[o(b,{variant:"caption",children:"\u30B3\u30E1\u30F3\u30C8 \u4FEE\u6B63"}),d(m,{display:"flex",children:[o(P,{multiline:!0,fullWidth:!0,rows:3,...u,placeholder:"\u5185\u5BB9\u3092\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044..."}),o(E,{variant:"contained",color:"disable",sx:{boxShadow:"none"},onClick:()=>{h&&n({comment_id:s,content:u.value,token:h}),e.onClose()},children:"\u63D0\u51FA"})]})]})]}),o(W,{...l,submit:()=>h&&c({comment_id:s,token:h})})]})]})}_.locale("ko");_.extend(Se);function qe({bulletinId:p,myId:a}){const{option:r,token:s}=T(),[i,t]=v.exports.useState(""),f=N(""),{mutate:h}=M(["createComment"],le,{...r,onSuccess:()=>{f.onChange(""),A()}}),{data:l}=ve(["getComments",String(p)],fe,{refetchOnMount:!1,refetchOnWindowFocus:!1});v.exports.useEffect(()=>{ie.get("https://api.ipify.org?format=json").then(u=>{const n=u.data.ip.split("."),c=[n[2],n[3]];t(c.join("."))}).catch(u=>{})},[]);const e={content:f.value,bulletin_id:p,ip:i,token:s};return d(Q,{children:[d(O,{item:!0,xs:12,p:2,children:[d(b,{children:["\u30B3\u30E1\u30F3\u30C8 ",l==null?void 0:l.data.count,"\u500B"]}),d(m,{display:"flex",children:[o(P,{multiline:!0,fullWidth:!0,rows:3,...f,placeholder:"\u5185\u5BB9\u3092\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044..."}),o(E,{variant:"contained",color:"disable",sx:{boxShadow:"none"},onClick:()=>{s&&f.value&&h(e)},children:"\u63D0\u51FA"})]})]}),o(O,{item:!0,xs:12,p:2,children:l==null?void 0:l.data.rows.map((u,n)=>v.exports.createElement(De,{myId:a,...u,key:u.comment_id+n}))})]})}function Je(){const p=te(),a=re(),r=I(),{option:s,token:i}=T(),[t,f]=v.exports.useState(),{getUserData:h}=v.exports.useContext(se);v.exports.useEffect(()=>{h().then(g=>{f(g.Username)})},[]);const l=xe(p.search).id,[{data:e},{data:u}]=Be({queries:[{queryKey:["getAnnonymousDetail",l],queryFn:pe,refetchOnMount:!1,refetchOnWindowFocus:!1},{queryKey:["getAnnonymousImage",l],queryFn:me,refetchOnMount:!1,refetchOnWindowFocus:!1}]}),n=()=>{a("/board/annonymous/update",{state:{detail:e==null?void 0:e.data,image:u==null?void 0:u.data}})},{mutate:c}=M(["deleteBulletinItem"],ce,{...s,onSuccess:()=>a(-1)}),{mutate:y}=M(["viewBulletin"],he),{mutate:B}=M(["clickHot"],de,{...s,onSuccess:()=>ne(),onError:()=>alert("\u4E00\u56DE\u4EE5\u4E0A\u62BC\u3057\u305F\u5C65\u6B74\u304C\u3042\u308A\u307E\u3059")});return v.exports.useEffect(()=>{i&&y({bulletin_id:l})},[]),d(Q,{children:[d(O,{maxWidth:"md",margin:"auto",container:!0,children:[o(O,{item:!0,xs:12,mt:5,p:2,children:o(b,{variant:"h6",children:e==null?void 0:e.data.title})}),d(O,{item:!0,xs:12,pl:2,display:"flex",justifyContent:"space-between",borderBottom:1,pb:2,borderColor:"gainsboro",children:[d(m,{display:"flex",letterSpacing:1,children:[d(b,{mr:"10px",children:[e==null?void 0:e.data.std_name," "]}),o(b,{mr:"10px",children:_().format("YYYY-MM-DD")}),o(b,{children:"\u30B3\u30E1\u30F3\u30C8:0\u500B"})]}),t&&t===String(e==null?void 0:e.data.std_id)&&d(m,{display:"flex",letterSpacing:1,children:[o(j,{onClick:r.onOpen,children:o(Y,{})}),o(j,{onClick:n,children:o(oe,{})})]})]}),u&&u.data.map((g,w)=>o(O,{item:!0,xs:12,p:2,children:o("img",{src:g.path})},w)),o(O,{item:!0,xs:12,p:2,children:o(b,{variant:"caption",sx:{wordBreak:"break-all"},children:e==null?void 0:e.data.content})}),o(O,{item:!0,xs:12,borderBottom:1,pb:2,borderColor:"gainsboro",children:o(m,{display:"flex",alignItems:"center",justifyContent:"center",children:o(m,{border:1,borderRadius:2,borderColor:"gainsboro",children:d(j,{onClick:()=>{i&&B({bulletin_id:p.state.bulletin_id,token:i})},children:[o(ge,{}),o(b,{variant:"caption",children:e==null?void 0:e.data.hot})]})})})}),o(qe,{bulletinId:e==null?void 0:e.data.bulletin_id,myId:String(e==null?void 0:e.data.std_id)})]}),o(W,{...r,submit:()=>i&&c({bulletin_id:e==null?void 0:e.data.bulletin_id,token:i})})]})}export{Je as default};
