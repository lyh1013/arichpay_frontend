import{d as p,M as g,q as w,N as x,c as b,w as a,O as o,P as V,r as S,o as h,a as e,Q as t,I as k,B as v,R as y,S as r,T as C,z as B,g as d,U as R,b as N,E as T}from"./index-BmHhwhui.js";import{_ as q}from"./logo-E1UMy5EY.js";const F={class:"d-flex align-end flex-column w-100"},M=p({__name:"SigninView",setup(L){const[c,n]=g(!1);V();const{login:u}=w(),{handleSubmit:f}=x({validationSchema:{account:"required",password:"required"},initialValues:{account:"ideaxpress",password:"arichpay"}}),m=f(async l=>{n(!0),await u(l),n(!1)});return(l,s)=>{const i=R,_=S("RouterLink");return h(),b(o,null,{default:a(()=>[e(t,{cols:"12",lg:"4",md:"6",sm:"8","offset-lg":"4","offset-md":"3","offset-sm":"2"},{default:a(()=>[e(k,{class:"pa-8"},{default:a(()=>[e(o,{class:"ga-4"},{default:a(()=>[e(t,{cols:"12",class:"d-flex justify-center align-center flex-column"},{default:a(()=>[e(v,{"max-width":"200",width:"200",src:q,cover:""}),e(y,{class:"font-weight-bold"},{default:a(()=>s[0]||(s[0]=[r("客戶服務平台")])),_:1})]),_:1}),e(t,{cols:"12"},{default:a(()=>[e(C,{onSubmit:B(d(m),["prevent"])},{default:a(()=>[e(o,null,{default:a(()=>[e(t,{cols:"12"},{default:a(()=>[e(i,{name:"account",label:"帳號","prepend-inner-icon":"mdi-account-outline"})]),_:1}),e(t,{cols:"12"},{default:a(()=>[N("div",F,[e(_,{class:"text-blue text-body-2 mb-1",to:"/forget",rel:"noopener noreferrer"},{default:a(()=>s[1]||(s[1]=[r("忘記密碼?")])),_:1}),e(i,{name:"password",type:"password",label:"密碼","prepend-inner-icon":"mdi-lock-outline",class:"w-100"})])]),_:1}),e(t,{cols:"12"},{default:a(()=>[e(T,{loading:d(c),size:"large",type:"submit",variant:"flat",block:"",text:"登入"},null,8,["loading"])]),_:1})]),_:1})]),_:1},8,["onSubmit"])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})}}});export{M as default};
