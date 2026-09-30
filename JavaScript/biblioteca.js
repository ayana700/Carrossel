let título = document.getElementById("título");
let autor  = document.getElementById("autor");
let ano  = document.getElementById("ano");
let genero  = document.getElementById("genero");

let btnCadastrar = document.getElementById("btnCadastrar");
let estante  = document.getElementById("estante");

let buscando = document.getElementById("buscar");

let livros = [];
btnCadastrar.addEventListener("click",cadastrar);
buscando.addEventListener("keyup", pesquisar);

function cadastrar(){
    
    let livros = {
        título: título.value,
        autor: autor.value,
        ano : ano.value,
        genero : genero.value,
    }

    livros.push(livros);
    MostrarLivros();
}

function  MostrarLivros(){
    let saida = "";
    for(let i = 0; i < livros.length; i++){
        saida = saida + `
        <div class = "livros">
       <h3> ${livros[i].título} </h3>
        <p> Autor: ${livros[i].autor}  <p>
        <p> Ano: ${livros[i].ano}  <p>
        <p> Gênero: ${livros[i].genero}  <p>
        </div>
        <br>
        `
    }
    
    estante.innerHTML = saida
}

function pesquisar(){
    let termo = buscando.value.toLowerCase();
    let saida = "";
     for(let i = 0; i < livros.length; i++){
        if(livros[i].titulo.toLowerCase().includes(termo)){
           saida = saida + `
        <div class = "livros">
       <h3> ${livros[i].título} </h3>
        <p> Autor: ${livros[i].autor}  <p>
        <p> Ano: ${livros[i].ano}  <p>
        <p> Gênero: ${livros[i].genero}  <p>
        </div>
        <br>
        `
        }
    }
     estante.innerHTML = saida;
    
}