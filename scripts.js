//váriaveis
const firstLi = document.querySelector("#firstLi");
const firstMovie = document.querySelector("#firstMovie")

//funções
function imgFocus(){
   firstMovie.classList.toggle("hide");
}
//Eventos
firstLi.addEventListener("mouseover", (e)=>{
    imgFocus();

});
firstLi.addEventListener("mouseout", (e)=>{
    imgFocus();
});


//deixar responsivo
//add selectorAll para otimizar
