const toggle = document.querySelector('#toggle');

toggle.addEventListener('click',()=>{
    var nav = document.querySelector('.nav-links');

    nav.classList.toggle('show')
    console.log("click emy");
} )


