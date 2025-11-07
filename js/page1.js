const menu=document.getElementById("menu")
const course=[
    {
        img:"https://bairesdev.mo.cloudinary.net/blog/2023/06/What-is-Java.jpg?tx=w_1920,q_auto",
        title:"",
        price:10.00,

    },
     {
        img:"https://bairesdev.mo.cloudinary.net/blog/2023/06/What-is-Java.jpg?tx=w_1920,q_auto",
        title:"",
        price:10.00,

    },
     {
        img:"https://bairesdev.mo.cloudinary.net/blog/2023/06/What-is-Java.jpg?tx=w_1920,q_auto",
        title:"",
        price:10.00,

    },
     {
        img:"https://bairesdev.mo.cloudinary.net/blog/2023/06/What-is-Java.jpg?tx=w_1920,q_auto",
        title:"",
        price:10.00,

    },
     {
        img:"https://bairesdev.mo.cloudinary.net/blog/2023/06/What-is-Java.jpg?tx=w_1920,q_auto",
        title:"",
        price:10.00,

    },
     {
        img:"https://bairesdev.mo.cloudinary.net/blog/2023/06/What-is-Java.jpg?tx=w_1920,q_auto",
        title:"",
        price:10.00,

    }
]
course.forEach((e)=>{
    menu.innerHTML+=` <div class="bg-emerald-100 col-span-1 h-[400px] rounded-xl shadow-xl">
                <img class="p-4 h-[300px] " src="${e.img}" alt="">
            </div>`
})