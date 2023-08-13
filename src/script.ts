let header: any;
header = document.querySelector('header');
let navitem: any;
navitem = document.querySelectorAll("nav > ul > li a")


let count: number = 0;
const image_url: string[] = [
  // 'back.jpg',
   'back2.jpg',
  //'back3.jpg',
  'back4.jpg',
  // 'back5.jpg',
  'back6.jpg',
  // 'back7.jpg',
];

const menu = document.querySelector("header > .menu_bar")//menu bar

function checkbgcolor(count : number) : void{
  if(count === 0){
   navitem.forEach(a => a.style.color = "rgb(116,79,99)")
   menu.style.background = "rgba(96,125,139,0.49)"
  }else{
   navitem.forEach(a => a.style.color = "black")
   menu.style.background = "none"
  }
}

//function to display menu bar on mobile
const menuitems = document.querySelector("header > .mobile_header")


menu?.addEventListener("click", displayMenu)
function displayMenu() {
  menuitems?.classList.add("display_menu")
}

//function to remove menu bar on mobile
const cancel_menu = document.querySelector("header .cancel_menu")
cancel_menu?.addEventListener("click", removeMenu)
function removeMenu(){
  menuitems?.classList.remove("display_menu")
}

const getdot = document.querySelectorAll(".dot_move > .dot");
const nextDom = document.querySelector('.move > .next');
const prevDom = document.querySelector('.move > .prev');

const next = (): void => {
  if (window.innerWidth >= 350) {
    getdot.forEach(element => {
      element.classList.remove("active")
    });//making all the dot boxes unactive

    if (count < image_url.length - 1) {
      ++count
      header.style.backgroundImage = `url(img/${image_url[count]})`;
      getdot[count].classList.add("active")//making the position of the below dot active when the image is displayed in that position
      checkbgcolor(count);//check the background color
    } else {
      count = 0;
      header.style.backgroundImage = `url(img/${image_url[count]})`;
      getdot[count].classList.add("active")
      checkbgcolor(count);
    }
  } else{
    header.style.backgroundImage = ""
  }

};



const prev = (): void => {
    if (window.innerWidth >= 350){
      getdot.forEach(element => {
        element.classList.remove("active")
      });//making all the dot boxes unactive
        if (count > 0) {
            --count;
            header.style.backgroundImage = `url(img/${image_url[count]})`;
            getdot[count].classList.add("active")
            checkbgcolor(count);
          } else {
            count = image_url.length - 1;
            header.style.backgroundImage = `url(img/${image_url[count]})`;
            getdot[count].classList.add("active")
            checkbgcolor(count);
          }
    }
    else{
      header.style.backgroundImage = ""
    }
};
let inter = setInterval(next, 40000);
window.innerWidth <= 350 ? clearInterval(inter) : null; //stop the interval on smaller screen
prevDom?.addEventListener('click', prev);
nextDom?.addEventListener('click', next);

//screen size

//Load on page scroll
window?.addEventListener('scroll', reveal)

function reveal(): void {
  var reveals: any = document.querySelectorAll('.reveal')

  for (var i:number = 0; i < reveals.length; i++){
    var windowheight = window.innerHeight;
    var revealtop = reveals[i].getBoundingClientRect().top;
    var revealpoint = 150;

    if(revealtop < windowheight - revealpoint)reveals[i].classList.add('active')
    else reveals[i].classList.remove('active');
  }
}


