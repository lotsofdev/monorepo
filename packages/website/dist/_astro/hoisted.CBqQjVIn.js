function te(e){const t=window.getComputedStyle(document.body),n=Object.assign({offset:parseInt(t.getPropertyValue("--s-scrolled-classes-offset")||"0")||100,offsetX:parseInt(t.getPropertyValue("--s-scrolled-classes-offset-x")||"0"),offsetY:parseInt(t.getPropertyValue("--s-scrolled-classes-offset-y")||"0"),class:t.getPropertyValue("--s-scrolled-classes-class")||"scrolled"},{}),o=n.offsetX!==0?n.offsetX:n.offset,s=n.offsetY!==0?n.offsetY:n.offset;function r(){let c=!1;window.scrollY>=s?(document.body.classList.contains(`${n.class}-y`)||document.body.classList.add(`${n.class}-y`),c=!0):document.body.classList.contains(`${n.class}-y`)&&document.body.classList.remove(`${n.class}-y`),window.scrollX>=o?(document.body.classList.contains(`${n.class}-x`)||document.body.classList.add(`${n.class}-x`),c=!0):document.body.classList.contains(`${n.class}-x`)&&document.body.classList.remove(`${n.class}-x`),c?document.body.classList.contains(n.class)||document.body.classList.add(n.class):document.body.classList.contains(n.class)&&document.body.classList.remove(n.class),requestAnimationFrame(r)}requestAnimationFrame(r)}te();let b=localStorage.getItem("lo-crt");const k=document.querySelector("#lo-crt-trigger"),V=document.querySelector("#lo-crt");function B(){localStorage.setItem("lo-crt","true"),V?.classList.add("-active"),k?.classList.add("-active")}function ne(){localStorage.setItem("lo-crt","false"),V?.classList.remove("-active"),k?.classList.remove("-active")}k?.addEventListener("click",()=>{b=!b,b?B():ne()});(b===null||b==="true")&&B();const w="data-astro-transition-persist";function oe(e){for(const t of document.scripts)for(const n of e.scripts)if(!n.hasAttribute("data-astro-rerun")&&(!t.src&&t.textContent===n.textContent||t.src&&t.type===n.type&&t.src===n.src)){n.dataset.astroExec="";break}}function se(e){const t=document.documentElement,n=[...t.attributes].filter(({name:o})=>(t.removeAttribute(o),o.startsWith("data-astro-")));[...e.documentElement.attributes,...n].forEach(({name:o,value:s})=>t.setAttribute(o,s))}function re(e){for(const t of Array.from(document.head.children)){const n=ce(t,e);n?n.remove():t.remove()}document.head.append(...e.head.children)}function ie(e,t){t.replaceWith(e);for(const n of t.querySelectorAll(`[${w}]`)){const o=n.getAttribute(w),s=e.querySelector(`[${w}="${o}"]`);s&&(s.replaceWith(n),s.localName==="astro-island"&&le(n)&&!ue(n,s)&&(n.setAttribute("ssr",""),n.setAttribute("props",s.getAttribute("props"))))}}const ae=()=>{const e=document.activeElement;if(e?.closest(`[${w}]`)){if(e instanceof HTMLInputElement||e instanceof HTMLTextAreaElement){const t=e.selectionStart,n=e.selectionEnd;return()=>P({activeElement:e,start:t,end:n})}return()=>P({activeElement:e})}else return()=>P({activeElement:null})},P=({activeElement:e,start:t,end:n})=>{e&&(e.focus(),(e instanceof HTMLInputElement||e instanceof HTMLTextAreaElement)&&(typeof t=="number"&&(e.selectionStart=t),typeof n=="number"&&(e.selectionEnd=n)))},ce=(e,t)=>{const n=e.getAttribute(w),o=n&&t.head.querySelector(`[${w}="${n}"]`);if(o)return o;if(e.matches("link[rel=stylesheet]")){const s=e.getAttribute("href");return t.head.querySelector(`link[rel=stylesheet][href="${s}"]`)}return null},le=e=>{const t=e.dataset.astroTransitionPersistProps;return t==null||t==="false"},ue=(e,t)=>e.getAttribute("props")===t.getAttribute("props"),fe=e=>{oe(e),se(e),re(e);const t=ae();ie(e.body,document.body),t()},de="astro:before-preparation",me="astro:after-preparation",he="astro:before-swap",ye="astro:after-swap",ge=e=>document.dispatchEvent(new Event(e));class U extends Event{from;to;direction;navigationType;sourceElement;info;newDocument;signal;constructor(t,n,o,s,r,c,a,u,f,l){super(t,n),this.from=o,this.to=s,this.direction=r,this.navigationType=c,this.sourceElement=a,this.info=u,this.newDocument=f,this.signal=l,Object.defineProperties(this,{from:{enumerable:!0},to:{enumerable:!0,writable:!0},direction:{enumerable:!0,writable:!0},navigationType:{enumerable:!0},sourceElement:{enumerable:!0},info:{enumerable:!0},newDocument:{enumerable:!0,writable:!0},signal:{enumerable:!0}})}}class pe extends U{formData;loader;constructor(t,n,o,s,r,c,a,u,f,l){super(de,{cancelable:!0},t,n,o,s,r,c,a,u),this.formData=f,this.loader=l.bind(this,this),Object.defineProperties(this,{formData:{enumerable:!0},loader:{enumerable:!0,writable:!0}})}}class we extends U{direction;viewTransition;swap;constructor(t,n){super(he,void 0,t.from,t.to,t.direction,t.navigationType,t.sourceElement,t.info,t.newDocument,t.signal),this.direction=t.direction,this.viewTransition=n,this.swap=()=>fe(this.newDocument),Object.defineProperties(this,{direction:{enumerable:!0},viewTransition:{enumerable:!0},swap:{enumerable:!0,writable:!0}})}}async function be(e,t,n,o,s,r,c,a,u){const f=new pe(e,t,n,o,s,r,window.document,c,a,u);return document.dispatchEvent(f)&&(await f.loader(),f.defaultPrevented||(ge(me),f.navigationType!=="traverse"&&D({scrollX,scrollY}))),f}function ve(e,t){const n=new we(e,t);return document.dispatchEvent(n),n.swap(),n}const Te=history.pushState.bind(history),A=history.replaceState.bind(history),D=e=>{history.state&&(history.scrollRestoration="manual",A({...history.state,...e},""))},N=!!document.startViewTransition,$=()=>!!document.querySelector('[name="astro-view-transitions-enabled"]'),W=(e,t)=>e.pathname===t.pathname&&e.search===t.search;let d,g,S;const j=e=>document.dispatchEvent(new Event(e)),K=()=>j("astro:page-load"),Ae=()=>{let e=document.createElement("div");e.setAttribute("aria-live","assertive"),e.setAttribute("aria-atomic","true"),e.className="astro-route-announcer",document.body.append(e),setTimeout(()=>{let t=document.title||document.querySelector("h1")?.textContent||location.pathname;e.textContent=t},60)},H="data-astro-transition-persist",M="data-astro-transition",x="data-astro-transition-fallback";let F,v=0;history.state?(v=history.state.index,scrollTo({left:history.state.scrollX,top:history.state.scrollY})):$()&&(A({index:v,scrollX,scrollY},""),history.scrollRestoration="manual");async function Ee(e,t){try{const n=await fetch(e,t),s=(n.headers.get("content-type")??"").split(";",1)[0].trim();return s!=="text/html"&&s!=="application/xhtml+xml"?null:{html:await n.text(),redirected:n.redirected?n.url:void 0,mediaType:s}}catch{return null}}function G(){const e=document.querySelector('[name="astro-view-transitions-fallback"]');return e?e.getAttribute("content"):"animate"}function Se(){let e=Promise.resolve();for(const t of document.getElementsByTagName("script")){if(t.dataset.astroExec==="")continue;const n=t.getAttribute("type");if(n&&n!=="module"&&n!=="text/javascript")continue;const o=document.createElement("script");o.innerHTML=t.innerHTML;for(const s of t.attributes){if(s.name==="src"){const r=new Promise(c=>{o.onload=o.onerror=c});e=e.then(()=>r)}o.setAttribute(s.name,s.value)}o.dataset.astroExec="",t.replaceWith(o)}return e}const z=(e,t,n,o,s)=>{const r=W(t,e),c=document.title;document.title=o;let a=!1;if(e.href!==location.href&&!s)if(n.history==="replace"){const u=history.state;A({...n.state,index:u.index,scrollX:u.scrollX,scrollY:u.scrollY},"",e.href)}else Te({...n.state,index:++v,scrollX:0,scrollY:0},"",e.href);if(document.title=c,S=e,r||(scrollTo({left:0,top:0,behavior:"instant"}),a=!0),s)scrollTo(s.scrollX,s.scrollY);else{if(e.hash){history.scrollRestoration="auto";const u=history.state;location.href=e.href,history.state||(A(u,""),r&&window.dispatchEvent(new PopStateEvent("popstate")))}else a||scrollTo({left:0,top:0,behavior:"instant"});history.scrollRestoration="manual"}};function Le(e){const t=[];for(const n of e.querySelectorAll("head link[rel=stylesheet]"))if(!document.querySelector(`[${H}="${n.getAttribute(H)}"], link[rel=stylesheet][href="${n.getAttribute("href")}"]`)){const o=document.createElement("link");o.setAttribute("rel","preload"),o.setAttribute("as","style"),o.setAttribute("href",n.getAttribute("href")),t.push(new Promise(s=>{["load","error"].forEach(r=>o.addEventListener(r,s)),document.head.append(o)}))}return t}async function X(e,t,n,o,s){async function r(u){function f(h){const m=h.effect;return!m||!(m instanceof KeyframeEffect)||!m.target?!1:window.getComputedStyle(m.target,m.pseudoElement).animationIterationCount==="infinite"}const l=document.getAnimations();document.documentElement.setAttribute(x,u);const y=document.getAnimations().filter(h=>!l.includes(h)&&!f(h));return Promise.allSettled(y.map(h=>h.finished))}if(s==="animate"&&!n.transitionSkipped&&!e.signal.aborted)try{await r("old")}catch{}const c=document.title,a=ve(e,n.viewTransition);z(a.to,a.from,t,c,o),j(ye),s==="animate"&&(!n.transitionSkipped&&!a.signal.aborted?r("new").finally(()=>n.viewTransitionFinished()):n.viewTransitionFinished())}function Re(){return d?.controller.abort(),d={controller:new AbortController}}async function J(e,t,n,o,s){const r=Re();if(!$()||location.origin!==n.origin){r===d&&(d=void 0),location.href=n.href;return}const c=s?"traverse":o.history==="replace"?"replace":"push";if(c!=="traverse"&&D({scrollX,scrollY}),W(t,n)&&(e!=="back"&&n.hash||e==="back"&&t.hash)){z(n,t,o,document.title,s),r===d&&(d=void 0);return}const a=await be(t,n,e,c,o.sourceElement,o.info,r.controller.signal,o.formData,u);if(a.defaultPrevented||a.signal.aborted){r===d&&(d=void 0),a.signal.aborted||(location.href=n.href);return}async function u(i){const y=i.to.href,h={signal:i.signal};if(i.formData){h.method="POST";const p=i.sourceElement instanceof HTMLFormElement?i.sourceElement:i.sourceElement instanceof HTMLElement&&"form"in i.sourceElement?i.sourceElement.form:i.sourceElement?.closest("form");h.body=p?.attributes.getNamedItem("enctype")?.value==="application/x-www-form-urlencoded"?new URLSearchParams(i.formData):i.formData}const m=await Ee(y,h);if(m===null){i.preventDefault();return}if(m.redirected){const p=new URL(m.redirected);if(p.origin!==i.to.origin){i.preventDefault();return}i.to=p}if(F??=new DOMParser,i.newDocument=F.parseFromString(m.html,m.mediaType),i.newDocument.querySelectorAll("noscript").forEach(p=>p.remove()),!i.newDocument.querySelector('[name="astro-view-transitions-enabled"]')&&!i.formData){i.preventDefault();return}const R=Le(i.newDocument);R.length&&!i.signal.aborted&&await Promise.all(R)}async function f(){if(g&&g.viewTransition){try{g.viewTransition.skipTransition()}catch{}try{await g.viewTransition.updateCallbackDone}catch{}}return g={transitionSkipped:!1}}const l=await f();if(a.signal.aborted){r===d&&(d=void 0);return}if(document.documentElement.setAttribute(M,a.direction),N)l.viewTransition=document.startViewTransition(async()=>await X(a,o,l,s));else{const i=(async()=>{await Promise.resolve(),await X(a,o,l,s,G())})();l.viewTransition={updateCallbackDone:i,ready:i,finished:new Promise(y=>l.viewTransitionFinished=y),skipTransition:()=>{l.transitionSkipped=!0,document.documentElement.removeAttribute(x)}}}l.viewTransition?.updateCallbackDone.finally(async()=>{await Se(),K(),Ae()}),l.viewTransition?.finished.finally(()=>{l.viewTransition=void 0,l===g&&(g=void 0),r===d&&(d=void 0),document.documentElement.removeAttribute(M),document.documentElement.removeAttribute(x)});try{await l.viewTransition?.updateCallbackDone}catch(i){const y=i;console.log("[astro]",y.name,y.message,y.stack)}}async function Y(e,t){await J("forward",S,new URL(e,location.href),t??{})}function Pe(e){if(!$()&&e.state){location.reload();return}if(e.state===null)return;const t=history.state,n=t.index,o=n>v?"forward":"back";v=n,J(o,S,new URL(location.href),{},t)}const C=()=>{history.state&&(scrollX!==history.state.scrollX||scrollY!==history.state.scrollY)&&D({scrollX,scrollY})};{if(N||G()!=="none")if(S=new URL(location.href),addEventListener("popstate",Pe),addEventListener("load",K),"onscrollend"in window)addEventListener("scrollend",C);else{let e,t,n,o;const s=()=>{if(o!==history.state?.index){clearInterval(e),e=void 0;return}if(t===scrollY&&n===scrollX){clearInterval(e),e=void 0,C();return}else t=scrollY,n=scrollX};addEventListener("scroll",()=>{e===void 0&&(o=history.state.index,t=scrollY,n=scrollX,e=window.setInterval(s,50))},{passive:!0})}for(const e of document.getElementsByTagName("script"))e.dataset.astroExec=""}const Q=new Set,E=new WeakSet;let I,Z,q=!1;function xe(e){q||(q=!0,I??=e?.prefetchAll,Z??=e?.defaultStrategy??"hover",Ie(),ke(),De(),$e())}function Ie(){for(const e of["touchstart","mousedown"])document.body.addEventListener(e,t=>{T(t.target,"tap")&&L(t.target.href,{ignoreSlowConnection:!0})},{passive:!0})}function ke(){let e;document.body.addEventListener("focusin",o=>{T(o.target,"hover")&&t(o)},{passive:!0}),document.body.addEventListener("focusout",n,{passive:!0}),O(()=>{for(const o of document.getElementsByTagName("a"))E.has(o)||T(o,"hover")&&(E.add(o),o.addEventListener("mouseenter",t,{passive:!0}),o.addEventListener("mouseleave",n,{passive:!0}))});function t(o){const s=o.target.href;e&&clearTimeout(e),e=setTimeout(()=>{L(s)},80)}function n(){e&&(clearTimeout(e),e=0)}}function De(){let e;O(()=>{for(const t of document.getElementsByTagName("a"))E.has(t)||T(t,"viewport")&&(E.add(t),e??=Ne(),e.observe(t))})}function Ne(){const e=new WeakMap;return new IntersectionObserver((t,n)=>{for(const o of t){const s=o.target,r=e.get(s);o.isIntersecting?(r&&clearTimeout(r),e.set(s,setTimeout(()=>{n.unobserve(s),e.delete(s),L(s.href)},300))):r&&(clearTimeout(r),e.delete(s))}})}function $e(){O(()=>{for(const e of document.getElementsByTagName("a"))T(e,"load")&&L(e.href)})}function L(e,t){e=e.replace(/#.*/,"");const n=t?.ignoreSlowConnection??!1;if(Oe(e,n))if(Q.add(e),document.createElement("link").relList?.supports?.("prefetch")&&t?.with!=="fetch"){const o=document.createElement("link");o.rel="prefetch",o.setAttribute("href",e),document.head.append(o)}else fetch(e,{priority:"low"})}function Oe(e,t){if(!navigator.onLine||!t&&ee())return!1;try{const n=new URL(e,location.href);return location.origin===n.origin&&(location.pathname!==n.pathname||location.search!==n.search)&&!Q.has(e)}catch{}return!1}function T(e,t){if(e?.tagName!=="A")return!1;const n=e.dataset.astroPrefetch;return n==="false"?!1:t==="tap"&&(n!=null||I)&&ee()?!0:n==null&&I||n===""?t===Z:n===t}function ee(){if("connection"in navigator){const e=navigator.connection;return e.saveData||/2g/.test(e.effectiveType)}return!1}function O(e){e();let t=!1;document.addEventListener("astro:page-load",()=>{if(!t){t=!0;return}e()})}function He(){const e=document.querySelector('[name="astro-view-transitions-fallback"]');return e?e.getAttribute("content"):"animate"}function _(e){return e.dataset.astroReload!==void 0}(N||He()!=="none")&&(document.addEventListener("click",e=>{let t=e.target;if(e.composed&&(t=e.composedPath()[0]),t instanceof Element&&(t=t.closest("a, area")),!(t instanceof HTMLAnchorElement)&&!(t instanceof SVGAElement)&&!(t instanceof HTMLAreaElement))return;const n=t instanceof HTMLElement?t.target:t.target.baseVal,o=t instanceof HTMLElement?t.href:t.href.baseVal,s=new URL(o,location.href).origin;_(t)||t.hasAttribute("download")||!t.href||n&&n!=="_self"||s!==location.origin||e.button!==0||e.metaKey||e.ctrlKey||e.altKey||e.shiftKey||e.defaultPrevented||(e.preventDefault(),Y(o,{history:t.dataset.astroHistory==="replace"?"replace":"auto",sourceElement:t}))}),document.addEventListener("submit",e=>{let t=e.target;if(t.tagName!=="FORM"||e.defaultPrevented||_(t))return;const n=t,o=e.submitter,s=new FormData(n,o),r=typeof n.action=="string"?n.action:n.getAttribute("action"),c=typeof n.method=="string"?n.method:n.getAttribute("method");let a=o?.getAttribute("formaction")??r??location.pathname;const u=o?.getAttribute("formmethod")??c??"get";if(u==="dialog"||location.origin!==new URL(a,location.href).origin)return;const f={sourceElement:o??n};if(u==="get"){const l=new URLSearchParams(s),i=new URL(a);i.search=l.toString(),a=i.toString()}else f.formData=s;e.preventDefault(),Y(a,f)}),xe({prefetchAll:!0}));