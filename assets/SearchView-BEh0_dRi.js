import{s as c,_ as h,u as k}from"./index-Bprezk9v.js";import{d as y}from"./formatters-DZZy5CRR.js";import{d as w,x as d,f as x,D as V,E as P,c as C,w as s,r as i,a as l,e,l as F,o as D,_ as E}from"./index-BJI6QUrN.js";const S=[{title:"日期",key:"date"},{title:"發票號碼",key:"invoice_number",sortable:!1},{title:"產品代號",key:"product_code",sortable:!1},{title:"產品名稱",key:"name",sortable:!1},{title:"銷售數",key:"count",sortable:!1},{title:"發票金額",key:"price"},{title:"小計",key:"subtotal"},{title:"備註",key:"note",sortable:!1}],B=w({__name:"SearchView",setup(L){const[p,R]=d(!1),[o,r]=d(!1),t=x([]),u=V(()=>c.length<10||o.value);async function _(){await r(!0);const n=k(window,"afterprint",()=>{r(!1),n()});window.print()}return P(()=>t.value,n=>{n.forEach(a=>console.log(y(a)))}),(n,a)=>{const m=i("v-date-input"),f=i("v-btn"),v=h,g=i("v-container");return D(),C(g,{class:"py-8"},{default:s(()=>[l(v,{title:"對帳單查詢",items:e(c),headers:e(S),filterKeys:["name","invoice_number"],isPrint:e(o),hideFooter:e(u),loading:e(p)},{header:s(()=>[l(m,{modelValue:e(t),"onUpdate:modelValue":a[0]||(a[0]=b=>F(t)?t.value=b:null),label:"日期範圍",multiple:"range","prepend-inner-icon":"mdi-calendar-range","prepend-icon":"",rounded:"lg"},null,8,["modelValue"])]),actions:s(()=>[l(f,{text:"列印","prepend-icon":"mdi-printer-outline",rounded:"lg",variant:"flat",loading:e(o),onClick:_},null,8,["loading"])]),_:1},8,["items","headers","isPrint","hideFooter","loading"])]),_:1})}}}),T=E(B,[["__scopeId","data-v-122223b6"]]);export{T as default};
