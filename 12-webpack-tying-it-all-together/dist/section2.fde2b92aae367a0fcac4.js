(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{e0ML:function(e,n,t){(e.exports=t("JPst")(!1)).push([e.i,".avatar {\n    width: 3rem;\n    display: inline-block;\n    margin-right: 0.5rem;\n}\n\n.username {\n    display: inline-block;\n}\n",""])},s3Q8:function(e,n,t){"use strict";t.r(n);var i=t("vDqi"),a=t.n(i);t("x+pj");console.log("section 2 loaded!");n.default=e=>{for(;e.firstChild;)e.removeChild(e.firstChild);const n=document.createElement("div");n.innerHTML="I am Section 2. I rely on the following third-party dependencies: axios. I share the following dependencies with Section 4: axios";const t=document.createElement("p");t.innerHTML="Fetching GitHub user...",n.appendChild(t),e.appendChild(n),a.a.get("https://api.github.com/users/thawkin3").then(e=>{const t=document.createElement("div"),i=new Image;i.src=e.data.avatar_url,i.classList.add("avatar"),t.appendChild(i);const a=document.createElement("p");a.innerHTML=e.data.name,a.classList.add("username"),t.appendChild(a),n.appendChild(t)}).catch(e=>{const t=document.createElement("p");t.textContent=e.toString(),n.appendChild(t)})}},"x+pj":function(e,n,t){var i=t("e0ML");"string"==typeof i&&(i=[[e.i,i,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0};t("aET+")(i,a);i.locals&&(e.exports=i.locals)}}]);
//# sourceMappingURL=section2.fde2b92aae367a0fcac4.js.map