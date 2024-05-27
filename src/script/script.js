let trocar=document.querySelector('.foto')
function trocarDefoto(){
        trocar.addEventListener('click',function(){
                trocar.classList.remove('foto')
                trocar.classList.add('foto2')
        })
}
trocarDefoto()