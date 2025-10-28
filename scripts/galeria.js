const img = document.querySelectorAll('.size_img')
const janela = document.querySelector('.janela')
const janela_img = document.querySelector('#img_janela')
const btn = document.querySelector('#btn_close')
let endere = ""

if (!janela || !janela_img || !btn) {
    console.error('Elementos não encontrados')
    return
}

for(let i=0 ; i < img.length ; i++){
    img[i].addEventListener('click', () => {
       endere = img[i].getAttribute("src")
       janela_img.setAttribute('src', endere)
       janela.classList.toggle('janela_ativa')
    })
}
btn.addEventListener('click', () => {
    //janela.classList.toggle('janela_ativa')
})