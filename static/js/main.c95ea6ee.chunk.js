(this.webpackJsonpspher_front=this.webpackJsonpspher_front||[]).push([[0],{15:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),r=n(6),s=n.n(r),o=(n(15),n.p+"static/media/logo.6ce24c58.svg"),i=(n(9),n(10)),l=n(2);function u(e,t,n,c){var a;c&&(a=JSON.stringify(c));var r=new XMLHttpRequest,s="http://127.0.0.1:8000/api".concat(t),o=function(e){var t=null;if(document.cookie&&""!==document.cookie)for(var n=document.cookie.split(";"),c=0;c<n.length;c++){var a=n[c].trim();if(a.substring(0,e.length+1)===e+"="){t=decodeURIComponent(a.substring(e.length+1));break}}return t}("csrftoken");r.responseType="json",r.open(e,s),r.setRequestHeader("Content-Type","application/json"),o&&(r.setRequestHeader("X-Requested-With","XMLHttpRequest"),r.setRequestHeader("X-CSRFToken",o)),r.onload=function(){403===r.status&&("Authentication credentials were not provided."===r.response.detail&&(window.location.href="/login?showLoginRequired=true"));n(r.response,r.status)},r.onerror=function(e){n({message:"The request was an error"},400)},r.send(a)}var d=n(0);function j(e){var t=e.share,n=e.action,c=e.didPerformAction,a=t.likes?t.likes:0,r=e.className?e.className:"btn btn-primary btn-sm",s=n.display?n.display:"Action",o="like"===n.type?"".concat(a," ").concat(n.display):s,i=function(e,t){console.log(e,t),200!==t&&201!==t||!c||c(e,t)};return Object(d.jsx)("button",{className:r,onClick:function(e){e.preventDefault(),function(e,t,n){u("POST","/share/action",n,{id:e,action:t})}(t.id,n.type,i)},children:o})}function b(e){var t=e.share;return t.parent?Object(d.jsx)("div",{className:"row",children:Object(d.jsxs)("div",{className:"col-11 mx-auto p-3 border rounded",children:[Object(d.jsx)("p",{className:"mb-0 text-muted small",children:"Main"}),Object(d.jsx)(m,{hideActions:!0,className:"",share:t.parent})]})}):null}function m(e){var t=e.share,n=e.didRecommit,r=e.hideActions,s=Object(c.useState)(t||null),o=Object(l.a)(s,2),u=o[0],m=o[1],h=e.className?e.className:"col-10 mx-auto col-md-6",f=window.location.pathname.match(Object(i.a)(/([0-9]+)/,{share_id:1})),p=f?f.groups.share_id:-1,O="".concat(t.id)==="".concat(p),v=function(e,t){200===t?m(e):201===t&&n&&n(e)};return Object(d.jsxs)("div",{className:h,children:[Object(d.jsxs)("div",{children:[Object(d.jsxs)("p",{children:[Object(d.jsx)("strong",{children:t.user}),Object(d.jsx)("br",{}),t.content]}),Object(d.jsx)(b,{share:t})]}),Object(d.jsxs)("div",{className:"btn btn-group",children:[u&&!0!==r&&Object(d.jsxs)(a.a.Fragment,{children:[Object(d.jsx)(j,{share:u,didPerformAction:v,action:{type:"like",display:"Like"}}),Object(d.jsx)(j,{share:u,didPerformAction:v,action:{type:"unlike",display:"Unlike"}}),Object(d.jsx)(j,{share:u,didPerformAction:v,action:{type:"recommit",display:"Recommit"}})]}),!0===O?null:Object(d.jsx)("button",{className:"btn btn-outline-primary btn-sm",onClick:function(e){e.preventDefault(),window.location.href="/".concat(t.id)},children:"View"})]})]})}var h=n(8),f=n(3);function p(e){var t=Object(c.useState)([]),n=Object(l.a)(t,2),a=n[0],r=n[1],s=Object(c.useState)([]),o=Object(l.a)(s,2),i=o[0],j=o[1],b=Object(c.useState)(!1),h=Object(l.a)(b,2),p=h[0],O=h[1];Object(c.useEffect)((function(){var t=Object(f.a)(e.newShares).concat(a);t.length!==i.length&&j(t)}),[e.newShares,i,a]),Object(c.useEffect)((function(){if(!1===p){!function(e,t){var n="/share_ls";e&&(n="/share_ls?username=".concat(e)),u("GET",n,t)}(e.username,(function(e,t){200===t?(r(e),O(!0)):alert("There was an error")}))}}),[a,p,O,e.username]);var v=function(e){var t=Object(f.a)(a);t.unshift(e),r(t);var n=Object(f.a)(i);n.unshift(i),j(n)};return i.map((function(e,t){return Object(d.jsx)(m,{share:e,didRecommit:v,className:"col-12 col-md-10 mx-auto border rounded py-3 mb-4"},"".concat(t))}))}function O(e){var t=Object(c.useRef)(),n=e.didShare,a=function(e,t){201===t?n(e):(console.log(e),alert("An error occured please try again"))};return Object(d.jsx)("div",{className:e.className,children:Object(d.jsxs)("form",{className:"form",onSubmit:function(e){e.preventDefault();var n=t.current.value;u("POST","/share",a,{content:n}),t.current.value=" "},children:[Object(d.jsx)("textarea",{ref:t,required:!0,className:"form-control",name:"share"}),Object(d.jsx)("button",{type:"submit",className:"btn btn-primary my-3",children:"Share"})]})})}function v(e){var t=Object(c.useState)([]),n=Object(l.a)(t,2),a=n[0],r=n[1],s="true"===e.validUser;return Object(d.jsxs)("div",{className:"row",children:[!0===s&&Object(d.jsx)(O,{didShare:function(e){var t=Object(f.a)(a);t.unshift(e),r(t)},className:"col-md-4 mx-auto col-10"}),Object(d.jsx)(p,Object(h.a)(Object(h.a)({},e),{},{newShares:a}))]})}function x(e){var t=e.shareId,n=Object(c.useState)(!1),a=Object(l.a)(n,2),r=a[0],s=a[1],o=Object(c.useState)(null),i=Object(l.a)(o,2),j=i[0],b=i[1],h=function(e,t){200===t?b(e):alert("There was an error finding your Commit.")};return Object(c.useEffect)((function(){!1===r&&(!function(e,t){u("GET","/share/".concat(e),t)}(t,h),s(!0))}),[t,r,s]),null===j?null:Object(d.jsx)(m,{share:j,className:e.className})}var g=function(){return Object(d.jsx)("div",{className:"App",children:Object(d.jsxs)("header",{className:"App-header",children:[Object(d.jsx)("img",{src:o,className:"App-logo",alt:"logo"}),Object(d.jsx)("div",{children:Object(d.jsx)(v,{})}),Object(d.jsx)("a",{className:"App-link",href:"https://reactjs.org",target:"_blank",rel:"noopener noreferrer",children:"Learn React"})]})})},N=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,18)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),c(e),a(e),r(e),s(e)}))},y=document.getElementById("root"),S=document.getElementById("Home_Share");y&&s.a.render(Object(d.jsx)(a.a.StrictMode,{children:Object(d.jsx)(g,{})}),y),S&&s.a.render(a.a.createElement(v,S.dataset),S),document.querySelectorAll(".spher-detail").forEach((function(e){s.a.render(a.a.createElement(x,e.dataset),e)})),N()},9:function(e,t,n){}},[[17,1,2]]]);
//# sourceMappingURL=main.c95ea6ee.chunk.js.map