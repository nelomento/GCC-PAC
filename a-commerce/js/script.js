/*const bar = document.getElementById('bar');
const nav = document.getElementById('navbar');
const close = document.getElementById('close')

if (bar){
    bar.addEventListener('click', ()=> {
        nav.classList.add('active');
    })
}

if (close){
    close.addEventListener('click', ()=> {
        nav.classList.add('active');
    })
}*/
const normalButton = document.querySelector(".normalButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", ()=> {
    payment.style.display = "flex";
});

close.addEventListener("click", ()=>{
    payment.style.display = "none";
});