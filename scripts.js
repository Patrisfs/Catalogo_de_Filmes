//add selectorAll para otimizar
//deixar responsivo


//váriaveis
const movie1 = document.querySelector("#movie1");
const movie2 = document.querySelector("#movie2");
const movie3 = document.querySelector("#movie3");
const movie4 = document.querySelector("#movie4");
const movie5 = document.querySelector("#movie5");
const movie6 = document.querySelector("#movie6");
const movie7 = document.querySelector("#movie7");
const movie8 = document.querySelector("#movie8");
const movie9 = document.querySelector("#movie9");

const movies = document.querySelectorAll("#movieBox");

//funções
function imgFocus(a){
    a.classList.toggle("hide");
}

//Eventos

li1.addEventListener("mouseover", (e)=>{
    imgFocus(movie1);

});
li1.addEventListener("mouseout", (e)=>{
    imgFocus(movie1);
});


li2.addEventListener("mouseover", (e)=>{
    imgFocus(movie2);

});
li2.addEventListener("mouseout", (e)=>{
    imgFocus(movie2);
});


li3.addEventListener("mouseover", (e)=>{
    imgFocus(movie3);

});
li3.addEventListener("mouseout", (e)=>{
    imgFocus(movie3);
});


li4.addEventListener("mouseover", (e)=>{
    imgFocus(movie4);

});
li4.addEventListener("mouseout", (e)=>{
    imgFocus(movie4);
});


li5.addEventListener("mouseover", (e)=>{
    imgFocus(movie5);

});
li5.addEventListener("mouseout", (e)=>{
    imgFocus(movie5);
});


li6.addEventListener("mouseover", (e)=>{
    imgFocus(movie6);

});
li6.addEventListener("mouseout", (e)=>{
    imgFocus(movie6);
});


li7.addEventListener("mouseover", (e)=>{
    imgFocus(movie7);

});
li7.addEventListener("mouseout", (e)=>{
    imgFocus(movie7);
});


li8.addEventListener("mouseover", (e)=>{
    imgFocus(movie8);

});
li8.addEventListener("mouseout", (e)=>{
    imgFocus(movie8);
});
