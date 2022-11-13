let botao = document.querySelector("button")

const botaoComTextoNormal = "Botão"
const botaoComTextoAlterado =  "Botão Neon"

botao.addEventListener("mouseenter", ()=> {
    botao.innerHTML = botaoComTextoAlterado

   
    
})

botao.addEventListener("mouseout", ()=> {
    botao.innerHTML =  botaoComTextoNormal
        
})