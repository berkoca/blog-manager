(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[7],{107:function(e,t,n){},120:function(e,t,n){},175:function(e,t,n){},176:function(e,t,n){},248:function(e,t,n){"use strict";n.r(t);var a=n(2),c=n(8),r=n(0),i=function(){return localStorage.getItem("userData")},o=function(e){return Object(a.a)(Object(a.a)({},e),{},{colors:Object(a.a)(Object(a.a)({},e.colors),{},{primary25:"#7367f01a",primary:"#7367f0",neutral10:"#7367f0",neutral20:"#ededed",neutral30:"#ededed"})})},s=n(10),l=n(115),u=Object(r.createContext)(),d=(Object(l.a)(u.Consumer),n(7)),b=n(11),j=n.n(b),m=n(22),h=function(e){return function(t){return t({type:"HANDLE_CONTENT_WIDTH",value:e})}},f=function(e){return function(t){return t({type:"HANDLE_MENU_COLLAPSED",value:e})}},O=function(e){return function(t){return t({type:"HANDLE_MENU_HIDDEN",value:e})}},p=(n(116),n(3)),v=function(e){var t,n=e.layout,c=e.children,i=e.appLayout,o=e.wrapperClass,s=e.transition,l=e.routeMeta,u=Object(m.b)(),b=Object(m.c)((function(e){return e})),v=b.navbar,x=b.layout.contentWidth,g="HorizontalLayout"!==n||i?r.Fragment:"div";return Object(r.useEffect)((function(){return l&&(l.contentWidth&&u(h(l.contentWidth)),l.menuCollapsed&&u(f(l.menuCollapsed)),l.menuHidden&&u(O(l.menuHidden))),function(){l&&(l.contentWidth&&u(h("full")),l.menuCollapsed&&u(f(!l.menuCollapsed)),l.menuHidden&&u(O(!l.menuHidden)))}}),[]),Object(p.jsxs)("div",{className:j()("app-content content overflow-hidden",(t={},Object(d.a)(t,o,o),Object(d.a)(t,"show-overlay",v.query.length),t)),children:[Object(p.jsx)("div",{className:"content-overlay"}),Object(p.jsx)("div",{className:"header-navbar-shadow"}),Object(p.jsx)("div",{className:j()(Object(d.a)({"content-wrapper":!i,"content-area-wrapper":i,"container p-0":"boxed"===x},"animate__animated animate__".concat(s),"none"!==s&&s.length)),children:Object(p.jsx)(g,Object(a.a)(Object(a.a)({},"HorizontalLayout"!==n||i?{}:{className:j()({"content-body":!i})}),{},{children:c}))})]})},x=n(51),g=n(53),k=[{path:"/posts",component:Object(r.lazy)((function(){return Promise.all([n.e(10),n.e(13)]).then(n.bind(null,239))}))},{path:"/add-post",component:Object(r.lazy)((function(){return Promise.all([n.e(9),n.e(12)]).then(n.bind(null,241))}))},{path:"/blog",component:Object(r.lazy)((function(){return n.e(8).then(n.bind(null,253))})),layout:"BlankLayout"},{path:"/login",component:Object(r.lazy)((function(){return Promise.all([n.e(6),n.e(5)]).then(n.bind(null,254))})),layout:"BlankLayout",meta:{authRoute:!0}},{path:"/error",component:Object(r.lazy)((function(){return n.e(0).then(n.bind(null,238))})),layout:"BlankLayout"}],y=n(20),N=n(56),w=["children"],L=function(e){var t=e.children,n=(Object(y.a)(e,w),Object(N.a)()),a=Object(c.a)(n,2),i=(a[0],a[1],Object(r.useState)(!1)),o=Object(c.a)(i,2),s=o[0],l=o[1];return Object(r.useEffect)((function(){return l(!0),function(){return l(!1)}}),[]),s?Object(p.jsx)("div",{className:"blank-page",children:Object(p.jsx)("div",{className:"app-content content",children:Object(p.jsx)("div",{className:"content-wrapper",children:Object(p.jsx)("div",{className:"content-body",children:t})})})}):null},C=n(236),T=n(75),A=n.n(T),I=n(235),z=n(50),S=n(213),H=n(216),M=n(217),E=n(249),P=n(218),R=n(76),F=n.n(R),D=(n(120),function(e){var t=e.skin,n=e.setSkin,a=e.isRtl,i=e.setIsRtl,s=e.layout,l=e.setLayout,u=e.navbarType,d=e.setNavbarType,b=e.footerType,m=e.setFooterType,h=e.navbarColor,f=e.setNavbarColor,O=e.isHidden,v=e.setIsHidden,x=e.contentWidth,g=e.setContentWidth,k=e.menuCollapsed,y=e.setMenuCollapsed,N=e.transition,w=e.setTransition,L=Object(r.useState)(!1),C=Object(c.a)(L,2),T=C[0],A=C[1],I=function(e){e.preventDefault(),A(!T)},z=[{value:"fadeIn",label:"Fade"},{value:"fadeInLeft",label:"Fade In Left"},{value:"zoomIn",label:"Zoom In"},{value:"none",label:"None"}],R=z.find((function(e){return e.value===N}));return Object(p.jsxs)("div",{className:j()("customizer d-none d-md-block",{open:T}),children:[Object(p.jsx)("a",{href:"/",className:"customizer-toggle d-flex align-items-center justify-content-center",onClick:I,children:Object(p.jsx)(H.a,{size:14,className:"spinner"})}),Object(p.jsxs)(F.a,{className:"customizer-content",children:[Object(p.jsxs)("div",{className:"customizer-header px-2 pt-1 pb-0 position-relative",children:[Object(p.jsx)("h4",{className:"mb-0",children:"Theme Customizer"}),Object(p.jsx)("p",{className:"m-0",children:"Customize & Preview in Real Time"}),Object(p.jsx)("a",{href:"/",className:"customizer-close",onClick:I,children:Object(p.jsx)(M.a,{})})]}),Object(p.jsx)("hr",{}),Object(p.jsxs)("div",{className:"px-2",children:[Object(p.jsxs)(P.a,{className:"mb-2",children:[Object(p.jsx)("p",{className:"font-weight-bold",children:"Skin"}),Object(p.jsx)("div",{className:"d-flex",children:function(){var e=[{name:"light",label:"Light",checked:"light"===t},{name:"bordered",label:"Bordered",checked:"bordered"===t},{name:"dark",label:"Dark",checked:"dark"===t},{name:"semi-dark",label:"Semi Dark",checked:"semi-dark"===t}];return e.map((function(t,a){var c=a!==e.length-1;return"HorizontalLayout"===s&&"semi-dark"===t.name?null:Object(p.jsx)(E.a,{type:"radio",id:t.name,label:t.label,checked:t.checked,onChange:function(){return n(t.name)},className:j()({"mr-1":c})},a)}))}()})]}),Object(p.jsxs)(P.a,{className:"mb-2",children:[Object(p.jsx)("p",{className:"font-weight-bold",children:"Content Width"}),Object(p.jsxs)("div",{className:"d-flex",children:[Object(p.jsx)(E.a,{type:"radio",id:"full-width",className:"mr-1",label:"Full Width",checked:"full"===x,onChange:function(){return g("full")}}),Object(p.jsx)(E.a,{type:"radio",id:"boxes",label:"Boxed",checked:"boxed"===x,onChange:function(){return g("boxed")}})]})]}),Object(p.jsx)(P.a,{className:"mb-2",children:Object(p.jsxs)("div",{className:"d-flex",children:[Object(p.jsx)("p",{className:"font-weight-bold mr-auto mb-0",children:"RTL"}),Object(p.jsx)(E.a,{type:"switch",id:"rtl",name:"RTL",checked:a,onChange:function(){return i(!a)}})]})}),Object(p.jsx)(P.a,{className:"mb-2",children:Object(p.jsxs)("div",{className:"d-flex justify-content-between align-items-center",children:[Object(p.jsx)("p",{className:"font-weight-bold mb-0",children:"Router Transition"}),Object(p.jsx)(S.a,{theme:o,className:"react-select",classNamePrefix:"select",defaultValue:z[0],value:R,options:z,isClearable:!1,onChange:function(e){var t=e.value;return w(t)}})]})})]}),Object(p.jsx)("hr",{}),Object(p.jsxs)("div",{className:"px-2",children:[Object(p.jsx)("p",{className:"font-weight-bold",children:"Menu Layout"}),Object(p.jsx)(P.a,{className:"mb-2",children:Object(p.jsxs)("div",{className:"d-flex align-items-center",children:[Object(p.jsx)(E.a,{type:"radio",id:"vertical-layout",label:"Vertical",checked:"VerticalLayout"===s,onChange:function(){return l("vertical")},className:"mr-1"}),Object(p.jsx)(E.a,{type:"radio",id:"horizontal-layout",label:"Horizontal",checked:"HorizontalLayout"===s,onChange:function(){return l("horizontal")}})]})}),"HorizontalLayout"!==s?Object(p.jsx)(P.a,{className:"mb-2",children:Object(p.jsxs)("div",{className:"d-flex align-items-center",children:[Object(p.jsx)("p",{className:"font-weight-bold mr-auto mb-0",children:"Menu Collapsed"}),Object(p.jsx)(E.a,{type:"switch",id:"menu-collapsed",name:"menu-collapsed",checked:k,onChange:function(){return y(!k)}})]})}):null,Object(p.jsx)(P.a,{className:"mb-2",children:Object(p.jsxs)("div",{className:"d-flex align-items-center",children:[Object(p.jsx)("p",{className:"font-weight-bold mr-auto mb-0",children:"Menu Hidden"}),Object(p.jsx)(E.a,{type:"switch",id:"menu-hidden",name:"menu-hidden",checked:O,onChange:function(){return v(!O)}})]})})]}),Object(p.jsx)("hr",{}),Object(p.jsxs)("div",{className:"px-2",children:["HorizontalLayout"!==s?Object(p.jsxs)(P.a,{className:"mb-2",children:[Object(p.jsx)("p",{className:"font-weight-bold",children:"Navbar Color"}),Object(p.jsx)("ul",{className:"list-inline unstyled-list",children:["white","primary","secondary","success","danger","info","warning","dark"].map((function(e){return Object(p.jsx)("li",{className:j()("color-box bg-".concat(e),{selected:h===e,border:"white"===e}),onClick:function(){return f(e)}},e)}))})]}):null,Object(p.jsxs)(P.a,{className:"mb-2",children:[Object(p.jsxs)("p",{className:"font-weight-bold",children:["HorizontalLayout"===s?"Menu":"Navbar"," Type"]}),Object(p.jsx)("div",{className:"d-flex",children:function(){var e=[{name:"floating",label:"Floating",checked:"floating"===u},{name:"sticky",label:"Sticky",checked:"sticky"===u},{name:"static",label:"Static",checked:"static"===u},{name:"hidden",label:"Hidden",checked:"hidden"===u}];return e.map((function(t,n){var a=n!==e.length-1;return"HorizontalLayout"===s&&"hidden"===t.name?null:Object(p.jsx)(E.a,{type:"radio",id:t.name,label:t.label,checked:t.checked,onChange:function(){return d(t.name)},className:j()({"mr-1":a})},n)}))}()})]})]}),Object(p.jsx)("hr",{}),Object(p.jsx)("div",{className:"px-2",children:Object(p.jsxs)(P.a,{className:"mb-2",children:[Object(p.jsx)("p",{className:"font-weight-bold",children:"Footer Type"}),Object(p.jsx)("div",{className:"d-flex",children:function(){var e=[{name:"sticky",label:"Sticky",checked:"sticky"===b},{name:"static",label:"Static",checked:"static"===b},{name:"hidden",label:"Hidden",checked:"hidden"===b}];return e.map((function(t,n){var a=n!==e.length-1;return Object(p.jsx)(E.a,{type:"radio",id:"footer-".concat(t.name),label:t.label,checked:t.checked,onChange:function(){return m(t.name)},className:j()({"mr-1":a})},n)}))}()})]})})]})]})}),W=n(219),G=function(){return Object(p.jsxs)("p",{className:"clearfix mb-0",children:[Object(p.jsxs)("span",{className:"float-md-left d-block d-md-inline-block mt-25",children:["COPYRIGHT \xa9 ",(new Date).getFullYear()," ",Object(p.jsx)("a",{href:"https://berkoca.com",target:"_blank",rel:"noopener noreferrer",children:"Berk Koca"}),Object(p.jsx)("span",{className:"d-none d-sm-inline-block",children:", All rights Reserved"})]}),Object(p.jsxs)("span",{className:"float-md-right d-none d-md-block",children:["Hand-crafted & Made with",Object(p.jsx)(W.a,{size:14})]})]})},V=n(220),_=["color","className","imgClassName","initials","size","badgeUp","content","icon","badgeColor","badgeText","img","imgHeight","imgWidth","status","tag","contentStyles"],B=Object(r.forwardRef)((function(e,t){var n,c,r=e.color,i=e.className,o=e.imgClassName,s=e.initials,l=e.size,u=e.badgeUp,b=e.content,m=e.icon,h=e.badgeColor,f=e.badgeText,O=e.img,v=e.imgHeight,x=e.imgWidth,g=e.status,k=e.tag,N=e.contentStyles,w=Object(y.a)(e,_);return Object(p.jsxs)(k,Object(a.a)(Object(a.a)({className:j()("avatar",(n={},Object(d.a)(n,i,i),Object(d.a)(n,"bg-".concat(r),r),Object(d.a)(n,"avatar-".concat(l),l),n)),ref:t},w),{},{children:[!1===O||void 0===O?Object(p.jsxs)("span",{className:j()("avatar-content",{"position-relative":u}),style:N,children:[s?function(e){var t=[];return e.split(" ").forEach((function(e){t.push(e[0])})),t.join("")}(b):b,m||null,u?Object(p.jsx)(V.a,{color:h||"primary",className:"badge-sm badge-up",pill:!0,children:f||"0"}):null]}):Object(p.jsx)("img",{className:j()(Object(d.a)({},o,o)),src:O,alt:"avatarImg",height:v&&!l?v:32,width:x&&!l?x:32}),g?Object(p.jsx)("span",{className:j()((c={},Object(d.a)(c,"avatar-status-".concat(g),g),Object(d.a)(c,"avatar-status-".concat(l),l),c))}):null]}))})),K=B;B.defaultProps={tag:"div"};var U=n(57),Y=n(58),J=n(59),q=n.n(J),Z={loginEndpoint:"/jwt/login",registerEndpoint:"/jwt/register",refreshEndpoint:"/jwt/refresh-token",logoutEndpoint:"/jwt/logout",tokenType:"Bearer",storageTokenKeyName:"accessToken",storageRefreshTokenKeyName:"refreshToken"},Q=function(){function e(t){var n=this;Object(U.a)(this,e),this.jwtConfig=Object(a.a)({},Z),this.isAlreadyFetchingAccessToken=!1,this.subscribers=[],this.jwtConfig=Object(a.a)(Object(a.a)({},this.jwtConfig),t),q.a.interceptors.request.use((function(e){var t=n.getToken();return t&&(e.headers.Authorization="".concat(n.jwtConfig.tokenType," ").concat(t)),e}),(function(e){return Promise.reject(e)})),q.a.interceptors.response.use((function(e){return e}),(function(e){var t=e.config,a=e.response,c=t;return a&&401===a.status?(n.isAlreadyFetchingAccessToken||(n.isAlreadyFetchingAccessToken=!0,n.refreshToken().then((function(e){n.isAlreadyFetchingAccessToken=!1,n.setToken(e.data.accessToken),n.setRefreshToken(e.data.refreshToken),n.onAccessTokenFetched(e.data.accessToken)}))),new Promise((function(e){n.addSubscriber((function(t){c.headers.Authorization="".concat(n.jwtConfig.tokenType," ").concat(t),e(n.axios(c))}))}))):Promise.reject(e)}))}return Object(Y.a)(e,[{key:"onAccessTokenFetched",value:function(e){this.subscribers=this.subscribers.filter((function(t){return t(e)}))}},{key:"addSubscriber",value:function(e){this.subscribers.push(e)}},{key:"getToken",value:function(){return localStorage.getItem(this.jwtConfig.storageTokenKeyName)}},{key:"getRefreshToken",value:function(){return localStorage.getItem(this.jwtConfig.storageRefreshTokenKeyName)}},{key:"setToken",value:function(e){localStorage.setItem(this.jwtConfig.storageTokenKeyName,e)}},{key:"setRefreshToken",value:function(e){localStorage.setItem(this.jwtConfig.storageRefreshTokenKeyName,e)}},{key:"login",value:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return q.a.post.apply(q.a,[this.jwtConfig.loginEndpoint].concat(t))}},{key:"register",value:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return q.a.post.apply(q.a,[this.jwtConfig.registerEndpoint].concat(t))}},{key:"refreshToken",value:function(){return q.a.post(this.jwtConfig.refreshEndpoint,{refreshToken:this.getRefreshToken()})}}]),e}();var X={jwt:new Q({})}.jwt.jwtConfig,$=n(221),ee=n(250),te=n(251),ne=n(222),ae=n(223),ce=n.p+"static/media/avatar-s-11.1d46cc62.jpg",re=function(){var e=Object(m.b)(),t=Object(r.useState)(null),n=Object(c.a)(t,2),a=n[0],o=n[1];Object(r.useEffect)((function(){null!==i()&&o(JSON.parse(localStorage.getItem("userData")))}),[]);var s=a&&a.avatar||ce;return Object(p.jsxs)($.a,{tag:"li",className:"dropdown-user nav-item",children:[Object(p.jsxs)(ee.a,{href:"/",tag:"a",className:"nav-link dropdown-user-link",onClick:function(e){return e.preventDefault()},children:[Object(p.jsxs)("div",{className:"user-nav d-sm-flex d-none",children:[Object(p.jsx)("span",{className:"user-name font-weight-bold",children:a&&a.fullname||"Berk Koca"}),Object(p.jsx)("span",{className:"user-status",children:a&&a.role||"Admin"})]}),Object(p.jsx)(K,{img:s,imgHeight:"40",imgWidth:"40",status:"online"})]}),Object(p.jsx)(te.a,{right:!0,children:Object(p.jsxs)(ne.a,{tag:g.b,to:"/login",onClick:function(){return e((function(e){var t;e((t={type:"LOGOUT"},Object(d.a)(t,X.storageTokenKeyName,null),Object(d.a)(t,X.storageRefreshTokenKeyName,null),t)),localStorage.removeItem("userData"),localStorage.removeItem("jwt"),localStorage.removeItem(X.storageTokenKeyName),localStorage.removeItem(X.storageRefreshTokenKeyName)}))},children:[Object(p.jsx)(ae.a,{size:14,className:"mr-75"}),Object(p.jsx)("span",{className:"align-middle",children:"Logout"})]})})]})},ie=n(224),oe=n(225),se=n(228),le=n(226),ue=n(227),de=function(e){var t=e.skin,n=e.setSkin,a=e.setMenuVisibility,c=function(){return"dark"===t?Object(p.jsx)(ie.a,{className:"ficon",onClick:function(){return n("light")}}):Object(p.jsx)(oe.a,{className:"ficon",onClick:function(){return n("dark")}})};return Object(p.jsxs)(r.Fragment,{children:[Object(p.jsx)("ul",{className:"navbar-nav d-xl-none d-flex align-items-center",children:Object(p.jsx)(le.a,{className:"mobile-menu mr-auto",children:Object(p.jsx)(ue.a,{className:"nav-menu-main menu-toggle hidden-xs is-active",onClick:function(){return a(!0)},children:Object(p.jsx)(se.a,{className:"ficon"})})})}),Object(p.jsx)("div",{className:"bookmark-wrapper d-flex align-items-center",children:Object(p.jsx)(le.a,{className:"d-none d-lg-block",children:Object(p.jsx)(ue.a,{className:"nav-link-style",children:Object(p.jsx)(c,{})})})}),Object(p.jsx)("ul",{className:"nav navbar-nav align-items-center ml-auto",children:Object(p.jsx)(re,{})})]})},be=function(e){var t=e.skin,n=e.setSkin,a=e.setMenuVisibility;return Object(p.jsx)(r.Fragment,{children:Object(p.jsx)(de,{skin:t,setSkin:n,setMenuVisibility:a})})},je=n(229),me=n(230),he=[{id:"posts",title:"Posts",icon:Object(p.jsx)(je.a,{size:20}),navLink:"/posts"},{id:"addPost",title:"Add Post",icon:Object(p.jsx)(me.a,{size:20}),navLink:"/add-post"}],fe=n(231),Oe=n(232),pe=function(e){var t=e.menuCollapsed,n=e.setMenuCollapsed,a=e.setMenuVisibility,c=e.setGroupOpen,i=e.menuHover;Object(r.useEffect)((function(){!i&&t&&c([])}),[i,t]);var o=function(){return t?Object(p.jsx)(Oe.a,{size:20,"data-tour":"toggle-icon",className:"text-primary toggle-icon d-none d-xl-block",onClick:function(){return n(!1)}}):Object(p.jsx)(fe.a,{size:20,"data-tour":"toggle-icon",className:"text-primary toggle-icon d-none d-xl-block",onClick:function(){return n(!0)}})};return Object(p.jsx)("div",{className:"navbar-header",children:Object(p.jsxs)("ul",{className:"nav navbar-nav flex-row",children:[Object(p.jsx)("li",{className:"nav-item mr-auto",children:Object(p.jsxs)(g.c,{to:"/",className:"navbar-brand",children:[Object(p.jsx)("span",{className:"brand-logo",children:Object(p.jsx)("img",{src:s.a.app.appLogoImage,alt:"logo"})}),Object(p.jsx)("h2",{className:"brand-text mb-0",children:s.a.app.appName})]})}),Object(p.jsx)("li",{className:"nav-item nav-toggle",children:Object(p.jsxs)("div",{className:"nav-link modern-nav-toggle cursor-pointer",children:[Object(p.jsx)(o,{}),Object(p.jsx)(M.a,{onClick:function(){return a(!1)},className:"toggle-icon icon-x d-block d-xl-none",size:20})]})})]})})},ve=n(55),xe=function(e,t,n){return t===e||n&&n.meta&&n.meta.navLink&&n.meta.navLink===e},ge=function e(t,n,a){return t.some((function(t){return t.children?e(t.children,n,a):xe(t.navLink,n,a)}))},ke=function e(t,n,a){var c;return t.some((function(t){var r;return t.children&&(r=e(t.children,n,a))?c={id:t.id,children:r}:xe(t.navLink,n,a)?c={id:t.id}:void 0})),c},ye=function(e,t){var n=[];return function e(a,c){for(var r in a){var i=a[r];void 0!==i&&(i&&"object"===typeof i?e(i,r):r===t&&n.push(i))}}(e),n},Ne=function(e){var t=e.item,n=(e.groupActive,e.setGroupActive),c=e.activeItem,i=e.setActiveItem,o=(e.groupOpen,e.setGroupOpen),s=e.toggleActiveGroup,l=e.parentItem,u=e.routerProps,d=e.currentActiveItem,b=t.externalLink?"a":g.c,m=Object(x.h)(),h=m.pathname,f=Object(x.f)(h,{path:"".concat(t.navLink,"/:param"),exact:!0,strict:!1});return Object(r.useEffect)((function(){if(null!==d){i(d);var e=function(e,t){var n=ke(e,t,u);return ye(n,"id")}(he,h);n(Object(ve.a)(e))}}),[m]),Object(p.jsx)("li",{className:j()({"nav-item":!t.children,disabled:t.disabled,active:t.navLink===c}),children:Object(p.jsxs)(b,Object(a.a)(Object(a.a)({className:"d-flex align-items-center",target:t.newTab?"_blank":void 0},!0===t.externalLink?{href:t.navLink||"/"}:{to:t.navLink||"/",isActive:function(e,n){if(!e)return!1;e.url&&""!==e.url&&e.url===t.navLink&&(d=t.navLink)}}),{},{onClick:function(e){t.navLink.length||e.preventDefault(),l?function(e){var n=ke(he,e,f);s(t.id,n)}(t.navLink):(n([]),o([]))},children:[t.icon,Object(p.jsx)("span",{className:"menu-item text-truncate",children:t.title}),t.badge&&t.badgeText?Object(p.jsx)(V.a,{className:"ml-auto mr-1",color:t.badge,pill:!0,children:t.badgeText}):null]}))})},we=n(233),Le=function(e){var t,n=e.item,a=e.groupActive,c=e.setGroupActive,r=e.activeItem,i=e.setActiveItem,o=e.groupOpen,s=e.setGroupOpen,l=e.parentItem,u=e.menuCollapsed,d=e.menuHover,b=e.routerProps,m=e.currentActiveItem,h=Object(x.h)().pathname,f=function(e,t){var n,r=a;t?(n=ye(t,"id"),r=n):r.includes(e)?r.splice(r.indexOf(e),1):r.push(e);var i=o.filter((function(e){return!r.includes(e)}));s(Object(ve.a)(i)),c(Object(ve.a)(r))},O=function(e,t){a&&a.includes(t.id)||ge(t.children,h,b)?f(t.id):function(e,t){var n,a=o;t&&(n=ye(t,"id")).pop(),o&&n&&o[0]===n[0]?o.includes(e)?a.splice(a.indexOf(e),1):a.push(e):(a=[],o.includes(e)||a.push(e)),s(Object(ve.a)(a))}(t.id,l),e.preventDefault()};return Object(p.jsxs)("li",{className:j()("nav-item has-sub",{open:(t=n.id,u&&d||!1===u?!(!a.includes(t)&&!o.includes(n.id))||void 0:(!a.includes(t)||!u||!1!==d)&&null),"menu-collapsed-open":a.includes(n.id),"sidebar-group-active":a.includes(n.id)||o.includes(n.id)}),children:[Object(p.jsxs)(g.b,{className:"d-flex align-items-center",to:"/",onClick:function(e){return O(e,n)},children:[n.icon,Object(p.jsx)("span",{className:"menu-title text-truncate",children:n.title}),n.badge&&n.badgeText?Object(p.jsx)(V.a,{className:"ml-auto mr-1",color:n.badge,pill:!0,children:n.badgeText}):null]}),Object(p.jsx)("ul",{className:"menu-content",children:Object(p.jsx)(we.a,{isOpen:a&&a.includes(n.id)||o&&o.includes(n.id),children:Object(p.jsx)(Ae,{items:n.children,groupActive:a,setGroupActive:c,groupOpen:o,setGroupOpen:s,toggleActiveGroup:f,parentItem:n,menuCollapsed:u,menuHover:d,routerProps:b,currentActiveItem:m,activeItem:r,setActiveItem:i})})})]})},Ce=n(234),Te=function(e){var t=e.item;e.index;return Object(p.jsxs)("li",{className:"navigation-header",children:[Object(p.jsx)("span",{children:t.header}),Object(p.jsx)(Ce.a,{className:"feather-more-horizontal"})]})},Ae=function(e){var t={VerticalNavMenuSectionHeader:Te,VerticalNavMenuGroup:Le,VerticalNavMenuLink:Ne};return e.items.map((function(n,c){var r=t[function(e){return e.header?"VerticalNavMenuSectionHeader":e.children?"VerticalNavMenuGroup":"VerticalNavMenuLink"}(n)];return Object(p.jsx)(r,Object(a.a)({item:n},e),n.id||n.header)}))},Ie=function(e){var t=e.menuCollapsed,n=e.routerProps,i=e.menu,o=e.currentActiveItem,s=e.skin,l=Object(r.useState)([]),u=Object(c.a)(l,2),d=u[0],b=u[1],m=Object(r.useState)([]),h=Object(c.a)(m,2),f=h[0],O=h[1],v=Object(r.useState)(null),x=Object(c.a)(v,2),g=x[0],k=x[1],y=Object(r.useState)(!1),N=Object(c.a)(y,2),w=N[0],L=N[1],C=Object(r.useRef)(null);return Object(p.jsx)(r.Fragment,{children:Object(p.jsx)("div",{className:j()("main-menu menu-fixed menu-accordion menu-shadow",{expanded:w||!1===t,"menu-light":"semi-dark"!==s&&"dark"!==s,"menu-dark":"semi-dark"===s||"dark"===s}),onMouseEnter:function(){t&&L(!0)},onMouseLeave:function(){return L(!1)},children:i?i(e):Object(p.jsxs)(r.Fragment,{children:[Object(p.jsx)(pe,Object(a.a)({setGroupOpen:b,menuHover:w},e)),Object(p.jsx)("div",{className:"shadow-bottom",ref:C}),Object(p.jsx)(F.a,{className:"main-menu-content",options:{wheelPropagation:!1},onScrollY:function(e){return function(e){C&&e.scrollTop>0?C.current.classList.contains("d-block")||C.current.classList.add("d-block"):C.current.classList.contains("d-block")&&C.current.classList.remove("d-block")}(e)},children:Object(p.jsx)("ul",{className:"navigation navigation-main",children:Object(p.jsx)(Ae,{items:he,groupActive:f,setGroupActive:O,activeItem:g,setActiveItem:k,groupOpen:d,setGroupOpen:b,routerProps:n,menuCollapsed:t,menuHover:w,currentActiveItem:o})})})]})})})},ze=function(){var e=Object(m.b)(),t=Object(m.c)((function(e){return e.layout.isRTL}));return Object(r.useEffect)((function(){var e=document.getElementsByTagName("html")[0];t?e.setAttribute("dir","rtl"):e.setAttribute("dir","ltr")}),[t]),[t,function(n){try{var a=n instanceof Function?n(t):n;e(function(e){return function(t){return t({type:"HANDLE_RTL",value:e})}}(a))}catch(c){console.log(c)}}]},Se=function(){var e=Object(r.useState)((function(){try{return s.a.layout.navbar.type}catch(e){return console.log(e),s.a.layout.navbar.type}})),t=Object(c.a)(e,2),n=t[0],a=t[1];return[n,function(e){try{var t=e instanceof Function?e(n):e;a(t)}catch(c){console.log(c)}}]},He=function(){var e=Object(r.useState)((function(){try{return s.a.layout.footer.type}catch(e){return console.log(e),s.a.layout.footer.type}})),t=Object(c.a)(e,2),n=t[0],a=t[1];return[n,function(e){try{var t=e instanceof Function?e(n):e;a(t)}catch(c){console.log(c)}}]},Me=function(){var e=Object(r.useState)((function(){try{return s.a.layout.navbar.backgroundColor}catch(e){return console.log(e),s.a.layout.navbar.backgroundColor}})),t=Object(c.a)(e,2),n=t[0],a=t[1];return[n,function(e){try{var t=e instanceof Function?e(n):e;a(t)}catch(c){console.log(c)}}]},Ee=(n(175),n(176),function(e){var t=e.children,n=e.navbar,i=e.footer,o=e.menu,l=e.routerProps,u=e.currentActiveItem,d=Object(N.a)(),b=Object(c.a)(d,2),v=b[0],g=b[1],k=ze(),y=Object(c.a)(k,2),w=y[0],L=y[1],T=Se(),S=Object(c.a)(T,2),H=S[0],M=S[1],E=He(),P=Object(c.a)(E,2),R=P[0],F=P[1],W=Me(),V=Object(c.a)(W,2),_=V[0],B=V[1],K=Object(r.useState)(!1),U=Object(c.a)(K,2),Y=U[0],J=U[1],q=Object(r.useState)(!1),Z=Object(c.a)(q,2),Q=Z[0],X=Z[1],$=Object(r.useState)(window.innerWidth),ee=Object(c.a)($,2),te=ee[0],ne=ee[1],ae=Object(m.b)(),ce=Object(m.c)((function(e){return e.layout})),re=function(){ne(window.innerWidth)},ie=Object(x.h)(),oe=ce.contentWidth,se=ce.menuCollapsed,le=ce.menuHidden,ue=function(e){return ae(f(e))};Object(r.useEffect)((function(){Q&&te<1200&&X(!1)}),[ie]),Object(r.useEffect)((function(){void 0!==window&&window.addEventListener("resize",re)}),[te]),Object(r.useEffect)((function(){return J(!0),function(){return J(!1)}}),[]);var de={static:"footer-static",sticky:"footer-fixed",hidden:"footer-hidden"},je=""!==_&&"light"!==_&&"white"!==_;return Y?Object(p.jsxs)("div",Object(a.a)(Object(a.a)({className:j()("wrapper vertical-layout ".concat({floating:"navbar-floating",sticky:"navbar-sticky",static:"navbar-static",hidden:"navbar-hidden"}[H]||"navbar-floating"," ").concat(de[R]||"footer-static"),{"vertical-menu-modern":te>=1200,"menu-collapsed":se&&te>=1200,"menu-expanded":!se&&te>1200,"vertical-overlay-menu":te<1200,"menu-hide":!Q&&te<1200,"menu-open":Q&&te<1200})},le?{"data-col":"1-column"}:{}),{},{children:[le?null:Object(p.jsx)(Ie,{skin:v,menu:o,menuCollapsed:se,menuVisibility:Q,setMenuCollapsed:ue,setMenuVisibility:X,routerProps:l,currentActiveItem:u}),Object(p.jsx)(I.a,{expand:"lg",light:"dark"!==v,dark:"dark"===v||je,color:je?_:void 0,className:j()("header-navbar navbar align-items-center ".concat({floating:"floating-nav",sticky:"fixed-top",static:"navbar-static-top",hidden:"d-none"}[H]||"floating-nav"," navbar-shadow")),children:Object(p.jsx)("div",{className:"navbar-container d-flex content",children:n?n({setMenuVisibility:X,skin:v,setSkin:g}):Object(p.jsx)(be,{setMenuVisibility:X,skin:v,setSkin:g})})}),t,Object(p.jsx)("div",{className:j()("sidenav-overlay",{show:Q}),onClick:function(){return X(!1)}}),!0===s.a.layout.customizer?Object(p.jsx)(D,{skin:v,setSkin:g,footerType:R,setFooterType:F,navbarType:H,setNavbarType:M,navbarColor:_,setNavbarColor:B,isRtl:w,setIsRtl:L,layout:e.layout,setLayout:e.setLayout,isHidden:le,setIsHidden:function(e){return ae(O(e))},contentWidth:oe,setContentWidth:function(e){return ae(h(e))},menuCollapsed:se,setMenuCollapsed:ue,transition:e.transition,setTransition:e.setTransition,themeConfig:s.a}):null,Object(p.jsx)("footer",{className:j()("footer footer-light ".concat(de[R]||"footer-static"),{"d-none":"hidden"===R}),children:i?i({footerType:R,footerClasses:de}):Object(p.jsx)(G,{footerType:R,footerClasses:de})}),!0===s.a.layout.scrollTop?Object(p.jsx)("div",{className:"scroll-to-top",children:Object(p.jsx)(A.a,{showUnder:300,style:{bottom:"5%"},children:Object(p.jsx)(z.a,{className:"btn-icon",color:"primary",children:Object(p.jsx)(C.a,{size:14})})})}):null]})):null}),Pe=function(e){return Object(p.jsx)(Ee,Object(a.a)(Object(a.a)({},e),{},{children:e.children}))},Re=[{id:"posts",title:"Posts",icon:Object(p.jsx)(je.a,{size:20}),navLink:"/posts"},{id:"addPost",title:"Add Post",icon:Object(p.jsx)(me.a,{size:20}),navLink:"/add-post"}],Fe=function(e){var t=e.item,n=e.setOpenDropdown,c=e.setGroupActive,i=e.activeItem,o=e.setActiveItem,s=e.routerProps,l=e.currentActiveItem,u=e.isChild,d=t.externalLink?"a":g.c,b=Object(x.h)(),m=b.pathname;xe(t.navLink,m,s);return Object(r.useEffect)((function(){if(null!==l){o(l);var e=function(e,t){var n=ke(e,t,s),a=ye(n,"id");return a.pop(),a}(Re,m);c(Object(ve.a)(e))}}),[b]),Object(p.jsx)("li",{className:j()("nav-item",{active:t.navLink===i,disabled:t.disabled}),onClick:function(){return n([])},children:Object(p.jsxs)(d,Object(a.a)(Object(a.a)({className:j()("d-flex align-items-center",{"dropdown-item":u,"nav-link":!u}),tag:d,target:t.newTab?"_blank":void 0},!0===t.externalLink?{href:t.navLink||"/"}:{to:t.navLink||"/",isActive:function(e,n){if(!e)return!1;e.url&&""!==e.url&&e.url===t.navLink&&(l=t.navLink)}}),{},{children:[t.icon,Object(p.jsx)("span",{children:t.title})]}))})},De=n(147),We=function(e){var t=e.item,n=e.submenu,c=e.groupActive,r=e.onMouseEnter,i=e.onMouseLeave,o=e.openDropdown,s=e.setGroupActive,l=e.activeItem,u=e.setActiveItem,d=e.routerProps,b=e.setOpenDropdown,m=e.currentActiveItem,h=Object(x.h)().pathname,f={setMaxHeight:{enabled:!0,fn:function(e){var t,n=window.innerHeight,c=e.instance.reference.getBoundingClientRect().top;n-c-e.popper.height-28<1&&(t={maxHeight:n-c-25,overflowY:"auto"});var r=e.instance.popper.getBoundingClientRect();return r.left+r.width-(window.innerWidth-16)>=0&&e.instance.popper.closest(".dropdown").classList.add("openLeft"),Object(a.a)(Object(a.a)({},e),{},{styles:Object(a.a)({},t)})}}};return Object(p.jsxs)(De.a,{tag:"li",className:j()({"nav-item":!1===n,"dropdown-submenu":!0===n,"sidebar-group-active active":ge(t.children,h,d)||c.includes(t.id)}),isOpen:o.includes(t.id),toggle:function(){return r(t.id)},onMouseEnter:function(){return r(t.id)},onMouseLeave:function(){return i(t.id)},children:[Object(p.jsxs)(ee.a,{to:"/",tag:g.b,className:j()("dropdown-toggle d-flex align-items-center",{"dropdown-item":!0===n,"nav-link":!1===n}),onClick:function(e){return e.preventDefault()},children:[t.icon,Object(p.jsx)("span",{children:t.title})]}),Object(p.jsx)(te.a,{tag:"ul",modifiers:f,children:Object(p.jsx)(Ge,{submenu:!0,parentItem:t,items:t.children,activeItem:l,groupActive:c,routerProps:d,openDropdown:o,onMouseEnter:r,onMouseLeave:i,setActiveItem:u,setGroupActive:s,isChild:!0,setOpenDropdown:b,currentActiveItem:m})})]})},Ge=function(e){var t={HorizontalNavMenuGroup:We,HorizontalNavMenuLink:Fe};return e.items.map((function(n,c){var r=t[function(e){return e.children?"HorizontalNavMenuGroup":"HorizontalNavMenuLink"}(n)];return Object(p.jsx)(r,Object(a.a)({item:n,index:c},e),n.id)}))},Ve=function(e){var t=e.currentActiveItem,n=e.routerProps,a=Object(r.useState)(null),i=Object(c.a)(a,2),o=i[0],s=i[1],l=Object(r.useState)([]),u=Object(c.a)(l,2),d=u[0],b=u[1],j=Object(r.useState)([]),m=Object(c.a)(j,2),h=m[0],f=m[1];return Object(p.jsx)("div",{className:"navbar-container main-menu-content",children:Object(p.jsx)("ul",{className:"nav navbar-nav",id:"main-menu-navigation",children:Object(p.jsx)(Ge,{submenu:!1,items:Re,activeItem:o,groupActive:d,routerProps:n,onMouseEnter:function(e){var t=h;t.push(e),f(Object(ve.a)(t))},onMouseLeave:function(e){var t=h;t.splice(t.indexOf(e),1),f(Object(ve.a)(t))},openDropdown:h,setActiveItem:s,setGroupActive:b,setOpenDropdown:f,currentActiveItem:t})})})},_e=(n(107),function(e){var t,n=e.children,i=e.navbar,o=e.footer,l=e.menu,u=e.currentActiveItem,b=e.routerProps,f=Object(N.a)(),v=Object(c.a)(f,2),x=v[0],k=v[1],y=ze(),w=Object(c.a)(y,2),L=w[0],T=w[1],S=Se(),H=Object(c.a)(S,2),M=H[0],E=H[1],P=He(),R=Object(c.a)(P,2),F=R[0],W=R[1],V=Me(),_=Object(c.a)(V,2),B=_[0],K=_[1],U=Object(r.useState)(!1),Y=Object(c.a)(U,2),J=Y[0],q=Y[1],Z=Object(r.useState)(!1),Q=Object(c.a)(Z,2),X=Q[0],$=Q[1],ee=Object(m.b)(),te=Object(m.c)((function(e){return e.layout})),ne=te.contentWidth,ae=te.menuHidden;Object(r.useEffect)((function(){return q(!0),window.addEventListener("scroll",(function(){window.pageYOffset>65&&!1===X&&$(!0),window.pageYOffset<65&&$(!1)})),function(){return q(!1),void $(!1)}}),[]);var ce={static:"footer-static",sticky:"footer-fixed",hidden:"footer-hidden"},re={floating:"floating-nav",sticky:"fixed-top"},ie=""!==B&&"light"!==B&&"white"!==B;return J?Object(p.jsxs)("div",Object(a.a)(Object(a.a)({className:j()("wrapper horizontal-layout horizontal-menu ".concat({floating:"navbar-floating",sticky:"navbar-sticky",static:"navbar-static"}[M]||"navbar-floating"," ").concat(ce[F]||"footer-static"," menu-expanded"))},ae?{"data-col":"1-column"}:{}),{},{children:[Object(p.jsxs)(I.a,{expand:"lg",className:j()("header-navbar navbar-fixed align-items-center navbar-shadow navbar-brand-center",{"navbar-scrolled":X}),children:[!i&&Object(p.jsx)("div",{className:"navbar-header d-xl-block d-none",children:Object(p.jsx)("ul",{className:"nav navbar-nav",children:Object(p.jsx)(le.a,{children:Object(p.jsxs)(g.b,{to:"/",className:"navbar-brand",children:[Object(p.jsx)("span",{className:"brand-logo",children:Object(p.jsx)("img",{src:s.a.app.appLogoImage,alt:"logo"})}),Object(p.jsx)("h2",{className:"brand-text mb-0",children:s.a.app.appName})]})})})}),Object(p.jsx)("div",{className:"navbar-container d-flex content",children:i?i({skin:x,setSkin:k}):Object(p.jsx)(be,{skin:x,setSkin:k})})]}),ae?null:Object(p.jsx)("div",{className:"horizontal-menu-wrapper",children:Object(p.jsx)(I.a,{tag:"div",expand:"sm",light:"dark"!==x,dark:"dark"===x||ie,className:j()("header-navbar navbar-horizontal navbar-shadow menu-border",(t={},Object(d.a)(t,re[M],"static"!==M),Object(d.a)(t,"floating-nav",!re[M]&&"static"!==M||"floating"===M),t)),children:l?l({routerProps:b,currentActiveItem:u}):Object(p.jsx)(Ve,{routerProps:b,currentActiveItem:u})})}),n,!0===s.a.layout.customizer?Object(p.jsx)(D,{skin:x,setSkin:k,footerType:F,setFooterType:W,navbarType:M,setNavbarType:E,navbarColor:B,setNavbarColor:K,isRtl:L,setIsRtl:T,layout:e.layout,setLayout:e.setLayout,isHidden:ae,setIsHidden:function(e){return ee(O(e))},contentWidth:ne,setContentWidth:function(e){return ee(h(e))},transition:e.transition,setTransition:e.setTransition,themeConfig:s.a}):null,Object(p.jsx)("footer",{className:j()("footer footer-light ".concat(ce[F]||"footer-static"),{"d-none":"hidden"===F}),children:o?o({footerType:F,footerClasses:ce}):Object(p.jsx)(G,{footerType:F,footerClasses:ce})}),!0===s.a.layout.scrollTop?Object(p.jsx)("div",{className:"scroll-to-top",children:Object(p.jsx)(A.a,{showUnder:300,style:{bottom:"5%"},children:Object(p.jsx)(z.a,{className:"btn-icon",color:"primary",children:Object(p.jsx)(C.a,{size:14})})})}):null]})):null}),Be=function(e){return Object(p.jsx)(_e,Object(a.a)(Object(a.a)({},e),{},{children:e.children}))},Ke=function(){var e=function(){var e=Object(r.useState)(null),t=Object(c.a)(e,2),n=t[0],a=t[1],i=Object(r.useState)((function(){try{return s.a.layout.type}catch(e){return console.log(e),s.a.layout.type}})),o=Object(c.a)(i,2),l=o[0],u=o[1],d=function(){"horizontal"===l&&window.innerWidth<=1200&&(u("vertical"),a("horizontal")),"horizontal"===n&&window.innerWidth>=1200&&u("horizontal")};return Object(r.useEffect)((function(){d()}),[]),Object(r.useEffect)((function(){window.addEventListener("resize",d)}),[l,n]),[l,function(e){try{var t=e instanceof Function?e(l):e;u(t)}catch(n){console.log(n)}}]}(),t=Object(c.a)(e,2),o=t[0],l=t[1],d=function(){var e=Object(r.useState)((function(){try{return s.a.layout.routerTransition}catch(e){return console.log(e),s.a.layout.routerTransition}})),t=Object(c.a)(e,2),n=t[0],a=t[1];return[n,function(e){try{var t=e instanceof Function?e(n):e;a(t)}catch(c){console.log(c)}}]}(),b=Object(c.a)(d,2),j=b[0],m=b[1],h=(Object(r.useContext)(u),"horizontal"===o?"HorizontalLayout":"VerticalLayout"),f={BlankLayout:L,VerticalLayout:Pe,HorizontalLayout:Be},O=Object(r.lazy)((function(){return n.e(11).then(n.bind(null,237))})),y=Object(r.lazy)((function(){return n.e(0).then(n.bind(null,238))})),N=function(e){var t=e.route;return t.meta&&(t.meta.action?t.meta.action:null,t.meta.resource?t.meta.resource:null),i()||"/blog"!==t.path&&"/login"!==t.path?i()||"/posts"!==t.path&&"/add-post"!==t.path?i()&&"/login"!==t.path?Object(p.jsx)(x.a,{to:t.path}):i()&&"/login"===t.path?Object(p.jsx)(x.a,{to:"/posts"}):void 0:Object(p.jsx)(x.a,{to:"/login"}):Object(p.jsx)(x.a,{to:t.path})};return Object(p.jsx)(g.a,{basename:"",children:Object(p.jsxs)(x.d,{children:[Object(p.jsx)(x.b,{exact:!0,path:"/",render:function(){return Object(p.jsx)(x.a,{to:"/blog"})}}),Object(p.jsx)(x.b,{exact:!0,path:"/not-authorized",render:function(e){return Object(p.jsx)(f.BlankLayout,{children:Object(p.jsx)(O,{})})}}),Object.keys(f).map((function(e,t){var n=f[e],c=function(e){var t=[],n=[];return k&&k.filter((function(a){(a.layout===e||void 0===a.layout&&h===e)&&(t.push(a),n.push(a.path))})),{LayoutRoutes:t,LayoutPaths:n}}(e),i=c.LayoutRoutes,o=c.LayoutPaths,s={};return Object(p.jsx)(x.b,{path:o,children:Object(p.jsx)(n,{routerProps:s,layout:e,setLayout:l,transition:j,setTransition:m,currentActiveItem:null,children:Object(p.jsx)(x.d,{children:i.map((function(e){return Object(p.jsx)(x.b,{path:e.path,exact:!0===e.exact,render:function(t){return Object.assign(s,Object(a.a)(Object(a.a)({},t),{},{meta:e.meta})),Object(p.jsx)(r.Suspense,{fallback:null,children:Object(p.jsxs)(v,Object(a.a)(Object(a.a)(Object(a.a)(Object(a.a)({layout:h,transition:j,setTransition:m},e.appLayout?{appLayout:e.appLayout}:{}),e.meta?{routeMeta:e.meta}:{}),e.className?{wrapperClass:e.className}:{}),{},{children:[Object(p.jsx)(e.component,Object(a.a)({},t)),Object(p.jsx)(N,Object(a.a)({route:e},t))]}))})}},e.path)}))})})},t)})),Object(p.jsx)(x.b,{path:"*",component:y}),"/"]})})};t.default=function(e){return Object(p.jsx)(Ke,{})}},56:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var a=n(55),c=n(8),r=n(0),i=n(10),o=function(){var e=Object(r.useState)((function(){try{var e=window.localStorage.getItem("skin");return e?JSON.parse(e):i.a.layout.skin}catch(t){return console.log(t),i.a.layout.skin}})),t=Object(c.a)(e,2),n=t[0],o=t[1];return Object(r.useEffect)((function(){var e,t=window.document.body;(e=t.classList).remove.apply(e,Object(a.a)(t.classList)),"light"!==n&&t.classList.add({dark:"dark-layout",bordered:"bordered-layout","semi-dark":"semi-dark-layout"}[n])}),[n]),[n,function(e){try{var t=e instanceof Function?e(n):e;o(t),window.localStorage.setItem("skin",JSON.stringify(t))}catch(a){console.log(a)}}]}}}]);
//# sourceMappingURL=7.89366ab7.chunk.js.map