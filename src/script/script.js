// Troca de Fotos Do Perfil Principal

let trocar = document.querySelector(".foto");
function trocarDefoto() {
  trocar.addEventListener("click", function () {
    trocar.classList.remove("foto");
    trocar.classList.add("foto2");
  });
  function trocarDefoto1() {
    trocar.addEventListener("mouseover", function () {
      trocar.classList.remove("foto2");
      trocar.classList.add("foto");
    });
  }
  trocarDefoto1();
}
trocarDefoto();
