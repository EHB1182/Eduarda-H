

function validaCampos(){

    let usuario = document.getElementById("usuario").value;
    let senha = document.getElementById("senha").value;

    alert(usuario);

    if(usuario != "juca" && senha !="123"){
        alert("Usuario ou senha inválidos")
    }else{
        alert("Seja bem-vindo(a)")
    }
}