(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[8],{108:function(e,t,a){"use strict";var n=a(4),s=a(5),r=a(0),c=a.n(r),i=a(1),o=a.n(i),l=a(11),u=a.n(l),d=a(12),f={tag:d.i,inverse:o.a.bool,color:o.a.string,body:o.a.bool,outline:o.a.bool,className:o.a.string,cssModule:o.a.object,innerRef:o.a.oneOfType([o.a.object,o.a.string,o.a.func])},b=function(e){var t=e.className,a=e.cssModule,r=e.color,i=e.body,o=e.inverse,l=e.outline,f=e.tag,b=e.innerRef,p=Object(s.a)(e,["className","cssModule","color","body","inverse","outline","tag","innerRef"]),g=Object(d.f)(u()(t,"card",!!o&&"text-white",!!i&&"card-body",!!r&&(l?"border":"bg")+"-"+r),a);return c.a.createElement(f,Object(n.a)({},p,{className:g,ref:b}))};b.propTypes=f,b.defaultProps={tag:"div"},t.a=b},109:function(e,t,a){"use strict";var n=a(4),s=a(5),r=a(0),c=a.n(r),i=a(1),o=a.n(i),l=a(11),u=a.n(l),d=a(12),f={tag:d.i,className:o.a.string,cssModule:o.a.object},b=function(e){var t=e.className,a=e.cssModule,r=e.tag,i=Object(s.a)(e,["className","cssModule","tag"]),o=Object(d.f)(u()(t,"card-header"),a);return c.a.createElement(r,Object(n.a)({},i,{className:o}))};b.propTypes=f,b.defaultProps={tag:"div"},t.a=b},110:function(e,t,a){"use strict";var n=a(4),s=a(5),r=a(0),c=a.n(r),i=a(1),o=a.n(i),l=a(11),u=a.n(l),d=a(12),f={tag:d.i,className:o.a.string,cssModule:o.a.object},b=function(e){var t=e.className,a=e.cssModule,r=e.tag,i=Object(s.a)(e,["className","cssModule","tag"]),o=Object(d.f)(u()(t,"card-title"),a);return c.a.createElement(r,Object(n.a)({},i,{className:o}))};b.propTypes=f,b.defaultProps={tag:"div"},t.a=b},111:function(e,t,a){"use strict";var n=a(4),s=a(5),r=a(0),c=a.n(r),i=a(1),o=a.n(i),l=a(11),u=a.n(l),d=a(12),f={tag:d.i,className:o.a.string,cssModule:o.a.object,innerRef:o.a.oneOfType([o.a.object,o.a.string,o.a.func])},b=function(e){var t=e.className,a=e.cssModule,r=e.innerRef,i=e.tag,o=Object(s.a)(e,["className","cssModule","innerRef","tag"]),l=Object(d.f)(u()(t,"card-body"),a);return c.a.createElement(i,Object(n.a)({},o,{className:l,ref:r}))};b.propTypes=f,b.defaultProps={tag:"div"},t.a=b},112:function(e,t,a){"use strict";var n=a(4),s=a(5),r=a(0),c=a.n(r),i=a(1),o=a.n(i),l=a(11),u=a.n(l),d=a(12),f={tag:d.i,className:o.a.string,cssModule:o.a.object},b=function(e){var t=e.className,a=e.cssModule,r=e.tag,i=Object(s.a)(e,["className","cssModule","tag"]),o=Object(d.f)(u()(t,"card-text"),a);return c.a.createElement(r,Object(n.a)({},i,{className:o}))};b.propTypes=f,b.defaultProps={tag:"p"},t.a=b},113:function(e,t,a){"use strict";var n=a(4),s=a(5),r=a(0),c=a.n(r),i=a(1),o=a.n(i),l=a(11),u=a.n(l),d=a(12),f={tag:d.i,size:o.a.string,className:o.a.string,cssModule:o.a.object},b=function(e){var t=e.className,a=e.cssModule,r=e.tag,i=e.size,o=Object(s.a)(e,["className","cssModule","tag","size"]),l=Object(d.f)(u()(t,"input-group",i?"input-group-"+i:null),a);return c.a.createElement(r,Object(n.a)({},o,{className:l}))};b.propTypes=f,b.defaultProps={tag:"div"},t.a=b},114:function(e,t,a){"use strict";var n=a(4),s=a(5),r=a(19),c=a(18),i=a(0),o=a.n(i),l=a(1),u=a.n(l),d=a(11),f=a.n(d),b=a(12),p={children:u.a.node,type:u.a.string,size:u.a.oneOfType([u.a.number,u.a.string]),bsSize:u.a.string,valid:u.a.bool,invalid:u.a.bool,tag:b.i,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),plaintext:u.a.bool,addon:u.a.bool,className:u.a.string,cssModule:u.a.object},g=function(e){function t(t){var a;return(a=e.call(this,t)||this).getRef=a.getRef.bind(Object(r.a)(a)),a.focus=a.focus.bind(Object(r.a)(a)),a}Object(c.a)(t,e);var a=t.prototype;return a.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},a.focus=function(){this.ref&&this.ref.focus()},a.render=function(){var e=this.props,t=e.className,a=e.cssModule,r=e.type,c=e.bsSize,i=e.valid,l=e.invalid,u=e.tag,d=e.addon,p=e.plaintext,g=e.innerRef,j=Object(s.a)(e,["className","cssModule","type","bsSize","valid","invalid","tag","addon","plaintext","innerRef"]),h=["radio","checkbox"].indexOf(r)>-1,v=new RegExp("\\D","g"),m=u||("select"===r||"textarea"===r?r:"input"),O="form-control";p?(O+="-plaintext",m=u||"input"):"file"===r?O+="-file":"range"===r?O+="-range":h&&(O=d?null:"form-check-input"),j.size&&v.test(j.size)&&(Object(b.j)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'),c=j.size,delete j.size);var y=Object(b.f)(f()(t,l&&"is-invalid",i&&"is-valid",!!c&&"form-control-"+c,O),a);return("input"===m||u&&"function"===typeof u)&&(j.type=r),j.children&&!p&&"select"!==r&&"string"===typeof m&&"select"!==m&&(Object(b.j)('Input with a type of "'+r+'" cannot have children. Please use "value"/"defaultValue" instead.'),delete j.children),o.a.createElement(m,Object(n.a)({},j,{ref:g,className:y,"aria-invalid":l}))},t}(o.a.Component);g.propTypes=p,g.defaultProps={type:"text"},t.a=g},178:function(e,t,a){"use strict";var n=a(4),s=a(5),r=a(0),c=a.n(r),i=a(1),o=a.n(i),l=a(11),u=a.n(l),d=a(12),f={tag:d.i,innerRef:o.a.oneOfType([o.a.object,o.a.func,o.a.string]),className:o.a.string,cssModule:o.a.object},b=function(e){var t=e.className,a=e.cssModule,r=e.tag,i=e.innerRef,o=Object(s.a)(e,["className","cssModule","tag","innerRef"]),l=Object(d.f)(u()(t,"card-link"),a);return c.a.createElement(r,Object(n.a)({},o,{ref:i,className:l}))};b.propTypes=f,b.defaultProps={tag:"a"},t.a=b},253:function(e,t,a){"use strict";a.r(t);var n=a(23);function s(e,t){var a="undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!a){if(Array.isArray(e)||(a=Object(n.a)(e))||t&&e&&"number"===typeof e.length){a&&(e=a);var s=0,r=function(){};return{s:r,n:function(){return s>=e.length?{done:!0}:{done:!1,value:e[s++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var c,i=!0,o=!1;return{s:function(){a=a.call(e)},n:function(){var e=a.next();return i=e.done,e},e:function(e){o=!0,c=e},f:function(){try{i||null==a.return||a.return()}finally{if(o)throw c}}}}var r=a(8),c=a(235),i=a(113),o=a(114),l=a(108),u=a(109),d=a(110),f=a(111),b=a(112),p=a(178),g=(a(107),a(0)),j=a(59),h=a.n(j),v=a(11),m=a.n(v),O=a(56),y=a(224),x=a(225),N=a(3);t.default=function(e){var t=Object(g.useState)([]),a=Object(r.a)(t,2),n=a[0],j=a[1],v=Object(g.useState)([]),M=Object(r.a)(v,2),R=M[0],w=M[1],T=Object(O.a)(),z=Object(r.a)(T,2),k=z[0],E=z[1];Object(g.useEffect)((function(){h.a.get("https://blog.berkoca.com/api/posts").then((function(e){e&&e.data&&e.data.data&&(j(e.data.data),w(e.data.data))})).catch((function(e){return console.log(e)}))}),[]);return Object(N.jsxs)("div",{style:{padding:"30px"},children:[Object(N.jsx)(c.a,{style:{height:"30px",marginBottom:"20px",borderRadius:"6px"},expand:"lg",className:m()("header-navbar navbar-fixed align-items-center navbar-shadow navbar-brand-center"),children:Object(N.jsxs)("div",{className:"navbar-container d-flex justify-content-between align-items-center",children:[Object(N.jsxs)("div",{children:["dark"===k&&Object(N.jsx)(y.a,{className:"ficon",style:{cursor:"pointer"},onClick:function(){return E("light")}}),"dark"!==k&&Object(N.jsx)(x.a,{className:"ficon",style:{cursor:"pointer"},onClick:function(){return E("dark")}})]}),Object(N.jsx)("div",{children:Object(N.jsx)("h1",{style:{marginBottom:0,fontWeight:100},children:"Blog"})}),Object(N.jsx)("div",{children:Object(N.jsx)(i.a,{children:Object(N.jsx)(o.a,{onChange:function(e){var t=[];if(e.target.value){var a,r=s(n);try{for(r.s();!(a=r.n()).done;){var c=a.value;if(c.title.toLowerCase().includes(e.target.value)||c.content.toLowerCase().includes(e.target.value))t.push(c);else if(c.category_tags.length){var i,o=s(c.category_tags);try{for(o.s();!(i=o.n()).done;){i.value.toLowerCase().includes(e.target.value)&&t.push(c)}}catch(l){o.e(l)}finally{o.f()}}}}catch(l){r.e(l)}finally{r.f()}}w(t.length>0?t:e.target.value?[]:n)},placeholder:"Search..."})})})]})}),Object(N.jsx)("div",{children:R.length?R.map((function(e){return Object(N.jsx)(l.a,{style:{padding:"15px"},children:Object(N.jsxs)("div",{style:{display:"flex"},children:[Object(N.jsx)("div",{style:{width:"20%"},children:Object(N.jsx)("div",{style:{display:"flex",alignItems:"center",height:"100%"},children:Object(N.jsx)("img",{style:{width:"100%",borderRadius:"7px"},src:"https://blog.berkoca.com/public/".concat(e.image_path)})})}),Object(N.jsxs)("div",{style:{width:"80%"},children:[Object(N.jsx)(u.a,{children:Object(N.jsx)(d.a,{children:e.title})}),Object(N.jsxs)(f.a,{children:[Object(N.jsx)(b.a,{dangerouslySetInnerHTML:{__html:e.content}}),Object(N.jsx)(b.a,{children:e.category_tags.length?e.category_tags.map((function(e){return Object(N.jsx)(p.a,{href:"",target:"_blank",children:e},e)})):""})]})]})]})},e.id)})):"No result found."})]})}}}]);
//# sourceMappingURL=8.df982903.chunk.js.map