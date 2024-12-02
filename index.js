import"./assets/vendor-Bgfrje-I.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function i(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(e){if(e.ep)return;e.ep=!0;const s=i(e);fetch(e.href,s)}})();const c="47378473-ac089f81fe0a13d2309255fc1",l=document.querySelector(".form-js");document.querySelector(".input-js");const p=document.querySelector(".list-js"),u=new URLSearchParams({key:c,q:"monstera",image_type:"photo",orientation:"horizontal",safesearch:"true"});fetch(`https://pixabay.com/api/?${u}`).then(t=>{if(!t.ok)throw new Error(t.statusText);return t.json()}).then(t=>{console.log(t),p.insertAdjacentHTML("beforeend",m(t.hits))}).catch(t=>console.log(t));function m(t){return t.map(({webformatURL:r,largeImageURL:i,tags:n,likes:e,views:s,comments:o,downloads:a})=>`<li class="list-item" >
  <a href="${i}" alt="${n}" title=""/>
    <img src="${r}" alt="${n}" class="img-item">
  <div class="list-container">
  <p class="item"><span class="item-text">Likes</span> <span>${e}</span></p>
  <p class="item"><span class="item-text">Wiews</span> <span>${s}</span></p>
  <p class="item"><span class="item-text">Comments</span> <span>${o}</span></p>
  <p class="item"><span class="item-text">Downlods</span> <span>${a}</span></p>
  </div></a>
</li>`).join("")}l.addEventListener("submit",f);function f(t){t.preventDefault(),t.target.elements}
//# sourceMappingURL=index.js.map
