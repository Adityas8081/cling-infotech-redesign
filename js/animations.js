/* Hero network animation (canvas). Static when reduced motion is on. */
(function(){var rm=matchMedia('(prefers-reduced-motion:reduce)').matches;var c=document.getElementById('net');if(!c)return;var x=c.getContext('2d'),P=[],W,H;
function rs(){W=c.width=c.offsetWidth;H=c.height=c.offsetHeight}rs();addEventListener('resize',rs);
var N=W<600?28:55;for(var i=0;i<N;i++)P.push({x:Math.random()*W,y:Math.random()*H,vx:(Math.random()-.5)*.35,vy:(Math.random()-.5)*.35});
function d(){x.clearRect(0,0,W,H);P.forEach(function(p,i){if(!rm){p.x+=p.vx;p.y+=p.vy;if(p.x<0||p.x>W)p.vx*=-1;if(p.y<0||p.y>H)p.vy*=-1}
x.fillStyle='rgba(34,211,238,.8)';x.beginPath();x.arc(p.x,p.y,2,0,7);x.fill();
for(var j=i+1;j<P.length;j++){var q=P[j],dx=p.x-q.x,dy=p.y-q.y,ds=dx*dx+dy*dy;if(ds<19000){x.strokeStyle='rgba(59,108,255,'+(.35*(1-ds/19000))+')';x.beginPath();x.moveTo(p.x,p.y);x.lineTo(q.x,q.y);x.stroke()}}});
if(!rm)requestAnimationFrame(d)}d()})();
