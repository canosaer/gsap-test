let logoIMG=document.querySelector("img.logo"),tl=gsap.timeline({repeat:-1,repeatDelay:1});tl.to(logoIMG,{y:150,x:300,duration:1,ease:"power2.in"}),tl.to(logoIMG,{y:0,x:600,duration:1,ease:"power2.out"}),tl.to(logoIMG,{opacity:0,duration:1});
//# sourceMappingURL=main.js.map