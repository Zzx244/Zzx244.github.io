"use strict";(self["webpackChunkzzx"]=self["webpackChunkzzx"]||[]).push([[713],{5713:function(e,l,a){a.r(l),a.d(l,{default:function(){return G}});var t=a(3396),u=a(4870),o=a(7139),n=(a(560),a(2483)),r={__name:"returnButton",setup(e){const l=(0,n.tv)(),a=()=>{l.push("/")};return(e,l)=>{const u=(0,t.up)("el-button");return(0,t.wg)(),(0,t.j4)(u,{type:"primary",onClick:l[0]||(l[0]=e=>a())},{default:(0,t.w5)((()=>[(0,t.Uk)("返回主页")])),_:1})}}};const i=r;var s=i;const m={class:"title"},d={class:"button"};var v={__name:"victoryDialog",props:["length","content"],setup(e){const l=e;return(e,a)=>{const n=(0,t.up)("el-button"),r=(0,t.up)("el-dialog");return(0,t.wg)(),(0,t.j4)(r,{width:"350px"},{default:(0,t.w5)((()=>[(0,t._)("div",m,"恭喜“"+(0,o.zw)(l.content)+"”方胜利!",1),(0,t._)("div",d,[(0,t.Wm)(n,{type:"primary",onClick:a[0]||(a[0]=e=>l.length())},{default:(0,t.w5)((()=>[(0,t.Uk)("再来一把")])),_:1}),(0,t.Wm)((0,u.SU)(s))])])),_:1})}}},c=a(89);const p=(0,c.Z)(v,[["__scopeId","data-v-39f5573b"]]);var f=p;const w={class:"container"},_={class:"checkerboardTitle"},g={class:"prompt"},k={class:"checkerboard"},y=["onClick"],z={key:0,class:"function-buttons"};var W={__name:"goBang",setup(e){const l=(0,u.qj)({size:9,equipment:""}),a=(0,u.iH)(!0),n=["X","O"],r=(0,u.iH)(!1),i=(0,u.iH)([]),m=(0,u.iH)(),d=(0,u.iH)(),v=(0,u.iH)(!0),c={equipment:[{required:!0,message:"请选择设备类型",trigger:"blur"}]},p=(0,u.iH)();let W=0;(0,t.bv)((()=>{x(),m.value=Math.round(window.innerWidth/31-2),d.value=Math.round(window.innerHeight/31),console.log(d.value),console.log(m.value)}));const x=()=>{i.value=Array.from({length:l.size},(()=>Array(l.size>m.value?m.value:l.size).fill(""))),!0===r.value&&(r.value=!1),W=0,console.log(i.value)},b=(e,l)=>{""===i.value[e][l]&&(i.value[e][l]=n[W],W++,W>1&&(W=0),U(e,l))},h=e=>{e&&e.validate(((e,l)=>{e?(x(),a.value=!1):console.log(l)}))},U=(e,l)=>{let a=[];const t=e=>{e.every((e=>e===n[(W+1)%2]))&&(r.value=!0)};for(let u=0;u<i.value[e].length-4;u++){a=[i.value[e][u],i.value[e][u+1],i.value[e][u+2],i.value[e][u+3],i.value[e][u+4]],t(a),a=[i.value[u][l],i.value[u+1][l],i.value[u+2][l],i.value[u+3][l],i.value[u+4][l]],t(a);for(let l=0;l<i.value[e].length-4;l++)a=[i.value[u][l],i.value[u+1][l+1],i.value[u+2][l+2],i.value[u+3][l+3],i.value[u+4][l+4]],t(a);for(let l=i.value[e].length-1;l>3;l--)a=[i.value[u][l],i.value[u+1][l-1],i.value[u+2][l-2],i.value[u+3][l-3],i.value[u+4][l-4]],t(a)}};return(e,m)=>{const d=(0,t.up)("el-button"),U=(0,t.up)("el-button-group"),C=(0,t.up)("el-radio"),V=(0,t.up)("el-radio-group"),q=(0,t.up)("el-form-item"),H=(0,t.up)("el-option"),D=(0,t.up)("el-select"),S=(0,t.up)("el-form"),j=(0,t.up)("el-dialog");return(0,t.wg)(),(0,t.iD)(t.HY,null,[(0,t._)("div",w,[(0,t._)("div",_,[(0,t._)("div",g,(0,o.zw)(n[(0,u.SU)(W)]),1),(0,t.Uk)(" 请落子 "),v.value?(0,t.kq)("",!0):((0,t.wg)(),(0,t.j4)(d,{key:0,type:"primary",onClick:m[0]||(m[0]=e=>v.value=!0)},{default:(0,t.w5)((()=>[(0,t.Uk)("显示")])),_:1}))]),(0,t._)("div",k,[((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(i.value,((e,l)=>((0,t.wg)(),(0,t.iD)("div",{key:l,class:"row"},[((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(e,((e,a)=>((0,t.wg)(),(0,t.iD)("div",{key:a,class:"col",onClick:e=>b(l,a)},(0,o.zw)(e),9,y)))),128))])))),128))]),v.value?((0,t.wg)(),(0,t.iD)("div",z,[(0,t.Wm)(U,null,{default:(0,t.w5)((()=>[(0,t.Wm)(d,{type:"primary",onClick:m[1]||(m[1]=e=>v.value=!1)},{default:(0,t.w5)((()=>[(0,t.Uk)("隐藏")])),_:1}),(0,t.Wm)(d,{type:"primary",onClick:m[2]||(m[2]=e=>a.value=!0)},{default:(0,t.w5)((()=>[(0,t.Uk)("设置")])),_:1}),(0,t.Wm)(d,{type:"primary",onClick:m[3]||(m[3]=e=>x())},{default:(0,t.w5)((()=>[(0,t.Uk)("清空")])),_:1}),(0,t.Wm)((0,u.SU)(s))])),_:1})])):(0,t.kq)("",!0)]),(0,t.Wm)(j,{modelValue:a.value,"onUpdate:modelValue":m[7]||(m[7]=e=>a.value=e),title:"棋盘设置",width:"350px","close-on-click-modal":!1},{default:(0,t.w5)((()=>[(0,t.Wm)(S,{"label-width":"120px",model:l,rules:c,ref_key:"setFormDataRef",ref:p},{default:(0,t.w5)((()=>[(0,t.Wm)(q,{label:"设备详情：",prop:"equipment"},{default:(0,t.w5)((()=>[(0,t.Wm)(V,{modelValue:l.equipment,"onUpdate:modelValue":m[4]||(m[4]=e=>l.equipment=e),class:"ml-4"},{default:(0,t.w5)((()=>[(0,t.Wm)(C,{label:"mobile",size:"large"},{default:(0,t.w5)((()=>[(0,t.Uk)("移动端")])),_:1}),(0,t.Wm)(C,{label:"pc",size:"large"},{default:(0,t.w5)((()=>[(0,t.Uk)("PC端")])),_:1})])),_:1},8,["modelValue"])])),_:1}),l.equipment?((0,t.wg)(),(0,t.j4)(q,{key:0,label:"棋盘大小:"},{default:(0,t.w5)((()=>[(0,t.Wm)(D,{modelValue:l.size,"onUpdate:modelValue":m[5]||(m[5]=e=>l.size=e),modelModifiers:{number:!0}},{default:(0,t.w5)((()=>[(0,t.Wm)(H,{value:"9",label:"9"}),(0,t.Wm)(H,{value:"16",label:"16"}),"pc"===l.equipment?((0,t.wg)(),(0,t.j4)(H,{key:0,value:"25",label:"25"})):(0,t.kq)("",!0),"pc"===l.equipment?((0,t.wg)(),(0,t.j4)(H,{key:1,value:"36",label:"36"})):(0,t.kq)("",!0)])),_:1},8,["modelValue"])])),_:1})):(0,t.kq)("",!0),(0,t.Wm)(q,null,{default:(0,t.w5)((()=>[(0,t.Wm)(d,{type:"primary",onClick:m[6]||(m[6]=e=>h(p.value))},{default:(0,t.w5)((()=>[(0,t.Uk)("确定")])),_:1})])),_:1})])),_:1},8,["model"])])),_:1},8,["modelValue"]),(0,t.Wm)((0,u.SU)(f),{length:x,content:n[((0,u.SU)(W)+1)%2],modelValue:r.value,"onUpdate:modelValue":m[8]||(m[8]=e=>r.value=e)},null,8,["content","modelValue"])],64)}}};const x=(0,c.Z)(W,[["__scopeId","data-v-073a527f"]]);var b=x,h=a(7178),U={__name:"cs-code",props:["code","type"],setup(e){const l=e,a=(0,u.iH)("js"===l.type?"js":"模版"),n=()=>{a.value="复制"},r=()=>{a.value="js"===l.type?"js":"模版"},i=async()=>{try{await navigator.clipboard.writeText(l.code),(0,h.z8)({message:"复制成功",type:"success"})}catch(e){h.z8.error(e)}};return(e,u)=>((0,t.wg)(),(0,t.iD)("div",{class:"codeClone",onMouseover:u[1]||(u[1]=e=>n()),onMouseout:u[2]||(u[2]=e=>r())},[(0,t._)("button",{onClick:u[0]||(u[0]=e=>i())},[(0,t._)("span",null,(0,o.zw)(a.value),1)]),(0,t._)("pre",null,(0,o.zw)(l.code),1)],32))}};const C=(0,c.Z)(U,[["__scopeId","data-v-7fff5d60"]]);var V=C;const q={class:"titleHead"};var H={__name:"cs-title",props:["title"],setup(e){return(l,a)=>((0,t.wg)(),(0,t.iD)("div",q,(0,o.zw)(e.title),1))}};const D=(0,c.Z)(H,[["__scopeId","data-v-0d56bcaa"]]);var S=D;const j={class:"text"};var P={__name:"cs-text",props:["text"],setup(e){return(l,a)=>((0,t.wg)(),(0,t.iD)("div",j,(0,o.zw)(e.text),1))}};const A=(0,c.Z)(P,[["__scopeId","data-v-6a738e86"]]);var I=A,Z=a(2748);const M={class:"show"},Y="创建一个二维数组的方法，数组的尺寸由 form.size 和 maxPx.value 决定",B="先来看一下 Array.from() 这个函数。Array.from() 方法从一个类似数组或可迭代对象中创建一个新的、浅拷贝的数组实例。这里的 { length: form.size } 是一个含有 length 属性的对象，Array.from() 会将其视为数组并创建一个长度为 form.size 的新数组。",K="Array.from() 的第二个参数是一个映射函数，用于对每个元素进行处理。在这里，它返回另一个数组 Array(form.size > maxPx.value ? maxPx.value : form.size).fill('')。这个数组的长度由 form.size > maxPx.value ? maxPx.value : form.size 这个三元运算符决定，即如果 form.size 大于 maxPx.value，则长度为 maxPx.value，否则为 form.size。然后 .fill('') 将数组填充为空字符串。",N='Array.from({ length: form.size }, () =>\n    Array(form.size > maxPx.value ? maxPx.value : form.size).fill("")\n);';var T={__name:"codeShow",setup(e){const l=(0,u.iH)(!1);return(e,a)=>{const o=(0,t.up)("el-icon"),n=(0,t.up)("el-button"),r=(0,t.up)("el-collapse-item"),i=(0,t.up)("el-collapse"),s=(0,t.up)("el-drawer");return(0,t.wg)(),(0,t.iD)(t.HY,null,[(0,t._)("div",M,[(0,t.Wm)(n,{type:"primary",round:"",onClick:a[0]||(a[0]=e=>l.value=!0)},{default:(0,t.w5)((()=>[(0,t.Uk)(" 逻辑展示 "),(0,t.Wm)(o,null,{default:(0,t.w5)((()=>[(0,t.Wm)((0,u.SU)(Z.gbg))])),_:1})])),_:1})]),(0,t.Wm)(s,{modelValue:l.value,"onUpdate:modelValue":a[2]||(a[2]=e=>l.value=e),title:"逻辑展示",direction:"btt",size:"75%"},{default:(0,t.w5)((()=>[(0,t.Wm)(i,{modelValue:e.activeNames,"onUpdate:modelValue":a[1]||(a[1]=l=>e.activeNames=l),onChange:e.handleChange},{default:(0,t.w5)((()=>[(0,t.Wm)(r,{title:"搭建",name:"1"},{default:(0,t.w5)((()=>[(0,t.Wm)((0,u.SU)(S),{title:"棋盘搭建"}),(0,t.Wm)((0,u.SU)(I),{text:Y}),(0,t.Wm)((0,u.SU)(V),{code:N,type:"js"}),(0,t.Wm)((0,u.SU)(I),{text:B}),(0,t.Wm)((0,u.SU)(I),{text:K})])),_:1}),(0,t.Wm)(r,{title:"教研",name:"2"})])),_:1},8,["modelValue","onChange"])])),_:1},8,["modelValue"])],64)}}};const F=(0,c.Z)(T,[["__scopeId","data-v-158a7098"]]);var O=F;const R={class:"container"};var X={__name:"index",setup(e){return(e,l)=>((0,t.wg)(),(0,t.iD)("div",R,[(0,t.Wm)(O),(0,t.Wm)((0,u.SU)(b))]))}};const E=X;var G=E}}]);
//# sourceMappingURL=713.e35b8ed9.js.map