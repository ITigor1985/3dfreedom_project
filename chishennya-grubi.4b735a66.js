parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"Y5dV":[function(require,module,exports) {

},{}],"clu1":[function(require,module,exports) {

},{"./../images/mobile/header/chistka-dimoxoda.jpg":[["chistka-dimoxoda.16aed7cb.jpg","IsyD"],"IsyD"],"./../images/mobile/header/kamin.jpg":[["kamin.8fb25fd4.jpg","zwQM"],"zwQM"],"./../images/tablet/header/chistka-dimoxoda.jpg":[["chistka-dimoxoda.59befc44.jpg","bQ3D"],"bQ3D"],"./../images/tablet/header/kamin.jpg":[["kamin.033585bf.jpg","A7V4"],"A7V4"],"./../images/tablet/header/telephone.png":[["telephone.20497149.png","cCFd"],"cCFd"],"./../images/desktop/header/desktop-bg.jpg":[["desktop-bg.7d54b0ac.jpg","CQo8"],"CQo8"],"./../images/desktop/header/kamin.jpg":[["kamin.d33ce419.jpg","ZZPW"],"ZZPW"],"./../images/desktop/header/telephone.png":[["telephone.e2859363.png","lBNC"],"lBNC"],"./../images/mobile/problems/arrow_left.png":[["arrow_left.3fde5523.png","hRZK"],"hRZK"],"./../images/mobile/problems/arrow_right.png":[["arrow_right.836cf264.png","g5LJ"],"g5LJ"],"./../images/desktop/problems/arrow_left.png":[["arrow_left.e21ec6a6.png","KnKz"],"KnKz"],"./../images/desktop/problems/arrow_right.png":[["arrow_right.55dca517.png","lY0Y"],"lY0Y"],"./../images/desktop/video-blog/play.png":[["play.40031a15.png","DYvC"],"DYvC"],"./../images/desktop/video-blog/video4.jpg":[["video4.af9db475.jpg","a5rv"],"a5rv"],"./../images/desktop/video-blog/play.webp":[["play.cfb807ae.webp","Em8D"],"Em8D"],"./../images/desktop/video-blog/video4.webp":[["video4.03b6f4e3.webp","nKsS"],"nKsS"],"./../images/desktop/video-blog/foto1.jpg":[["foto1.04905eed.jpg","jvJg"],"jvJg"],"./../images/desktop/video-blog/foto1.webp":[["foto1.ed2f7f3f.webp","QSqU"],"QSqU"],"./../images/desktop/video-blog/foto3.jpg":[["foto3.c5bf715c.jpg","VKpz"],"VKpz"],"./../images/desktop/video-blog/foto3.webp":[["foto3.8cd97429.webp","Hcxt"],"Hcxt"],"./../images/desktop/video-blog/foto2.jpg":[["foto2.c5bec752.jpg","rnha"],"rnha"],"./../images/desktop/video-blog/foto2.webp":[["foto2.409eb4de.webp","Bbep"],"Bbep"],"./../images/desktop/video-blog/foto1-uk.jpg":[["foto1-uk.8bc021b1.jpg","YoWB"],"YoWB"],"./../images/desktop/video-blog/foto1-uk.webp":[["foto1-uk.127b322b.webp","R4ib"],"R4ib"],"./../images/desktop/video-blog/foto2-uk.jpg":[["foto2-uk.3b1f375b.jpg","ziTT"],"ziTT"],"./../images/desktop/video-blog/foto2-uk.webp":[["foto2-uk.22776ee7.webp","o3Q5"],"o3Q5"],"./../images/desktop/video-blog/foto3-uk.jpg":[["foto3-uk.1a6c75cd.jpg","sTLM"],"sTLM"],"./../images/desktop/video-blog/foto3-uk.webp":[["foto3-uk.c6fab2f9.webp","KJER"],"KJER"],"./../images/desktop/video-blog/video4-uk.jpg":[["video4-uk.8d7577b6.jpg","p2BO"],"p2BO"],"./../images/desktop/video-blog/video4-uk.webp":[["video4-uk.81371e9d.webp","btvH"],"btvH"],"./../images/mobile/service/bg-mobile.jpg":[["bg-mobile.a5826e99.jpg","Z7Vu"],"Z7Vu"],"./../images/tablet/service/bg-tablet.png":[["bg-tablet.901a9561.png","XsG7"],"XsG7"],"./../images/desktop/service/bg-desktop2.jpg":[["bg-desktop2.f73acfb4.jpg","QTbn"],"QTbn"],"./../images/desktop/form-call-back/trub.png":[["trub.bcb20f90.png","nUx1"],"nUx1"]}],"Ob1G":[function(require,module,exports) {
const e=document.querySelectorAll("img");function s(){const e=document.createElement("script");e.src="https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js",e.integrity="sha512-q583ppKrCRc7N5O0n2nzUiJ+suUv7Et1JGels4bXOaMFQcamPk9HjdUknZuuFjBNs7tsMuadge5k9RzdmO+1GQ==",e.crossOrigin="anonymous",e.referrerpolicy="no-referrer",document.body.appendChild(e)}e.forEach(e=>{e.classList.add("lazyload"),e.setAttribute("data-src",e.src),e.removeAttribute("src")}),s();
},{}],"GQ5z":[function(require,module,exports) {
(()=>{const t=document.querySelectorAll('a[href*="#"]');for(let e of t)e.addEventListener("click",function(t){t.preventDefault();const o=e.getAttribute("href").substr(1);document.getElementById(o).scrollIntoView({behavior:"smooth",block:"start"})})})();
},{}],"cGsR":[function(require,module,exports) {
(()=>{const e={openModalBtn:document.querySelectorAll("[data-modal-open]"),closeModalBtn:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal]")};function o(){e.modal.classList.toggle("is-hidden")}e.openModalBtn.forEach(e=>e.addEventListener("click",o)),e.closeModalBtn.addEventListener("click",o)})(),(()=>{const e={header:document.querySelector(".header-top")};function o(o,n){o>=n?e.header.classList.add("opacity"):e.header.classList.remove("opacity"),window.removeEventListener("resize",t),window.removeEventListener("scroll",t)}function t(){const{innerWidth:e}=window;return e<1440?window.addEventListener("scroll",()=>{o(pageYOffset,86)}):window.addEventListener("scroll",()=>{o(pageYOffset,111)})}window.addEventListener("resize",t)||window.addEventListener("scroll",t)})();
},{}],"q5tE":[function(require,module,exports) {
const e="5916397565:AAHaSeLRFKxqv4eV5RpJiV_8EtVr8AB3Dns",t="-1001671673110",n=`https://api.telegram.org/bot${e}/sendMessage`,s=document.getElementById("success");document.getElementById("consultation__form").addEventListener("submit",function(e){e.preventDefault();let o="<b>Заявка с сайта!</b>\n";function a(){s.style.display="none"}o+=`<b>Отправитель: </b> ${this.username.value}\n`,o+=`<b>Телефон: </b> ${this.telephon.value}`;const l={chat_id:t,parse_mode:"html",text:o};fetch(n,{method:"POST",body:JSON.stringify(l),headers:{"Content-type":"application/json; charset=UTF-8"}}).then(e=>{this.username.value="",this.telephon.value="",s.style.display="block",setTimeout(a,1e4)}).catch(e=>{console.warn(e)})});
},{}],"p45Z":[function(require,module,exports) {
document.querySelectorAll(".chapter").forEach(e=>{e.addEventListener("click",function(){e.classList.toggle("active")})});
},{}],"DV7k":[function(require,module,exports) {
"use strict";require("modern-normalize/modern-normalize.css"),require("./sass/main.scss"),require("./js/lazyimg.js"),require("./js/smoothScroll.js"),require("./js/header.js"),require("./js/consultation-form.js"),require("./js/article.js");
},{"modern-normalize/modern-normalize.css":"Y5dV","./sass/main.scss":"clu1","./js/lazyimg.js":"Ob1G","./js/smoothScroll.js":"GQ5z","./js/header.js":"cGsR","./js/consultation-form.js":"q5tE","./js/article.js":"p45Z"}]},{},["DV7k"], null)
//# sourceMappingURL=chishennya-grubi.4b735a66.js.map