//váriaveis
const img1 = document.querySelector("#img1");
const firstMovie = document.querySelector("#firstMovie")

//funções
function imgFocus(){
   firstMovie.classList.toggle("hide");
}
//Eventos
img1.addEventListener("mouseover", (e)=>{
    imgFocus();

});
img1.addEventListener("mouseout", (e)=>{
    imgFocus();
});