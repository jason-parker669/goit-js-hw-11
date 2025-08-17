import{a as m,S as p,i as d}from"./assets/vendor-BK_rxH-O.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function i(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(e){if(e.ep)return;e.ep=!0;const r=i(e);fetch(e.href,r)}})();m.defaults.baseURL="https://pixabay.com/api/";function h(s){return m.get("",{params:{key:"51819107-ec467fcdcf3190bdaabfbeda8",q:s,image_type:"photo",orientation:"horizontal",safesearch:!0}})}let a=null;function y(s){document.querySelector(".gallery").innerHTML=s.map(t=>`<li class="gallery-item">
	            <a class="gallery-link" href=${t.largeImageURL}>
		        <img 
		            class="gallery-image" 
		            src=${t.webformatURL}
		            alt=${t.tags} 
		        />
	            </a>
                <ul class="gallery-subscript">
                    <li class="subscript-item">
                        <h2>Likes</h2>
                        <p>${t.likes}</p>
                    </li>
                    <li class="subscript-item">
                        <h2>Views</h2>
                        <p>${t.views}</p>    
                    </li>
                    <li class="subscript-item">
                        <h2>Comments</h2>
                        <p>${t.comments}</p>
                    </li>
                    <li class="subscript-item">
                        <h2>Downloads</h2>
                        <p>${t.downloads}</p>
                    </li>
                </ul>
                </li>`).join(""),a?a.refresh():a=new p(".gallery a")}function g(){document.querySelector(".gallery").innerHTML=""}function b(){document.getElementById("the-loader").classList.add("loader")}function c(){document.getElementById("the-loader").classList.remove("loader")}const f=document.querySelector(".form"),u=document.querySelector('input[name="search-text"]'),l=document.querySelector("button");l.disabled=!0;u.addEventListener("input",s=>{u.value.trim()===""?l.disabled=!0:l.disabled=!1});f.addEventListener("submit",s=>{b(),s.preventDefault(),g();const t=u.value.trim();h(t).then(i=>{const o=i.data.hits;o.length===0?(c(),d.warning({title:":(",message:"So sad, nothing found",position:"topRight"}),f.reset(),l.disabled=!0):(y(o),c())}).catch(i=>{d.warning({title:"OH MY GOD, SOMETHING WENT WRONG!",message:`${i}`,position:"topRight"}),c()})});
//# sourceMappingURL=index.js.map
