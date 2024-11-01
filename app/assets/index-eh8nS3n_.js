import{r as c,M as ve,j as e}from"./index-UyDEpSKi.js";import{T as fe,A as v}from"./ToastAutoHide-mD-74I2T.js";import{P as ke}from"./Page-DWSL0diS.js";import{C as we,E as O}from"./CommonTable-CihJZmSo.js";import{E as De}from"./jspdf.plugin.autotable-DmuIJyGd.js";import{i as ye}from"./index-tCDBB_r2.js";import{u as E,w as Ce}from"./xlsx-DjuO7_Ju.js";import{D as q,a as G,b as H,c as Y}from"./TableCell-B8HtnHjl.js";import{T as J,B as Se}from"./Box-BLXI0_F0.js";import{B as k}from"./Button-CjDs8j-X.js";import{I as w}from"./Grow-41TwNg0m.js";import{C as Fe}from"./Close-Di1FhIrO.js";import{G as r}from"./Grid-CfjZ72w2.js";import{T as l,I,S as A}from"./TextField-BGn-4xfW.js";import{M as m}from"./MenuItem-B_SiXQ1x.js";import{C as Pe}from"./Container-uQWJgnJV.js";import{A as Ne,D as K}from"./DeleteOutline-DAPNekcB.js";import{D as Be}from"./DownloadOutlined-D6SfjWqt.js";import{a as ze}from"./Menu-9ysSaJL7.js";import{S as Q}from"./Stack-CILUL872.js";import{D as X}from"./createSvgIcon-Cv_souYI.js";import"./ButtonBase-Bhi2RUyb.js";import"./TablePagination-CBjQ43ZL.js";import"./Toolbar-D0r--W_a.js";import"./useThemeProps-D04-WiJJ.js";const ot=()=>{const{globalState:D}=c.useContext(ve),[N,Z]=c.useState(),y={id:"",nombre:"",descripcion:"",precio_caja:"",precio_blister:"",precio_unidad:"",precio_venta_caja:"",precio_venta_blister:"",precio_venta_unidad:"",blisters_por_caja:"",unidades_por_blister:"",stock_caja:"",stock_blister:"",stock_unidad:"",nivel_reorden:"",codigo_barras:"",proveedor_id:"",laboratorio_id:"",proveedor:"",laboratorio:"",fecha_vencimiento:"",fecha_creacion:"",ultima_actualizacion:"",stock_total_calculado:"",presentationType:""},[x,$]=c.useState([]),[o,j]=c.useState(y),[ee,te]=c.useState(!1),[T,C]=c.useState(!1),[ie,_]=c.useState({ident:null,message:null,type:null}),[ae,M]=c.useState(null),[re,oe]=c.useState(!1),[se,ne]=c.useState([]),[le,ce]=c.useState([]),[S,de]=c.useState("caja"),F=async()=>{const{data:t}=await v().get("/farmacos");$(t)},me=[{field:"id",headerName:"Codigo",width:120},{field:"codigo_barras",headerName:"Codigo de barras",width:220},{field:"nombre",headerName:"Nombre",width:220},{field:"descripcion",headerName:"Descripción",width:220},{field:"precio_caja",headerName:"Precio por caja",width:220},{field:"precio_blister",headerName:"Precio por blister",width:220},{field:"precio_unidad",headerName:"Precio por unidad",width:220},{field:"precio_venta_caja",headerName:"Precio venta caja",width:220},{field:"precio_venta_blister",headerName:"Precio venta blister",width:220},{field:"precio_venta_unidad",headerName:"Precio venta unidad",width:220},{field:"blisters_por_caja",headerName:"Blisters por caja",width:220},{field:"unidades_por_blister",headerName:"Unidades por blister",width:220},{field:"stock_caja",headerName:"Stock por caja",width:220},{field:"stock_blister",headerName:"Stock por blister",width:220},{field:"stock_unidad",headerName:"Stock por unidad",width:220},{field:"fecha_vencimiento",headerName:"Fecha de vencimiento",width:220,valueFormatter:t=>{const s=t.value,d=new Date(s),u={year:"numeric",month:"2-digit",day:"2-digit"};return d.toLocaleDateString("es-ES",u)}},{field:"nivel_reorden",headerName:"Nivel de reorden",width:220},{field:"proveedor",headerName:"Proveedor",width:220},{field:"laboratorio",headerName:"Laboratorio",width:220},{field:"stock_total_calculado",headerName:"Stock actual",width:220},{field:"",headerName:"Acciones",width:200,renderCell:t=>e.jsx(Q,{direction:"row",divider:e.jsx(X,{orientation:"vertical",flexItem:!0}),justifyContent:"center",alignItems:"center",spacing:2,children:N==="ADMIN"&&e.jsxs(e.Fragment,{children:[e.jsx(w,{size:"small",onClick:()=>{C(!0),j(t.row),h()},children:e.jsx(O,{})}),e.jsx(w,{size:"small",onClick:()=>{f(),M(t.id)},children:e.jsx(K,{})})]})})}],ue=async()=>{try{const{data:t}=await v().post("/eliminar_farmaco",{id:ae});_({ident:new Date().getTime(),message:t.message,type:"success"}),f(),F()}catch({response:t}){_({ident:new Date().getTime(),message:t.data.sqlMessage,type:"error"})}},h=()=>{te(t=>!t)},f=()=>{oe(t=>!t)},n=({target:t})=>{const{name:s,value:d}=t;j({...o,[s]:s==="rol"?Number(d):d})},pe=async()=>{try{const{data:t}=await v().post("/guardar_farmaco",o);h(),j(y),_({ident:new Date().getTime(),message:t.message,type:"success"}),F(),C(!1)}catch({response:t}){_({ident:new Date().getTime(),message:t.data.sqlMessage,type:"error"})}},he=async()=>{try{const{data:t}=await v().post("/editar_farmaco",o);h(),j(y),_({ident:new Date().getTime(),message:t.message,type:"success"}),F()}catch({response:t}){_({ident:new Date().getTime(),message:t.data.sqlMessage,type:"error"})}},[V,L]=c.useState(null),xe=t=>{L(t.currentTarget)},b=()=>{L(null)},U=t=>{const s=new De("landscape","mm","a4"),d=ye.Logo,u=()=>{s.addImage(d,"JPEG",s.internal.pageSize.getWidth()-40-10,10,40,30)};let g,p;if(t==="stockBajo")g=x.filter(a=>a.stock_total_calculado<=a.nivel_reorden),p="Reporte de Fármacos con Stock Bajo";else if(t==="prontosAVencer"){const a=new Date;g=x.filter(i=>{const P=new Date(i.fecha_vencimiento);return Math.ceil((P-a)/(1e3*60*60*24))<=30}),p="Reporte de Fármacos Prontos a Vencer"}const z=g.map(a=>[a.id.toString(),a.nombre,a.descripcion,a.precio_caja===0?"-":a.precio_caja||"-",a.precio_blister===0?"-":a.precio_blister||"-",a.precio_unidad===0?"-":a.precio_unidad||"-",a.stock_caja===0?"-":a.stock_caja||"-",a.stock_blister===0?"-":a.stock_blister||"-",a.stock_unidad===0?"-":a.stock_unidad||"-",a.fecha_vencimiento||"-",a.proveedor||"-",a.laboratorio||"-"]),W=["ID","Nombre","Descripción","Precio por Caja","Precio por Blister","Precio por Unidad","Stock por Caja","Stock por Blister","Stock por Unidad","Fecha de Vencimiento","Proveedor","Laboratorio"];u(),s.setFontSize(12),s.text(p,10,25),s.autoTable({head:[W],body:z,startY:30,theme:"grid",styles:{fontSize:10,cellPadding:3},headStyles:{fillColor:[22,160,133]},didDrawPage:a=>{u()}}),s.save(t==="stockBajo"?"reporte_stock_bajo.pdf":"reporte_prontos_a_vencer.pdf")},B=t=>{let s,d;if(t==="stockBajo")s=x.filter(i=>i.stock_total_calculado<=i.nivel_reorden),d="Reporte de Fármacos con Stock Bajo";else if(t==="prontosAVencer"){const i=new Date;s=x.filter(P=>{const R=new Date(P.fecha_vencimiento);return Math.ceil((R-i)/(1e3*60*60*24))<=30}),d="Reporte de Fármacos Prontos a Vencer"}else t==="todos"&&(s=x,d="Reporte de Todos los Fármacos");const u=s.map(i=>({ID:i.id.toString(),Nombre:i.nombre,Descripción:i.descripcion,"Precio por Caja":i.precio_caja===0?"-":i.precio_caja,"Precio por Blister":i.precio_blister===0?"-":i.precio_blister,"Precio por Unidad":i.precio_unidad===0?"-":i.precio_unidad,"Stock por Caja":i.stock_caja===0?"-":i.stock_caja,"Stock por Blister":i.stock_blister===0?"-":i.stock_blister,"Stock por Unidad":i.stock_unidad===0?"-":i.stock_unidad,"Fecha de Vencimiento":i.fecha_vencimiento,Proveedor:i.proveedor,Laboratorio:i.laboratorio})),g=E.book_new(),p=E.json_to_sheet(u),z={font:{bold:!0,color:{rgb:"FFFFFF"}},fill:{fgColor:{rgb:"228B22"}}};Object.keys(p).forEach(i=>{i.startsWith("!")||i[1]==="1"&&(p[i].s=z)});const W=[{wpx:30},{wpx:200},{wpx:250},{wpx:100},{wpx:100},{wpx:100},{wpx:100},{wpx:100},{wpx:100},{wpx:100},{wpx:100},{wpx:100}];p["!cols"]=W,E.book_append_sheet(g,p,d),Ce(g,t==="stockBajo"?"reporte_stock_bajo.xlsx":t==="prontosAVencer"?"reporte_prontos_a_vencer.xlsx":"reporte_todos_los_farmacos.xlsx")},je=t=>{de(t.target.value)},_e=async()=>{try{const t=await v().get("/lab_select");ne(t.data)}catch(t){console.error("Error fetching laboratorios data:",t)}},be=async()=>{try{const t=await v().get("/prov_select");ce(t.data)}catch(t){console.error("Error fetching proveedores data:",t)}},ge=t=>{if(!t)return"";const s=new Date(t),d=("0"+(s.getMonth()+1)).slice(-2),u=("0"+s.getDate()).slice(-2);return s.getFullYear()+"-"+d+"-"+u};return c.useEffect(()=>{_e(),be(),F()},[]),c.useEffect(()=>{D.auth&&D.auth.rol&&Z(D.auth.rol)},[D]),e.jsxs(e.Fragment,{children:[e.jsxs(q,{maxWidth:"xs",open:re,onClose:f,children:[e.jsx(G,{children:"¿Desea eliminar este laboratorio?"}),e.jsx(H,{children:e.jsx(J,{variant:"body1",color:"textSecondary",children:"Esta acción es irreversible."})}),e.jsxs(Y,{children:[e.jsx(k,{variant:"text",color:"primary",onClick:f,children:"Cancelar"}),e.jsx(k,{variant:"contained",color:"primary",onClick:ue,children:"Aceptar"})]})]}),e.jsxs(q,{maxWidth:"xs",open:ee,onClose:h,children:[e.jsxs(G,{children:[T?"Editar Farmaco":"Crear Farmaco",e.jsx(w,{"aria-label":"close",onClick:h,style:{position:"absolute",right:8,top:8},children:e.jsx(Fe,{})})]}),e.jsx(H,{dividers:!0,children:e.jsxs(r,{container:!0,spacing:2,children:[e.jsx(r,{item:!0,xs:12,children:e.jsx(l,{margin:"normal",name:"id",value:o.id,onChange:n,variant:"outlined",size:"small",fullWidth:!0,label:"Codigo"})}),e.jsx(r,{item:!0,xs:12,children:e.jsx(l,{margin:"normal",name:"codigo_barras",value:o.codigo_barras,onChange:n,variant:"outlined",size:"small",fullWidth:!0,label:"Codigo de barras"})}),e.jsx(r,{item:!0,xs:12,children:e.jsx(l,{margin:"normal",name:"nombre",value:o.nombre,onChange:n,variant:"outlined",size:"small",fullWidth:!0,label:"Nombre"})}),e.jsx(r,{item:!0,xs:12,children:e.jsx(l,{margin:"normal",name:"descripcion",value:o.descripcion,onChange:n,variant:"outlined",size:"small",fullWidth:!0,label:"Descripción"})}),e.jsxs(r,{item:!0,xs:12,children:[e.jsx(I,{htmlFor:"presentationType",children:"Tipo de presentación"}),e.jsxs(A,{name:"presentationType",value:S,onChange:je,variant:"outlined",size:"small",fullWidth:!0,children:[e.jsx(m,{value:"caja",children:"Caja"}),e.jsx(m,{value:"blister",children:"Blíster"}),e.jsx(m,{value:"unidad",children:"Unidad"})]})]}),S==="caja"&&e.jsxs(e.Fragment,{children:[e.jsx(r,{item:!0,xs:12,children:e.jsx(l,{fullWidth:!0,label:"Precio Caja",name:"precio_caja",value:o.precio_caja,onChange:n,type:"number",size:"small"})}),e.jsx(r,{item:!0,xs:12,children:e.jsx(l,{label:"Precio Venta Caja",name:"precio_venta_caja",value:o.precio_venta_caja,onChange:n,fullWidth:!0,variant:"outlined",type:"number",size:"small"})}),e.jsx(r,{item:!0,xs:12,children:e.jsx(l,{fullWidth:!0,label:"Stock Caja",name:"stock_caja",value:o.stock_caja,onChange:n,type:"number",size:"small",variant:"outlined"})}),e.jsx(r,{item:!0,xs:12,children:e.jsx(l,{label:"Blisters por Caja",name:"blisters_por_caja",value:o.blisters_por_caja,onChange:n,fullWidth:!0,variant:"outlined",size:"small",type:"number"})}),e.jsx(r,{item:!0,xs:12,children:e.jsx(l,{label:"Unidades por Blister",name:"unidades_por_blister",value:o.unidades_por_blister,onChange:n,fullWidth:!0,size:"small",variant:"outlined",type:"number"})})]}),S==="blister"&&e.jsxs(e.Fragment,{children:[e.jsx(r,{item:!0,xs:12,children:e.jsx(l,{fullWidth:!0,label:"Precio Blister",name:"precio_blister",value:o.precio_blister,onChange:n,type:"number",size:"small"})}),e.jsx(r,{item:!0,xs:12,children:e.jsx(l,{label:"Precio Venta Blister",name:"precio_venta_blister",value:o.precio_venta_blister,onChange:n,fullWidth:!0,variant:"outlined",type:"number",size:"small"})}),e.jsx(r,{item:!0,xs:12,children:e.jsx(l,{fullWidth:!0,label:"Stock Blister",name:"stock_blister",value:o.stock_blister,onChange:n,type:"number",size:"small"})}),e.jsx(r,{item:!0,xs:12,children:e.jsx(l,{label:"Unidades por Blister",name:"unidades_por_blister",value:o.unidades_por_blister,onChange:n,fullWidth:!0,variant:"outlined",type:"number",size:"small"})})]}),S==="unidad"&&e.jsxs(e.Fragment,{children:[e.jsx(r,{item:!0,xs:12,children:e.jsx(l,{fullWidth:!0,label:"Precio Unidad",name:"precio_unidad",value:o.precio_unidad,onChange:n,type:"number",size:"small"})}),e.jsx(r,{item:!0,xs:12,children:e.jsx(l,{label:"Precio Venta Unidad",name:"precio_venta_unidad",value:o.precio_venta_unidad,onChange:n,fullWidth:!0,variant:"outlined",type:"number",size:"small"})}),e.jsx(r,{item:!0,xs:12,children:e.jsx(l,{fullWidth:!0,label:"Stock Unidad",name:"stock_unidad",value:o.stock_unidad,onChange:n,type:"number",size:"small"})})]}),e.jsx(r,{item:!0,xs:12,children:e.jsx(l,{label:"Fecha de Vencimiento",name:"fecha_vencimiento",value:ge(o.fecha_vencimiento),onChange:n,fullWidth:!0,size:"small",variant:"outlined",type:"date",InputLabelProps:{shrink:!0}})}),e.jsxs(r,{item:!0,xs:12,children:[e.jsx(r,{item:!0,xs:12,children:e.jsx(l,{margin:"normal",name:"nivel_reorden",value:o.nivel_reorden,onChange:n,variant:"outlined",size:"small",fullWidth:!0,label:"Nivel de reorden"})}),e.jsx(I,{htmlFor:"proveedor_id",children:"Proveedor"}),e.jsx(A,{name:"proveedor_id",value:o.proveedor_id||"",onChange:n,variant:"outlined",size:"small",fullWidth:!0,children:le.map(t=>e.jsx(m,{value:t.id,children:t.nombre},t.id))})]}),e.jsxs(r,{item:!0,xs:12,children:[e.jsx(I,{htmlFor:"laboratorio_id",children:"Laboratorio"}),e.jsx(A,{name:"laboratorio_id",value:o.laboratorio_id||"",onChange:n,variant:"outlined",size:"small",fullWidth:!0,children:se.map(t=>e.jsx(m,{value:t.id,children:t.nombre},t.id))})]})]})}),e.jsx(Y,{children:e.jsx(k,{variant:"contained",color:"primary",onClick:T?he:pe,children:"Guardar"})})]}),e.jsxs(ke,{title:"Chapina | Farmacos",children:[e.jsx(fe,{message:ie}),e.jsxs(Pe,{maxWidth:"lg",children:[e.jsx(Se,{sx:{pb:5},children:e.jsx(J,{variant:"h4",children:"Lista de Farmacos"})}),e.jsx(r,{container:!0,spacing:2,justifyContent:"space-between",alignItems:"center",children:N==="ADMIN"&&e.jsxs(r,{item:!0,children:[e.jsx(k,{onClick:()=>{C(!1),h(),j(y)},startIcon:e.jsx(Ne,{}),variant:"contained",color:"primary",children:"Agregar Catalogo"}),e.jsx(k,{onClick:xe,startIcon:e.jsx(Be,{}),variant:"contained",color:"secondary",sx:{ml:2},children:"Descargar Reporte"}),e.jsxs(ze,{anchorEl:V,open:!!V,onClose:b,children:[e.jsx(m,{onClick:()=>{U("stockBajo"),b()},children:"Fármacos con Stock Bajo (PDF)"}),e.jsx(m,{onClick:()=>{U("prontosAVencer"),b()},children:"Fármacos Prontos a Vencer (PDF)"}),e.jsx(m,{onClick:()=>{B("stockBajo"),b()},children:"Fármacos con Stock Bajo (Excel)"}),e.jsx(m,{onClick:()=>{B("prontosAVencer"),b()},children:"Fármacos Prontos a Vencer (Excel)"}),e.jsx(m,{onClick:()=>{B("todos"),b()},children:"Todos los Fármacos (Excel)"})]})]})}),e.jsx(r,{container:!0,spacing:2,sx:{mt:2},children:e.jsx(r,{item:!0,xs:12,children:e.jsx(we,{data:x,columns:me.map(t=>t.field===""?{...t,renderCell:s=>e.jsx(Q,{direction:"row",divider:e.jsx(X,{orientation:"vertical",flexItem:!0}),justifyContent:"center",alignItems:"center",spacing:2,children:N==="ADMIN"&&e.jsxs(e.Fragment,{children:[e.jsx(w,{size:"small",onClick:()=>{C(!0),j(s.row),h()},children:e.jsx(O,{})}),e.jsx(w,{size:"small",onClick:()=>{f(),M(s.id)},children:e.jsx(K,{})})]})})}:t)})})})]})]})]})};export{ot as default};
