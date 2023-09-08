import{L as S,M as N,E as w,B as G,N as O,D as L,r as y,O as b,e as h,I as $,P as C,A as B,Q as z,R,S as T,G as U,H as F,K as D,_ as K,u as j,a as H,o as M,b as V,c as x,d as t,w as P,F as q,g as A,t as p,j as Q,p as X,k as Y}from"./index-5e3051ec.js";import{S as J}from"./index-0f76cfe5.js";import{c as W}from"./index-56caebaf.js";import{s as Z,a as ee}from"./function-call-cb4b542b.js";import{u as oe}from"./use-expose-52ad8c3a.js";import"./http-c830e3c3.js";const I={name:S,disabled:Boolean,iconSize:N,modelValue:S,checkedColor:String,labelPosition:String,labelDisabled:Boolean};var ae=w({props:G({},I,{bem:O(Function),role:String,shape:String,parent:Object,checked:Boolean,bindGroup:L}),emits:["click","toggle"],setup(e,{emit:v,slots:_}){const s=y(),i=o=>{if(e.parent&&e.bindGroup)return e.parent.props[o]},n=b(()=>{if(e.parent&&e.bindGroup){const o=i("disabled")||e.disabled;if(e.role==="checkbox"){const u=i("modelValue").length,d=i("max"),c=d&&u>=+d;return o||c&&!e.checked}return o}return e.disabled}),m=b(()=>i("direction")),l=b(()=>{const o=e.checkedColor||i("checkedColor");if(o&&e.checked&&!n.value)return{borderColor:o,backgroundColor:o}}),r=b(()=>e.shape||i("shape")||"round"),k=o=>{const{target:u}=o,d=s.value,c=d===u||(d==null?void 0:d.contains(u));!n.value&&(c||!e.labelDisabled)&&v("toggle"),v("click",o)},f=()=>{var o,u;const{bem:d,checked:c}=e,g=e.iconSize||i("iconSize");return h("div",{ref:s,class:d("icon",[r.value,{disabled:n.value,checked:c}]),style:r.value!=="dot"?{fontSize:C(g)}:{width:C(g),height:C(g),borderColor:(o=l.value)==null?void 0:o.borderColor}},[_.icon?_.icon({checked:c,disabled:n.value}):r.value!=="dot"?h($,{name:"success",style:l.value},null):h("div",{class:d("icon--dot__icon"),style:{backgroundColor:(u=l.value)==null?void 0:u.backgroundColor}},null)])},a=()=>{if(_.default)return h("span",{class:e.bem("label",[e.labelPosition,{disabled:n.value}])},[_.default()])};return()=>{const o=e.labelPosition==="left"?[a(),f()]:[f(),a()];return h("div",{role:e.role,class:e.bem([{disabled:n.value,"label-disabled":e.labelDisabled},m.value]),tabindex:n.value?void 0:0,"aria-checked":e.checked,onClick:k},[o])}}});const[te,Ie]=B("checkbox-group"),ce=Symbol(te),[se,ne]=B("checkbox"),le=G({},I,{shape:String,bindGroup:L});var ie=w({name:se,props:le,emits:["change","update:modelValue"],setup(e,{emit:v,slots:_}){const{parent:s}=z(ce),i=l=>{const{name:r}=e,{max:k,modelValue:f}=s.props,a=f.slice();if(l)!(k&&a.length>=+k)&&!a.includes(r)&&(a.push(r),e.bindGroup&&s.updateValue(a));else{const o=a.indexOf(r);o!==-1&&(a.splice(o,1),e.bindGroup&&s.updateValue(a))}},n=b(()=>s&&e.bindGroup?s.props.modelValue.indexOf(e.name)!==-1:!!e.modelValue),m=(l=!n.value)=>{s&&e.bindGroup?i(l):v("update:modelValue",l)};return R(()=>e.modelValue,l=>v("change",l)),oe({toggle:m,props:e,checked:n}),T(()=>e.modelValue),()=>h(ae,F({bem:ne,role:"checkbox",parent:s,checked:n.value,onToggle:m},e),U(_,["default","icon"]))}});const de=D(ie);D(Z);const E=e=>(X("data-v-5235de91"),e=e(),Y(),e),re={class:"nav"},ue=E(()=>t("div",{class:"tip"},[t("div",{class:"info"},"30天无忧退货"),t("div",{class:"info"},"48小时快速退款"),t("div",{class:"info"},"满88元免邮费")],-1)),he={class:"goodList"},_e={class:"goods-img"},ve=["src","onClick"],be={class:"content"},me={class:"title"},ke={class:"footer"},fe={class:"price"},ge={class:"count"},pe={class:"payment"},Ce={class:"alChecked"},Ve={class:"total"},xe=E(()=>t("span",{class:"left"},"实付：",-1)),ye={class:"price"},Se={__name:"CartView",setup(e){const v=j(),_=b(()=>s.list.reduce((a,o)=>o.checked?a+=o.number*o.retail_price:a,0)),s=H({list:[]}),i=b({get(){return s.list.every(a=>a.checked)},set(a){s.list.forEach(o=>{o.checked=a})}});M(()=>{m()});const n=a=>{v.push({name:"GoodsDetail",params:{id:a}})},m=async()=>{let a=await W();a.data.forEach(o=>{o.checked=!1}),s.list=a.data,console.log("cart",a)},l=y(0),r=y(),k=()=>{let a=new Date().getTime();console.log(a),a-l.value<=300&&(console.log(1111),r.value.scrollIntoView({behavior:"smooth",block:"start"})),l.value=a},f=()=>{ee({type:"warning",message:"接口尚未开通"})};return(a,o)=>{const u=J,d=de;return V(),x("div",{class:"cartList-container",ref_key:"cartListContainer",ref:r},[t("div",re,[h(u,null,{default:P(()=>[t("div",{class:"head van-haptics-feedback",onClick:k},"购物车")]),_:1})]),ue,t("div",he,[(V(!0),x(q,null,A(s.list,c=>(V(),x("div",{class:"goods",key:c.id},[t("div",_e,[h(d,{modelValue:c.checked,"onUpdate:modelValue":g=>c.checked=g,class:"select-box","checked-color":"#cea62a"},null,8,["modelValue","onUpdate:modelValue"]),t("img",{class:"img van-haptics-feedback",src:c.list_pic_url,alt:"",onClick:g=>n(c.goods_id)},null,8,ve)]),t("div",be,[t("div",me,p(c.goods_name),1),t("div",ke,[t("div",fe,"￥"+p(c.retail_price)+"元",1),t("div",ge,"× "+p(c.number),1)])])]))),128))]),t("div",pe,[t("div",Ce,[h(d,{modelValue:i.value,"onUpdate:modelValue":o[0]||(o[0]=c=>i.value=c),class:"allchecked","checked-color":"#cea62a"},{default:P(()=>[Q("全选 ")]),_:1},8,["modelValue"])]),t("div",Ve,[xe,t("div",ye,"￥"+p(_.value),1)]),t("button",{class:"pay-btn van-haptics-feedback",onClick:f},"支付")])],512)}}},Ee=K(Se,[["__scopeId","data-v-5235de91"]]);export{Ee as default};
