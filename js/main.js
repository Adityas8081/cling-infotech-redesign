/* Shared footer and floating WhatsApp button, injected on every page. */
(function(){
var ROOT=document.body.getAttribute('data-root')||'';
function pg(n){return (ROOT?'':'pages/')+n+'.html'}
var el=document.getElementById('site-footer');if(!el)return;
el.innerHTML='<footer><div class="w"><div>Cling Info Tech Works Private Limited · © Cling Info Tech</div><div>'
+'<a href="'+pg('privacy-policy')+'">Privacy</a><a href="'+pg('cancellation-refund-policy')+'">Refund policy</a><a href="'+pg('terms-and-conditions')+'">Terms</a>'
+'<a href="https://www.instagram.com/clinginfotechworks/" target="_blank" rel="noopener">Instagram</a><a href="https://www.linkedin.com/company/cling-multi-solutions-pvt-ltd/" target="_blank" rel="noopener">LinkedIn</a></div></div></footer>'
+'<a class="wa" href="https://api.whatsapp.com/send?phone=8264469132&text=Hey%20I%20am%20trying%20to%20connect%20with%20you" target="_blank" rel="noopener">WhatsApp us</a>';
})();
