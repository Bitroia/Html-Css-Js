//selecionar elementos

const root = documentElement;
const btn = document.getElementById("btnTema");
const ano = document.getElementById("ano");

//preenchendo ano atual

ano.textContent = new Date().getFullYear()


//tema light/dark
btn.addEventListener("click", () => {
    const escuro = root.getAttribute("data-tema") === 'escuro'

    if(escuro){
        root.removeAtri
    } else{

    }
})