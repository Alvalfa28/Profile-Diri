let bar = document.getElementById("bar")
let nav = document.getElementById("nv")

bar.addEventListener("click", function(){
    nav.classList.toggle("active")
})

const toTop = document.querySelector(".to-top");

window.addEventListener("scroll", () =>{
    if (window.pageYOffset > 500){
        toTop.classList.add("active");
    } else {
        toTop.classList.remove("active");
    }

})

//set animation
let section = document.querySelectorAll("section")

window.onscroll = () =>{
    section.forEach(sec =>{
        let top = window.scrollY;
        let offset = sec.offsetTop;
        let height = sec.offsetHeight;

        if(top >= offset && top < offset - 600 + height +300){
            sec.classList.add("show-animate")
        }
    })
}