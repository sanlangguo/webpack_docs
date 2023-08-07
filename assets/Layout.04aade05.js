import{_ as S,r as R,o as a,a as i,e as $,f as C,i as P,j as _,F as I,k as A,l as w,m as de,b as g,t as x,n as z,p as Y,q as T,w as N,s as ce,h,v as y,d as j,x as X,y as Te,z as J,A as Q,B as K,C as _e,D as pe,E,u as he,g as D,T as me,G as O,H as fe,I as q,J as G,K as xe,L as Be,M as Z,N as be,O as ge,c as Ne,P as ke,Q as De,R as U,S as ee,U as Ie,V as He,W as Me,X as Pe}from"./app.b6207aaf.js";const Ee=u=>/^mailto:/.test(u),Re=u=>/^tel:/.test(u),Ae={},Fe={class:"theme-default-content custom"};function Oe(u,n){const e=R("Content");return a(),i("div",Fe,[$(e)])}var ze=S(Ae,[["render",Oe],["__file","HomeContent.vue"]]);const We={key:0,class:"features"},Ve=C({__name:"HomeFeatures",setup(u){const n=P(),e=_(()=>de(n.value.features)?n.value.features:[]);return(l,r)=>e.value.length?(a(),i("div",We,[(a(!0),i(I,null,A(e.value,v=>(a(),i("div",{key:v.title,class:"feature"},[g("h2",null,x(v.title),1),g("p",null,x(v.details),1)]))),128))])):w("",!0)}});var Ue=S(Ve,[["__file","HomeFeatures.vue"]]);const je=["innerHTML"],Ke=["textContent"],qe=C({__name:"HomeFooter",setup(u){const n=P(),e=_(()=>n.value.footer),l=_(()=>n.value.footerHtml);return(r,v)=>e.value?(a(),i(I,{key:0},[l.value?(a(),i("div",{key:0,class:"footer",innerHTML:e.value},null,8,je)):(a(),i("div",{key:1,class:"footer",textContent:x(e.value)},null,8,Ke))],64)):w("",!0)}});var Ge=S(qe,[["__file","HomeFooter.vue"]]);const Xe=["href","rel","target","aria-label"],Ye=C({inheritAttrs:!1}),Je=C({...Ye,__name:"AutoLink",props:{item:{type:Object,required:!0}},setup(u){const n=u,e=z(),l=Te(),{item:r}=Y(n),v=_(()=>X(r.value.link)),m=_(()=>Ee(r.value.link)||Re(r.value.link)),p=_(()=>{if(!m.value){if(r.value.target)return r.value.target;if(v.value)return"_blank"}}),t=_(()=>p.value==="_blank"),o=_(()=>!v.value&&!m.value&&!t.value),s=_(()=>{if(!m.value){if(r.value.rel)return r.value.rel;if(t.value)return"noopener noreferrer"}}),c=_(()=>r.value.ariaLabel||r.value.text),d=_(()=>{const L=Object.keys(l.value.locales);return L.length?!L.some(f=>f===r.value.link):r.value.link!=="/"}),b=_(()=>d.value?e.path.startsWith(r.value.link):!1),k=_(()=>o.value?r.value.activeMatch?new RegExp(r.value.activeMatch).test(e.path):b.value:!1);return(L,f)=>{const B=R("RouterLink"),H=R("AutoLinkExternalIcon");return o.value?(a(),T(B,ce({key:0,class:{"router-link-active":k.value},to:h(r).link,"aria-label":c.value},L.$attrs),{default:N(()=>[y(L.$slots,"before"),j(" "+x(h(r).text)+" ",1),y(L.$slots,"after")]),_:3},16,["class","to","aria-label"])):(a(),i("a",ce({key:1,class:"external-link",href:h(r).link,rel:s.value,target:p.value,"aria-label":c.value},L.$attrs),[y(L.$slots,"before"),j(" "+x(h(r).text)+" ",1),t.value?(a(),T(H,{key:0})):w("",!0),y(L.$slots,"after")],16,Xe))}}});var M=S(Je,[["__file","AutoLink.vue"]]);const Qe={class:"hero"},Ze={key:0,id:"main-title"},et={key:1,class:"description"},tt={key:2,class:"actions"},at=C({__name:"HomeHero",setup(u){const n=P(),e=J(),l=Q(),r=_(()=>l.value&&n.value.heroImageDark!==void 0?n.value.heroImageDark:n.value.heroImage),v=_(()=>n.value.heroText===null?null:n.value.heroText||e.value.title||"Hello"),m=_(()=>n.value.heroAlt||v.value||"hero"),p=_(()=>n.value.tagline===null?null:n.value.tagline||e.value.description||"Welcome to your VuePress site"),t=_(()=>de(n.value.actions)?n.value.actions.map(({text:s,link:c,type:d="primary"})=>({text:s,link:c,type:d})):[]),o=()=>{if(!r.value)return null;const s=K("img",{src:_e(r.value),alt:m.value});return n.value.heroImageDark===void 0?s:K(pe,()=>s)};return(s,c)=>(a(),i("header",Qe,[$(o),v.value?(a(),i("h1",Ze,x(v.value),1)):w("",!0),p.value?(a(),i("p",et,x(p.value),1)):w("",!0),t.value.length?(a(),i("p",tt,[(a(!0),i(I,null,A(t.value,d=>(a(),T(M,{key:d.text,class:E(["action-button",[d.type]]),item:d},null,8,["class","item"]))),128))])):w("",!0)]))}});var nt=S(at,[["__file","HomeHero.vue"]]);const rt={class:"home"},ot=C({__name:"Home",setup(u){return(n,e)=>(a(),i("main",rt,[$(nt),$(Ue),$(ze),$(Ge)]))}});var st=S(ot,[["__file","Home.vue"]]);const lt=C({__name:"NavbarBrand",setup(u){const n=he(),e=J(),l=D(),r=Q(),v=_(()=>l.value.home||n.value),m=_(()=>e.value.title),p=_(()=>r.value&&l.value.logoDark!==void 0?l.value.logoDark:l.value.logo),t=()=>{if(!p.value)return null;const o=K("img",{class:"logo",src:_e(p.value),alt:m.value});return l.value.logoDark===void 0?o:K(pe,()=>o)};return(o,s)=>{const c=R("RouterLink");return a(),T(c,{to:v.value},{default:N(()=>[$(t),m.value?(a(),i("span",{key:0,class:E(["site-name",{"can-hide":p.value}])},x(m.value),3)):w("",!0)]),_:1},8,["to"])}}});var ut=S(lt,[["__file","NavbarBrand.vue"]]);const it=C({__name:"DropdownTransition",setup(u){const n=l=>{l.style.height=l.scrollHeight+"px"},e=l=>{l.style.height=""};return(l,r)=>(a(),T(me,{name:"dropdown",onEnter:n,onAfterEnter:e,onBeforeLeave:n},{default:N(()=>[y(l.$slots,"default")]),_:3}))}});var $e=S(it,[["__file","DropdownTransition.vue"]]);const ct=["aria-label"],vt={class:"title"},dt=g("span",{class:"arrow down"},null,-1),_t=["aria-label"],pt={class:"title"},ht={class:"navbar-dropdown"},mt={class:"navbar-dropdown-subtitle"},ft={key:1},bt={class:"navbar-dropdown-subitem-wrapper"},gt=C({__name:"NavbarDropdown",props:{item:{type:Object,required:!0}},setup(u){const n=u,{item:e}=Y(n),l=_(()=>e.value.ariaLabel||e.value.text),r=O(!1),v=z();fe(()=>v.path,()=>{r.value=!1});const m=t=>{t.detail===0?r.value=!r.value:r.value=!1},p=(t,o)=>o[o.length-1]===t;return(t,o)=>(a(),i("div",{class:E(["navbar-dropdown-wrapper",{open:r.value}])},[g("button",{class:"navbar-dropdown-title",type:"button","aria-label":l.value,onClick:m},[g("span",vt,x(h(e).text),1),dt],8,ct),g("button",{class:"navbar-dropdown-title-mobile",type:"button","aria-label":l.value,onClick:o[0]||(o[0]=s=>r.value=!r.value)},[g("span",pt,x(h(e).text),1),g("span",{class:E(["arrow",r.value?"down":"right"])},null,2)],8,_t),$($e,null,{default:N(()=>[q(g("ul",ht,[(a(!0),i(I,null,A(h(e).children,s=>(a(),i("li",{key:s.text,class:"navbar-dropdown-item"},[s.children?(a(),i(I,{key:0},[g("h4",mt,[s.link?(a(),T(M,{key:0,item:s,onFocusout:c=>p(s,h(e).children)&&s.children.length===0&&(r.value=!1)},null,8,["item","onFocusout"])):(a(),i("span",ft,x(s.text),1))]),g("ul",bt,[(a(!0),i(I,null,A(s.children,c=>(a(),i("li",{key:c.link,class:"navbar-dropdown-subitem"},[$(M,{item:c,onFocusout:d=>p(c,s.children)&&p(s,h(e).children)&&(r.value=!1)},null,8,["item","onFocusout"])]))),128))])],64)):(a(),T(M,{key:1,item:s,onFocusout:c=>p(s,h(e).children)&&(r.value=!1)},null,8,["item","onFocusout"]))]))),128))],512),[[G,r.value]])]),_:1})],2))}});var kt=S(gt,[["__file","NavbarDropdown.vue"]]);const ve=u=>decodeURI(u).replace(/#.*$/,"").replace(/(index)?\.(md|html)$/,""),$t=(u,n)=>{if(n.hash===u)return!0;const e=ve(n.path),l=ve(u);return e===l},Le=(u,n)=>u.link&&$t(u.link,n)?!0:u.children?u.children.some(e=>Le(e,n)):!1,ye=u=>!X(u)||/github\.com/.test(u)?"GitHub":/bitbucket\.org/.test(u)?"Bitbucket":/gitlab\.com/.test(u)?"GitLab":/gitee\.com/.test(u)?"Gitee":null,Lt={GitHub:":repo/edit/:branch/:path",GitLab:":repo/-/edit/:branch/:path",Gitee:":repo/edit/:branch/:path",Bitbucket:":repo/src/:branch/:path?mode=edit&spa=0&at=:branch&fileviewer=file-view-default"},yt=({docsRepo:u,editLinkPattern:n})=>{if(n)return n;const e=ye(u);return e!==null?Lt[e]:null},wt=({docsRepo:u,docsBranch:n,docsDir:e,filePathRelative:l,editLinkPattern:r})=>{if(!l)return null;const v=yt({docsRepo:u,editLinkPattern:r});return v?v.replace(/:repo/,X(u)?u:`https://github.com/${u}`).replace(/:branch/,n).replace(/:path/,xe(`${Be(e)}/${l}`)):null},St={key:0,class:"navbar-items"},Ct=C({__name:"NavbarItems",setup(u){const n=()=>{const o=Z(),s=he(),c=J(),d=D();return _(()=>{var B,H;const b=Object.keys(c.value.locales);if(b.length<2)return[];const k=o.currentRoute.value.path,L=o.currentRoute.value.fullPath;return[{text:(B=d.value.selectLanguageText)!=null?B:"unknown language",ariaLabel:(H=d.value.selectLanguageAriaLabel)!=null?H:"unkown language",children:b.map(F=>{var ne,re,oe,se,le,ue;const W=(re=(ne=c.value.locales)==null?void 0:ne[F])!=null?re:{},te=(se=(oe=d.value.locales)==null?void 0:oe[F])!=null?se:{},ae=`${W.lang}`,Se=(le=te.selectLanguageName)!=null?le:ae;let V;if(ae===c.value.lang)V=L;else{const ie=k.replace(s.value,F);o.getRoutes().some(Ce=>Ce.path===ie)?V=ie:V=(ue=te.home)!=null?ue:F}return{text:Se,link:V}})}]})},e=()=>{const o=D(),s=_(()=>o.value.repo),c=_(()=>s.value?ye(s.value):null),d=_(()=>s.value&&!X(s.value)?`https://github.com/${s.value}`:s.value),b=_(()=>d.value?o.value.repoLabel?o.value.repoLabel:c.value===null?"Source":c.value:null);return _(()=>!d.value||!b.value?[]:[{text:b.value,link:d.value}])},l=o=>be(o)?ge(o):o.children?{...o,children:o.children.map(l)}:o,v=(()=>{const o=D();return _(()=>(o.value.navbar||[]).map(l))})(),m=n(),p=e(),t=_(()=>[...v.value,...m.value,...p.value]);return(o,s)=>t.value.length?(a(),i("nav",St,[(a(!0),i(I,null,A(t.value,c=>(a(),i("div",{key:c.text,class:"navbar-item"},[c.children?(a(),T(kt,{key:0,item:c},null,8,["item"])):(a(),T(M,{key:1,item:c},null,8,["item"]))]))),128))])):w("",!0)}});var we=S(Ct,[["__file","NavbarItems.vue"]]);const Tt=["title"],xt={class:"icon",focusable:"false",viewBox:"0 0 32 32"},Bt=Ne('<path d="M16 12.005a4 4 0 1 1-4 4a4.005 4.005 0 0 1 4-4m0-2a6 6 0 1 0 6 6a6 6 0 0 0-6-6z" fill="currentColor"></path><path d="M5.394 6.813l1.414-1.415l3.506 3.506L8.9 10.318z" fill="currentColor"></path><path d="M2 15.005h5v2H2z" fill="currentColor"></path><path d="M5.394 25.197L8.9 21.691l1.414 1.415l-3.506 3.505z" fill="currentColor"></path><path d="M15 25.005h2v5h-2z" fill="currentColor"></path><path d="M21.687 23.106l1.414-1.415l3.506 3.506l-1.414 1.414z" fill="currentColor"></path><path d="M25 15.005h5v2h-5z" fill="currentColor"></path><path d="M21.687 8.904l3.506-3.506l1.414 1.415l-3.506 3.505z" fill="currentColor"></path><path d="M15 2.005h2v5h-2z" fill="currentColor"></path>',9),Nt=[Bt],Dt={class:"icon",focusable:"false",viewBox:"0 0 32 32"},It=g("path",{d:"M13.502 5.414a15.075 15.075 0 0 0 11.594 18.194a11.113 11.113 0 0 1-7.975 3.39c-.138 0-.278.005-.418 0a11.094 11.094 0 0 1-3.2-21.584M14.98 3a1.002 1.002 0 0 0-.175.016a13.096 13.096 0 0 0 1.825 25.981c.164.006.328 0 .49 0a13.072 13.072 0 0 0 10.703-5.555a1.01 1.01 0 0 0-.783-1.565A13.08 13.08 0 0 1 15.89 4.38A1.015 1.015 0 0 0 14.98 3z",fill:"currentColor"},null,-1),Ht=[It],Mt=C({__name:"ToggleDarkModeButton",setup(u){const n=D(),e=Q(),l=()=>{e.value=!e.value};return(r,v)=>(a(),i("button",{class:"toggle-dark-button",title:h(n).toggleDarkMode,onClick:l},[q((a(),i("svg",xt,Nt,512)),[[G,!h(e)]]),q((a(),i("svg",Dt,Ht,512)),[[G,h(e)]])],8,Tt))}});var Pt=S(Mt,[["__file","ToggleDarkModeButton.vue"]]);const Et=["title"],Rt=g("div",{class:"icon","aria-hidden":"true"},[g("span"),g("span"),g("span")],-1),At=[Rt],Ft=C({__name:"ToggleSidebarButton",emits:["toggle"],setup(u){const n=D();return(e,l)=>(a(),i("div",{class:"toggle-sidebar-button",title:h(n).toggleSidebar,"aria-expanded":"false",role:"button",tabindex:"0",onClick:l[0]||(l[0]=r=>e.$emit("toggle"))},At,8,Et))}});var Ot=S(Ft,[["__file","ToggleSidebarButton.vue"]]);const zt=C({__name:"Navbar",emits:["toggle-sidebar"],setup(u){const n=D(),e=O(null),l=O(null),r=O(0),v=_(()=>r.value?{maxWidth:r.value+"px"}:{}),m=_(()=>n.value.darkMode);ke(()=>{const o=p(e.value,"paddingLeft")+p(e.value,"paddingRight"),s=()=>{var c;window.innerWidth<=719?r.value=0:r.value=e.value.offsetWidth-o-(((c=l.value)==null?void 0:c.offsetWidth)||0)};s(),window.addEventListener("resize",s,!1),window.addEventListener("orientationchange",s,!1)});function p(t,o){var d,b,k;const s=(k=(b=(d=t==null?void 0:t.ownerDocument)==null?void 0:d.defaultView)==null?void 0:b.getComputedStyle(t,null))==null?void 0:k[o],c=Number.parseInt(s,10);return Number.isNaN(c)?0:c}return(t,o)=>{const s=R("NavbarSearch");return a(),i("header",{ref_key:"navbar",ref:e,class:"navbar"},[$(Ot,{onToggle:o[0]||(o[0]=c=>t.$emit("toggle-sidebar"))}),g("span",{ref_key:"navbarBrand",ref:l},[$(ut)],512),g("div",{class:"navbar-items-wrapper",style:De(v.value)},[y(t.$slots,"before"),$(we,{class:"can-hide"}),y(t.$slots,"after"),m.value?(a(),T(Pt,{key:0})):w("",!0),$(s)],4)],512)}}});var Wt=S(zt,[["__file","Navbar.vue"]]);const Vt={class:"page-meta"},Ut={key:0,class:"meta-item edit-link"},jt={key:1,class:"meta-item last-updated"},Kt={class:"meta-item-label"},qt={class:"meta-item-info"},Gt={key:2,class:"meta-item contributors"},Xt={class:"meta-item-label"},Yt={class:"meta-item-info"},Jt=["title"],Qt=C({__name:"PageMeta",setup(u){const n=()=>{const t=D(),o=U(),s=P();return _(()=>{var H,F,W;if(!((F=(H=s.value.editLink)!=null?H:t.value.editLink)!=null?F:!0))return null;const{repo:d,docsRepo:b=d,docsBranch:k="main",docsDir:L="",editLinkText:f}=t.value;if(!b)return null;const B=wt({docsRepo:b,docsBranch:k,docsDir:L,filePathRelative:o.value.filePathRelative,editLinkPattern:(W=s.value.editLinkPattern)!=null?W:t.value.editLinkPattern});return B?{text:f!=null?f:"Edit this page",link:B}:null})},e=()=>{const t=D(),o=U(),s=P();return _(()=>{var b,k,L,f;return!((k=(b=s.value.lastUpdated)!=null?b:t.value.lastUpdated)!=null?k:!0)||!((L=o.value.git)!=null&&L.updatedTime)?null:new Date((f=o.value.git)==null?void 0:f.updatedTime).toLocaleString()})},l=()=>{const t=D(),o=U(),s=P();return _(()=>{var d,b,k,L;return((b=(d=s.value.contributors)!=null?d:t.value.contributors)!=null?b:!0)&&(L=(k=o.value.git)==null?void 0:k.contributors)!=null?L:null})},r=D(),v=n(),m=e(),p=l();return(t,o)=>{const s=R("ClientOnly");return a(),i("footer",Vt,[h(v)?(a(),i("div",Ut,[$(M,{class:"meta-item-label",item:h(v)},null,8,["item"])])):w("",!0),h(m)?(a(),i("div",jt,[g("span",Kt,x(h(r).lastUpdatedText)+": ",1),$(s,null,{default:N(()=>[g("span",qt,x(h(m)),1)]),_:1})])):w("",!0),h(p)&&h(p).length?(a(),i("div",Gt,[g("span",Xt,x(h(r).contributorsText)+": ",1),g("span",Yt,[(a(!0),i(I,null,A(h(p),(c,d)=>(a(),i(I,{key:d},[g("span",{class:"contributor",title:`email: ${c.email}`},x(c.name),9,Jt),d!==h(p).length-1?(a(),i(I,{key:0},[j(", ")],64)):w("",!0)],64))),128))])])):w("",!0)])}}});var Zt=S(Qt,[["__file","PageMeta.vue"]]);const ea={key:0,class:"page-nav"},ta={class:"inner"},aa={key:0,class:"prev"},na={key:1,class:"next"},ra=C({__name:"PageNav",setup(u){const n=t=>t===!1?null:be(t)?ge(t):Ie(t)?t:!1,e=(t,o,s)=>{const c=t.findIndex(d=>d.link===o);if(c!==-1){const d=t[c+s];return d!=null&&d.link?d:null}for(const d of t)if(d.children){const b=e(d.children,o,s);if(b)return b}return null},l=P(),r=ee(),v=z(),m=_(()=>{const t=n(l.value.prev);return t!==!1?t:e(r.value,v.path,-1)}),p=_(()=>{const t=n(l.value.next);return t!==!1?t:e(r.value,v.path,1)});return(t,o)=>m.value||p.value?(a(),i("nav",ea,[g("p",ta,[m.value?(a(),i("span",aa,[$(M,{item:m.value},null,8,["item"])])):w("",!0),p.value?(a(),i("span",na,[$(M,{item:p.value},null,8,["item"])])):w("",!0)])])):w("",!0)}});var oa=S(ra,[["__file","PageNav.vue"]]);const sa={class:"page"},la={class:"theme-default-content"},ua=C({__name:"Page",setup(u){return(n,e)=>{const l=R("Content");return a(),i("main",sa,[y(n.$slots,"top"),g("div",la,[$(l)]),$(Zt),$(oa),y(n.$slots,"bottom")])}}});var ia=S(ua,[["__file","Page.vue"]]);const ca={class:"sidebar-item-children"},va=C({__name:"SidebarItem",props:{item:{type:Object,required:!0},depth:{type:Number,required:!1,default:0}},setup(u){const n=u,{item:e,depth:l}=Y(n),r=z(),v=Z(),m=_(()=>Le(e.value,r)),p=_(()=>({"sidebar-item":!0,"sidebar-heading":l.value===0,active:m.value,collapsible:e.value.collapsible})),t=O(!0),o=O(void 0);return e.value.collapsible&&(t.value=m.value,o.value=()=>{t.value=!t.value},v.afterEach(()=>{t.value=m.value})),(s,c)=>{var b;const d=R("SidebarItem",!0);return a(),i("li",null,[h(e).link?(a(),T(M,{key:0,class:E(p.value),item:h(e)},null,8,["class","item"])):(a(),i("p",{key:1,tabindex:"0",class:E(p.value),onClick:c[0]||(c[0]=(...k)=>o.value&&o.value(...k)),onKeydown:c[1]||(c[1]=He((...k)=>o.value&&o.value(...k),["enter"]))},[j(x(h(e).text)+" ",1),h(e).collapsible?(a(),i("span",{key:0,class:E(["arrow",t.value?"down":"right"])},null,2)):w("",!0)],34)),(b=h(e).children)!=null&&b.length?(a(),T($e,{key:2},{default:N(()=>[q(g("ul",ca,[(a(!0),i(I,null,A(h(e).children,k=>(a(),T(d,{key:`${h(l)}${k.text}${k.link}`,item:k,depth:h(l)+1},null,8,["item","depth"]))),128))],512),[[G,t.value]])]),_:1})):w("",!0)])}}});var da=S(va,[["__file","SidebarItem.vue"]]);const _a={key:0,class:"sidebar-items"},pa=C({__name:"SidebarItems",setup(u){const n=z(),e=ee();return fe(()=>n.hash,l=>{const r=document.querySelector(".sidebar");if(!r)return;const v=document.querySelector(`.sidebar a.sidebar-item[href="${n.path}${l}"]`);if(!v)return;const m=r.getBoundingClientRect().top,p=r.getBoundingClientRect().height,t=v.getBoundingClientRect().top,o=v.getBoundingClientRect().height;t<m?v.scrollIntoView(!0):t+o>m+p&&v.scrollIntoView(!1)}),(l,r)=>h(e).length?(a(),i("ul",_a,[(a(!0),i(I,null,A(h(e),v=>(a(),T(da,{key:v.link||v.text,item:v},null,8,["item"]))),128))])):w("",!0)}});var ha=S(pa,[["__file","SidebarItems.vue"]]);const ma={class:"sidebar"},fa=C({__name:"Sidebar",setup(u){return(n,e)=>(a(),i("aside",ma,[$(we),y(n.$slots,"top"),$(ha),y(n.$slots,"bottom")]))}});var ba=S(fa,[["__file","Sidebar.vue"]]);const ga=C({__name:"Layout",setup(u){const n=U(),e=P(),l=D(),r=_(()=>e.value.navbar!==!1&&l.value.navbar!==!1),v=ee(),m=O(!1),p=f=>{m.value=typeof f=="boolean"?f:!m.value},t={x:0,y:0},o=f=>{t.x=f.changedTouches[0].clientX,t.y=f.changedTouches[0].clientY},s=f=>{const B=f.changedTouches[0].clientX-t.x,H=f.changedTouches[0].clientY-t.y;Math.abs(B)>Math.abs(H)&&Math.abs(B)>40&&(B>0&&t.x<=80?p(!0):p(!1))},c=_(()=>[{"no-navbar":!r.value,"no-sidebar":!v.value.length,"sidebar-open":m.value},e.value.pageClass]);let d;ke(()=>{d=Z().afterEach(()=>{p(!1)})}),Me(()=>{d()});const b=Pe(),k=b.resolve,L=b.pending;return(f,B)=>(a(),i("div",{class:E(["theme-container",c.value]),onTouchstart:o,onTouchend:s},[y(f.$slots,"navbar",{},()=>[r.value?(a(),T(Wt,{key:0,onToggleSidebar:p},{before:N(()=>[y(f.$slots,"navbar-before")]),after:N(()=>[y(f.$slots,"navbar-after")]),_:3})):w("",!0)]),g("div",{class:"sidebar-mask",onClick:B[0]||(B[0]=H=>p(!1))}),y(f.$slots,"sidebar",{},()=>[$(ba,null,{top:N(()=>[y(f.$slots,"sidebar-top")]),bottom:N(()=>[y(f.$slots,"sidebar-bottom")]),_:3})]),y(f.$slots,"page",{},()=>[h(e).home?(a(),T(st,{key:0})):(a(),T(me,{key:1,name:"fade-slide-y",mode:"out-in",onBeforeEnter:h(k),onBeforeLeave:h(L)},{default:N(()=>[(a(),T(ia,{key:h(n).path},{top:N(()=>[y(f.$slots,"page-top")]),bottom:N(()=>[y(f.$slots,"page-bottom")]),_:3}))]),_:3},8,["onBeforeEnter","onBeforeLeave"]))])],34))}});var $a=S(ga,[["__file","Layout.vue"]]);export{$a as default};