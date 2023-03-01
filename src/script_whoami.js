function showContent() {
    document.querySelector("header").style.marginBottom= "250px"
    document.querySelector("main").style.display = "block"
    document.querySelector("nav").style.display = "block"
    document.querySelector("main").scrollIntoView({ behavior: 'smooth', block: 'start'})
}
function showLifeStyle() {
    document.querySelector(".training").style.display = "none"
    document.querySelector(".lifestyle").style.display = "block"
    document.querySelector("footer").style.display = "block"
    document.querySelector(".lifestyle").scrollIntoView({ behavior: 'smooth', block: 'start'})
}

function showTraining() {
    document.querySelector(".training").style.display = "block"
    document.querySelector(".lifestyle").style.display = "none"
    document.querySelector("footer").style.display = "block"
    document.querySelector(".training").scrollIntoView({ behavior: 'smooth', block: 'start'})
}
