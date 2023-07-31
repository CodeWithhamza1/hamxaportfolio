gsap.from("#heroimage", {
    x: 1900,
    scrollTrigger: {
        trigger:"#heroimage"
    },
    duration: 1
})

gsap.from("#detailss", {
    x: -1900,
    scrollTrigger: {
        trigger:"#detailss"
    },
    duration: 1
})
