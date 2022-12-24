// inportações do HTML
let labeEmail = document.getElementById("labelEmail");
let labelPassword = document.getElementById("labelPassword");
let input = document.getElementsByClassName("input");
let button = document.getElementById("button");


//Estados Inputs
function state1(obj){
    obj.style.transform = "translateY(2rem)";
    obj.style.color = "var(--color5)";
}

function state2(obj){
    obj.style.transform = "translateY(0)";
    obj.style.color = "var(--color4)";
}

//Estados Botão
function stateButton1(obj) {
    obj.style.boxShadow = "0 0 0.5rem var(--color4)";
}

function stateButton2(obj) {
    obj.style.boxShadow = "none";
}


//Verificação ao carregar a página
if (email.value != '') {
    state2(labeEmail);
}

if (password.value != '') {
    state2(labelPassword);
}


//Eventos
for (let i of input) {
    //AO CLICAR
    i.addEventListener('click', (event) => {
        if (event.target.id == "email") {
            state2(labeEmail);
        } else {
            state2(labelPassword);
        }
    });
    //AO DAR FOCO NO INPUT
    i.addEventListener('focusin', (event) => {
        if (event.target.id == "email") {
            state2(labeEmail);
        } else {
            state2(labelPassword);
        }
    });
    //AO RETIRAR FOCO NO INPUT
    i.addEventListener('focusout', (event) => {
        if (event.target.id == "email") {
            if (email.value == '') {
                state1(labeEmail);
            } else {
                state2(labeEmail);
            }
        } else {
            if (password.value == '') {
                state1(labelPassword);
            } else {
                state2(labelPassword);
            }
        }
    })
}

//AO DAR FOCO NO BOTÃO
button.addEventListener('focusin', (event)=> {
    stateButton1(event.target.parentNode);
});
//AO RETIRAR FOCO NO BOTÃO
button.addEventListener('focusout', (event)=> {
    stateButton2(event.target.parentNode)
})