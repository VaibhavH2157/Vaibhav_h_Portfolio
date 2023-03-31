const projects = [
    { name: "todo",
     image: "https://images.unsplash.com/photo-1618209076877-3b577b275eef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHJhbXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
     url: "https://www.google.com",
     desc: "lorem"
    
    },

    { 
     name: "tic tac toe",
     image: "https://images.unsplash.com/photo-1618209076877-3b577b275eef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHJhbXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
     url: "https://www.google.com",
     desc: "lorem"
    
    },

    { name: "money manager",
     image: "https://images.unsplash.com/photo-1618209076877-3b577b275eef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHJhbXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
     url: "https://www.google.com",
     desc: "lorem"
    
    },
    { name: "Kale clinic",
     image: "https://images.unsplash.com/photo-1618209076877-3b577b275eef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHJhbXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
     url: "https://www.google.com",
     desc: "lorem"
    
    }
]

let str = ""
for (const item of projects) {
    str +=`<div class="card">
    <img src="${item.image}" alt="">
    <div class="card-body">
    <h1>${item.name}</h1>
    <p>${item.desc}</p>
    <a href="${item.url}">visit here</a>
    </div>
</div>`
    
}

document.getElementById("projects").innerHTML = str

gsap.registerPlugin(ScrollTrigger)
gsap.from(".card",{
    scrollTrigger:{
        trigger:".card",
        scrub: 1,
        end: "+=200"
    } ,

    scale:0,
    rotation:360,
   
    stagger: 0.5
})