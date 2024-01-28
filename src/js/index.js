/*

Objetivo 1 - quando o usuario clicar em cima do botão de seleção de plataformas deve abrir uma caixa com os botões de seleção de plataformas 

       Passo 1 - pegar o botão de seleção de plataformas no JS para poder verificar quando o usuário clicar em cima dele

       Passo 2 - pegar o elemento do conteudo que precisa ser mostrado

       Passo 3 = pegar o click do usuário no js

       Passo 4 - quando o usuário clicar, adicionar a classe ativo na listagem de plataformas dentro do botão pra que o conteudo apareça

Objetivo 2 - xaso a lista de botões de plataformas já esteja aparecendo e o usuario clicar em cima do botão. o contéudo deve ser escondido
       Passo 1 - verificar se o botão já está aberto, se sim, devemos remover a classe pra que ele esconda o conteudo novamente

*/


const botao = document.querySelector(".btn-plataforma");
const elementoPlataformas = document.querySelector(".btn-plataforma .plataformas");

botao.addEventListener("click", () => {
    elementoPlataformas.classList.toggle("ativo");
});
