let carouselCont =document.querySelector('.coverage .main3')
console.log(carouselCont);
let all = [
   
    "./Partner _ Meta_files/a.png",
    "./Partner _ Meta_files/5e930eccc0e4bbfa1b8a58d4_IAB-UK-Logo.png",
    "./Partner _ Meta_files/5e996a6685ef98aeb475aba4_Logo_horizontal_blackandred.svg",
    "./Partner _ Meta_files/5e6213e6b81ddc3f75131107_BBC Logo.png",
    "./Partner _ Meta_files/5e6213e77b1e838411d34f65_Omnicom media logo.png",
    "./Partner _ Meta_files/5e6213e8dbb4cf8319751cdc_Shelter Logo.png",
    "./Partner _ Meta_files/5e6213e9b81ddc458213110e_Superdry logo.png",
    "./Partner _ Meta_files/5e6213e77b1e838411d34f65_Omnicom media logo.png",
    "./Partner _ Meta_files/a.png",
    // "./Partner _ Meta_files/5e930eccc0e4bbfa1b8a58d4_IAB-UK-Logo.png",
    // "./Partner _ Meta_files/5e6213e6b81ddc3f75131107_BBC Logo.png",
    // "./Partner _ Meta_files/5e6213e8dbb4cf8319751cdc_Shelter Logo.png",
    // "./Partner _ Meta_files/a.png",

];

document.addEventListener("DOMContentLoaded", () => {
    render()
});
function render(refresh=false, animClass='slideInRight'){
    if(refresh)carouselCont.innerHTML="";
    all.map(item=>{
    return  carouselCont.innerHTML +=`<div class="main2_wrapper ${animClass}">
        <div class="image_wrapper"><img class="image" src="${item}" alt=""></div>
        
        </div>`
    }).join('');
    console.log(item.image)

}
let slideShow = setInterval(moveLeft,500);
function moveLeft(){
    let off = all.shift();
    all.push(off)
    render(true);
}
render();

function moveRight(){
    let off = all.pop();
    all.unshift(off)
    render(true,'slideInLeft');
}


function playSlideshow(){
    return slideShow =  setInterval(moveLeft,500);
   }

// let belly = [
//     [
//         {
//         id:1,
//         title:"Student Records Management System",
        
//     },
//     {
//         id:2,
//         title:"Student Rec Management System",
        
//     },
//     {
//         id:3,
//         title:"Student hj System",
       
//     }
// ],
//     [
//         {
//         id:4,
//         title:"Student Records Management ",
       
//     },
//     {
//         id:5,
//         title:" Records Management System",
      
//     },
//     {
//         id:6,
//         title:"Student  System",
       
//     }
// ],
//     [
//         {
//         id:7,
//         title:"Management System",
       
//     },
//     {
//         id:8,
//         title:"Student Records ",
      
//     },
//     {
//         id:9,
//         title:"Student ",
      
//     }
// ]
// ]

// let line = document.querySelectorAll('.line');//select all the lines
// const prod = document.getElementById("services");
// let productItemWidth;
// let currentLine = 0;
// let lineNum;
// let start = false;
// let serviceLines = new DocumentFragment;


// function myFunction(x) {
//     if (x.matches) { 
//         //IF THE MEDIA MATCHES, GO WITH THE NORMAL WIDTH
//         productItemWidth = prod.querySelector(".service-con").clientWidth - 10;
//         lineNum = Math.round(item.length);
        
//     } else {
//         //ELSE ON LARGER SCREEN, SCROLL IN THREES, HENCE, MULTIPLY THE WIDTH BY THREE
//         productItemWidth = prod.querySelector(".service-con").clientWidth * 3;
//         lineNum = Math.round(item.length / 3);
//     }
// }


// function click (){
//     start = true;
//     let off = belly.shift();
//     console.log(off);
//    belly.push(off);
//     code(belly);
//     const productContainer = prod.querySelector(".services");
//     productContainer.scrollBy({ left: productItemWidth, behavior: "smooth" });
// //   console.log(line.length);
//     for(i = 0; i < line.length; i++){
    
//             line[i].nextSibling.remove('active');
//             // line[i].nextSibling.add('active');
//             line[i].nextSibling.remove('.selected');
            
        
//         console.log(line[i]);
        
//     }
//     return
    
// }

// let service_container = document.querySelector('.services-container'); 

// function code (belly){
//     start = true;
//     if(start === true){

//         // service_container.innerHTML = ""
//         for(let i=0; i < belly.length ; i++){
//             let legt = belly[i].length;
//             for( let j=0; j<legt; j++){
//             service_container.innerHTML += `<div class="service-con con-down">
//             <p class="service-num">${belly[i][j].id}</p>
//             <h2 class="service-head">${belly[i][j].title}</h2>
//             <p class="content">${belly[i][j].text}</p>
//             <button class="more-btn dflex j-btw a-center">Learn more <i class="fas fa-arrow-right"></i></button>
//             </div>`   
//             }
//         }

        
//     } 
// }

// code(belly);

// const item = prod.querySelectorAll(".service-con");
// let lastBox = item.length -1;


// const left=document.querySelector(".arr-bck");
// const right=document.querySelector(".arr-fwd");



// left.addEventListener("click", ()=>{
//     console.log("click");
//     const productContainer = prod.querySelector(".services");
//     productContainer.scrollBy({ left: -productItemWidth, behavior: "smooth" });
    
// });
// right.addEventListener("click", ()=>{
//     if (currentLine > lineNum - 1) {
//         currentLine = 0;
        
//     }
   
//     click()

// });


// let e = setInterval( ()=>{
//     click()
// }, 3000)

// // service_container.addEventListener('mouseover', function(){
// //     clearInterval(e)
// // })
// // service_container.addEventListener('mouseout', function(){
// //     setInterval(click,3000)  
// // })

// var x = window.matchMedia("(max-width: 700px)");
//         myFunction(x);
//         //ATTACH THE LISTENER FUNCTION ON CHANGE OF MEDIA
//         x.addEventListener("DOMContentLoaded", myFunction);

// lind()
