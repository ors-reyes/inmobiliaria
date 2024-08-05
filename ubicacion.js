function displayUbi(entries){
    let entry = entries[0]
    if(entry.isIntersecting){
        ubi.classList.add("block")
    }
}
let observerUbi = new IntersectionObserver(displayUbi,
{
   threshold:0.75
})
let svgUbi = document.querySelector(".svgUbi")
let ubi = document.querySelector("#ubi")
observerUbi.observe(svgUbi)