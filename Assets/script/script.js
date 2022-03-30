function scrollTrigger(selector, options = {}) {
    let els = document.querySelectorAll(selector)
    els = Array.from(els)
    els.forEach(el => {
        addObserver(el, options)
    })
}

function addObserver(el, options) {
    if (!('IntersectionObserver' in window)) {
        if (options.cb) {
            options.cb(el)
        } else {
            entry.target.classList.add('active')
        }
        return
    }
    let observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                if (options.cb) {
                    options.cb(el)
                } else {
                    entry.target.classList.add('active')
                }
                observer.unobserve(entry.target)
            }
        })
    }, options)
    observer.observe(el)
}


scrollTrigger('.intersections');





//Paralax

const parallax = document.querySelectorAll('.parralax');
const scrolled = scrollY;
let movement;

window.addEventListener('scroll', function () {
    parallax.forEach(i => {
        i.style.transform = `translateY(${scrollY * -.09}%)`
        console.log((scrollY * -.01))
    })

});
