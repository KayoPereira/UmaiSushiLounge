let imagens= document.querySelectorAll('.small_img');
let modal = document.querySelector('.modal');
let modalImg = document.querySelector('#modal_img');
let btClose = document.querySelector('#bt_close');
let srcVal="";

for(let i =0; i<imagens.length;i++){
    imagens[i].addEventListener('click',function(){
        
        srcVal = imagens[i].getAttribute('src');
        modalImg.setAttribute('src', srcVal);
        modal.classList.toggle('modal_active');
    });
    
}


btClose.addEventListener('click', function(){
    modal.classList.toggle('modal_active');
});

function mostra(id) {
    // if (document.getElementById(id).style.display == "block"){
    document.getElementById(id).style.display = "none";
// }else { document.getElementById(id).style.display == "block"; }
}