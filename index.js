import{a as w,S,i as a}from"./assets/vendor-S2qh7U4E.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function e(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(t){if(t.ep)return;t.ep=!0;const o=e(t);fetch(t.href,o)}})();const v="https://pixabay.com/api/",q="56825027-65265643f7aa1f6dd5a6771aa";async function u(r,s){return(await w.get(v,{params:{page:s,per_page:15,key:q,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data}const f=document.querySelector(".gallery"),m=document.querySelector(".loader"),y=document.querySelector(".btn-load"),P=new S(".gallery a",{captionsData:"alt",captionDelay:250});function h(r){const s=r.map(e=>`
        <li class="gallery-item">
          <a href="${e.largeImageURL}">
            <img
              src="${e.webformatURL}"
              alt="${e.tags}"
            />
          </a>

          <div class="info">
            <p><b>Likes</b><br>${e.likes}</p>
            <p><b>Views</b><br>${e.views}</p>
            <p><b>Comments</b><br>${e.comments}</p>
            <p><b>Downloads</b><br>${e.downloads}</p>
          </div>
        </li>
      `).join("");f.insertAdjacentHTML("beforeend",s),P.refresh()}function M(){f.innerHTML=""}function g(){m.classList.remove("hidden")}function p(){m.classList.add("hidden")}function b(){y.classList.remove("hidden")}function c(){y.classList.add("hidden")}let i=1,d="";const L=15,B=document.querySelector(".form");B.addEventListener("submit",$);const E=document.querySelector(".btn-load");E.addEventListener("click",I);async function $(r){r.preventDefault();const s=r.currentTarget,e=r.currentTarget.elements["search-text"].value.trim();if(!e){a.error({message:"Please enter a search query!"});return}d=e,i=1,M(),c(),g();try{const n=await u(d,i);if(n.hits.length===0){a.error({message:"Sorry, there are no images matching your search query. Please try again!"});return}h(n.hits),i*L>=n.totalHits?(c(),a.info({message:"We're sorry, but you've reached the end of search results"})):b(),s.reset()}catch(n){a.error({message:"Something went wrong. Please try again!"}),console.error(n)}finally{p()}}async function I(){i++,c(),g();try{const r=await u(d,i);h(r.hits);const e=document.querySelector(".gallery-item").getBoundingClientRect().height;window.scrollBy({top:e*2,behavior:"smooth"}),i*L>=r.totalHits?(c(),a.info({message:"We're sorry, but you've reached the end of search results"})):b()}catch(r){a.error({message:"Something went wrong. Please try again!"}),console.error(r)}finally{p()}}
//# sourceMappingURL=index.js.map
