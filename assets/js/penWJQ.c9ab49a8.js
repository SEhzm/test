import{E as s,a as J,c as N,r as I,d as q,q as M,v as R,g as j,k as A,n as L,o as O,p as H,b as X,m as Y}from"./element-plus.ec180c6b.js";import{r as f}from"./request.39193e0d.js";import{_ as Z}from"./index.6833bc55.js";import{r as $,_ as G,o as C,c as K,a as g,V as t,P as o,Q as ee,O as te,F as ae,T as m}from"./@vue.7a8f7aed.js";import"./lodash-es.2e98bc53.js";import"./@vueuse.65cb1fed.js";import"./@element-plus.b6e46eba.js";import"./@popperjs.c75af06c.js";import"./@ctrl.f8748455.js";import"./dayjs.de1d8cda.js";import"./async-validator.dee29e8b.js";import"./memoize-one.297ddbcb.js";import"./normalize-wheel-es.ed76fb12.js";import"./@floating-ui.c9ffdb72.js";import"./axios.28bc18a3.js";import"./vue-router.f6176e51.js";const oe={class:"cardTable"},le={class:"pagination-wrapper"},re={class:"dialog-footer"},ne={__name:"penWJQ",setup(se){const v=$(!0),V={table:[{required:!0,message:"请选择分栏",trigger:"blur"}],barrage:[{required:!0,message:"请输入弹幕",trigger:"blur"}]},e=G({tableData:[],total:0,pageSize:50,currentPage:1,dialogFormVisible:!1,table:"",barrage:""}),d=(l=1)=>{f.get("/machine/penWJQ/Page",{params:{pageNum:l,pageSize:e.pageSize}}).then(a=>{var r,i;e.tableData=((r=a.data)==null?void 0:r.list)||[],e.total=((i=a.data)==null?void 0:i.total)||0,v.value=!1}).catch(a=>{console.error("加载数据失败:",a)})};d(e.currentPage);const w=()=>{window.scrollTo({top:0,behavior:"smooth"})},E=l=>{e.currentPage=l,w(),d(l)},P=()=>{s({message:"复制成功",type:"success"})},T=()=>{s({message:"复制失败",type:"error"})};let h=0,u=null,_=0;const k=l=>{const a=new Date().getTime(),r={x:event.clientX,y:event.clientY};if(u&&u.x===r.x&&u.y===r.y?(_++,console.log(_),_>4&&j.alert("😡😡😡你在刷次数😡😡😡","请勿使用连点器",{confirmButtonText:"好吧，我错了"})):_=0,a-h<1500){s({title:"请勿刷次数",message:"复制成功，但次数没有增加",type:"warning"});const b=l.barrage;let n=document.createElement("input");n.value=b,document.body.appendChild(n),n.select();try{document.execCommand("Copy")}catch(y){s({title:"复制失败",message:"复制操作失败，请稍后重试",type:"error"}),console.error("复制失败:",y)}document.body.removeChild(n),h=a,u=r;return}u=r,h=a;const i=l.barrage;let c=document.createElement("input");c.value=i,document.body.appendChild(c),c.select();try{document.execCommand("Copy"),P(),console.log("内容已复制到剪贴板"),f.post("/machine/addCnt",{PageNum:e.currentPage,table:"penWJQ",id:l.id}).then(()=>{setTimeout(()=>d(e.currentPage),50)})}catch(b){s({title:"复制失败",message:"复制操作失败，请稍后重试",type:"error"}),console.error("复制失败:",b),T()}document.body.removeChild(c)},Q=()=>{e.table="",e.barrage="",e.dialogFormVisible=!0},B=()=>{e.table===""||e.barrage===""?s.error("请选择分栏或输入弹幕"):f.post("/machine/addUnaudit",{table:e.table,barrage:e.barrage}).then(l=>{d(),e.dialogFormVisible=!1,l.code==="200"?s.success("投稿成功，待审核(一天内)"):s.error("请求失败")})},F=()=>{e.table===""||e.barrage===""?s.error("请选择分栏或输入弹幕"):f.post("/machine/addUnaudit",{table:e.table,barrage:e.barrage}).then(l=>{d(),e.barrage="",l.code==="200"?s.success("投稿成功，待审核(一天内)"):s.error("请求失败")})};return(l,a)=>{const r=J,i=A,c=N,b=I,n=L,y=O,x=H,U=X,z=Y,S=q,W=M,D=R;return C(),K(ae,null,[g("div",null,[g("div",oe,[t(r,{type:"primary",class:"handleAdd",onClick:Q},{default:o(()=>[m(" 投稿弹幕 ")]),_:1}),ee((C(),te(c,{stripe:"",data:e.tableData,"empty-text":"我还没有加载完喔~~",class:"eldtable","header-cell-style":{color:"#ff0000",fontSize:"13px",whitespace:"normal !important"},"cell-style":{cursor:"Pointer"},onRowClick:k},{default:o(()=>[t(i,{width:"60",prop:"id",label:"序号"}),t(i,{prop:"barrage","min-width":"90",label:"弹幕"}),t(i,{label:"",align:"center",width:"85"},{default:o(()=>[t(r,{type:"primary",label:"操作"},{default:o(()=>[m("复制")]),_:1})]),_:1}),t(i,{prop:"cnt",label:"复制次数",width:"55"})]),_:1},8,["data"])),[[D,v.value]])]),g("div",le,[g("div",null,[t(b,{background:"",layout:"prev, pager, next, jumper",total:e.total,"pager-count":4,"page-size":e.pageSize,onCurrentChange:E},null,8,["total","page-size"])])]),t(S,{modelValue:e.dialogFormVisible,"onUpdate:modelValue":a[3]||(a[3]=p=>e.dialogFormVisible=p),draggable:"",title:"投稿弹幕",width:"82%"},{footer:o(()=>[g("div",re,[t(r,{onClick:a[2]||(a[2]=p=>e.dialogFormVisible=!1)},{default:o(()=>[m("关闭")]),_:1}),t(r,{type:"primary",onClick:B},{default:o(()=>[m(" 投稿并关闭 ")]),_:1}),t(r,{type:"primary",onClick:F},{default:o(()=>[m(" 连续投稿 ")]),_:1})])]),default:o(()=>[t(z,{model:e,"label-width":"100px",rules:V,"label-position":"right"},{default:o(()=>[t(x,{label:"分栏","label-width":100,prop:"table"},{default:o(()=>[t(y,{modelValue:e.table,"onUpdate:modelValue":a[0]||(a[0]=p=>e.table=p),placeholder:"选择上传的分栏"},{default:o(()=>[t(n,{label:"喷玩机器篇",value:"machine_penWJQ"}),t(n,{label:"木柜子篇",value:"machine_mygo"}),t(n,{label:"直播间互喷篇",value:"machine_ZbjHuPen"}),t(n,{label:"喷选手篇",value:"machine_penPlayer"}),t(n,{label:"+1",value:"machine_p1"}),t(n,{label:"群魔乱舞篇",value:"machine_QMLW"}),t(n,{label:"QUQU",value:"machine_QUQU"})]),_:1},8,["modelValue"])]),_:1}),t(x,{label:"弹幕内容",prop:"barrage"},{default:o(()=>[t(U,{maxlength:"255",modelValue:e.barrage,"onUpdate:modelValue":a[1]||(a[1]=p=>e.barrage=p),autocomplete:"off",autosize:{minRows:2,maxRows:4},"show-word-limit":"",type:"textarea"},null,8,["modelValue"])]),_:1})]),_:1},8,["model"])]),_:1},8,["modelValue"])]),t(W,{right:50,bottom:50},{default:o(()=>[m("UP")]),_:1})],64)}}},we=Z(ne,[["__scopeId","data-v-a3bdb670"]]);export{we as default};
