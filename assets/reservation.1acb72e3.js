import{r as a}from"./request.8b527825.js";function n({queryKey:t}){if(t[1]!=null)return a.get("/stayout",{headers:{Authorization:t[1]},params:{limit:t[2],start_date:t[3],end_date:t[4]}})}function o({queryKey:t}){if(t[1]!=null)return a.get("/hlth",{headers:{Authorization:t[1]},params:{limit:t[2],start_date:t[3],end_date:t[4]}})}function s({queryKey:t}){if(t[1]!=null)return a.get("/bus",{headers:{Authorization:t[1]},params:{limit:t[2],start_date:t[3],end_date:t[4]}})}function d({queryKey:t}){if(t[1]!=null)return a.get("/as",{headers:{Authorization:t[1]},params:{limit:t[2],start_date:t[3],end_date:t[4]}})}export{s as a,o as b,n as c,d as g};