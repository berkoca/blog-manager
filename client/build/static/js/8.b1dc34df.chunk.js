(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[8],{108:function(e,t,a){"use strict";var n=a(4),s=a(5),c=a(0),r=a.n(c),i=a(1),o=a.n(i),l=a(11),d=a.n(l),u=a(12),f={tag:u.i,inverse:o.a.bool,color:o.a.string,body:o.a.bool,outline:o.a.bool,className:o.a.string,cssModule:o.a.object,innerRef:o.a.oneOfType([o.a.object,o.a.string,o.a.func])},b=function(e){var t=e.className,a=e.cssModule,c=e.color,i=e.body,o=e.inverse,l=e.outline,f=e.tag,b=e.innerRef,p=Object(s.a)(e,["className","cssModule","color","body","inverse","outline","tag","innerRef"]),j=Object(u.f)(d()(t,"card",!!o&&"text-white",!!i&&"card-body",!!c&&(l?"border":"bg")+"-"+c),a);return r.a.createElement(f,Object(n.a)({},p,{className:j,ref:b}))};b.propTypes=f,b.defaultProps={tag:"div"},t.a=b},109:function(e,t,a){"use strict";var n=a(4),s=a(5),c=a(0),r=a.n(c),i=a(1),o=a.n(i),l=a(11),d=a.n(l),u=a(12),f={tag:u.i,className:o.a.string,cssModule:o.a.object},b=function(e){var t=e.className,a=e.cssModule,c=e.tag,i=Object(s.a)(e,["className","cssModule","tag"]),o=Object(u.f)(d()(t,"card-header"),a);return r.a.createElement(c,Object(n.a)({},i,{className:o}))};b.propTypes=f,b.defaultProps={tag:"div"},t.a=b},110:function(e,t,a){"use strict";var n=a(4),s=a(5),c=a(0),r=a.n(c),i=a(1),o=a.n(i),l=a(11),d=a.n(l),u=a(12),f={tag:u.i,className:o.a.string,cssModule:o.a.object},b=function(e){var t=e.className,a=e.cssModule,c=e.tag,i=Object(s.a)(e,["className","cssModule","tag"]),o=Object(u.f)(d()(t,"card-title"),a);return r.a.createElement(c,Object(n.a)({},i,{className:o}))};b.propTypes=f,b.defaultProps={tag:"div"},t.a=b},111:function(e,t,a){"use strict";var n=a(4),s=a(5),c=a(0),r=a.n(c),i=a(1),o=a.n(i),l=a(11),d=a.n(l),u=a(12),f={tag:u.i,className:o.a.string,cssModule:o.a.object,innerRef:o.a.oneOfType([o.a.object,o.a.string,o.a.func])},b=function(e){var t=e.className,a=e.cssModule,c=e.innerRef,i=e.tag,o=Object(s.a)(e,["className","cssModule","innerRef","tag"]),l=Object(u.f)(d()(t,"card-body"),a);return r.a.createElement(i,Object(n.a)({},o,{className:l,ref:c}))};b.propTypes=f,b.defaultProps={tag:"div"},t.a=b},112:function(e,t,a){"use strict";var n=a(4),s=a(5),c=a(0),r=a.n(c),i=a(1),o=a.n(i),l=a(11),d=a.n(l),u=a(12),f={tag:u.i,className:o.a.string,cssModule:o.a.object},b=function(e){var t=e.className,a=e.cssModule,c=e.tag,i=Object(s.a)(e,["className","cssModule","tag"]),o=Object(u.f)(d()(t,"card-text"),a);return r.a.createElement(c,Object(n.a)({},i,{className:o}))};b.propTypes=f,b.defaultProps={tag:"p"},t.a=b},113:function(e,t,a){"use strict";var n=a(4),s=a(5),c=a(0),r=a.n(c),i=a(1),o=a.n(i),l=a(11),d=a.n(l),u=a(12),f={tag:u.i,size:o.a.string,className:o.a.string,cssModule:o.a.object},b=function(e){var t=e.className,a=e.cssModule,c=e.tag,i=e.size,o=Object(s.a)(e,["className","cssModule","tag","size"]),l=Object(u.f)(d()(t,"input-group",i?"input-group-"+i:null),a);return r.a.createElement(c,Object(n.a)({},o,{className:l}))};b.propTypes=f,b.defaultProps={tag:"div"},t.a=b},114:function(e,t,a){"use strict";var n=a(4),s=a(5),c=a(19),r=a(18),i=a(0),o=a.n(i),l=a(1),d=a.n(l),u=a(11),f=a.n(u),b=a(12),p={children:d.a.node,type:d.a.string,size:d.a.oneOfType([d.a.number,d.a.string]),bsSize:d.a.string,valid:d.a.bool,invalid:d.a.bool,tag:b.i,innerRef:d.a.oneOfType([d.a.object,d.a.func,d.a.string]),plaintext:d.a.bool,addon:d.a.bool,className:d.a.string,cssModule:d.a.object},j=function(e){function t(t){var a;return(a=e.call(this,t)||this).getRef=a.getRef.bind(Object(c.a)(a)),a.focus=a.focus.bind(Object(c.a)(a)),a}Object(r.a)(t,e);var a=t.prototype;return a.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},a.focus=function(){this.ref&&this.ref.focus()},a.render=function(){var e=this.props,t=e.className,a=e.cssModule,c=e.type,r=e.bsSize,i=e.valid,l=e.invalid,d=e.tag,u=e.addon,p=e.plaintext,j=e.innerRef,g=Object(s.a)(e,["className","cssModule","type","bsSize","valid","invalid","tag","addon","plaintext","innerRef"]),h=["radio","checkbox"].indexOf(c)>-1,v=new RegExp("\\D","g"),m=d||("select"===c||"textarea"===c?c:"input"),O="form-control";p?(O+="-plaintext",m=d||"input"):"file"===c?O+="-file":"range"===c?O+="-range":h&&(O=u?null:"form-check-input"),g.size&&v.test(g.size)&&(Object(b.j)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'),r=g.size,delete g.size);var y=Object(b.f)(f()(t,l&&"is-invalid",i&&"is-valid",!!r&&"form-control-"+r,O),a);return("input"===m||d&&"function"===typeof d)&&(g.type=c),g.children&&!p&&"select"!==c&&"string"===typeof m&&"select"!==m&&(Object(b.j)('Input with a type of "'+c+'" cannot have children. Please use "value"/"defaultValue" instead.'),delete g.children),o.a.createElement(m,Object(n.a)({},g,{ref:j,className:y,"aria-invalid":l}))},t}(o.a.Component);j.propTypes=p,j.defaultProps={type:"text"},t.a=j},178:function(e,t,a){"use strict";var n=a(4),s=a(5),c=a(0),r=a.n(c),i=a(1),o=a.n(i),l=a(11),d=a.n(l),u=a(12),f={tag:u.i,innerRef:o.a.oneOfType([o.a.object,o.a.func,o.a.string]),className:o.a.string,cssModule:o.a.object},b=function(e){var t=e.className,a=e.cssModule,c=e.tag,i=e.innerRef,o=Object(s.a)(e,["className","cssModule","tag","innerRef"]),l=Object(u.f)(d()(t,"card-link"),a);return r.a.createElement(c,Object(n.a)({},o,{ref:i,className:l}))};b.propTypes=f,b.defaultProps={tag:"a"},t.a=b},252:function(e,t,a){"use strict";a.r(t);var n=a(23);function s(e,t){var a="undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!a){if(Array.isArray(e)||(a=Object(n.a)(e))||t&&e&&"number"===typeof e.length){a&&(e=a);var s=0,c=function(){};return{s:c,n:function(){return s>=e.length?{done:!0}:{done:!1,value:e[s++]}},e:function(e){throw e},f:c}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,i=!0,o=!1;return{s:function(){a=a.call(e)},n:function(){var e=a.next();return i=e.done,e},e:function(e){o=!0,r=e},f:function(){try{i||null==a.return||a.return()}finally{if(o)throw r}}}}var c=a(8),r=a(235),i=a(113),o=a(114),l=a(108),d=a(109),u=a(110),f=a(111),b=a(112),p=a(178),j=(a(107),a(0)),g=a(59),h=a.n(g),v=a(11),m=a.n(v),O=a(56),y=a(225),x=a(226),N=a(3);t.default=function(e){var t=Object(j.useState)([]),a=Object(c.a)(t,2),n=a[0],g=a[1],v=Object(j.useState)([]),M=Object(c.a)(v,2),R=M[0],w=M[1],z=Object(O.a)(),T=Object(c.a)(z,2),k=T[0],E=T[1];Object(j.useEffect)((function(){h.a.get("https://blog.berkoca.com/api/posts").then((function(e){e&&e.data&&e.data.data&&(g(e.data.data),w(e.data.data))})).catch((function(e){return console.log(e)}))}),[]);return Object(N.jsxs)("div",{style:{padding:"30px"},children:[Object(N.jsx)(r.a,{style:{height:"30px",marginBottom:"20px",borderRadius:"6px"},expand:"lg",className:m()("header-navbar navbar-fixed align-items-center navbar-shadow navbar-brand-center"),children:Object(N.jsxs)("div",{className:"navbar-container d-flex justify-content-between align-items-center",children:[Object(N.jsxs)("div",{children:["dark"===k&&Object(N.jsx)(y.a,{className:"ficon",style:{cursor:"pointer"},onClick:function(){return E("light")}}),"dark"!==k&&Object(N.jsx)(x.a,{className:"ficon",style:{cursor:"pointer"},onClick:function(){return E("dark")}})]}),Object(N.jsx)("div",{children:Object(N.jsx)("h1",{style:{marginBottom:0,fontWeight:100},children:"Blog"})}),Object(N.jsx)("div",{children:Object(N.jsx)(i.a,{children:Object(N.jsx)(o.a,{onChange:function(e){var t=[];if(e.target.value){var a,c=s(n);try{for(c.s();!(a=c.n()).done;){var r=a.value;if(r.title.toLowerCase().includes(e.target.value)||r.content.toLowerCase().includes(e.target.value))t.push(r);else if(r.category_tags.length){var i,o=s(r.category_tags);try{for(o.s();!(i=o.n()).done;){i.value.toLowerCase().includes(e.target.value)&&t.push(r)}}catch(l){o.e(l)}finally{o.f()}}}}catch(l){c.e(l)}finally{c.f()}}w(t.length>0?t:e.target.value?[]:n)},placeholder:"Search..."})})})]})}),Object(N.jsx)("div",{children:R.length?R.map((function(e){return Object(N.jsx)(l.a,{style:{padding:"15px"},children:Object(N.jsxs)("div",{style:{display:"flex"},children:[Object(N.jsx)("div",{style:{width:"50%"},children:Object(N.jsx)("div",{style:{display:"flex",alignItems:"center",height:"100%"},children:Object(N.jsx)("img",{style:{width:"100%",borderRadius:"7px"},src:"https://blog.berkoca.com/public/".concat(e.image_path)})})}),Object(N.jsxs)("div",{style:{width:"50%"},children:[Object(N.jsx)(d.a,{children:Object(N.jsx)(u.a,{children:e.title})}),Object(N.jsxs)(f.a,{children:[Object(N.jsx)(b.a,{children:e.content}),Object(N.jsx)(b.a,{children:e.category_tags.length?e.category_tags.map((function(e){return Object(N.jsx)(p.a,{href:"",target:"_blank",children:e},e)})):""})]})]})]})},e.id)})):"No result found."})]})}}}]);
//# sourceMappingURL=8.b1dc34df.chunk.js.map