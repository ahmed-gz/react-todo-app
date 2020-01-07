(window["webpackJsonpreact-todo-app"]=window["webpackJsonpreact-todo-app"]||[]).push([[5],{401:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var n=a(469),r=Object(n.a)((function(e){return{button:{margin:e.spacing(1),"&:disabled":{cursor:"not-allowed",pointerEvents:"auto"}},input:{margin:e.spacing(1)},link:{margin:e.spacing(1)}}}))},416:function(e,t,a){"use strict";var n=a(400),r=a(1),c=a.n(r),o=a(475),l=a(478),i=a(472),s=a(480),u=a(484),m=a(476),d=a(401);a(417);t.a=function(e){var t=e.isRow,a=e.onToggle,p=e.onUpdate,f=e.onDelete,b=e.id,g=e.title,O=e.completed,v=Object(r.useState)(!1),h=Object(n.a)(v,2),j=h[0],E=h[1],y=Object(r.useRef)(null),w=Object(d.a)();return Object(r.useEffect)((function(){y.current&&y.current.focus()}),[j]),c.a.createElement(o.a,{className:"todo-item"},j?c.a.createElement("form",{onSubmit:function(e){e.preventDefault(),y.current.value.trim()&&(p(y.current.value),E(!1))}},c.a.createElement(s.a,{"data-testid":"title",inputRef:y,fullWidth:!0,defaultValue:g,className:w.input,label:"Title",multiline:!0,margin:"normal",variant:"outlined"}),c.a.createElement(u.a,{"data-testid":"completed",color:"default",className:w.input,value:O,onChange:a}),c.a.createElement(i.a,{variant:"contained",color:"secondary",className:w.button,onClick:f},"Delete"),c.a.createElement(i.a,{variant:"contained",color:"primary",className:w.button,"data-testid":"submit",type:"submit"},"Update"),c.a.createElement(i.a,{variant:"contained","data-testid":"cancel",className:w.button,onClick:function(){return E(!1)}},"Cancel"),t&&c.a.createElement(m.a,{href:"#/todo/".concat(b),className:w.link},"View")):c.a.createElement(c.a.Fragment,null,c.a.createElement(l.a,{"data-testid":"title",className:O?"completed":"active"},g),c.a.createElement(u.a,{"data-testid":"completed",color:"default",className:w.input,value:O,onChange:a}),c.a.createElement(i.a,{variant:"contained",color:"secondary",className:w.button,onClick:f},"Delete"),c.a.createElement(i.a,{"data-testid":"edit",variant:"contained",color:"primary",className:w.button,onClick:function(){return E(!0)}},"Edit"),t&&c.a.createElement(m.a,{href:"#/todo/".concat(b),className:w.link},"View")))}},417:function(e,t,a){},418:function(e,t,a){"use strict";a.d(t,"a",(function(){return n})),a.d(t,"b",(function(){return r})),a.d(t,"c",(function(){return c}));var n="https://www.mocky.io/v2/5d8ce55b2e0000fbcfabddc3?mocky-delay=2s",r="https://jsonplaceholder.typicode.com/todos/",c="https://jsonplaceholder.typicode.com/todos/"},485:function(e,t,a){"use strict";a.r(t);var n=a(399),r=a(400),c=a(1),o=a.n(c),l=a(473),i=a(479),s=a(482),u=a(477),m=a(13),d=a(398),p=a(392),f=(a(54),a(393)),b=a(394),g=a(405),O=a(406),v=Object(O.a)(o.a.createElement("path",{d:"M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}),"MoreHoriz");var h=Object(b.a)((function(e){return{root:{display:"flex"},icon:{width:24,height:16,backgroundColor:e.palette.grey[100],color:e.palette.grey[700],borderRadius:2,marginLeft:e.spacing(.5),marginRight:e.spacing(.5),cursor:"pointer","&:hover, &:focus":{backgroundColor:e.palette.grey[200]},"&:active":{boxShadow:e.shadows[0],backgroundColor:Object(g.b)(e.palette.grey[200],.12)}}}}),{name:"PrivateBreadcrumbCollapsed"})((function(e){var t=e.classes,a=Object(p.a)(e,["classes"]);return o.a.createElement("li",Object(m.a)({className:t.root},a),o.a.createElement(v,{className:t.icon}))}));var j=Object(b.a)({root:{display:"flex",userSelect:"none",marginLeft:8,marginRight:8}},{name:"PrivateBreadcrumbSeparator"})((function(e){var t=e.classes,a=e.className,n=Object(p.a)(e,["classes","className"]);return o.a.createElement("li",Object(m.a)({"aria-hidden":!0,className:Object(f.a)(t.root,a)},n))}));var E=o.a.forwardRef((function(e,t){var a=e.children,n=e.classes,r=e.className,c=e.component,l=void 0===c?"nav":c,i=e.itemsAfterCollapse,s=void 0===i?1:i,b=e.itemsBeforeCollapse,g=void 0===b?1:b,O=e.maxItems,v=void 0===O?8:O,E=e.separator,y=void 0===E?"/":E,w=Object(p.a)(e,["children","classes","className","component","itemsAfterCollapse","itemsBeforeCollapse","maxItems","separator"]),N=o.a.useState(!1),k=N[0],x=N[1],C=o.a.Children.toArray(a).filter((function(e){return o.a.isValidElement(e)})).map((function(e,t){return o.a.createElement("li",{className:n.li,key:"child-".concat(t)},e)}));return o.a.createElement(u.a,Object(m.a)({ref:t,component:l,color:"textSecondary",className:Object(f.a)(n.root,r)},w),o.a.createElement("ol",{className:n.ol},function(e,t,a){return e.reduce((function(n,r,c){return c<e.length-1?n=n.concat(r,o.a.createElement(j,{key:"separator-".concat(c),className:t},a)):n.push(r),n}),[])}(k||v&&C.length<=v?C:function(e){return g+s>=e.length?e:[].concat(Object(d.a)(e.slice(0,g)),[o.a.createElement(h,{key:"ellipsis",onClick:function(){x(!0)}})],Object(d.a)(e.slice(e.length-s,e.length)))}(C),n.separator,y)))})),y=Object(b.a)({root:{},ol:{display:"flex",flexWrap:"wrap",alignItems:"center",padding:0,margin:0},li:{listStyle:"none"},separator:{}},{name:"MuiBreadcrumbs"})(E),w=a(476),N=a(416),k=a(115),x=a(410),C=a.n(x),P=a(411),S=a(418),D=function(e){var t=Object(c.useState)({}),a=Object(r.a)(t,2),n=a[0],o=a[1],l=Object(c.useState)(!0),i=Object(r.a)(l,2),s=i[0],u=i[1],m=Object(c.useState)(!1),d=Object(r.a)(m,2),p=d[0],f=d[1],b=function(){var e=Object(P.a)(C.a.mark((function e(t){var a,n;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return f(!1),u(!0),e.prev=2,e.next=5,new Promise((function(e){return setTimeout(e,2e3)}));case 5:return e.next=7,fetch(S.c+t);case 7:return a=e.sent,e.next=10,a.json();case 10:n=e.sent,o(n),e.next=18;break;case 14:e.prev=14,e.t0=e.catch(2),console.log("Error: ",e.t0),f(!0);case 18:return e.prev=18,u(!1),e.finish(18);case 21:case"end":return e.stop()}}),e,null,[[2,14,18,21]])})));return function(t){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){b(e)}),[e]),[n,s,p,o]},R=a(401);function T(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function B(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?T(a,!0).forEach((function(t){Object(n.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):T(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}t.default=o.a.memo((function(e){var t=e.match,a=(e.history,D(t.params.id)),n=Object(r.a)(a,4),c=n[0],m=n[1],d=n[2],p=n[3],f=Object(R.a)();return o.a.createElement(i.a,{maxWidth:"md",className:"todo-page"},o.a.createElement(s.a,{mx:"10px",my:"20px"},d&&o.a.createElement(u.a,{color:"textPrimary"},"Something went wrong, please try again."),m?o.a.createElement(k.a,null):o.a.createElement(o.a.Fragment,null,o.a.createElement(l.a,null,o.a.createElement(s.a,{my:"10px",p:"10px"},o.a.createElement(y,{"aria-label":"breadcrumb"},o.a.createElement(w.a,{color:"inherit",href:"#/",className:f.link},"Main Page"),o.a.createElement(u.a,{color:"textPrimary"},"Todo Page")))),o.a.createElement(l.a,null,o.a.createElement(N.a,Object.assign({key:c.id},c,{isRow:!1,onToggle:function(){p(B({},c,{completed:!c.completed}))},onUpdate:function(e){p(B({},c,{title:e}))},onDelete:function(){console.log("Todo deleted: ",c.id)}}))))))}))}}]);
//# sourceMappingURL=5.5d6109f4.chunk.js.map