//Captura o botão "proximo"
let btnProximo = document.getElementById("proximo");
//Captura o botão "anterior"
let btnAnterior = document.getElementById("anterior");
//Captura o quadro onde a fotografia é exibida 
let quadroimagem = document.getElementById("quadroimagem");
//Criar o album e guarda as fotos
let album = [
    "https://picsum.photos/id/1015/1200/600",
    "https://picsum.photos/id/1025/1200/600",
    "https://picsum.photos/id/1043/1200/600"
]
//Quando o botão proximo for clicado,
// excutará a função mostrarproximo
btnProximo.addEventListener("click", mostrarProximo);
btnAnterior.addEventListener("click", mostrarAnterior);
 
//Definie posição inicial da fotografia do album
let foto = 0;

//Função responsável por mostrar a proxima fotografia 
function  mostrarProximo(){
    //Avancça uma posição do album 
    foto = foto + 1;
    //Verificar se passou a ultima fotografia 
    if(foto >= album.length){
        //Volta a posição inicial
        foto = 0;
    }
    quadroimagem.src = album[foto];

}  

function mostrarAnterior(){
    foto = foto - 1;
    if(foto < 0){
        foto = album.length - 1;
    }
    quadroimagem.src = album[foto];
}