// gsap.to('.logo', {duration: 2, x:200})

let logoElement = document.querySelector(`img.logo`);
let h1Element = document.querySelector('h1')

// gsap.to([h1Element, logoElement ], {duration: 2, x:200})

// gsap.to('.logo', {duration: 2, x: 200, rotate: 70})

// h1Element.addEventListener('click', function (){
//     gsap.to(logoElement, {
//         duration: 2, 
//         x: '+=200px', 
//         rotateX: '70deg', 
//         rotateY: '70deg',
//         // ease: 'back',
//         // delay: 5,
//         // repeat: -1,
//         // yoyo: true,
//         onStart: function () {
//             console.log(`start`)
//         },
//         onComplete: function() {
//             console.log(`complete`)
//         },
//         onUpdate: function () {
//             console.log(`moving`)
//         }
//     })
// })

let specs = {
    ram: 0,
}

gsap.to( specs, {
    duration: 10,
    ram: 32,
    onUpdate: function() {
        h1Element.textContent = specs.ram
    } 
})


// gsap.from('.stagger-me', {
//    stagger: {
//        each: 0.1,
//        from: 'edges'
    
//    },
//    duration: 1.5,
//    scale: 0,
//    y: 100,
//    ease: 'back' 
// })


// gsap.to('.logo', {
//     duration: 2, 
//     x: '200%', 
//     rotateX: '70deg', 
//     rotateY: '70deg'
// })

// gsap.to('h1', { 
//     duration: 2, 
//     color: 'red', 
//     backgroundColor: 'blue', 
//     fontSize: '3rem',
//     border: '20px dashed orange',
//     autoAlpha: 0 
// })

// gsap.from('h1', {
//     duration: 2,
//     opacity: 0,
//     y: 20,

// })

// gsap.fromTo('h1', { 
//     fontSize: 20,
//     color: 'red'
//     }, 
//     {
//     duration: 5,
//     fontSize: 160,
//     color: 'purple'
//     }
// )