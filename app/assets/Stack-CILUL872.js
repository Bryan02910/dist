import{P as R,_ as k,Q as v,S as p,U as T,V as D,W as F,r as d,X as B,b as M,j as E,e as G,a as N,Y as h,s as U,u as _}from"./index-UyDEpSKi.js";import{c as O}from"./Box-BLXI0_F0.js";import{s as $,u as A}from"./useThemeProps-D04-WiJJ.js";const L=["component","direction","spacing","divider","children","className","useFlexGap"],W=R(),I=$("div",{name:"MuiStack",slot:"Root",overridesResolver:(e,s)=>s.root});function Q(e){return A({props:e,name:"MuiStack",defaultTheme:W})}function X(e,s){const n=d.Children.toArray(e).filter(Boolean);return n.reduce((c,a,t)=>(c.push(a),t<n.length-1&&c.push(d.cloneElement(s,{key:`separator-${t}`})),c),[])}const Y=e=>({row:"Left","row-reverse":"Right",column:"Top","column-reverse":"Bottom"})[e],q=({ownerState:e,theme:s})=>{let n=k({display:"flex",flexDirection:"column"},v({theme:s},p({values:e.direction,breakpoints:s.breakpoints.values}),c=>({flexDirection:c})));if(e.spacing){const c=T(s),a=Object.keys(s.breakpoints.values).reduce((o,r)=>((typeof e.spacing=="object"&&e.spacing[r]!=null||typeof e.direction=="object"&&e.direction[r]!=null)&&(o[r]=!0),o),{}),t=p({values:e.direction,base:a}),m=p({values:e.spacing,base:a});typeof t=="object"&&Object.keys(t).forEach((o,r,i)=>{if(!t[o]){const u=r>0?t[i[r-1]]:"column";t[o]=u}}),n=D(n,v({theme:s},m,(o,r)=>e.useFlexGap?{gap:h(c,o)}:{"& > :not(style):not(style)":{margin:0},"& > :not(style) ~ :not(style)":{[`margin${Y(r?t[r]:e.direction)}`]:h(c,o)}}))}return n=F(s.breakpoints,n),n};function z(e={}){const{createStyledComponent:s=I,useThemeProps:n=Q,componentName:c="MuiStack"}=e,a=()=>G({root:["root"]},o=>N(c,o),{}),t=s(q);return d.forwardRef(function(o,r){const i=n(o),l=B(i),{component:u="div",direction:x="column",spacing:P=0,divider:y,children:g,className:j,useFlexGap:S=!1}=l,C=M(l,L),V={direction:x,spacing:P,useFlexGap:S},b=a();return E.jsx(t,k({as:u,ownerState:V,ref:r,className:O(b.root,j)},C,{children:y?X(g,y):g}))})}const Z=z({createStyledComponent:U("div",{name:"MuiStack",slot:"Root",overridesResolver:(e,s)=>s.root}),useThemeProps:e=>_({props:e,name:"MuiStack"})});export{Z as S};
