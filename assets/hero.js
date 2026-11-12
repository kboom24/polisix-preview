/* Polisix hero: swoosh sweep, X slash, glow pulse, idle sheen, streaks along the logo arc, pointer parallax.
   No libraries. Transforms/opacity for DOM layers, one 2D canvas for streaks. Reduced motion = static final frame. */
(function(){
  var hero=document.getElementById('hero'); if(!hero) return;
  var EXT=[[-449.2,527.2],[-439.7,522.8],[-430.2,518.4],[-420.7,514.0],[-411.2,509.6],[-401.7,505.2],[-392.2,500.9],[-382.7,496.5],[-373.2,492.1],[-363.7,487.7],[-354.2,483.3],[-344.7,478.9],[-335.2,474.6],[-325.7,470.2],[-316.2,465.8],[-306.7,461.4],[-297.2,457.0],[-287.8,452.7],[-278.3,448.3],[-268.8,443.9],[-259.3,439.5],[-249.8,435.1],[-240.3,430.7],[-230.8,426.4],[-221.3,422.0],[-211.8,417.6],[-202.3,413.2],[-192.8,408.8],[-183.3,404.5],[-173.8,400.1],[-164.3,395.7],[-154.8,391.3],[-145.3,386.9],[-135.8,382.5],[-126.3,378.2],[-116.8,373.8],[-107.4,369.4],[-97.9,365.0],[-88.4,360.6],[-78.9,356.2],[-69.4,351.9],[-59.9,347.5],[-50.4,343.1],[-40.9,338.7],[-31.4,334.3],[-21.9,330.0],[-12.4,325.6],[-2.9,321.2],[6.6,316.8],[16.1,312.4],[25.6,308.0],[35.1,303.7],[44.6,299.3],[54.1,294.9],[63.6,290.5],[73.0,286.1],[82.5,281.8],[92.0,277.4],[101.5,273.0],[111.0,268.6],[120.5,264.2],[130.0,259.8],[139.5,255.5],[149.0,251.1],[158.5,246.7],[168.0,242.3],[177.5,237.9],[187.0,233.5],[196.5,229.2],[206.0,224.8],[215.5,220.4],[225.0,216.0],[234.5,211.6],[243.9,207.3],[253.4,202.9],[262.9,198.5],[272.4,194.1],[281.9,189.7],[291.4,185.3],[300.9,181.0],[310.4,176.6],[319.9,172.2],[329.4,167.8],[338.9,163.4],[348.4,159.1],[357.9,154.7],[367.4,150.3],[376.9,145.9],[386.4,141.5],[395.8,137.1],[405.3,132.7],[414.8,128.3],[424.4,124.1],[434.0,120.1],[443.8,116.2],[453.5,112.4],[463.3,108.8],[473.1,105.2],[483.0,101.8],[492.9,98.4],[502.8,95.0],[512.7,91.7],[522.7,88.4],[532.6,85.3],[542.6,82.2],[552.7,79.3],[562.8,76.6],[572.9,73.9],[583.0,71.2],[593.1,68.5],[603.2,65.9],[613.4,63.5],[623.6,61.3],[633.9,59.4],[644.2,57.6],[654.5,55.9],[664.8,54.1],[675.1,52.3],[685.4,50.5],[695.7,48.7],[706.0,47.0],[716.4,45.4],[726.7,43.8],[737.1,42.4],[747.4,41.1],[757.8,40.1],[768.3,39.1],[778.7,38.1],[789.1,37.1],[799.5,35.9],[809.9,34.9],[820.3,34.0],[830.7,33.3],[841.2,32.8],[851.6,32.4],[862.1,31.9],[872.5,31.3],[882.9,30.6],[893.4,30.2],[903.8,30.0],[914.3,30.1],[924.8,30.4],[935.2,30.8],[945.7,31.2],[956.1,31.6],[966.5,32.1],[977.0,32.8],[987.4,33.6],[997.8,34.5],[1008.2,35.6],[1018.6,36.8],[1029.0,38.2],[1039.3,39.6],[1049.7,41.2],[1060.0,43.0],[1070.2,45.0],[1080.5,47.1],[1090.6,49.6],[1100.8,52.2],[1110.9,54.9],[1121.0,57.5],[1131.1,60.3],[1141.1,63.3],[1151.0,66.6],[1160.8,70.3],[1170.2,74.8],[1179.4,79.9],[1188.2,85.5],[1196.5,91.9],[1204.0,99.1],[1210.5,107.3],[1215.9,116.2],[1220.3,125.7],[1222.8,135.8],[1222.5,146.3],[1220.6,156.5],[1217.4,166.5],[1213.2,176.0],[1207.8,185.0],[1201.6,193.4],[1194.8,201.4],[1187.8,209.1],[1180.5,216.6],[1172.9,223.8],[1165.2,230.8],[1157.4,237.8],[1149.6,244.8],[1141.8,251.8],[1133.9,258.7],[1126.1,265.5],[1118.2,272.5],[1110.4,279.4],[1102.5,286.3],[1094.7,293.2],[1086.9,300.1],[1079.0,307.0],[1071.2,314.0],[1063.3,320.9],[1055.5,327.8],[1047.6,334.7],[1039.8,341.6],[1032.0,348.6],[1024.1,355.5],[1016.3,362.4],[1008.4,369.2],[1000.4,376.0],[992.6,382.9],[984.9,390.1],[977.7,397.7],[971.0,405.7],[964.1,413.6],[957.2,421.4],[950.3,429.2],[943.4,437.1],[936.4,444.9],[929.5,452.7],[922.6,460.6],[915.7,468.4],[908.7,476.2],[901.8,484.1],[894.9,491.9],[887.9,499.7],[881.0,507.5],[874.1,515.4],[867.2,523.2],[860.2,531.0],[853.3,538.9],[846.4,546.7],[839.4,554.5],[832.5,562.4],[825.6,570.2],[818.7,578.0],[811.7,585.9],[804.8,593.7],[797.9,601.5],[790.9,609.4],[784.0,617.2],[777.1,625.0],[770.2,632.9],[763.2,640.7]], ARC=[[368.0,150.0],[377.9,145.4],[387.8,140.7],[397.7,136.1],[407.6,131.6],[417.5,127.1],[427.6,122.8],[437.7,118.6],[447.8,114.6],[458.0,110.7],[468.3,107.0],[478.6,103.3],[488.9,99.8],[499.2,96.3],[509.6,92.8],[519.9,89.3],[530.3,86.0],[540.8,82.8],[551.3,79.7],[561.8,76.8],[572.3,74.0],[582.9,71.2],[593.5,68.5],[604.0,65.7],[614.6,63.2],[625.3,60.9],[636.1,59.0],[646.8,57.2],[657.6,55.4],[668.4,53.5],[679.1,51.6],[689.9,49.7],[700.6,47.9],[711.4,46.2],[722.2,44.5],[733.0,42.9],[743.8,41.5],[754.7,40.4],[765.6,39.4],[776.4,38.3],[787.3,37.2],[798.1,36.1],[809.0,35.0],[819.9,34.0],[830.8,33.3],[841.7,32.8],[852.6,32.3],[863.5,31.8],[874.4,31.2],[885.3,30.5],[896.2,30.1],[907.1,30.0],[918.0,30.2],[929.0,30.6],[939.9,31.0],[950.8,31.4],[961.7,31.9],[972.6,32.5],[983.5,33.3],[994.3,34.2],[1005.2,35.3],[1016.1,36.5],[1026.9,37.9],[1037.7,39.4],[1048.5,41.0],[1059.3,42.9],[1070.0,44.9],[1080.7,47.2],[1091.3,49.7],[1101.8,52.5],[1112.4,55.3],[1123.0,58.1],[1133.5,61.0],[1143.9,64.2],[1154.2,67.7],[1164.3,71.9],[1174.1,76.8],[1183.5,82.4],[1192.4,88.7],[1200.7,95.7],[1208.0,103.8],[1214.1,112.9],[1219.0,122.6],[1222.4,133.0],[1222.8,143.9],[1221.1,154.6],[1218.0,165.1],[1213.6,175.1],[1208.1,184.5],[1201.7,193.3],[1194.6,201.6],[1187.3,209.7],[1179.6,217.5],[1171.6,225.0],[1163.5,232.3],[1155.4,239.6],[1147.3,246.9],[1139.1,254.1],[1130.9,261.3],[1122.7,268.5],[1114.5,275.7],[1106.3,283.0],[1098.1,290.2],[1089.9,297.4],[1081.8,304.6],[1073.6,311.8],[1065.4,319.1],[1057.2,326.3],[1049.0,333.5],[1040.8,340.7],[1032.6,348.0],[1024.5,355.2],[1016.3,362.4],[1008.0,369.5],[999.7,376.6],[991.5,383.9],[983.6,391.4],[976.2,399.4],[969.0,407.6],[962.0,416.0]];
  var reduce=window.matchMedia&&matchMedia('(prefers-reduced-motion: reduce)').matches;
  var cv=hero.querySelector('.hb-streaks'), ctx=cv.getContext('2d');
  var hx=hero.querySelector('.hx'), par=hero.querySelector('.hx-par'), grid=hero.querySelector('.hb-grid-par'), sweep=hero.querySelector('.hb-sweep-par');
  var W=0,H=0,dpr=1,lanes=[],arcS=[],parts=[],dust=[],t0=performance.now(),running=false,visible=true,manual=false;
  var mx=0,my=0,tx=0,ty=0;
  function rnd(i){var x=Math.sin(i*127.1+311.7)*43758.5453;return x-Math.floor(x);}
  function ease(t){ /* cubic-bezier(.65,0,.2,1) approx, matches CSS sweep */
    t=Math.max(0,Math.min(1,t)); var lo=0,hi=1,x,u;
    for(var k=0;k<22;k++){u=(lo+hi)/2;x=3*(1-u)*(1-u)*u*.65+3*(1-u)*u*u*.2+u*u*u; if(x<t)lo=u;else hi=u;}
    u=(lo+hi)/2; return 3*(1-u)*u*u+u*u*u; }
  function map(p,s,ox,oy){return [ox+p[0]*s, oy+p[1]*s];}
  function build(){
    var r=hero.getBoundingClientRect(); W=r.width; H=r.height; dpr=Math.min(window.devicePixelRatio||1,1.5);
    cv.width=Math.round(W*dpr); cv.height=Math.round(H*dpr); cv.style.width=W+'px'; cv.style.height=H+'px';
    var s=hx.offsetWidth/1284, ox=hx.offsetLeft, oy=hx.offsetTop;
    var base=EXT.map(function(p){return map(p,s,ox,oy);});
    var offs=W<760?[-90,-55,-25,25,55,90]:[-230,-170,-120,-80,-45,-15,15,45,80,120,170,230];
    lanes=offs.map(function(o){
      var pts=[]; for(var i=0;i<base.length;i++){
        var a=base[Math.max(i-1,0)], b=base[Math.min(i+1,base.length-1)], dx=b[0]-a[0], dy=b[1]-a[1], n=Math.hypot(dx,dy)||1;
        pts.push([base[i][0]-dy/n*o, base[i][1]+dx/n*o]); }
      return {pts:pts,f:1-Math.min(Math.abs(o)/260,0.85)}; });
    arcS=ARC.map(function(p){return map(p,s,ox,oy);});
    var N=W<760?44:120; parts=[];
    for(var i=0;i<N;i++) parts.push({l:Math.floor(rnd(i)*lanes.length),ph:rnd(i+.3),v:.05+rnd(i+.7)*.11,len:.035+rnd(i+1.1)*.09,w:.9+rnd(i+1.9)*2.1,c:rnd(i+2.3)});
    dust=[]; var D=W<760?24:60; for(i=0;i<D;i++) dust.push({x:rnd(i+5.1),y:rnd(i+6.2),r:.6+rnd(i+7.3)*1.4,v:.004+rnd(i+8.4)*.01,tw:rnd(i+9.5)*6});
  }
  function at(pts,s){var f=s*(pts.length-1),i=Math.floor(f),k=f-i,a=pts[Math.min(i,pts.length-1)],b=pts[Math.min(i+1,pts.length-1)];return [a[0]+(b[0]-a[0])*k,a[1]+(b[1]-a[1])*k];}
  function draw(t){
    ctx.setTransform(dpr,0,0,dpr,0,0); ctx.clearRect(0,0,W,H); ctx.globalCompositeOperation='lighter';
    var intro=Math.max(0,Math.min(1,(t-500)/1300));
    // dust
    for(var i=0;i<dust.length;i++){var d=dust[i],x=((d.x+t/1000*d.v)%1)*W,y=((d.y-t/1000*d.v*.6)%1+1)%1*H,a=(.18+.22*Math.sin(t/900+d.tw))*intro;
      ctx.fillStyle='rgba(143,216,255,'+Math.max(a,0).toFixed(3)+')'; ctx.beginPath(); ctx.arc(x,y,d.r,0,6.283); ctx.fill();}
    // streaks flowing along the arc
    ctx.lineCap='round';
    for(i=0;i<parts.length;i++){var p=parts[i],ln=lanes[p.l]; if(!ln) continue;
      var head=(p.ph+t/1000*p.v)%1, env=Math.sin(Math.PI*head), al=1.0*env*ln.f*intro; if(al<.01) continue;
      var col=p.c<.5?'0,214,253':(p.c<.85?'61,139,255':'255,255,255'), seg=6;
      for(var j=0;j<seg;j++){var s0=head-p.len*(1-j/seg), s1=head-p.len*(1-(j+1)/seg); if(s1<0) continue; s0=Math.max(s0,0);
        var A=at(ln.pts,s0),B=at(ln.pts,s1); ctx.strokeStyle='rgba('+col+','+(al*(j+1)/seg).toFixed(3)+')'; ctx.lineWidth=p.w*(.5+j/seg);
        ctx.beginPath(); ctx.moveTo(A[0],A[1]); ctx.lineTo(B[0],B[1]); ctx.stroke();}}
    // comet head riding the swoosh as it sweeps in
    if(t>250&&t<1650){var q=ease((t-250)/1150), fade=t>1400?1-(t-1400)/250:1, P=at(arcS,q);
      for(j=0;j<14;j++){var qs=Math.max(0,q-.012*j), Q=at(arcS,qs); ctx.fillStyle='rgba(0,214,253,'+(.22*fade*(1-j/14)).toFixed(3)+')'; ctx.beginPath(); ctx.arc(Q[0],Q[1],10*(1-j/18),0,6.283); ctx.fill();}
      var g=ctx.createRadialGradient(P[0],P[1],0,P[0],P[1],70); g.addColorStop(0,'rgba(255,255,255,'+(.95*fade)+')'); g.addColorStop(.15,'rgba(0,214,253,'+(.7*fade)+')'); g.addColorStop(1,'rgba(0,100,229,0)');
      ctx.fillStyle=g; ctx.beginPath(); ctx.arc(P[0],P[1],70,0,6.283); ctx.fill();}
    ctx.globalCompositeOperation='source-over';
  }
  function parallax(){ tx+=(mx-tx)*.08; ty+=(my-ty)*.08;
    if(par) par.style.transform='translate3d('+(-tx*22).toFixed(2)+'px,'+(-ty*14).toFixed(2)+'px,0)';
    if(grid) grid.style.transform='translate3d('+(tx*10).toFixed(2)+'px,'+(ty*8).toFixed(2)+'px,0)';
    if(sweep) sweep.style.transform='translate3d('+(-tx*34).toFixed(2)+'px,'+(-ty*20).toFixed(2)+'px,0)';
    cv.style.transform='translate3d('+(-tx*8).toFixed(2)+'px,'+(-ty*6).toFixed(2)+'px,0)'; }
  var fc=0,fstart=0,lite=false;
  function loop(now){ if(!running||manual) return; draw(now-t0); parallax();
    if(!lite){ if(fc===0) fstart=now; fc++; if(fc===90){ if((now-fstart)/89>20){ lite=true; hero.classList.add('lite'); parts=parts.filter(function(_,i){return i%2===0;}); } else fc=-1e9; } }
    requestAnimationFrame(loop); }
  function start(){ if(running||reduce||manual) return; running=true; requestAnimationFrame(loop); }
  function stop(){ running=false; }
  build();
  if(reduce){ draw(6000); }
  else{
    window.addEventListener('resize',function(){build();});
    if(window.matchMedia('(pointer:fine)').matches) hero.addEventListener('pointermove',function(e){var r=hero.getBoundingClientRect(); mx=(e.clientX-r.left)/r.width*2-1; my=(e.clientY-r.top)/r.height*2-1;});
    hero.addEventListener('pointerleave',function(){mx=0;my=0;});
    if('IntersectionObserver' in window) new IntersectionObserver(function(es){visible=es[0].isIntersecting; visible&&!document.hidden?start():stop();}).observe(hero);
    document.addEventListener('visibilitychange',function(){!document.hidden&&visible?start():stop();});
    start();
  }
  /* deterministic seek for frame capture (design review only) */
  window.pxHero={seek:function(ms,px,py){manual=true; running=false;
    hero.getAnimations({subtree:true}).forEach(function(a){a.pause(); a.currentTime=ms;});
    mx=tx=px||0; my=ty=py||0; parallax(); draw(ms);}};
})();
