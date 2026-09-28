/* Contact form: validation, then opens the visitor's email app (no backend). */
(function(){
var f=document.getElementById('f');if(!f)return;
var m=document.getElementById('msg');
f.addEventListener('submit',function(e){e.preventDefault();
if(!/\S+@\S+\.\S+/.test(f.email.value)){m.textContent='Enter a valid email address so we can reply.';f.email.focus();return}
if(!f.message.value.trim()){m.textContent='Add a short message about your project.';f.message.focus();return}
location.href='mailto:info@clinginfotech.com?subject='+encodeURIComponent('Project enquiry from '+(f.name.value||'website'))+'&body='+encodeURIComponent('Name: '+f.name.value+'\nPhone: '+f.phone.value+'\nCompany: '+f.company.value+'\nEmail: '+f.email.value+'\n\n'+f.message.value);
m.textContent='Opening your email app. If nothing opens, write to info@clinginfotech.com.'});
})();
