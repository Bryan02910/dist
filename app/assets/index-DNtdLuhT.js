import{r as s,M as J,j as e}from"./index-UyDEpSKi.js";import{T as K,A as d}from"./ToastAutoHide-mD-74I2T.js";import{P as Q}from"./Page-DWSL0diS.js";import{C as V,E as C}from"./CommonTable-CihJZmSo.js";import"./jspdf.plugin.autotable-DmuIJyGd.js";import{D as w,a as v,b,c as I}from"./TableCell-B8HtnHjl.js";import{I as n}from"./Grow-41TwNg0m.js";import{C as S}from"./Close-Di1FhIrO.js";import{T,B as X}from"./Box-BLXI0_F0.js";import{B as j}from"./Button-CjDs8j-X.js";import{G as o}from"./Grid-CfjZ72w2.js";import{T as Y}from"./TextField-BGn-4xfW.js";import{C as Z}from"./Container-uQWJgnJV.js";import{A as $,D as E}from"./DeleteOutline-DAPNekcB.js";import{S as A}from"./Stack-CILUL872.js";import{D as k}from"./createSvgIcon-Cv_souYI.js";import"./ButtonBase-Bhi2RUyb.js";import"./Menu-9ysSaJL7.js";import"./MenuItem-B_SiXQ1x.js";import"./TablePagination-CBjQ43ZL.js";import"./Toolbar-D0r--W_a.js";import"./useThemeProps-D04-WiJJ.js";const we=()=>{const{globalState:m}=s.useContext(J),[g,M]=s.useState(),p={id:"",descripcion:""},[N,R]=s.useState([]),[x,r]=s.useState(p),[B,z]=s.useState(!1),[f,u]=s.useState(!1),[O,a]=s.useState({ident:null,message:null,type:null}),[q,D]=s.useState(null),[F,W]=s.useState(!1),h=async()=>{const{data:t}=await d().get("/roles");R(t)},G=[{field:"id",headerName:"ID",width:120},{field:"descripcion",headerName:"Descripción",width:220},{field:"",headerName:"Acciones",width:200,renderCell:t=>e.jsx(A,{direction:"row",divider:e.jsx(k,{orientation:"vertical",flexItem:!0}),justifyContent:"center",alignItems:"center",spacing:2,children:g==="ADMIN"&&e.jsxs(e.Fragment,{children:[e.jsx(n,{size:"small",onClick:()=>{u(!0),r(t.row),i()},children:e.jsx(C,{})}),e.jsx(n,{size:"small",onClick:()=>{l(),D(t.id)},children:e.jsx(E,{})})]})})}],L=async()=>{try{const{data:t}=await d().post("/eliminar_rol",{id:q});a({ident:new Date().getTime(),message:t.message,type:"success"}),l(),h()}catch({response:t}){a({ident:new Date().getTime(),message:t.data.sqlMessage,type:"error"})}},i=()=>{z(t=>!t)},l=()=>{W(t=>!t)},_=({target:t})=>{const{name:c,value:y}=t;r({...x,[c]:c==="rol"?Number(y):y})},P=async()=>{try{const{data:t}=await d().post("/guardar_rol",x);i(),r(p),a({ident:new Date().getTime(),message:t.message,type:"success"}),h(),u(!1)}catch({response:t}){a({ident:new Date().getTime(),message:t.data.sqlMessage,type:"error"})}},U=async()=>{try{const{data:t}=await d().post("/editar_rol",x);i(),r(p),a({ident:new Date().getTime(),message:t.message,type:"success"}),h()}catch({response:t}){a({ident:new Date().getTime(),message:t.data.sqlMessage,type:"error"})}},H=async()=>{try{const t=await d().get("/roles");setRoles(t.data)}catch(t){console.error("Error fetching roles data:",t)}};return s.useEffect(()=>{H(),h()},[]),s.useEffect(()=>{m.auth&&m.auth.rol&&M(m.auth.rol)},[m]),e.jsxs(e.Fragment,{children:[e.jsxs(w,{maxWidth:"xs",open:F,onClose:l,children:[e.jsxs(v,{children:["¿Desea eliminar este rol?",e.jsx(n,{"aria-label":"close",onClick:l,style:{position:"absolute",right:8,top:8},children:e.jsx(S,{})})]}),e.jsx(b,{children:e.jsx(T,{variant:"body1",color:"textSecondary",children:"Esta acción es irreversible."})}),e.jsx(I,{children:e.jsx(j,{variant:"contained",color:"primary",onClick:L,children:"Aceptar"})})]}),e.jsxs(w,{maxWidth:"xs",open:B,onClose:i,children:[e.jsxs(v,{children:[f?"Editar rol":"Crear rol",e.jsx(n,{"aria-label":"close",onClick:i,style:{position:"absolute",right:8,top:8},children:e.jsx(S,{})})]}),e.jsx(b,{dividers:!0,children:e.jsx(o,{container:!0,spacing:2,children:e.jsx(o,{item:!0,xs:12,children:e.jsx(Y,{margin:"normal",name:"descripcion",value:x.descripcion,onChange:_,variant:"outlined",size:"small",fullWidth:!0,label:"Descripción"})})})}),e.jsx(I,{children:e.jsx(j,{variant:"contained",color:"primary",onClick:f?U:P,children:"Guardar"})})]}),e.jsxs(Q,{title:"Chapina | Roles",children:[e.jsx(K,{message:O}),e.jsxs(Z,{maxWidth:"lg",children:[e.jsx(X,{sx:{pb:5},children:e.jsx(T,{variant:"h4",children:"Lista de roles"})}),e.jsx(o,{container:!0,spacing:2,justifyContent:"space-between",alignItems:"center",children:g==="ADMIN"&&e.jsx(o,{item:!0,children:e.jsx(j,{onClick:()=>{u(!1),i(),r(p)},startIcon:e.jsx($,{}),variant:"contained",color:"primary",children:"Nuevo"})})}),e.jsx(o,{container:!0,spacing:2,sx:{mt:2},children:e.jsx(o,{item:!0,xs:12,children:e.jsx(V,{data:N,columns:G.map(t=>t.field===""?{...t,renderCell:c=>e.jsx(A,{direction:"row",divider:e.jsx(k,{orientation:"vertical",flexItem:!0}),justifyContent:"center",alignItems:"center",spacing:2,children:g==="ADMIN"&&e.jsxs(e.Fragment,{children:[e.jsx(n,{size:"small",onClick:()=>{u(!0),r(c.row),i()},children:e.jsx(C,{})}),e.jsx(n,{size:"small",onClick:()=>{l(),D(c.id)},children:e.jsx(E,{})})]})})}:t)})})})]})]})]})};export{we as default};
