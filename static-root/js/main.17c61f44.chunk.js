(this.webpackJsonpspher_front=this.webpackJsonpspher_front||[]).push([[0],{16:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),r=n(4),s=n.n(r),o=(n(9),n.p+"static/media/logo.6ce24c58.svg"),i=(n(16),n(11)),l=n(2);function u(e,t,n,c){var a;c&&(a=JSON.stringify(c));var r=new XMLHttpRequest,s="http://127.0.0.1:8000/api".concat(t);r.responseType="json";var o=function(e){var t=null;if(document.cookie&&""!==document.cookie)for(var n=document.cookie.split(";"),c=0;c<n.length;c++){var a=n[c].trim();if(a.substring(0,e.length+1)===e+"="){t=decodeURIComponent(a.substring(e.length+1));break}}return t}("csrftoken");r.open(e,s),r.setRequestHeader("Content-Type","application/json"),o&&(r.setRequestHeader("X-Requested-With","XMLHttpRequest"),r.setRequestHeader("X-CSRFToken",o)),r.onload=function(){403===r.status&&("Authentication credentials were not provided."===r.response.detail&&-1===window.location.href.indexOf("login")&&(window.location.href="/login?showLoginRequired=true"));n(r.response,r.status)},r.onerror=function(e){n({message:"The request was an error"},400)},r.send(a)}function j(e,t){var n="/feed";null!==t&&void 0!==t&&(n=t.replace("http://localhost:8000/api","")),u("GET",n,e)}function d(e,t,n){var c="/share_ls";e&&(c="/share_ls?username=".concat(e)),null!==n&&void 0!==n&&(c=n.replace("http://localhost:8000/api","")),u("GET",c,t)}var b=n(0);function m(e){var t=e.share,n=e.action,c=e.didPerformAction,a=t.likes?t.likes:0,r=e.className?e.className:"btn btn-primary btn-sm",s=n.display?n.display:"Action",o="like"===n.type?"".concat(a," ").concat(n.display):s,i=function(e,t){console.log(e,t),200!==t&&201!==t||!c||c(e,t)};return Object(b.jsx)("button",{className:r,onClick:function(e){e.preventDefault(),function(e,t,n){u("POST","/share/action",n,{id:e,action:t})}(t.id,n.type,i)},children:o})}function f(e){var t=e.username;return Object(b.jsx)("div",{className:"pointer",onClick:function(e){window.location.href="/profile/".concat(t)},children:e.children})}function h(e){var t=e.user,n=e.includeFullName,c=e.hideLink,r=!0===n?"".concat(t.first_name," ").concat(t.last_name," "):null;return Object(b.jsxs)(a.a.Fragment,{children:[r,!0===c?"@".concat(t.username):Object(b.jsxs)(f,{username:t.username,children:["@",t.username]})]})}function O(e){var t=e.user,n=e.hideLink,c=Object(b.jsx)("span",{className:"mx-1 px-3 py-2 rounded-circle bg-dark text-white",children:t.username[0]});return!0===n?c:Object(b.jsx)(f,{username:t.username,children:c})}var p=n(10),x=n.n(p);function v(e){return Object(b.jsx)("span",{className:e.className,children:x()(e.children).format("0a")})}function g(e){var t=e.user,n=e.didFollowToggle,c=e.profileLoading,a=t&&t.is_following?"UnFollow":"Follow";a=c?"Loading...":a;return t?Object(b.jsxs)("div",{children:[Object(b.jsx)(O,{user:t,hideLink:!0}),Object(b.jsx)("p",{children:Object(b.jsx)(h,{user:t,includeFullName:!0,hideLink:!0})}),Object(b.jsxs)("p",{children:[Object(b.jsx)(v,{children:t.follower_count}),1===t.follower_count?" follower":" followers"]}),Object(b.jsxs)("p",{children:[Object(b.jsx)(v,{children:t.following_count})," following"]}),Object(b.jsx)("p",{children:t.location}),Object(b.jsx)("p",{children:t.bio}),Object(b.jsx)("button",{className:"btn btn-primary",onClick:function(e){e.preventDefault(),n&&!c&&n(a)},children:a})]}):null}function w(e){var t=e.username,n=Object(c.useState)(!1),a=Object(l.a)(n,2),r=a[0],s=a[1],o=Object(c.useState)(null),i=Object(l.a)(o,2),j=i[0],d=i[1],m=Object(c.useState)(!1),f=Object(l.a)(m,2),h=f[0],O=f[1],p=function(e,t){200===t&&d(e)};Object(c.useEffect)((function(){!1===r&&(!function(e,t){u("GET","/profiles/".concat(e,"/"),t)}(t,p),s(!0))}),[t,r,s]);return!1===r?"Loading ...":j?Object(b.jsx)(g,{user:j,didFollowToggle:function(e){!function(e,t,n){var c={action:"".concat(t&&t).toLowerCase()};u("POST","/profiles/".concat(e,"/follow"),n,c)}(t,e,(function(e,t){console.log(e,t),200===t&&d(e),O(!1)})),O(!0)},profileLoading:h}):null}function N(e){var t=e.share;return t.parent?Object(b.jsx)(S,{isRecommit:!0,recommiter:e.recommiter,hideActions:!0,className:" ",share:t.parent}):null}function S(e){var t=e.share,n=e.didRecommit,r=e.hideActions,s=e.isRecommit,o=e.recommiter,u=Object(c.useState)(e.share?e.share:null),j=Object(l.a)(u,2),d=j[0],f=j[1],p=e.className?e.className:"col-10 mx-auto col-md-6";p=!0===s?"".concat(p," py-2 border rounded"):p;var x=window.location.pathname.match(Object(i.a)(/([0-9]+)/,{share_id:1})),v=x?x.groups.share_id:-1,g="".concat(t.id)==="".concat(v),w=function(e,t){200===t?f(e):201===t&&n&&n(e)};return Object(b.jsxs)("div",{className:p,children:[!0===s&&Object(b.jsx)("div",{className:"mb-2",children:Object(b.jsxs)("span",{className:"small text-muted",children:["Recommit via ",Object(b.jsx)(h,{user:o})]})}),Object(b.jsxs)("div",{className:"d-flex",children:[Object(b.jsx)("div",{className:"",children:Object(b.jsx)(O,{user:t.user})}),Object(b.jsxs)("div",{className:"col-11",children:[Object(b.jsxs)("div",{children:[Object(b.jsx)("p",{children:Object(b.jsx)(h,{includeFullName:!0,user:t.user})}),Object(b.jsx)("p",{children:t.content}),Object(b.jsx)(N,{share:t,recommiter:t.user})]}),Object(b.jsxs)("div",{className:"btn btn-group px-0",children:[d&&!0!==r&&Object(b.jsxs)(a.a.Fragment,{children:[Object(b.jsx)(m,{share:d,didPerformAction:w,action:{type:"like",display:"Like"}}),Object(b.jsx)(m,{share:d,didPerformAction:w,action:{type:"unlike",display:"Unlike"}}),Object(b.jsx)(m,{share:d,didPerformAction:w,action:{type:"recommit",display:"Recommit"}})]}),!0===g?null:Object(b.jsx)("button",{className:"btn btn-outline-primary btn-sm",onClick:function(e){e.preventDefault(),window.location.href="/".concat(t.id)},children:"View"})]})]})]})]})}var y=n(7),k=n(3);function E(e){var t=Object(c.useState)([]),n=Object(l.a)(t,2),r=n[0],s=n[1],o=Object(c.useState)([]),i=Object(l.a)(o,2),u=i[0],j=i[1],m=Object(c.useState)(null),f=Object(l.a)(m,2),h=f[0],O=f[1],p=Object(c.useState)(!1),x=Object(l.a)(p,2),v=x[0],g=x[1];Object(c.useEffect)((function(){var t=Object(k.a)(e.newShares).concat(r);t.length!==u.length&&j(t)}),[e.newShares,u,r]),Object(c.useEffect)((function(){if(!1===v){d(e.username,(function(e,t){200===t?(O(e.next),s(e.results),g(!0),console.log(e)):alert("There was an error")}))}}),[r,v,g,e.username]);var w=function(e){var t=Object(k.a)(r);t.unshift(e),s(t);var n=Object(k.a)(u);n.unshift(u),j(n)};return Object(b.jsxs)(a.a.Fragment,{children:[u.map((function(e,t){return Object(b.jsx)(S,{share:e,didRecommit:w,className:"my-5 py-5 border bg-white text-dark"},"".concat(t,"-{item.id}"))})),null!==h&&Object(b.jsx)("button",{onClick:function(t){if(t.preventDefault(),null!==h){d(e.username,(function(e,t){if(200===t){O(e.next);var n=Object(k.a)(u).concat(e.results);s(n),j(n)}else alert("There was an error")}),h)}},className:"btn btn-outline-primary",children:"Load next"})]})}function L(e){var t=Object(c.useState)([]),n=Object(l.a)(t,2),r=n[0],s=n[1],o=Object(c.useState)([]),i=Object(l.a)(o,2),u=i[0],d=i[1],m=Object(c.useState)(null),f=Object(l.a)(m,2),h=f[0],O=f[1],p=Object(c.useState)(!1),x=Object(l.a)(p,2),v=x[0],g=x[1];Object(c.useEffect)((function(){var t=Object(k.a)(e.newShares).concat(r);t.length!==u.length&&d(t)}),[e.newShares,u,r]),Object(c.useEffect)((function(){if(!1===v){j((function(e,t){200===t&&(O(e.next),s(e.results),g(!0),console.log(e))}))}}),[r,v,g]);var w=function(e){var t=Object(k.a)(r);t.unshift(e),s(t);var n=Object(k.a)(u);n.unshift(u),d(n)};return Object(b.jsxs)(a.a.Fragment,{children:[u.map((function(e,t){return Object(b.jsx)(S,{share:e,didRecommit:w,className:"my-5 py-5 border bg-white text-dark"},"".concat(t,"-{item.id}"))})),null!==h&&Object(b.jsx)("button",{onClick:function(e){if(e.preventDefault(),null!==h){j((function(e,t){if(200===t){O(e.next);var n=Object(k.a)(u).concat(e.results);s(n),d(n)}}),h)}},className:"btn btn-outline-primary",children:"Load next"})]})}function R(e){var t=Object(c.useRef)(),n=e.didShare,a=function(e,t){201===t?n(e):(console.log(e),alert("An error occured please try again"))};return Object(b.jsx)("div",{className:e.className,children:Object(b.jsxs)("form",{className:"form",onSubmit:function(e){e.preventDefault();var n=t.current.value;u("POST","/share",a,{content:n}),t.current.value=" "},children:[Object(b.jsx)("textarea",{ref:t,required:!0,className:"form-control",name:"share"}),Object(b.jsx)("button",{type:"submit",className:"btn btn-primary my-3",children:"Share"})]})})}function T(e){var t=Object(c.useState)([]),n=Object(l.a)(t,2),a=n[0],r=n[1],s="false"!==e.validUser;return Object(b.jsxs)("div",{className:"row",children:[!0===s&&Object(b.jsx)(R,{didShare:function(e){var t=Object(k.a)(a);t.unshift(e),r(t)},className:"col-md-4 mx-auto col-10"}),Object(b.jsx)(L,Object(y.a)({newShares:a},e))]})}function F(e){var t=Object(c.useState)([]),n=Object(l.a)(t,2),a=n[0],r=n[1],s="true"===e.validUser;return Object(b.jsxs)("div",{className:"row",children:[!0===s&&Object(b.jsx)(R,{didShare:function(e){var t=Object(k.a)(a);t.unshift(e),r(t)},className:"col-md-4 mx-auto col-10"}),Object(b.jsx)(E,Object(y.a)(Object(y.a)({},e),{},{newShares:a}))]})}function A(e){var t=e.shareId,n=Object(c.useState)(!1),a=Object(l.a)(n,2),r=a[0],s=a[1],o=Object(c.useState)(null),i=Object(l.a)(o,2),j=i[0],d=i[1],m=function(e,t){200===t?d(e):alert("There was an error finding your Commit.")};return Object(c.useEffect)((function(){!1===r&&(!function(e,t){u("GET","/share/".concat(e),t)}(t,m),s(!0))}),[t,r,s]),null===j?null:Object(b.jsx)(S,{share:j,className:e.className})}var C=function(){return Object(b.jsx)("div",{className:"App",children:Object(b.jsxs)("header",{className:"App-header",children:[Object(b.jsx)("img",{src:o,className:"App-logo",alt:"logo"}),Object(b.jsx)("div",{children:Object(b.jsx)(F,{})}),Object(b.jsx)("a",{className:"App-link",href:"https://reactjs.org",target:"_blank",rel:"noopener noreferrer",children:"Learn React"})]})})},_=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,19)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),c(e),a(e),r(e),s(e)}))},q=document.getElementById("root");q&&s.a.render(Object(b.jsx)(a.a.StrictMode,{children:Object(b.jsx)(C,{})}),q);var P=document.getElementById("Home_Share");P&&s.a.render(a.a.createElement(F,P.dataset),P);var D=document.getElementById("spher-feed");D&&s.a.render(a.a.createElement(T,D.dataset),D),document.querySelectorAll(".spher-detail").forEach((function(e){s.a.render(a.a.createElement(A,e.dataset),e)})),document.querySelectorAll(".spher-profile-badge").forEach((function(e){s.a.render(a.a.createElement(w,e.dataset),e)})),_()},9:function(e,t,n){}},[[18,1,2]]]);
//# sourceMappingURL=main.17c61f44.chunk.js.map