function section1(){
    var tl = gsap.timeline();
    tl.from("nav h1, nav h4, nav button",{
        y:-10,
        opacity:0,
        delay:1,
        duration:0.5,
        ease: "none",
        stagger:0.2
    })
    tl.from(".center-part1 h1",{
        x:-300,
        opacity:0,
        duration:0.5
    },"elem")
    tl.from(".center-part1 p",{
        x:-100,
        opacity:0,
        duration:0.5
    },"anim")
    tl.from(".center-part1 button",{
        x:-100,
        opacity:0,
        duration:1
    },"anim")
    tl.from(".center img",{
        // x:300,
        opacity:0,
        scale:0.5,
        duration:1,
        delay:0.3
    },"elem")
    tl.from(".sectionBottom img",{
        opacity:0,
        y:20,
        stagger:0.3,
        duration:0.5,
        scrollTrigger:{
            scrub:2,
            trigger:".sectionBottom img",
            // markers:true,
            start: "top 80%",
            end:"top 40%"
        }    
    },"-=0.5")
}
section1();

var t2 = gsap.timeline({
    scrollTrigger:{
        trigger:".section2",
        scroller:"body",
        // markers:true,
        start:"top 65%",
        scrub:2,
        end:"top 0"
    }
});
t2.from(".services",{
    y:30,
    opacity:0,
    duration:0.5,
})
t2.from("#part1",{
    opacity:0,
    x:-100
},"a")
t2.from("#part2",{
    opacity:0,
    x:100
},"a")
t2.from("#part3",{
    opacity:0,
    x:-100
},"b")
t2.from("#part4",{
    opacity:0,
    x:100
},"b")
