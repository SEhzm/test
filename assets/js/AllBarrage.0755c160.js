import{E as c,a as L,c as R,r as j,d as W,q as H,v as J,g as X,k as Y,n as Z,o as $,p as G,b as K,m as ee}from"./element-plus.ec180c6b.js";import{r as f}from"./request.39193e0d.js";import{_ as te}from"./index.6833bc55.js";import{r as V,_ as ae,o as T,c as le,a as d,T as u,U as oe,V as t,P as r,Q as re,O as ne,F as se,ax as ie,ay as ce}from"./@vue.7a8f7aed.js";import"./lodash-es.2e98bc53.js";import"./@vueuse.65cb1fed.js";import"./@element-plus.b6e46eba.js";import"./@popperjs.c75af06c.js";import"./@ctrl.f8748455.js";import"./dayjs.de1d8cda.js";import"./async-validator.dee29e8b.js";import"./memoize-one.297ddbcb.js";import"./normalize-wheel-es.ed76fb12.js";import"./@floating-ui.c9ffdb72.js";import"./axios.28bc18a3.js";import"./vue-router.f6176e51.js";const de=v=>(ie("data-v-1095e711"),v=v(),ce(),v),ue={class:"cardTable",style:{position:"relative"}},pe={style:{position:"absolute",right:"65px","margin-top":"10px","z-index":"4","pointer-events":"none"}},me=de(()=>d("br",null,null,-1)),ge={style:{position:"absolute",right:"5px"}},_e={class:"pagination-wrapper"},be={class:"dialog-footer"},he={__name:"AllBarrage",setup(v){const y=V(!0),E={table:[{required:!0,message:"请选择分栏",trigger:"blur"}],barrage:[{required:!0,message:"请输入弹幕",trigger:"blur"}]},i=V(null),e=ae({tableData:[],total:0,pageSize:200,currentPage:1,dialogFormVisible:!1,table:"",barrage:""}),p=(l=1)=>{f.get("/machine/all/Page",{params:{pageNum:l,pageSize:e.pageSize}}).then(a=>{var o,n;e.tableData=((o=a.data)==null?void 0:o.list)||[],e.total=((n=a.data)==null?void 0:n.total)||0,y.value=!1}).catch(a=>{console.error("加载数据失败:",a)})};p(e.currentPage);const S=({prop:l,order:a})=>{l==="cnt"&&(e.currentPage=1,_(a,e.currentPage))},B=()=>{window.scrollTo({top:0,behavior:"smooth"})},k=l=>{e.currentPage=l,B(),i.value===null?p(l):i.value==="desc"?_("desc",l):_("ascending",l)},z=()=>{c({message:"复制成功",type:"success"})},U=()=>{c({message:"复制失败",type:"error"})},_=(l,a=1)=>{y.value=!0,i.value=l==="ascending"?"asc":l===null?null:"desc",console.log(i.value),i.value===null?p():f.get("/machine/sortAllBarrage",{params:{pageNum:a,pageSize:e.pageSize,order:i.value}}).then(o=>{var n;e.tableData=o.data.list,e.total=((n=o.data)==null?void 0:n.total)||0}).finally(()=>{e.currentPage=1,y.value=!1})};let x=0,b=null,C=0;const F=l=>{const a=new Date().getTime(),o={x:event.clientX,y:event.clientY};if(b&&b.x===o.x&&b.y===o.y?(C++,C>4&&X.alert("😡😡😡你在刷次数😡😡😡","请勿使用连点器",{confirmButtonText:"好吧，我错了"})):C=0,a-x<1500){c({title:"请勿刷次数",message:"复制成功，但次数没有增加",type:"warning"});const h=l.barrage;let s=document.createElement("input");s.value=h,document.body.appendChild(s),s.select();try{document.execCommand("Copy")}catch(P){c({title:"复制失败",message:"复制操作失败，请稍后重试",type:"error"}),console.error("复制失败:",P)}document.body.removeChild(s),x=a,b=o;return}b=o,x=a;const n=l.barrage;let m=document.createElement("input");m.value=n,document.body.appendChild(m),m.select();try{document.execCommand("Copy"),z(),console.log("内容已复制到剪贴板"),f.post("/machine/addCnt",{sortOrder:i.value,PageNum:e.currentPage,table:"allbarrage",id:l.id}).then(()=>{i.value===null?setTimeout(()=>p(e.currentPage),50):i.value==="desc"?setTimeout(()=>_("desc",e.currentPage),50):setTimeout(()=>_("ascending",e.currentPage),50)})}catch(h){c({title:"复制失败",message:"复制操作失败，请稍后重试",type:"error"}),console.error("复制失败:",h),U()}document.body.removeChild(m)},D=()=>{e.table="",e.barrage="",e.dialogFormVisible=!0},I=()=>{e.table===""||e.barrage===""?c.error("请选择分栏或输入弹幕"):f.post("/machine/addUnaudit",{table:e.table,barrage:e.barrage}).then(l=>{p(),e.dialogFormVisible=!1,l.code==="200"?c.success("投稿成功，待审核(一天内)"):c.error("请求失败")})},N=()=>{e.table===""||e.barrage===""?c.error("请选择分栏或输入弹幕"):f.post("/machine/addUnaudit",{table:e.table,barrage:e.barrage}).then(l=>{p(),e.barrage="",l.code==="200"?c.success("投稿成功，待审核(一天内)"):c.error("请求失败")})};return(l,a)=>{const o=L,n=Y,m=R,h=j,s=Z,P=$,w=G,Q=K,A=ee,q=W,M=H,O=J;return T(),le(se,null,[d("div",null,[d("div",ue,[d("p",pe,[u(" Look!是排序诶➡️"),me,d("text",ge,oe(i.value==null?"默认":i.value=="asc"?"升序":"降序"),1)]),t(o,{type:"primary",class:"handleAdd",onClick:D},{default:r(()=>[u(" 投稿弹幕 ")]),_:1}),re((T(),ne(m,{stripe:"",data:e.tableData,"empty-text":"我还没有加载完喔~~",class:"eldtable","header-cell-style":{color:"#ff0000",fontSize:"13px",whitespace:"normal !important"},"cell-style":{cursor:"Pointer"},onRowClick:F,onSortChange:S},{default:r(()=>[t(n,{width:"58",prop:"id",label:"序号"}),t(n,{prop:"barrage","min-width":"90",label:"弹幕"}),t(n,{label:"",align:"center",width:"85"},{default:r(()=>[t(o,{type:"primary",label:"操作"},{default:r(()=>[u("复制")]),_:1})]),_:1}),t(n,{prop:"cnt",label:"复制次数",width:"55",sortable:"custom"})]),_:1},8,["data"])),[[O,y.value]])]),d("div",_e,[d("div",null,[t(h,{background:"red",layout:"prev, pager, next, jumper",total:e.total,"pager-count":4,"page-size":e.pageSize,onCurrentChange:k},null,8,["total","page-size"])])]),t(q,{modelValue:e.dialogFormVisible,"onUpdate:modelValue":a[3]||(a[3]=g=>e.dialogFormVisible=g),draggable:"",title:"投稿弹幕",width:"82%"},{footer:r(()=>[d("div",be,[t(o,{onClick:a[2]||(a[2]=g=>e.dialogFormVisible=!1)},{default:r(()=>[u("关闭")]),_:1}),t(o,{type:"primary",onClick:I},{default:r(()=>[u(" 投稿并关闭 ")]),_:1}),t(o,{type:"primary",onClick:N},{default:r(()=>[u(" 连续投稿 ")]),_:1})])]),default:r(()=>[t(A,{model:e,"label-width":"100px",rules:E,"label-position":"right"},{default:r(()=>[t(w,{label:"分栏","label-width":100,prop:"table"},{default:r(()=>[t(P,{modelValue:e.table,"onUpdate:modelValue":a[0]||(a[0]=g=>e.table=g),placeholder:"选择上传的分栏"},{default:r(()=>[t(s,{label:"喷玩机器篇",value:"machine_penWJQ"}),t(s,{label:"木柜子篇",value:"machine_mygo"}),t(s,{label:"直播间互喷篇",value:"machine_ZbjHuPen"}),t(s,{label:"喷选手篇",value:"machine_penPlayer"}),t(s,{label:"+1",value:"machine_p1"}),t(s,{label:"群魔乱舞篇",value:"machine_QMLW"}),t(s,{label:"QUQU",value:"machine_QUQU"})]),_:1},8,["modelValue"])]),_:1}),t(w,{label:"弹幕内容",prop:"barrage"},{default:r(()=>[t(Q,{maxlength:"255",modelValue:e.barrage,"onUpdate:modelValue":a[1]||(a[1]=g=>e.barrage=g),autocomplete:"off",autosize:{minRows:2,maxRows:4},"show-word-limit":"",type:"textarea"},null,8,["modelValue"])]),_:1})]),_:1},8,["model"])]),_:1},8,["modelValue"])]),t(M,{right:50,bottom:50},{default:r(()=>[u("UP")]),_:1})],64)}}},De=te(he,[["__scopeId","data-v-1095e711"]]);export{De as default};
