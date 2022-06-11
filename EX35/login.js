function verificarLogin(){
    if(getcookie("email") != null){
        window.location.href
    }
}

function camposPreenchidos(form){
    erEmail=/^[\w!#$%&'*+\/=?`{|} --]+(\.[\w!#$%&'*+\/=?^`{|} --] +) * (([\w-]+\.) + [A-Za-z] {2,6} | \[\d{1,3}(\.\d{1,3}){3}\])$/;

    if(form.email.value ==""|| !form.email.value.match(erEmail)){
        alert("Preencha o campo EMAIL corretamente");
        return false;
    }

    if (form.senha.value != "JavaScript"){
        alert("Preencha o campo SENHA corretamente");
        return false;
    }

    if(form.conectado.checked){
        setCookie("email", form.email.value,10);
    }

    return true;
}
