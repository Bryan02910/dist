import{j as e,g as J,a as K,s as $,d as H,_ as R,r as c,u as Q,b as X,c as N,e as Z,M as ee}from"./index-UyDEpSKi.js";import{P as te}from"./Page-DWSL0diS.js";import{T as ae,A}from"./ToastAutoHide-mD-74I2T.js";import{E as ne}from"./jspdf.plugin.autotable-DmuIJyGd.js";import{u as F,w as se}from"./xlsx-DjuO7_Ju.js";import{i as re}from"./index-tCDBB_r2.js";import{C as oe}from"./Container-uQWJgnJV.js";import{T as ie,B as le}from"./Box-BLXI0_F0.js";import{T as ce}from"./TextField-BGn-4xfW.js";import{B as M}from"./ButtonGroup-yBcTUZVq.js";import{B as x}from"./Button-CjDs8j-X.js";import{T as de,a as B,b as E,c as v,d as I}from"./TableRow-B-cCF0_f.js";import{T as n,D as he,a as ue,b as xe,c as ge}from"./TableCell-B8HtnHjl.js";import{c as pe,B as me}from"./ButtonBase-Bhi2RUyb.js";import{T as fe}from"./TablePagination-CBjQ43ZL.js";import"./Grow-41TwNg0m.js";import"./useThemeProps-D04-WiJJ.js";import"./Menu-9ysSaJL7.js";import"./Toolbar-D0r--W_a.js";import"./MenuItem-B_SiXQ1x.js";const je=pe(e.jsx("path",{d:"M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z"}),"ArrowDownward");function be(a){return K("MuiTableSortLabel",a)}const P=J("MuiTableSortLabel",["root","active","icon","iconDirectionDesc","iconDirectionAsc"]),ve=["active","children","className","direction","hideSortIcon","IconComponent"],ye=a=>{const{classes:r,direction:l,active:u}=a,d={root:["root",u&&"active"],icon:["icon",`iconDirection${H(l)}`]};return Z(d,be,r)},Ce=$(me,{name:"MuiTableSortLabel",slot:"Root",overridesResolver:(a,r)=>{const{ownerState:l}=a;return[r.root,l.active&&r.active]}})(({theme:a})=>({cursor:"pointer",display:"inline-flex",justifyContent:"flex-start",flexDirection:"inherit",alignItems:"center","&:focus":{color:(a.vars||a).palette.text.secondary},"&:hover":{color:(a.vars||a).palette.text.secondary,[`& .${P.icon}`]:{opacity:.5}},[`&.${P.active}`]:{color:(a.vars||a).palette.text.primary,[`& .${P.icon}`]:{opacity:1,color:(a.vars||a).palette.text.secondary}}})),Te=$("span",{name:"MuiTableSortLabel",slot:"Icon",overridesResolver:(a,r)=>{const{ownerState:l}=a;return[r.icon,r[`iconDirection${H(l.direction)}`]]}})(({theme:a,ownerState:r})=>R({fontSize:18,marginRight:4,marginLeft:4,opacity:0,transition:a.transitions.create(["opacity","transform"],{duration:a.transitions.duration.shorter}),userSelect:"none"},r.direction==="desc"&&{transform:"rotate(0deg)"},r.direction==="asc"&&{transform:"rotate(180deg)"})),y=c.forwardRef(function(r,l){const u=Q({props:r,name:"MuiTableSortLabel"}),{active:d=!1,children:C,className:f,direction:T="asc",hideSortIcon:g=!1,IconComponent:S=je}=u,m=X(u,ve),j=R({},u,{active:d,direction:T,hideSortIcon:g,IconComponent:S}),w=ye(j);return e.jsxs(Ce,R({className:N(w.root,f),component:"span",disableRipple:!0,ownerState:j,ref:l},m,{children:[C,g&&!d?null:e.jsx(Te,{as:S,className:N(w.icon),ownerState:j})]}))}),Ye=()=>{c.useContext(ee);const[a,r]=c.useState([]),[l,u]=c.useState([]),[d,C]=c.useState({ident:null,message:null,type:null}),[f,T]=c.useState(0),[g,S]=c.useState(5),[m,j]=c.useState(""),[w,V]=c.useState(!1),[p,_]=c.useState("");c.useEffect(()=>{let t=!0;return(async()=>{try{const{data:o}=await A().get("/historial_ventas");t&&r(o)}catch{t&&C({ident:new Date().getTime(),message:"Error al cargar el historial de ventas",type:"error"})}})(),()=>{t=!1}},[]);const W=async t=>{try{const{data:s}=await A().get(`/detalle_ventas/${t}`);u(Array.isArray(s)?s:[]),V(!0)}catch{C({ident:new Date().getTime(),message:"Error al cargar los detalles de la venta",type:"error"})}},z=(t,s)=>{T(s)},G=t=>{S(parseInt(t.target.value,10)),T(0)},k=()=>{V(!1),u([])},b=(t=>{const s=new Date;if(p==="month")return t.filter(o=>{const i=new Date(o.fecha_venta);return i.getMonth()===s.getMonth()&&i.getFullYear()===s.getFullYear()});if(p==="week"){const o=new Date(s.setDate(s.getDate()-s.getDay()));return t.filter(i=>new Date(i.fecha_venta)>=o)}return p==="year"?t.filter(o=>new Date(o.fecha_venta).getFullYear()===s.getFullYear()):t})(a.filter(t=>t.Nofactura.toString().includes(m)||t.fecha_venta.toString().includes(m)||t.nombre_cliente.toString().includes(m))),U=()=>{const t=new ne("landscape","mm","a4"),s=re.Logo,o=()=>{t.addImage(s,"JPEG",t.internal.pageSize.getWidth()-40-10,10,40,30)},i=`Reporte de Ventas - ${p?`Filtro: ${p}`:"Todas las Ventas"}`;t.setFontSize(14),t.text(i,20,15);const D=b.map(h=>[h.Nofactura,h.fecha_venta,h.nombre_cliente,h.nit,h.total_venta.toFixed(2)]),O=["No. de recibo","Fecha","Cliente","Nit","Total"],q=b.reduce((h,L)=>h+parseFloat(L.total_venta||0),0).toFixed(2);D.push(["","","","Total General",q]),o(),t.autoTable({head:[O],body:D,startY:30,theme:"striped",styles:{fontSize:10,cellPadding:2},headStyles:{fillColor:[22,160,133]},didDrawPage:h=>{o()}}),t.save(`Reporte_Ventas_${p||"todas"}.pdf`)},Y=()=>{const t=b.map(i=>({"No. de recibo":i.Nofactura,Fecha:i.fecha_venta,Cliente:i.nombre_cliente,Nit:i.nit,Total:i.total_venta.toFixed(2)})),s=F.json_to_sheet(t),o=F.book_new();F.book_append_sheet(o,s,"Ventas"),se(o,`Reporte_Ventas_${p||"todas"}.xlsx`)};return e.jsx(e.Fragment,{children:e.jsx(te,{title:"Chapina| Historial de ventas",children:e.jsxs(oe,{children:[e.jsx(ie,{variant:"h4",gutterBottom:!0,children:"Historial de Ventas"}),d.message&&e.jsx(ae,{message:d.message,type:d.type,id:d.ident}),e.jsx(ce,{label:"Buscar por No. de factura o fecha",variant:"outlined",fullWidth:!0,value:m,onChange:t=>j(t.target.value),sx:{mb:2}}),e.jsxs(le,{sx:{display:"flex",justifyContent:"space-between",mb:2},children:[e.jsxs(M,{variant:"contained",children:[e.jsx(x,{onClick:()=>_("week"),children:"Esta Semana"}),e.jsx(x,{onClick:()=>_("month"),children:"Este Mes"}),e.jsx(x,{onClick:()=>_("year"),children:"Este Año"}),e.jsx(x,{onClick:()=>_(""),children:"Todas"})]}),e.jsxs(M,{variant:"contained",children:[e.jsx(x,{onClick:U,children:"Generar PDF"}),e.jsx(x,{onClick:Y,children:"Generar Excel"})]})]}),e.jsx(de,{children:e.jsxs(B,{children:[e.jsx(E,{children:e.jsxs(v,{children:[e.jsx(n,{children:e.jsx(y,{active:!0,children:"No. de recibo"})}),e.jsx(n,{children:e.jsx(y,{active:!0,children:"Fecha"})}),e.jsx(n,{children:e.jsx(y,{active:!0,children:"Cliente"})}),e.jsx(n,{children:e.jsx(y,{active:!0,children:"Nit"})}),e.jsx(n,{children:e.jsx(y,{active:!0,children:"Total"})}),e.jsx(n,{align:"right",children:"Acciones"})]})}),e.jsx(I,{children:b.slice(f*g,f*g+g).map(t=>e.jsxs(v,{children:[e.jsx(n,{children:t.Nofactura}),e.jsx(n,{children:t.fecha_venta}),e.jsx(n,{children:t.nombre_cliente}),e.jsx(n,{children:t.nit}),e.jsx(n,{children:t.total_venta.toFixed(2)}),e.jsx(n,{align:"right",children:e.jsx(x,{variant:"outlined",onClick:()=>W(t.Nofactura),children:"Ver Detalles"})})]},t.id))})]})}),e.jsx(fe,{rowsPerPageOptions:[5,10,25],component:"div",count:b.length,rowsPerPage:g,page:f,onPageChange:z,onRowsPerPageChange:G}),e.jsxs(he,{open:w,onClose:k,children:[e.jsx(ue,{children:"Detalles de la Venta"}),e.jsx(xe,{children:e.jsxs(B,{children:[e.jsx(E,{children:e.jsxs(v,{children:[e.jsx(n,{children:"Farmaco"}),e.jsx(n,{children:"Cantidad"}),e.jsx(n,{children:"Precio de Venta"}),e.jsx(n,{children:"Total"})]})}),e.jsx(I,{children:Array.isArray(l)&&l.length>0?l.map(t=>e.jsxs(v,{children:[e.jsx(n,{children:t.nombre_farmaco}),e.jsx(n,{children:t.cantidad}),e.jsx(n,{children:t.precio_venta.toFixed(2)}),e.jsx(n,{children:t.total_farmaco.toFixed(2)})]},t.detalle_id)):e.jsx(v,{children:e.jsx(n,{colSpan:4,align:"center",children:"No hay detalles disponibles"})})})]})}),e.jsx(ge,{children:e.jsx(x,{onClick:k,color:"primary",children:"Cerrar"})})]})]})})})};export{Ye as default};
