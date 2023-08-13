let menus=[
    {
        id:1,
        title:"KBeauty",
        category:"Digital_marketing",
        price:"$45",
        img:"../img/home_screen_2_crop.png",
        desc:`UI/UX`,

    },
    {
        id:2,
        title:"IpayBTC",
        category:"Advertising",
        price:"$15",
        img:"../img/ipayBTC_SM_13.png",
        desc:`Full Service`,

    },
    {
        id:3,
        title:"MGH Group",
        category:"Design",
        price:"$50",
        img:"../img/MGH_Group_Logo.png",
        desc:`Full Service`,

    },
    {
        id:4,
        title:"Sparkle inc,",
        category:"Design",
        price:"$15",
        img:`../img/Sparkle_Logo.webp`,
        desc:`Media Buying`,

    },
    {
        id:5,
        title:"AGM",
        category:"Digital_marketing",
        price:"$15",
        img:"../img/AGM.jpg",
        desc:`Social Media`,

    },
    {
        id:6,
        title:"Tosin Robeck",
        category:"Design",
        price:"$15",
        img:`../img/Tosin.png`,
        desc:`Design`,

    },
    {
        id:7,
        title:"Dripylux",
        category:"Digital_marketing",
        price:"$15",
        img:`../img/Dripylux.jpg`,
        desc:`Product`,

    },
    {
        id:8,
        title:"NHL Group",
        category:"Advertising",
        price:"$15",
        img:"../img/graphic.jpg",
        desc:`Branding`,

    },
    {
        id:9,
        title:"MGH Healthcare",
        category:"Advertising",
        price:"$15",
        img:"../img/MGH_Healthcare_Logo.jpg",
        desc:`Product`,

    },
    // {
    //     id:10,
    //     title:"cocoa fanta",
    //     category:"dinner",
    //     price:"$15",
    //     img:"./images/221.jpg",
    //     desc:`I'm a baby wholesmilk wolf bitter 
    //             live blue bottle hammock freegon
    //             cooper mug whatever cold pressed`,
    // },
    // {
    //     id:10,
    //     title:"cocoa fanta",
    //     category:"jump",
    //     price:"$15",
    //     img:"./images/221.jpg",
    //     desc:`I'm a baby wholesmilk wolf bitter 
    //             live blue bottle hammock freegon
    //             cooper mug whatever cold pressed`,
    // }
]

const sectionCenter=document.querySelector(".section-container")
const container=document.querySelector(".button-container")



window.addEventListener("DOMContentLoaded", function(item){
    displaymenusItem(menus)
    displaymenusButton()
})

function displaymenusItem(menusItem){
    let displaymenus=menusItem.map(function(item){

        return `<article class="menus-items">
        <img src=${item.img} class="pics" >
        <div class="item-info">
    
            <h4>${item.title}</h4>
        
            <p>${item.desc}
            </p>
        </div>

    </article>`
    })
    displaymenus=displaymenus.join("")
    sectionCenter.innerHTML=displaymenus 
}
 function displaymenusButton(){
    const categories=menus.reduce(function (values, item){
        if (!values.includes(item.category)){
            values.push(item.category)
        }
        return values
    },["all"])
    const categoryBtns=categories.map(function(item){
        return `<div class=filter-btn data-id=${item}>${item}</div>`
    }).join("");
    container.innerHTML=categoryBtns
    console.log(categoryBtns)

    const filterbtn=document.querySelectorAll(".filter-btn")
    filterbtn.forEach(function(btn){
    btn.addEventListener('click', function(e){
        const real=e.currentTarget.dataset.id
        const menusCategory=menus.filter(function(menusItem){
            if (menusItem.category===real){
                return menusItem
            }
        })
        if (real==='all'){
            displaymenusItem(menus)
        }
        else{
             displaymenusItem(menusCategory)
        }
    })

})
}