const input = document.getElementById("input")
const result = document.getElementById("result")

const regex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@!#$%^&*()_+{}|:"<>?\\\/]).{8,}$/

function returnResult(){
    const senha = input.value.trim();
    console.log(senha)

    if(senha === ""){
        console.log("O Campo está vazio")
        return
    }

    if(!regex.test(senha)){
        result.innerHTML = "A senha precisa ter, pelo menos, uma letra maiúscula, uma letra minúscula, um número e um caractere especial"
        
        return
    }

    return result.innerHTML = "Senha validada com sucesso"
}