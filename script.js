const glass = document.querySelectorAll('.glass');
const remaining = document.getElementsByClassName('remaining');
console.log(remaining)


remaining.innerText = "remaining of todays goal";
glass.forEach(g =>{
    g.addEventListener('click', ()=>{
        g.classList.toggle('glass-filled')

        
    })

    
})