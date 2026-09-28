/* Animated statistics: counts up when scrolled into view. */
(function(){
var rm=matchMedia('(prefers-reduced-motion:reduce)').matches;
var io=new IntersectionObserver(function(es){es.forEach(function(e){if(!e.isIntersecting)return;io.unobserve(e.target);var el=e.target,n=+el.dataset.n,s=el.dataset.s||'';if(rm)return;var st=performance.now();
(function t(now){var p=Math.min((now-st)/1400,1);el.textContent=Math.round(n*(1-Math.pow(1-p,3))).toLocaleString('en-US')+(p<1?'':s);if(p<1)requestAnimationFrame(t)})(st)})},{threshold:.6});
document.querySelectorAll('[data-n]').forEach(function(e){io.observe(e)});
})();
