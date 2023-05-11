
window.addEventListener('scroll',function(){
    const header = this.document.querySelector('header');
    header.classList.toggle("sticky", window.scrollY > 0);
    const about = this.document.querySelector('.about');
    
});

function toggleMenu(){
    const menuToggle = document.querySelector(".menuToggle");
    const navigation = document.querySelector(".navigation");
    menuToggle.classList.toggle('active');
    navigation.classList.toggle('active');
}


var s = skrollr.init();

let starter = document.getElementById("but");
window.addEventListener('scroll', function(){
    let value = window.scrollY;
    starter.style.marginRight = value * 0.0+ 'px';
})

function someAnimation(){
    if(window.scrollY > window.innerHeight/2){
        let val = window.scrollY;
        let piz = document.getElementById('pizza');
        piz.style.marginRight = val * 2.5 + 'px';
    }
}
window.addEventListener('scroll',someAnimation);



  const press = document.getElementById("button");
  const pop = document.getElementById("popup");
  press.addEventListener('click', function(){
    pop.style.transform = "translate(50px,50px)";
})
const clickx = document.getElementById("closebtn");
clickx.addEventListener('click', function(){
    pop.style.transform = "translate(1950px,50px)";
})
