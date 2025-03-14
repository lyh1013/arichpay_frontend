import{d as P,D as h,c as w,r as s,e as n,w as a,G as T,o as p,u as K,a as o,H as j,T as q,A as z,t as N,b as g,_ as F,x,f as A,E as J,l as b,g as B}from"./index-BJI6QUrN.js";import{c as E,_ as Q,u as X}from"./index-Bprezk9v.js";import{d as Y}from"./formatters-DZZy5CRR.js";import{h as Z}from"./credit-note-Dh6deeBR.js";var I=(e=>(e.success="success",e.info="info",e.warning="warning",e.error="error",e))(I||{});const M=P({__name:"SnackbarToast",props:{type:{default:"success"},timeout:{default:3500}},setup(e){const r=h(()=>I[e.type]);return(v,d)=>{const u=s("v-snackbar");return p(),w(u,{timeout:v.timeout,color:n(r),variant:"tonal"},{default:a(()=>[T(v.$slots,"default")]),_:3},8,["timeout","color"])}}}),ee={class:"mx-auto"};var U=(e=>(e.success="animate__animated animate__bounceIn animate__fast",e.info="animate__animated animate__zoomIn",e.warning="animate__animated animate__tada",e.error="animate__animated  animate__tada",e))(U||{}),W=(e=>(e.success="success",e.info="indigo-lighten-2",e.warning="orange-lighten-2",e.error="red-lighten-2",e))(W||{});const te=P({__name:"AlertDialog",props:{icon:{default:""},type:{default:"success"},size:{default:"sm"}},setup(e){const{thresholds:r}=K(),v=h(()=>r.value[e.size]),d=h(()=>U[e.type]),u=h(()=>W[e.type]);return(l,S)=>{const _=s("v-btn"),V=s("v-icon"),m=s("v-card-title"),i=s("v-card-text"),$=s("v-card-item"),y=s("v-card-actions"),C=s("v-card"),f=s("v-dialog");return p(),w(f,{maxWidth:n(v),opacity:"0.15",class:"mx-auto"},{default:a(({isActive:t})=>[o(C,{class:"text-center"},{append:a(()=>[o(_,{icon:"$close",variant:"text",color:"grey-lighten-1",onClick:D=>t.value=!1},null,8,["onClick"])]),default:a(()=>[o($,{class:"mt-n7"},{default:a(()=>[o(q,{appear:"","enter-active-class":n(d)},{default:a(()=>[o(V,{color:n(u),icon:l.icon,size:"70",class:"mb-2"},null,8,["color","icon"])]),_:1},8,["enter-active-class"]),o(m,{class:"my-2 font-weight-bold"},{default:a(()=>[z(N(l.$attrs.title),1)]),_:1}),o(i,{class:"text-body-1"},{default:a(()=>[T(l.$slots,"default",{},void 0,!0)]),_:3})]),_:3}),l.$slots.action?(p(),w(y,{key:0,class:"pa-4"},{default:a(()=>[g("div",ee,[T(l.$slots,"action",{},void 0,!0),o(_,{class:"mx-2",text:"取消",variant:"outlined",color:"grey-600",onClick:D=>t.value=!1},null,8,["onClick"])])]),_:2},1024)):j("",!0)]),_:2},1024)]),_:3},8,["maxWidth"])}}}),ne=F(te,[["__scopeId","data-v-d86ecd58"]]),oe={class:"d-flex align-center ga-3"},ae={key:0},se={class:"bg-grey-lighten-4 pa-2 rounded-lg"},ie={key:1},le={class:"d-flex align-center ga-2"},ce=P({__name:"ConfirmView",setup(e){const[r,v]=x(!1),[d,u]=x(!1),[l,S]=x(!1),[_,V]=x(!1),m=A([]),i=A([]),$=h(()=>E.length<10||d.value);async function y(f){await u(!0),console.log(i.value);const t=X(window,"afterprint",()=>{u(!1),t()});window.print()}function C(){if(!i.value.length){V(!0);return}S(!0)}return J(()=>m.value,f=>{f.forEach(t=>console.log(Y(t)))}),(f,t)=>{const D=s("v-date-input"),k=s("v-btn"),L=Q,O=ne,R=s("v-icon"),G=M,H=s("v-container");return p(),w(H,{class:"py-8 py-md-6"},{default:a(()=>[o(L,{title:"折讓單確認",selected:n(i),"onUpdate:selected":t[1]||(t[1]=c=>b(i)?i.value=c:null),items:n(E),headers:n(Z),filterKeys:["name","invoice_number"],isPrint:n(d),hideFooter:n($),"show-select":!0,loading:n(r)},{header:a(()=>[o(D,{modelValue:n(m),"onUpdate:modelValue":t[0]||(t[0]=c=>b(m)?m.value=c:null),label:"日期範圍",multiple:"range","prepend-inner-icon":"mdi-calendar-range","prepend-icon":"",rounded:"lg"},null,8,["modelValue"])]),actions:a(()=>[g("div",oe,[o(k,{text:"確認折讓","prepend-icon":"mdi-check",rounded:"lg",variant:"flat",loading:n(r),onClick:C},null,8,["loading"]),o(k,{text:"列印","prepend-icon":"mdi-printer-outline",rounded:"lg",variant:"outlined",color:"indigo-darken-2",loading:n(d),onClick:y},null,8,["loading"])])]),"item.actions":a(({item:c})=>[o(k,{icon:"mdi-printer-outline",onClick:re=>y(c.id),variant:"text",color:"indigo-lighten-2"},null,8,["onClick"])]),_:1},8,["selected","items","headers","isPrint","hideFooter","loading"]),o(O,{modelValue:n(l),"onUpdate:modelValue":t[2]||(t[2]=c=>b(l)?l.value=c:null),icon:"mdi-help-circle",transition:"scale-transition",persistent:"",type:"warning",size:"xs"},{action:a(()=>[o(k,{text:"確認",variant:"flat",color:"deep-purple-lighten-1"})]),default:a(()=>[n(i).length===1?(p(),B("div",ae,[t[4]||(t[4]=z(" 確定要折讓 ")),g("span",se,N(n(i)[0].invoice_number),1),t[5]||(t[5]=z(" 嗎? "))])):(p(),B("div",ie,"確定要折讓選取的 "+N(n(i).length)+" 筆資料嗎?",1))]),_:1},8,["modelValue"]),o(G,{modelValue:n(_),"onUpdate:modelValue":t[3]||(t[3]=c=>b(_)?_.value=c:null),type:"error",rounded:"lg"},{default:a(()=>[g("div",le,[o(R,{icon:"mdi-alert"}),t[6]||(t[6]=g("span",{class:"text-body-1"},"請選擇至少一筆資料",-1))])]),_:1},8,["modelValue"])]),_:1})}}}),pe=F(ce,[["__scopeId","data-v-c011c9f6"]]);export{pe as default};
