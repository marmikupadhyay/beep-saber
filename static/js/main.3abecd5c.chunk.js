(this["webpackJsonpbeep-saber"]=this["webpackJsonpbeep-saber"]||[]).push([[0],{49:function(e,n,o){},83:function(e,n,o){"use strict";o.r(n);var t=o(21),i=o(41),r=o.n(i),a=(o(49),o(42)),d=o(5),c=o(43),s=o(44),l=o(23);var p=function(){var e,n,o,i,r,p=new d.c,u={};Object(t.useEffect)((function(){var e=Object(s.io)("https://192.168.1.10:5000/",{withCredentials:!0,extraHeaders:{"my-custom-header":"abcd"}});e.on("connect",(function(){console.log(e.id)})),e.on("coords",(function(e){console.log("Moved");var n=e[1].x,o=e[1].y;n=1.5-3*n,o=3-3*o;var t={left:u.left.position,right:u.right.position};console.log(e[0]),t[e[0]?"left":"right"].x=n,t[e[0]?"left":"right"].y=o,h(t.left,t.right)}))}),[]);var w=function(e){setInterval((function(){r.add(function(e){var n=new d.j(e,new d.k({color:16777215*Math.random()}));return n.userData.velocity=new d.p,n.userData.objectType="obstacle",n.position.x=3*Math.random()-1.5,n.position.y=3*Math.random(),n.position.z=-6,n.userData.velocity.z=.05,n}(e))}),1e3)},h=function(e,n){for(var o=["x","y","z"],t=0;t<3;t++)u.left.position[o[t]]=e[o[t]];for(var i=0;i<3;i++)u.right.position[o[i]]=n[o[i]]};function v(){n.aspect=window.innerWidth/window.innerHeight,n.updateProjectionMatrix(),i.setSize(window.innerWidth,window.innerHeight)}function f(){var e=60*p.getDelta();!function(){for(var e=0;e<r.children.length;e++)if("obstacle"===r.children[e].userData.objectType){var n=r.children[e];for(var o in u){var t=void 0;null!==n.geometry.boundingSphere&&null!==u[o].geometry.boundingSphere&&(t=Math.pow(n.geometry.boundingSphere.radius,2)+Math.pow(u[o].geometry.boundingSphere.radius,2)),n.position.distanceToSquared(u[o].position)<t&&(console.log("collision"),r.remove(n))}}}();for(var t=0;t<r.children.length;t++){var a=r.children[t];"obstacle"===a.userData.objectType&&(a.userData.velocity.multiplyScalar(1-.001*e),a.position.add(a.userData.velocity),(a.position.z<-7.5||a.position.z>7.5)&&r.remove(a))}i.render(o,n)}return e=document.createElement("div"),document.body.appendChild(e),(o=new d.n).background=new d.d(5263440),(n=new d.l(50,window.innerWidth/window.innerHeight,.1,10)).position.set(0,1.6,3),o.add(n),function(){r=new d.i(new c.a(3,3,15,6,6,15).translate(0,1.5,0),new d.h({color:8421504})),o.add(r),o.add(new d.g(6316128,4210752));var e=new d.e(16777215);e.position.set(1,1,1).normalize(),o.add(e)}(),w(new d.a(.15,.15,.15)),function(){for(var e=["left","right"],n=0;n<2;n++){var o=new d.j(new d.o(.2,16,8),new d.k({color:16777215*Math.random()}));o.position.x=0,o.position.y=1.5,o.position.z=-1,o.userData.objectType="killerBall",r.add(o),u[e[n]]=o}}(),new d.m,(i=new d.q({antialias:!0})).setPixelRatio(window.devicePixelRatio),i.setSize(window.innerWidth,window.innerHeight),i.outputEncoding=d.r,i.xr.enabled=!0,e.appendChild(i.domElement),window.addEventListener("resize",v),document.body.appendChild(a.a.createButton(i)),i.setAnimationLoop(f),Object(l.jsx)("div",{className:"App"})};r.a.render(Object(l.jsx)(p,{}),document.getElementById("root"))}},[[83,1,2]]]);
//# sourceMappingURL=main.3abecd5c.chunk.js.map