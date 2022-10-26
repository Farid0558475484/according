const myBtn = document.querySelectorAll(".accordion-header");
const myContents = document.querySelectorAll(".accordion-body");

myBtn.forEach((btn)=>{
btn.addEventListener("click",(e)=>{

    myContents.forEach((accordion)=>{
        if (e.target.nextElementSibling !== accordion && accordion.classList.contains ("active")) {
            accordion.classList.remove("active")
            myBtn.forEach((btn)=> btn.classList.remove("active"));
        }
    })
     
    const platform = btn.nextElementSibling;

    platform.classList.toggle("active");

    btn.classList.toggle("active");
})
});

window.onclick = (e)=>{
    if(!e.target.matches(".accordion-header")){
        myBtn.forEach((btn)=> btn.classList.remove("active"));
        myContents.forEach((accordion)=> accordion.classList.remove("active"));
    }
}