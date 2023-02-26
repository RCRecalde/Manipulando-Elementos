const main = document.querySelector('main')
const h2 = document.querySelector('.subtitulo')
const a = document.querySelector('a')
const p = document.querySelectorAll('p')
const body = document.querySelector("body")

let nombre = prompt("Ingrese su nombre")

nombre ? h2.innerText += (' ' + nombre) : h2.innerText += ' invitado'

h2.style.textTransform = "uppercase";

a.style.color = "#E51B3E";

let confirmar = confirm("¿Deseas colocar un fondo de pantalla?")

if(confirmar){   
    body.classList.add("fondo")
}

for (let i = 0; i < p.length; i++) {
    i % 2 == 0 ? p[i].classList.add("destacadoPar") :  p[i].classList.add("destacadoImpar")
}

main.style.display = "block"