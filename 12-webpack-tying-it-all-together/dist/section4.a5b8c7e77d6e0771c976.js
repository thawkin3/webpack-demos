(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{Kn8R:function(e,n,t){"use strict";t.r(n);var a=t("weu1"),o=t("Wgwc"),i=t.n(o),r=t("vDqi"),d=t.n(r),l=t("ziQ1"),c=t("oetV"),s=t("7MRl");t("PCKW");console.log("section 4 loaded!");n.default=e=>{for(;e.firstChild;)e.removeChild(e.firstChild);const n=document.createElement("div");n.innerHTML="I am Section 4. I rely on the following dependencies: axios, lodash, dayjs, d3. I share the following dependencies with Section 2: axios. I share the following dependencies with Section 3: lodash, dayjs.";const t=document.createElement("p");t.innerHTML=`Text joined by _.join: ${Object(a.a)(["Look","at","me!"]," ")}`,n.appendChild(t);const o=document.createElement("p");o.innerHTML=`More text joined by _.join: ${Object(a.a)(["No,","really,","look!"]," ")}`,n.appendChild(o);const r=document.createElement("p");r.innerHTML=`Today's date from dayjs: ${i()().format("D MMMM YYYY")}`,n.appendChild(r);const p=document.createElement("p");p.innerHTML="Interactive display from d3:",n.appendChild(p);const h=document.createElement("canvas");h.width=300,h.height=300,n.appendChild(h);const m=document.createElement("p");m.innerHTML="Fetching GitHub user...",n.appendChild(m),d.a.get("https://api.github.com/users/thawkin3").then(e=>{const t=document.createElement("div"),a=new Image;a.src=e.data.avatar_url,a.classList.add("avatar"),t.appendChild(a);const o=document.createElement("p");o.innerHTML=e.data.name,o.classList.add("username"),t.appendChild(o),n.appendChild(t)}).catch(e=>{const t=document.createElement("p");t.textContent=e.toString(),n.appendChild(t)}),e.appendChild(n);var u=document.querySelector("canvas"),v=u.getContext("2d"),f=u.width,g=u.height,w=Object(l.a)(c.a).domain([0,1e3]),C=Object(s.a)(.3),b=Object(s.a)(0);function y(){var e=j(a=f/20,o=g/2,1e3);v.clearRect(0,0,f,g),v.lineJoin="round",v.lineCap="round",v.lineWidth=1.5,v.strokeStyle="black",M(e),v.globalCompositeOperation="multiply",v.lineWidth=1;for(var n=0;n<e.length;n+=2)for(var t=e[n],a=t[0],o=t[1],i=0;i<1;++i){v.strokeStyle=w(n+50*(Math.random()-.5));for(var r=a,d=o,l=0;l<20;++l){v.globalAlpha=(20-l-1)/20;var c=j(r,d,10),s=c[c.length-1];M(c),r=s[0],d=s[1]}v.globalAlpha=1}}function M(e){var n,t=e.length;for(v.beginPath(),v.moveTo(e[0][0],e[0][1]),n=1;n<t;++n)v.lineTo(e[n][0],e[n][1]);v.stroke()}function j(e,n,t){var a,o=new Array(t);for(o[0]=[e,n],a=1;a<t;++a)o[a]=[e+=2*C(),n+=2*b()];return o}y(),u.onclick=y}},PCKW:function(e,n,t){var a=t("iBh9");"string"==typeof a&&(a=[[e.i,a,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};t("aET+")(a,o);a.locals&&(e.exports=a.locals)},iBh9:function(e,n,t){(e.exports=t("JPst")(!1)).push([e.i,"canvas {\n  width: 100%;\n  border: 1px solid #000;\n}\n\n.avatar {\n  width: 3rem;\n  display: inline-block;\n  margin-right: 0.5rem;\n}\n\n.username {\n  display: inline-block;\n}\n",""])}}]);
//# sourceMappingURL=section4.a5b8c7e77d6e0771c976.js.map