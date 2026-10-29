const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["_astro/mermaid.core.BbjFPdu7.js","_astro/preload-helper.DHhhL8Zf.js","_astro/chunk-Y2CYZVJY.DsF7k-Jl.js","_astro/src.Duoub3vK.js","_astro/rolldown-runtime.pP25SEvz.js","_astro/chunk-DSNLSHJZ.qU9zOb4j.js","_astro/chunk-7S6XSTFO.CsU8glcS.js","_astro/dist.B-59DSOZ.js","_astro/chunk-YZO67HFG.Bn1CCykj.js","_astro/chunk-AQDTSKZB.ChLxrO0Z.js","_astro/chunk-DUW6YSOI.BXwCdHHB.js","_astro/chunk-UHW7PFBP.Dquo7nMj.js","_astro/chunk-HAGFOTED.CCPIxCAH.js","_astro/chunk-J5ZVWO5B.Ddht6hlJ.js","_astro/rough.esm.Dy-Kn_BL.js","_astro/chunk-ZAUX2LTX.BLneT3o2.js","_astro/chunk-WQQL4CDK.BtMEDpfs.js","_astro/line.BkaA8qqB.js","_astro/path.fybaL0A-.js","_astro/array.BifhSqXX.js","_astro/chunk-HNE4Q36P.CLmj2tMI.js"])))=>i.map(i=>d[i]);
import{t as e}from"./preload-helper.DHhhL8Zf.js";var t={},n=new Set,r=new WeakSet,i=!0,a=void 0,o=!1;function s(e){o||(o=!0,i??=e?.prefetchAll??!1,a??=e?.defaultStrategy??`hover`,c(),l(),u(),f())}function c(){for(let e of[`touchstart`,`mousedown`])document.addEventListener(e,e=>{let t=e.target.closest(`a`);h(t,`tap`)&&p(t.href,{ignoreSlowConnection:!0})},{passive:!0})}function l(){let e;document.body.addEventListener(`focusin`,e=>{let n=e.target.closest(`a`);h(n,`hover`)&&t(n.href)},{passive:!0}),document.body.addEventListener(`focusout`,n,{passive:!0}),_(()=>{for(let e of document.getElementsByTagName(`a`))r.has(e)||h(e,`hover`)&&(r.add(e),e.addEventListener(`mouseenter`,e=>t(e.currentTarget.href),{passive:!0}),e.addEventListener(`mouseleave`,n,{passive:!0}))});function t(t){e&&clearTimeout(e),e=setTimeout(()=>{p(t)},80)}function n(){e&&=(clearTimeout(e),0)}}function u(){let e;_(()=>{for(let t of document.getElementsByTagName(`a`))r.has(t)||h(t,`viewport`)&&(r.add(t),e??=d(),e.observe(t))})}function d(){let e=new WeakMap;return new IntersectionObserver((t,n)=>{for(let r of t){let t=r.target,i=e.get(t);r.isIntersecting?(i&&clearTimeout(i),e.set(t,setTimeout(()=>{n.unobserve(t),e.delete(t),p(t.href)},300))):i&&(clearTimeout(i),e.delete(t))}})}function f(){_(()=>{for(let e of document.getElementsByTagName(`a`))h(e,`load`)&&p(e.href)})}function p(e,r){e=e.replace(/#.*/,``);let i=r?.ignoreSlowConnection??!1;if(m(e,i)){if(n.add(e),document.createElement(`link`).relList?.supports?.(`prefetch`)){let t=document.createElement(`link`);t.rel=`prefetch`,t.setAttribute(`href`,e),document.head.append(t)}else{let n=new Headers;for(let[e,r]of Object.entries(t))n.set(e,r);fetch(e,{priority:`low`,headers:n}).catch(()=>{})}}}function m(e,t){if(!navigator.onLine||!t&&g())return!1;try{let t=new URL(e,location.href);return location.origin===t.origin&&(location.pathname!==t.pathname||location.search!==t.search)&&!n.has(e)}catch{}return!1}function h(e,t){if(e?.tagName!==`A`)return!1;let n=e.dataset.astroPrefetch;return n===`false`?!1:t===`tap`&&(n!=null||i)&&g()?!0:n==null&&i||n===``?t===a:n===t}function g(){if(`connection`in navigator){let e=navigator.connection;return e.saveData||/2g/.test(e.effectiveType)}return!1}function _(e){e();let t=!1;document.addEventListener(`astro:page-load`,()=>{t?e():t=!0}),new MutationObserver(t=>{for(let n of t)for(let t of n.addedNodes)if(t instanceof Element&&(t.tagName===`A`||t.querySelector?.(`a`))){e();return}}).observe(document.body,{childList:!0,subtree:!0})}var v=(...e)=>console.error(`[astro-mermaid]`,...e),y=()=>document.querySelectorAll(`pre.mermaid`).length>0,b=null;async function x(){return b||(b=e(async()=>{let{default:e}=await import(`./mermaid.core.BbjFPdu7.js`);return{default:e}},__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20])).then(async({default:e})=>{let t=[];if(t&&t.length>0){t.length;let n=t.map(e=>e.icons?{name:e.name,icons:e.icons}:{name:e.name,loader:()=>fetch(e.url).then(e=>e.json())});await e.registerIconPacks(n)}return e}).catch(e=>{throw v(`Failed to load mermaid:`,e),b=null,e}),b)}var S={startOnLoad:!1,theme:`base`,fontFamily:`"Geist Variable", ui-sans-serif, system-ui, sans-serif`,flowchart:{curve:`basis`,padding:14,nodeSpacing:36,rankSpacing:52},sequence:{mirrorActors:!1,actorMargin:64,messageMargin:40},themeVariables:{darkMode:!0,fontSize:`14px`,background:`#0d0f0c`,mainBkg:`#151813`,primaryColor:`#151813`,primaryTextColor:`#ededea`,primaryBorderColor:`#2f5a40`,nodeBorder:`#2f5a40`,secondaryColor:`#121411`,tertiaryColor:`#0f110e`,textColor:`#c3c5bd`,lineColor:`#4f8a66`,clusterBkg:`#0f110e`,clusterBorder:`#34362f`,titleColor:`#9a9d95`,edgeLabelBackground:`#0d0f0c`,actorBkg:`#151813`,actorBorder:`#2f5a40`,actorTextColor:`#ededea`,actorLineColor:`#34362f`,signalColor:`#4f8a66`,signalTextColor:`#c3c5bd`,labelBoxBkgColor:`#151813`,labelBoxBorderColor:`#2f5a40`,labelTextColor:`#ededea`,noteBkgColor:`#121411`,noteBorderColor:`#34362f`,noteTextColor:`#c3c5bd`,activationBkgColor:`#1d2a22`,activationBorderColor:`#3ddc84`,transitionColor:`#4f8a66`,transitionLabelColor:`#9a9d95`,stateLabelColor:`#ededea`,stateBkg:`#151813`,compositeBackground:`#0f110e`,compositeTitleBackground:`#0f110e`,compositeBorder:`#34362f`,altBackground:`#0f110e`,specialStateColor:`#3ddc84`,innerEndBackground:`#3ddc84`,dropShadow:`none`}};async function C(){let e=document.querySelectorAll(`pre.mermaid`);if(e.length,e.length===0)return;let t=await x(),n=S.theme;t.initialize({...S,theme:n,gitGraph:{mainBranchName:`main`,showCommitLabel:!0,showBranches:!0,rotateCommitLabel:!0}});for(let n of e){if(n.hasAttribute(`data-processed`))continue;n.hasAttribute(`data-diagram`)||n.setAttribute(`data-diagram`,n.textContent||``);let e=n.getAttribute(`data-diagram`)||``,r=`mermaid-`+Math.random().toString(36).slice(2,11);try{let i=document.getElementById(r);i&&i.remove();let{svg:a}=await t.render(r,e);n.innerHTML=a,n.setAttribute(`data-processed`,`true`)}catch(e){v(`Mermaid rendering error for diagram:`,r,e);let t=document.createElement(`div`);t.style.cssText=`color: red; padding: 1rem; border: 1px solid red; border-radius: 0.5rem;`;let i=document.createElement(`strong`);i.textContent=`Error rendering diagram:`;let a=document.createElement(`span`);a.textContent=` `+(e.message||`Unknown error`),t.appendChild(i),t.appendChild(a),n.textContent=``,n.appendChild(t),n.setAttribute(`data-processed`,`true`)}}}y()&&C(),document.addEventListener(`astro:after-swap`,()=>{y()&&C()});var w=document.createElement(`style`);w.textContent=`
            /* Prevent layout shifts by setting minimum height */
            pre.mermaid {
              display: flex;
              justify-content: center;
              align-items: center;
              margin: 2rem 0;
              padding: 1rem;
              background-color: transparent;
              border: none;
              overflow: auto;
              min-height: 200px; /* Prevent layout shift */
              position: relative;
            }
            
            /* Loading state with skeleton loader */
            pre.mermaid:not([data-processed]) {
              background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
              background-size: 200% 100%;
              animation: shimmer 1.5s infinite;
            }
            
            /* Dark mode skeleton loader */
            [data-theme="dark"] pre.mermaid:not([data-processed]) {
              background: linear-gradient(90deg, #2a2a2a 25%, #3a3a3a 50%, #2a2a2a 75%);
              background-size: 200% 100%;
            }
            
            @keyframes shimmer {
              0% {
                background-position: -200% 0;
              }
              100% {
                background-position: 200% 0;
              }
            }
            
            /* Show processed diagrams with smooth transition */
            pre.mermaid[data-processed] {
              animation: none;
              background: transparent;
              min-height: auto; /* Allow natural height after render */
            }
            
            /* Ensure responsive sizing for mermaid SVGs */
            pre.mermaid svg {
              max-width: 100%;
              height: auto;
            }
            
            /* Optional: Add subtle background for better visibility */
            @media (prefers-color-scheme: dark) {
              pre.mermaid[data-processed] {
                background-color: rgba(255, 255, 255, 0.02);
                border-radius: 0.5rem;
              }
            }
            
            @media (prefers-color-scheme: light) {
              pre.mermaid[data-processed] {
                background-color: rgba(0, 0, 0, 0.02);
                border-radius: 0.5rem;
              }
            }
            
            /* Respect user's color scheme preference */
            [data-theme="dark"] pre.mermaid[data-processed] {
              background-color: rgba(255, 255, 255, 0.02);
              border-radius: 0.5rem;
            }
            
            [data-theme="light"] pre.mermaid[data-processed] {
              background-color: rgba(0, 0, 0, 0.02);
              border-radius: 0.5rem;
            }
          `,document.head.appendChild(w),s();