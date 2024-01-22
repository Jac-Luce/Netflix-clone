let items = document.querySelectorAll('#recipeCarousel1 .carousel .carousel-item')

items.forEach((el) => {
    const minPerSlide = 6
    let next = el.nextElementSibling
    for (let i=1; i<minPerSlide; i++) {
        if (!next) {
            next = items[0]
        }
        let cloneChild = next.cloneNode(true)
        el.appendChild(cloneChild.children[0])
        next = next.nextElementSibling
    }
})

let secondCarousel = document.querySelectorAll('#recipeCarousel2 .carousel .carousel-item')

secondCarousel.forEach((el) => {
    const minSlide = 6
    let next = el.nextElementSibling
    for (let i = 1; i<minSlide; i++) {
        if (!next) {
            next = secondCarousel[0]
        }
        let clone = next.cloneNode(true)
        el.appendChild(clone.children[0])
        next = next.nextElementSibling
    }
})

let thirdCarousel = document.querySelectorAll('#recipeCarousel3 .carousel .carousel-item')

thirdCarousel.forEach((el) => {
    const minSlide = 6
    let next = el.nextElementSibling
    for (let i = 1; i<minSlide; i++) {
        if (!next) {
            next = thirdCarousel[0]
        }
        let clone = next.cloneNode(true)
        el.appendChild(clone.children[0])
        next = next.nextElementSibling
    }
})