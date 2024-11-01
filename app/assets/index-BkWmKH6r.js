import{r as c,M as je,j as e}from"./index-UyDEpSKi.js";import{T as be,A as b}from"./ToastAutoHide-mD-74I2T.js";import{P as xe}from"./Page-DWSL0diS.js";import{E as ve}from"./jspdf.plugin.autotable-DmuIJyGd.js";import{i as ge}from"./index-tCDBB_r2.js";import{C as Ce}from"./Container-uQWJgnJV.js";import{B as k,T as y}from"./Box-BLXI0_F0.js";import{G as o}from"./Grid-CfjZ72w2.js";import{a as F,I as S,S as D,T as i}from"./TextField-BGn-4xfW.js";import{M as x}from"./MenuItem-B_SiXQ1x.js";import{B as g}from"./Button-CjDs8j-X.js";import{S as ke}from"./SearchOutlined-BtG2iM2l.js";import{I as ye}from"./Grow-41TwNg0m.js";import{D as Fe,A as Se}from"./DeleteOutline-DAPNekcB.js";import{S as De}from"./Stack-CILUL872.js";import{D as Te,a as We,b as Pe,T as u,c as Ie}from"./TableCell-B8HtnHjl.js";import{T as Be,a as we,b as fe,c as $,d as Ue}from"./TableRow-B-cCF0_f.js";import{P as Ee}from"./ButtonBase-Bhi2RUyb.js";import"./useThemeProps-D04-WiJJ.js";import"./Menu-9ysSaJL7.js";const at=()=>{const{globalState:C}=c.useContext(je),[Ae,O]=c.useState(),[p,_]=c.useState([{id:"",nombre:"",presentacion:"caja",descripcion:"",precio_caja:"",precio_blister:"",precio_unidad:"",precio_venta_caja:"",precio_venta_blister:"",precio_venta_unidad:"",blisters_por_caja:"",unidades_por_blister:"",stock_caja:"",stock_blister:"",stock_unidad:"",nivel_reorden:"",codigo_barras:"",proveedor_id:"",laboratorio_id:"",fecha_vencimiento:""}]),[P,I]=c.useState(""),[B,w]=c.useState(""),[T,f]=c.useState(""),[G,z]=c.useState([]),[H,V]=c.useState([]),[Y,q]=c.useState([]),[U,E]=c.useState(0),[Q,J]=c.useState(""),[X,j]=c.useState({ident:null,message:null,type:null}),[Z,A]=c.useState(null),[ee,K]=c.useState(!1),[te,re]=c.useState([]),[L,ae]=c.useState(""),oe=t=>{K(!0),A(t),se()},W=()=>{K(!1),A(null)},se=async()=>{try{const{data:t}=await b().get("/farmacos");re(t)}catch(t){console.error("Error al obtener los fármacos:",t)}},ie=t=>{const a=[...p];a[Z]={id:t.id,nombre:t.nombre,presentacion:t.presentacion||"caja",descripcion:t.descripcion,precio_caja:t.precio_caja,precio_blister:t.precio_blister,precio_unidad:t.precio_unidad,precio_venta_caja:t.precio_venta_caja,precio_venta_blister:t.precio_venta_blister,precio_venta_unidad:t.precio_venta_unidad,blisters_por_caja:t.blisters_por_caja,unidades_por_blister:t.unidades_por_blister,stock_caja:t.stock_caja,stock_blister:t.stock_blister,stock_unidad:t.stock_unidad,nivel_reorden:t.nivel_reorden,codigo_barras:t.codigo_barras,proveedor_id:t.proveedor_id,laboratorio_id:t.laboratorio_id,fecha_vencimiento:t.fecha_vencimiento},_(a),W()};c.useEffect(()=>{const t=async()=>{try{const{data:s}=await b().get("/prov_select");z(s)}catch{j({ident:new Date().getTime(),message:"Error al cargar los proveedores",type:"error"})}},a=async()=>{try{const{data:s}=await b().get("/lab_select");q(s)}catch{j({ident:new Date().getTime(),message:"Error al cargar los laboratorios",type:"error"})}},r=async()=>{try{const{data:s}=await b().get("/tipo_documento");V(s)}catch{j({ident:new Date().getTime(),message:"Error al cargar los documentos",type:"error"})}};t(),a(),r()},[]);const ne=()=>{_([...p,{id:"",presentacion:"",nombre:"",descripcion:"",precio_caja:"",precio_blister:"",precio_unidad:"",precio_venta_caja:"",precio_venta_blister:"",precio_venta_unidad:"",blisters_por_caja:"",unidades_por_blister:"",stock_caja:"",stock_blister:"",stock_unidad:"",nivel_reorden:"",codigo_barras:"",proveedor_id:"",laboratorio_id:"",fecha_vencimiento:""}])},M=t=>{if(!t)return"";const a=new Date(t),r=("0"+(a.getMonth()+1)).slice(-2),s=("0"+a.getDate()).slice(-2);return a.getFullYear()+"-"+r+"-"+s},le=t=>{const a=[...p];a.splice(t,1),_(a),R(a)},ce=()=>{const t=new ve("landscape","mm","a4"),a=ge.Logo,r=M(new Date),s=()=>{t.addImage(a,"JPEG",t.internal.pageSize.getWidth()-40-10,10,40,30)},d=[{header:"Codigo",dataKey:"id"},{header:"Nombre",dataKey:"nombre"},{header:"Descripción",dataKey:"descripcion"},{header:"Precio Caja",dataKey:"precio_caja"},{header:"Stock Caja",dataKey:"stock_caja"},{header:"Precio Blister",dataKey:"precio_blister"},{header:"Stock Blister",dataKey:"stock_blister"},{header:"Precio Unidad",dataKey:"precio_unidad"},{header:"Stock Unidad",dataKey:"stock_unidad"},{header:"Total",dataKey:"total"}];let h=0;const m=p.map(l=>{const v=(parseFloat(l.precio_caja)||0)*(parseFloat(l.stock_caja)||0)+(parseFloat(l.precio_blister)||0)*(parseFloat(l.stock_blister)||0)+(parseFloat(l.precio_unidad)||0)*(parseFloat(l.stock_unidad)||0);return h+=v,{id:l.id.toString(),nombre:l.nombre,descripcion:l.descripcion,precio_caja:l.precio_caja||"-",stock_caja:l.stock_caja||"-",precio_blister:l.precio_blister||"-",stock_blister:l.stock_blister||"-",precio_unidad:l.precio_unidad||"-",stock_unidad:l.stock_unidad||"-",total:v.toFixed(2)}});s(),t.setFontSize(12),t.text("Reporte de Compra",10,25),t.text(`Fecha de Compra: ${r}`,10,30),t.text(`No. de factura: ${T}`,10,35),t.autoTable({columns:d,body:m,startY:40,margin:{horizontal:10},theme:"grid",styles:{fontSize:10,cellPadding:3},headStyles:{fillColor:[22,160,133]},didDrawPage:l=>{s()}}),t.text(`Total Compra: Q${h.toFixed(2)}`,10,t.lastAutoTable.finalY+10),t.save("reporte_compra.pdf")},n=async(t,{target:a})=>{var h;const{name:r,value:s}=a,d=[...p];if(d[t][r]=s,_(d),(r==="id"||r==="busqueda")&&s)try{const{data:m}=await b().get(`/farmaco/${s}`);m?d[t]={...d[t],...m}:d[t]={...d[t],id:s,nombre:"",descripcion:"",precio_caja:"",precio_blister:"",precio_unidad:"",precio_venta_caja:"",precio_venta_blister:"",precio_venta_unidad:"",blisters_por_caja:"",unidades_por_blister:"",stock_caja:"",stock_blister:"",stock_unidad:"",nivel_reorden:"",codigo_barras:"",proveedor_id:"",laboratorio_id:"",fecha_vencimiento:"",presentacion:"caja"},_(d)}catch(m){j({ident:new Date().getTime(),message:"Error al obtener los datos del fármaco",type:"error"}),((h=m.response)==null?void 0:h.status)===404&&(d[t]={...d[t],id:r==="id"?s:"",nombre:r==="nombre"?s:"",descripcion:"",precio_caja:"",precio_blister:"",precio_unidad:"",precio_venta_caja:"",precio_venta_blister:"",precio_venta_unidad:"",blisters_por_caja:"",unidades_por_blister:"",stock_caja:"",stock_blister:"",stock_unidad:"",nivel_reorden:"",codigo_barras:"",proveedor_id:"",laboratorio_id:"",fecha_vencimiento:"",presentacion:"caja"},_(d))}R(d)},de=(t,a)=>{const r=[...p];r[t].presentacion=a,_(r)},R=t=>{const a=t.reduce((r,s)=>{const d=parseFloat(s.stock_caja)||0,h=parseFloat(s.stock_blister)||0,m=parseFloat(s.stock_unidad)||0,l=parseFloat(s.precio_caja)||0,v=parseFloat(s.precio_blister)||0,N=parseFloat(s.precio_unidad)||0,_e=d*l,me=h*v,he=m*N;return r+_e+me+he},0);E(a)},ue=async()=>{try{const{data:t}=await b().post("/guardar_farmaco_compra",{farmacos:p,proveedorId:P,Nofactura:T,documentoId:B,total_compra:U});j({ident:new Date().getTime(),message:t.message,type:"success"}),_([{id:"",nombre:"",presentacion:"",descripcion:"",precio_caja:"",precio_blister:"",precio_unidad:"",precio_venta_caja:"",precio_venta_blister:"",precio_venta_unidad:"",blisters_por_caja:"",unidades_por_blister:"",stock_caja:"",stock_blister:"",stock_unidad:"",nivel_reorden:"",codigo_barras:"",proveedor_id:"",laboratorio_id:"",fecha_vencimiento:""}]),I(""),f(""),w(""),E(0)}catch(t){j({ident:new Date().getTime(),message:t.response.data.message,type:"error"})}},pe=()=>{ue(),ce()};return c.useEffect(()=>{C.auth&&C.auth.rol&&O(C.auth.rol);const a=new Date().toISOString().split("T")[0];J(a)},[C]),e.jsx(e.Fragment,{children:e.jsxs(xe,{title:"Chapina | Nueva Compra",children:[e.jsx(be,{message:X}),e.jsxs(Ce,{maxWidth:"lg",children:[e.jsx(k,{sx:{pb:5},children:e.jsx(y,{variant:"h4",children:"Registrar compra"})}),e.jsxs(o,{container:!0,spacing:2,children:[e.jsx(o,{item:!0,xs:12,sm:6,children:e.jsxs(y,{variant:"h6",children:["Fecha de compra: ",Q]})}),e.jsx(o,{item:!0,xs:12,sm:4,children:e.jsxs(F,{fullWidth:!0,variant:"outlined",children:[e.jsx(S,{id:"proveedor-label",children:"Proveedor"}),e.jsx(D,{labelId:"proveedor-label",name:"proveedor_id",value:P,onChange:t=>I(t.target.value),label:"Proveedor",children:G.map(t=>e.jsxs(x,{value:t.id,children:[t.nombre," "]},t.id))})]})}),e.jsx(o,{item:!0,xs:12,sm:4,children:e.jsxs(F,{fullWidth:!0,variant:"outlined",children:[e.jsx(S,{id:"Documento-label",children:"Tipo de documento"}),e.jsx(D,{labelId:"Documento-label",value:B,onChange:t=>w(t.target.value),label:"Documento",children:H.map(t=>e.jsxs(x,{value:t.id,children:[t.nombre_documento," "]},t.id))})]})}),e.jsx(o,{item:!0,xs:12,sm:6,children:e.jsx(i,{label:"No. de documento",value:T,onChange:t=>f(t.target.value),fullWidth:!0,variant:"outlined"})})]}),p.map((t,a)=>e.jsxs(k,{sx:{mt:4,border:"1px solid #ccc",padding:2},children:[e.jsxs(y,{variant:"h6",children:["Fármaco comprado ",a+1]}),e.jsxs(o,{container:!0,spacing:2,children:[e.jsx(o,{item:!0,xs:12,children:e.jsx(g,{variant:"outlined",startIcon:e.jsx(ke,{}),onClick:()=>oe(a),children:"Buscar Fármaco"})}),e.jsx(o,{item:!0,xs:12,sm:4,children:e.jsxs(F,{fullWidth:!0,variant:"outlined",children:[e.jsx(S,{id:`presentacion-label-${a}`,children:"Presentación"}),e.jsxs(D,{labelId:`presentacion-label-${a}`,value:t.presentacion,onChange:r=>de(a,r.target.value),label:"Presentación",children:[e.jsx(x,{value:"caja",children:"caja"}),e.jsx(x,{value:"blister",children:"blister"}),e.jsx(x,{value:"unidad",children:"unidad"})]})]})}),e.jsx(o,{item:!0,xs:12,sm:6,children:e.jsx(i,{label:"Codigo",name:"id",value:t.id,onChange:r=>n(a,r),fullWidth:!0,variant:"outlined"})}),e.jsx(o,{item:!0,xs:12,sm:4,children:e.jsx(i,{fullWidth:!0,label:"Nombre",name:"nombre",value:t.nombre,onChange:r=>n(a,r)})}),e.jsx(o,{item:!0,xs:12,sm:4,children:e.jsx(i,{fullWidth:!0,label:"Descripción",name:"descripcion",value:t.descripcion,onChange:r=>n(a,r)})}),e.jsx(o,{item:!0,xs:12,sm:4,children:e.jsx(i,{fullWidth:!0,label:"Código de Barras",name:"codigo_barras",value:t.codigo_barras,onChange:r=>n(a,r)})}),e.jsx(o,{item:!0,xs:12,sm:4,children:e.jsx(i,{label:"Nivel de Reorden",name:"nivel_reorden",value:t.nivel_reorden,onChange:r=>n(a,r),fullWidth:!0,variant:"outlined",type:"number"})}),e.jsx(o,{item:!0,xs:12,sm:4,children:e.jsxs(F,{fullWidth:!0,variant:"outlined",children:[e.jsx(S,{id:`laboratorio-label-${a}`,children:"Laboratorio"}),e.jsx(D,{labelId:`laboratorio-label-${a}`,name:"laboratorio_id",value:t.laboratorio_id,onChange:r=>n(a,r),label:"Laboratorio",children:Y.map(r=>e.jsx(x,{value:r.id,children:r.nombre},r.id))})]})}),e.jsx(o,{item:!0,xs:12,sm:4,children:e.jsx(i,{label:"Fecha de Vencimiento",name:"fecha_vencimiento",value:M(t.fecha_vencimiento),onChange:r=>n(a,r),fullWidth:!0,variant:"outlined",type:"date",InputLabelProps:{shrink:!0}})}),t.presentacion==="caja"&&e.jsxs(e.Fragment,{children:[e.jsx(o,{item:!0,xs:12,sm:4,children:e.jsx(i,{fullWidth:!0,label:"Precio Caja",name:"precio_caja",value:t.precio_caja,onChange:r=>n(a,r),type:"number"})}),e.jsx(o,{item:!0,xs:12,sm:4,children:e.jsx(i,{label:"Precio Venta Caja",name:"precio_venta_caja",value:t.precio_venta_caja,onChange:r=>n(a,r),fullWidth:!0,variant:"outlined",type:"number"})}),e.jsx(o,{item:!0,xs:12,sm:4,children:e.jsx(i,{fullWidth:!0,label:"Stock Caja",name:"stock_caja",value:t.stock_caja,onChange:r=>n(a,r),type:"number"})}),e.jsx(o,{item:!0,xs:12,sm:4,children:e.jsx(i,{label:"Blisters por Caja",name:"blisters_por_caja",value:t.blisters_por_caja,onChange:r=>n(a,r),fullWidth:!0,variant:"outlined",type:"number"})}),e.jsx(o,{item:!0,xs:12,sm:4,children:e.jsx(i,{label:"Unidades por Blister",name:"unidades_por_blister",value:t.unidades_por_blister,onChange:r=>n(a,r),fullWidth:!0,variant:"outlined",type:"number"})})]}),t.presentacion==="blister"&&e.jsxs(e.Fragment,{children:[e.jsx(o,{item:!0,xs:12,sm:4,children:e.jsx(i,{fullWidth:!0,label:"Precio Blister",name:"precio_blister",value:t.precio_blister,onChange:r=>n(a,r),type:"number"})}),e.jsx(o,{item:!0,xs:12,sm:4,children:e.jsx(i,{label:"Precio Venta Blister",name:"precio_venta_blister",value:t.precio_venta_blister,onChange:r=>n(a,r),fullWidth:!0,variant:"outlined",type:"number"})}),e.jsx(o,{item:!0,xs:12,sm:4,children:e.jsx(i,{fullWidth:!0,label:"Stock Blister",name:"stock_blister",value:t.stock_blister,onChange:r=>n(a,r),type:"number"})}),e.jsx(o,{item:!0,xs:12,sm:4,children:e.jsx(i,{label:"Unidades por Blister",name:"unidades_por_blister",value:t.unidades_por_blister,onChange:r=>n(a,r),fullWidth:!0,variant:"outlined",type:"number"})})]}),t.presentacion==="unidad"&&e.jsxs(e.Fragment,{children:[e.jsx(o,{item:!0,xs:12,sm:4,children:e.jsx(i,{fullWidth:!0,label:"Precio Unidad",name:"precio_unidad",value:t.precio_unidad,onChange:r=>n(a,r),type:"number"})}),e.jsx(o,{item:!0,xs:12,sm:4,children:e.jsx(i,{label:"Precio Venta Unidad",name:"precio_venta_unidad",value:t.precio_venta_unidad,onChange:r=>n(a,r),fullWidth:!0,variant:"outlined",type:"number"})}),e.jsx(o,{item:!0,xs:12,sm:4,children:e.jsx(i,{fullWidth:!0,label:"Stock Unidad",name:"stock_unidad",value:t.stock_unidad,onChange:r=>n(a,r),type:"number"})})]}),e.jsx(o,{item:!0,xs:12,children:e.jsx(ye,{color:"error",onClick:()=>le(a),children:e.jsx(Fe,{})})})]})]},a)),e.jsx(De,{direction:"row",spacing:2,sx:{mt:2},children:e.jsx(g,{variant:"contained",color:"primary",startIcon:e.jsx(Se,{}),onClick:ne,children:"Agregar Fármaco"})}),e.jsx(k,{sx:{mt:4},children:e.jsxs(y,{variant:"h6",children:["Total Compra: Q",U.toFixed(2)]})}),e.jsx(k,{sx:{mt:2},children:e.jsx(g,{variant:"contained",color:"primary",onClick:pe,children:"Guardar Compra"})}),e.jsxs(Te,{open:ee,onClose:W,fullWidth:!0,maxWidth:"md",children:[e.jsx(We,{children:"Buscar Fármaco"}),e.jsxs(Pe,{children:[e.jsx(i,{label:"Buscar por nombre",value:L,onChange:t=>ae(t.target.value),fullWidth:!0,margin:"dense"}),e.jsx(Be,{component:Ee,children:e.jsxs(we,{children:[e.jsx(fe,{children:e.jsxs($,{children:[e.jsx(u,{children:"ID"}),e.jsx(u,{children:"Nombre"}),e.jsx(u,{children:"Stock Caja"}),e.jsx(u,{children:"Stock Blister"}),e.jsx(u,{children:"Stock Unidad"}),e.jsx(u,{children:"Acciones"})]})}),e.jsx(Ue,{children:te.filter(t=>t.nombre.toLowerCase().includes(L.toLowerCase())).map(t=>e.jsxs($,{children:[e.jsx(u,{children:t.id}),e.jsx(u,{children:t.nombre}),e.jsx(u,{children:t.stock_caja}),e.jsx(u,{children:t.stock_blister}),e.jsx(u,{children:t.stock_unidad}),e.jsx(u,{children:e.jsx(g,{variant:"contained",onClick:()=>ie(t),children:"Seleccionar"})})]},t.id))})]})})]}),e.jsx(Ie,{children:e.jsx(g,{onClick:W,children:"Cerrar"})})]})]})]})})};export{at as default};
