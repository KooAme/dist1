import{r as n}from"./request.3b3d933e.js";function a({queryKey:t}){return n.get("/notice",{params:{page:t[1],limit:t[2]}})}function i({queryKey:t}){return n.get("/bulletin",{params:{page:t[1],limit:t[2]}})}function o({queryKey:t}){return n.get("/hot",{params:{page:t[1],limit:t[2]}})}function r({queryKey:t}){return n.get("/bulletin/search",{params:{page:t[1],limit:t[2],keyword:t[3]}})}function m({queryKey:t}){return n.get("/bulletin/detail",{params:{bulletin_id:t[1]}})}function s({queryKey:t}){return n.get("/notice/detail",{params:{notice_id:t[1]}})}function g({queryKey:t}){return n.get("/bulletin/image",{params:{bulletin_id:t[1]}})}function u({queryKey:t}){return n.get("/comment",{params:{bulletin_id:t[1]}})}export{m as a,g as b,i as c,r as d,o as e,s as f,u as g,a as h};
