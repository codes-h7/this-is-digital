gsap.from("#img1",{
    delay:0.4,
    opacity:0,
    duration:1,
    y:60
    
})
gsap.from("#img2",{
    delay:0.4,
    duration:1,
    x:400,
    opacity:0,
})
gsap.from("#img3",{
    delay:0.4,
    duration:1,
    opacity:0,
    y:-60
})
gsap.from(".main h1",{
    opacity:0,
    duration:1, 
    delay:0.4,
})

 
// gsap.from(".page1 h1",{
//     opacity:0,
//     duration:1,
//     delay:0.4,
//     y:60
// })
  gsap.from(".page1 h5 , .about-us , .page1 h1 ",{
    opacity:0,
    stagger:0.4, 
    scrollTrigger:{
        trigger:".page1 h5  ",
        scroller:"body",
        start:"top 50%",
       
    }
}) 
gsap.from(" .img-girl  ",{
    opacity:0,
    duration:1,
    y:100,
    scrollTrigger:{
trigger:" .img-girl ",
scroller:"body",
start:"top 99%",
// markers:true
    }
})
gsap.from(" .img-light  ",{
    opacity:0,
    duration:1,
    y:100,
    scrollTrigger:{
trigger:" .img-light ",
scroller:"body",
start:"top 99%",
// markers:true
    }
})
gsap.from(".performer",
    {
        opacity:0,
        duration:1,
        y:100,
        scrollTrigger:{
            trigger:".performer",
            scroller:"body",
            start:"top 50%",
            // markers:true
        }
    }
)
gsap.from(".brands , .brand-2-1 , .brand-2-2 , .brand-2-3 , .brand-2-4 , .brand-2-5 ",{
    opacity:0,
    y:100,
    scrollTrigger:{
        stagger:0.4,
        start:"top 80%",
        trigger:".brands , .brand-2-1 , .brand-2-2 , .brand-2-3 , .brand-2-4 , .brand-2-5",
        // markers:true

    }
})
// End code

