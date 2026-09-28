/* Navbar: builds the shared header, desktop dropdowns, mobile accordion menu, active state. */
(function(){
var hd=document.getElementById('hd');if(!hd)return;
hd.innerHTML='<div class="w"><nav aria-label="Main"><a class="lg" href="'+(document.body.getAttribute('data-root')||'')+'index.html" aria-label="Cling Info Tech home"><img src="https://clinginfotech.com/_next/image?url=%2Fassests%2Ficons%2Flogo.png&w=256&q=75" alt="Cling Info Tech"></a><ul class="dk" id="dk"></ul><button class="hb" id="hb" aria-label="Open menu" aria-expanded="false" aria-controls="mp"><i></i><i></i><i></i></button></nav></div><div class="mp" id="mp"></div>';
var P={users:'<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.9M16 3.1a4 4 0 0 1 0 7.8"/>',trophy:'<path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6M18 9h1.5a2.5 2.5 0 0 0 0-5H18M4 22h16M10 14.7V17M14 14.7V17M18 2H6v7a6 6 0 0 0 12 0z"/>',cap:'<path d="M22 10 12 5 2 10l10 5zM6 12v5c3 3 9 3 12 0v-5"/>',sl:'<path d="M4 21v-7M4 10V3M12 21v-9M12 8V3M20 21v-5M20 12V3M1 14h6M9 8h6M17 16h6"/>',cpu:'<rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><path d="M9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 14h3M1 9h3M1 14h3"/>',film:'<rect x="2" y="2" width="20" height="20" rx="2"/><path d="M7 2v20M17 2v20M2 12h20M2 7h5M2 17h5M17 17h5M17 7h5"/>',box:'<path d="M21 8 12 3 3 8v8l9 5 9-5zM3.3 7 12 12l8.7-5M12 22V12"/>',globe:'<circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15 15 0 0 1 0 20 15 15 0 0 1 0-20"/>',card:'<rect x="1" y="4" width="22" height="16" rx="2"/><path d="M1 10h22"/>',bag:'<rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>',book:'<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>',clip:'<rect x="8" y="2" width="8" height="4" rx="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/>'};
function ic(n){return '<svg class="ic" viewBox="0 0 24 24" aria-hidden="true">'+P[n]+'</svg>'}
var ROOT=document.body.getAttribute('data-root')||'';
function pg(n){return (ROOT?'':'pages/')+n+'.html'}
var N=[
{t:'Home',h:ROOT+'index.html',k:'top'},
{t:'About Us',k:'about',c:[['Team',pg('team'),'users'],['Achievements',pg('achievements'),'trophy'],['Career',pg('careers'),'cap']]},
{t:'Services',k:'services',c:[['Our Services',pg('services'),'sl'],['AI / ML',pg('ai-ml'),'cpu'],['3D Videos',pg('3d-videos'),'film']]},
{t:'Solutions',k:'solutions',c:[['Our Products',pg('products'),'box'],['Domains We Serve',pg('industries'),'globe'],['Payment Gateways',pg('payment-gateways'),'card']]},
{t:'Resources',k:'resources',c:[['Portfolio',pg('portfolio'),'bag'],['Blog',pg('blog'),'book'],['Case Studies',pg('case-studies'),'clip']]},
{t:'Clients',h:pg('clients'),k:'clients'}];
var CH='<svg class="ch" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" aria-hidden="true"><path d="m6 9 6 6 6-6"/></svg>';
function lk(c){var ext=c[1].indexOf('http')==0;return '<a href="'+c[1]+'"'+(ext?' target="_blank" rel="noopener"':'')+'>'+ic(c[2])+c[0]+'</a>'}
var dk=document.getElementById('dk'),mp=document.getElementById('mp'),hb=document.getElementById('hb');
dk.innerHTML=N.map(function(n){return n.c?'<li data-k="'+n.k+'"><button class="ni" aria-expanded="false" aria-haspopup="true">'+n.t+CH+'</button><div class="dd" role="menu">'+n.c.map(lk).join('')+'</div></li>':'<li data-k="'+n.k+'"><a class="ni" href="'+n.h+'">'+n.t+'</a></li>'}).join('')+'<li><a class="lt" href="'+pg('contact')+'">Let\'s Talk</a></li>';
mp.innerHTML=N.map(function(n){return n.c?'<button class="mi" data-k="'+n.k+'" aria-expanded="false">'+n.t+'<span class="pl">+</span></button><div class="sm">'+n.c.map(lk).join('')+'</div>':'<a class="mi" data-k="'+n.k+'" href="'+n.h+'">'+n.t+'</a>'}).join('')+'<a class="lt" href="'+pg('contact')+'">Let\'s Talk</a>';
// desktop dropdowns: one open at a time
var cur=null,tm;
function close(){if(!cur)return;cur.querySelector('.dd').classList.remove('o');cur.querySelector('.ni').setAttribute('aria-expanded','false');cur=null}
function open(li){if(cur===li)return;close();li.querySelector('.dd').classList.add('o');li.querySelector('.ni').setAttribute('aria-expanded','true');cur=li}
dk.querySelectorAll('li[data-k]').forEach(function(li){if(!li.querySelector('.dd'))return;
li.addEventListener('mouseenter',function(){clearTimeout(tm);if(matchMedia('(hover:hover)').matches)open(li)});
li.addEventListener('mouseleave',function(){clearTimeout(tm);tm=setTimeout(function(){if(cur===li)close()},180)});
li.querySelector('.ni').addEventListener('click',function(e){e.stopPropagation();cur===li?close():open(li)});
li.querySelectorAll('.dd a').forEach(function(a){a.addEventListener('click',close)})});
document.addEventListener('click',function(e){if(cur&&!cur.contains(e.target))close()});
document.addEventListener('keydown',function(e){if(e.key==='Escape'){close();shut()}});
// mobile
function shut(){mp.classList.remove('o');hb.setAttribute('aria-expanded','false');hb.setAttribute('aria-label','Open menu');document.body.classList.remove('lock')}
hb.addEventListener('click',function(){var o=!mp.classList.contains('o');if(o){mp.classList.add('o');document.body.classList.add('lock')}else shut();hb.setAttribute('aria-expanded',o);hb.setAttribute('aria-label',o?'Close menu':'Open menu')});
mp.querySelectorAll('button.mi').forEach(function(b){b.addEventListener('click',function(){var sm=b.nextElementSibling,o=b.getAttribute('aria-expanded')==='true';
mp.querySelectorAll('button.mi').forEach(function(x){x.setAttribute('aria-expanded','false');x.nextElementSibling.style.maxHeight=0});
if(!o){b.setAttribute('aria-expanded','true');sm.style.maxHeight=sm.scrollHeight+'px'}})});
mp.querySelectorAll('a').forEach(function(a){a.addEventListener('click',shut)});
addEventListener('resize',function(){if(innerWidth>960)shut()});
// active state + scroll shadow
var M={top:'top',services:'services',tech:'services',about:'about',team:'about',clients:'clients'};
function act(k){document.querySelectorAll('.dk li[data-k]').forEach(function(l){l.querySelector('.ni').classList.toggle('act',l.dataset.k===k)});mp.querySelectorAll('.mi').forEach(function(m){m.classList.toggle('act',m.dataset.k===k)})}
act(document.body.getAttribute('data-active')||'top');
var so=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting&&M[e.target.id])act(M[e.target.id])})},{rootMargin:'-40% 0px -55% 0px'});
if(document.body.hasAttribute('data-spy'))['top','services','tech','about','clients','team'].forEach(function(id){var el=document.getElementById(id);if(el)so.observe(el)});
addEventListener('scroll',function(){hd.classList.toggle('sc',scrollY>8)},{passive:true});
})();
