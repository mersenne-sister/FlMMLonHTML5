"use strict";var FlMMLPlayer=function(t,i){function e(t,i){for(var e in i)t[e]=i[e];return t}function s(t,i,e){t.addEventListener(i,e)}function o(t,i){t.appendChild(i)}function n(t){return t.cloneNode()}function l(t){return i.createElementNS("http://www.w3.org/2000/svg",t)}function h(t,i,e){t.setAttributeNS(null,i,e)}function a(t,i){for(var e in i)t.setAttributeNS(null,e,i[e])}function r(){for(var t=arguments.length;t--;)arguments[t].style.display="inline"}function u(){for(var t=arguments.length;t--;)arguments[t].style.display="none"}function c(t){1&t.buttons&&t.preventDefault()}function m(t){var e=this.no=y.length,r=this.hue=null==t.hue?200:t.hue;this.volume=null==t.volume?100:t.volume,this.logVolume=!!t.logVolume,this.workerURL=t.workerURL,t.mmlURL&&""!==t.mmlURL?(this.mmlURL=t.mmlURL,this.mmlStatus=f):(this.mml=t.mml,this.mmlStatus=g);var u=this.svg=l("svg");a(u,{id:"FlMMLPlayer"+e,viewBox:"0 0 600 100"}),u.style.height=t.height||"1.5em",s(u,"mousedown",c),s(u,"mousemove",c);var m=i.createElement("style");m.setAttribute("type","text/css"),o(m,i.createTextNode("svg#FlMMLPlayer"+e+" .button:active{fill:url(#gradBtnPushed"+e+");}svg#FlMMLPlayer"+e+" .button:hover{stroke:hsl("+r+",100%,75%)}svg#FlMMLPlayer"+e+" text{text-anchor:middle;pointer-events:none}")),o(u,m);var p=l("defs"),d=l("filter"),v=l("feGaussianBlur"),x=l("feMerge"),S=l("feMergeNode"),P=l("feMergeNode");a(d,{id:"filterGlow"+e,x:"-150%",y:"-100%",width:"600%",height:"400%"}),a(v,{"in":"SourceGraphic",stdDeviation:8,result:"blur"}),h(S,"in","blur"),h(P,"in","SourceGraphic"),o(x,S),o(x,P),o(d,v),o(d,x),o(p,d);var V=l("linearGradient"),D=l("linearGradient"),w=l("stop"),M=l("stop");a(V,{id:"gradBtn"+e,x1:"0%",y1:"0%",x2:"0%",y2:"100%"}),a(w,{offset:0,"stop-color":"hsl("+r+",30%,98%)"}),a(M,{offset:1,"stop-color":"hsl("+r+",30%,83%)"}),o(V,w),o(V,M),a(D,{id:"gradBtnPushed"+e,x1:"0%",y1:"0%",x2:"0%",y2:"100%"}),M=n(M),w=n(w),h(M,"offset",0),h(w,"offset",1),o(D,M),o(D,w),o(p,V),o(p,D);var b=l("linearGradient"),C=l("stop"),T=l("stop");a(b,{id:"gradDisp"+e,x1:"0%",y1:"0%",x2:"0%",y2:"100%"}),a(C,{offset:0,"stop-color":"hsl("+r+",100%,2%)"}),a(T,{offset:1,"stop-color":"hsl("+r+",100%,30%)"}),o(b,C),o(b,T),o(p,b),o(u,p);var L=this.gPlayFirst=l("g");s(L,"click",this.playFirst.bind(this));var F=this.rectBtn=l("rect");a(F,{x:5,y:5,width:90,height:90,rx:6,ry:6,fill:"url(#gradBtn"+e+")",stroke:"hsl("+r+",15%,50%)","stroke-width":4,"class":"button"});var B=n(F);h(B,"width",590),o(L,B);var k=this.pathPlay=l("path");a(k,{fill:"hsl(120,100%,35%)",d:"M22,22v56l56,-28z",filter:"url(#filterGlow"+e+")","pointer-events":"none"});var G=n(k);h(G,"transform","translate(115,0)");var N=l("text");if(a(N,{x:345,y:72,"font-family":"'Verdana'","font-size":62,textLength:280}),o(N,i.createTextNode("Play MML")),o(L,N),o(L,G),o(u,L),!t.underground){var R=i.getElementsByTagName("script"),U=R.item(R.length-1).parentNode;o(U,u)}this.hasPlayedOnce=!1,this.isChangingVol=!1,this.hasReplacedFonts=!1,y.push(this)}var g=1,f=2,p=3,d=4,v=5,y=[];return e(m.prototype,{setMasterVolume:function(t){var i;if(null==t?t=this.volume:this.volume=t,this.logVolume){var e=40,s=1/e;i=(Math.pow(e,t/127-1)-s)/(1-s)*127}else i=t;this.hasPlayedOnce&&this.flmml.setMasterVolume(i)},replaceFonts:function(){this.hasPlayedOnce&&!this.hasReplacedFonts&&m.hasLoadedFonts&&(a(this.textDisplay,{y:45,"font-family":"'Press Start 2P'","font-weight":"normal","font-size":33}),this.hasReplacedFonts=!0)},getSVGPos:function(t,i){var e=this.svg.createSVGPoint();e.x=t,e.y=i;var s=e.matrixTransform(this.svg.getScreenCTM().inverse());return s},changeStatus:function(t,e){for(var s,n=this.textDisplay;s=n.lastChild;)n.removeChild(s);o(n,i.createTextNode(t)),e&&h(n,"textLength",e)},showVolume:function(){for(var t=(0|this.volume)+"";t.length<3;)t=" "+t;this.changeStatus("Volume:"+t,289),this.isDispVol=!0,clearTimeout(this.tIDDispVol),this.tIDDispVol=setTimeout(this.onDispVolTimer.bind(this),2e3)},changeVolume:function(t){var i;230>t?i=0:t>=230&&570>t?i=(t-230)/340*127:t>=570&&(i=127),this.flmml&&(this.setMasterVolume(i),this.showVolume()),225>t&&(t=225),t>575&&(t=575),h(this.circleVolume,"cx",t)},onReadyStateChange:function(t){this.xhr.readyState===XMLHttpRequest.DONE&&(200===this.xhr.status?(this.changeStatus("Compiling...",347),r(this.gStop),u(this.gStopD),this.mml=this.xhr.responseText,this.mmlStatus=d,this.flmml.play(this.mml),clearTimeout(this.tIDDispVol)):(this.changeStatus("Failure.",232),this.flmml.release(),this.flmml=null,this.mmlStatus=v))},playFirst:function(){var i=this.flmml=new FlMMLonHTML5(this.workerURL);this.setMasterVolume(),s(i,"compilecomplete",this.onCompileComplete.bind(this)),s(i,"buffering",this.onBuffering.bind(this)),s(i,"complete",this.onComplete.bind(this)),s(i,"syncinfo",this.onSyncInfo.bind(this));var e=this.svg,c=this.no,m=this.hue,d=this.gPlay=l("g"),v=this.gPlayD=l("g"),y=this.gPause=l("g"),x=this.gStop=l("g"),S=this.gDisplay=l("g"),P=this.gVolume=l("g");s(d,"click",this.playPause.bind(this)),s(y,"click",this.playPause.bind(this)),h(x,"transform","translate(100,0)"),s(x,"click",this.stop.bind(this));var V=this.gStopD=n(x),D=this.rectBtn;o(d,n(D)),o(y,n(D)),o(x,n(D));var w=n(D);a(w,{stroke:"hsl("+m+",15%,75%)","class":""}),o(v,n(w)),o(V,n(w));var M=this.pathPlay;o(d,M);var b=n(M);a(b,{fill:"gray",opacity:.5}),o(v,b);var C=l("rect");a(C,{x:26,y:22,width:17,height:56,fill:"hsl(210,100%,50%)",filter:"url(#filterGlow"+c+")","pointer-events":"none"});var T=n(C);h(T,"x",57),o(y,C),o(y,T);var L=l("rect");a(L,{x:23,y:23,width:54,height:54,fill:"hsl(15,100%,50%)",filter:"url(#filterGlow"+c+")","pointer-events":"none"}),o(x,L);var F=n(L);a(F,{fill:"gray",opacity:.5}),o(V,F);var B=l("rect");a(B,{x:203,y:5,width:394,height:44,rx:6,ry:6,fill:"url(#gradDisp"+c+")",stroke:"hsl("+m+",100%,30%)","stroke-width":4,"pointer-events":"none"}),o(S,B);var k=this.textDisplay=l("text");a(k,{x:401,y:43,fill:"white","font-family":"'Courier New',Courier',monospace","font-weight":"bold","font-size":50}),o(S,k);var G=l("rect");a(G,{x:205,y:70,width:390,height:12,rx:4,ry:4,fill:"url(#gradBtnPushed"+c+")",stroke:"hsl("+m+",15%,75%)","stroke-width":4}),o(P,G);var N=this.circleVolume=l("circle");if(a(N,{cx:498,cy:76,r:22,fill:"url(#gradBtn"+c+")",stroke:"hsl("+m+",15%,50%)","stroke-width":4,"class":"button"}),h(N,"cx",this.volume/127*340+230|0),o(P,N),u(d,y,x,V),this.mmlStatus===g)this.changeStatus("Compiling...",347),r(x),i.play(this.mml);else if(this.mmlStatus===f){var R=this.xhr=new XMLHttpRequest;s(R,"readystatechange",this.onReadyStateChange.bind(this)),R.open("GET",this.mmlURL),R.send(null),this.mmlStatus=p,this.changeStatus("Loading...",289),r(V)}e.removeChild(this.gPlayFirst),o(e,d),o(e,v),o(e,y),o(e,x),o(e,V),o(e,S),o(e,P),s(e,"mousedown",this.onMouseDown.bind(this)),s(t,"mousemove",this.onMouseMove.bind(this)),s(t,"mouseup",this.onMouseUp.bind(this)),s(e,"touchstart",this.onTouchStart.bind(this)),s(t,"touchmove",this.onTouchMove.bind(this)),s(t,"touchend",this.onMouseUp.bind(this)),this.hasPlayedOnce=!0,this.replaceFonts()},playPause:function(){this.flmml.isPlaying()?(r(this.gPlay),u(this.gPause),this.flmml.pause()):(r(this.gPause,this.gStop),u(this.gPlay,this.gStopD),this.flmml.isPaused()||(this.isCompiling=!0,this.changeStatus("Compiling...",347)),this.flmml.play(this.mml)),clearTimeout(this.tIDDispVol),this.onDispVolTimer()},stop:function(){r(this.gPlay,this.gStopD),u(this.gPause,this.gStop),this.flmml.stop(),clearTimeout(this.tIDDispVol),this.onDispVolTimer()},onMouseDown:function(t){if(1&t.buttons&&this.hasPlayedOnce){var i=this.getSVGPos(t.clientX,t.clientY);i.x>=205&&i.x<595&&i.y>=50&&i.y<100&&(this.changeVolume(i.x),this.isChangingVol=!0)}},onMouseMove:function(t){if(1&t.buttons&&this.isChangingVol){var i=this.getSVGPos(t.clientX,t.clientY);this.changeVolume(i.x),t.preventDefault()}},onMouseUp:function(t){this.isChangingVol=!1},onTouchStart:function(t){if(this.hasPlayedOnce){var i=t.touches[0],e=this.getSVGPos(i.clientX,i.clientY);e.x>=205&&e.x<595&&e.y>=50&&e.y<100&&(this.changeVolume(e.x),this.isChangingVol=!0)}},onTouchMove:function(t){if(this.isChangingVol){var i=t.touches[0],e=this.getSVGPos(i.clientX,i.clientY);this.changeVolume(e.x),t.preventDefault()}},onCompileComplete:function(){r(this.gPause),u(this.gPlayD),this.isCompiling=!1},onBuffering:function(t){100===t.progress?(this.isBuffering=!1,clearTimeout(this.tIDDispVol),this.onDispVolTimer()):this.isDispVol||(this.changeStatus("Buffering:"+(t.progress<10?" ":"")+t.progress+"%",377),this.isBuffering=!0)},onComplete:function(){r(this.gPlay,this.gStopD),u(this.gPause,this.gStop),clearTimeout(this.tIDDispVol),this.onDispVolTimer()},onSyncInfo:function(){this.isDispVol||this.isCompiling||this.isBuffering||this.changeStatus(this.flmml.getNowTimeStr()+"/"+this.flmml.getTotalTimeStr(),318)},onDispVolTimer:function(){this.isDispVol=!1,this.isCompiling?this.changeStatus("Compiling...",347):this.isBuffering||this.onSyncInfo()},getElement:function(){return this.svg}}),m.onActiveFonts=function(){m.hasLoadedFonts=!0;for(var t=y.length;t--;)y[t].replaceFonts.call(y[t])},m.hasLoadedFonts=!1,m}(window,document),WebFontConfig={google:{families:["Press+Start+2P::latin"]},active:FlMMLPlayer.onActiveFonts};!function(t){var i=t.createElement("script");i.src=("https:"===t.location.protocol?"https":"http")+"://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js",i.type="text/javascript",i.async="true";var e=t.getElementsByTagName("script").item(0);e.parentNode.insertBefore(i,e)}(document);