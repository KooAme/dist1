import{r as e}from"./request.3b3d933e.js";async function r({as_id:t,token:a}){return await e.post("/as/delete",{as_id:t},{headers:{Authorization:a||""}})}async function u({token:t,...a}){return await e.post("/as/update",a,{headers:{Authorization:t||""}})}async function i({token:t,...a}){return await e.post("/as/create",a,{headers:{Authorization:t||""}})}async function n({bus_req_id:t,token:a}){return await e.post("/bus/delete",{bus_req_id:t},{headers:{Authorization:a||""}})}async function o({token:t,...a}){return await e.post("/bus/create",a,{headers:{Authorization:t||""}})}async function h({hlth_id:t,token:a}){return await e.post("/hlth/delete",{hlth_id:t},{headers:{Authorization:a||""}})}async function c({token:t,...a}){return await e.put("/hlth/update",a,{headers:{Authorization:t||""}})}async function d({token:t,...a}){return await e.post("/hlth/create",a,{headers:{Authorization:t||""}})}async function p({token:t,stayout_id:a}){return await e.post("/stayout/delete",{stayout_id:a},{headers:{Authorization:t||""}})}async function m({token:t,...a}){return await e.post("/stayout/update",a,{headers:{Authorization:t||""}})}async function y({token:t,...a}){return await e.post("/stayout/create",a,{headers:{Authorization:t||""}})}export{u as a,i as b,n as c,o as d,h as e,c as f,d as g,p as h,m as i,y as j,r as m};
