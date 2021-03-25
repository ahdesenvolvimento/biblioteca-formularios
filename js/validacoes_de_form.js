


    /*
    const cpf = document.getElementsByName('cpf');
    const rg = document.getElementsByName('rg');
    const email = document.getElementsByName('email');
    const gmail = document.getElementsByName('gmail');
    const telefone = document.getElementsByName('telefone');
    const senha = document.getElementsByName('senha');
    const data = document.getElementsByName('data');
    const hora = document.getElementsByName('hora');
    */

const cpf = document.getElementById('cpf');
if (cpf != null){
    cpf.addEventListener('keypress', validacao_cpf);
    cpf.addEventListener('keypress', function(){
        if (cpf.value.length == 3){
            cpf.value += '.';
        }
        if (cpf.value.length == 7){
            cpf.value += '.';
        }
        if (cpf.value.length == 11){
            cpf.value += '-';
        }
    });
}

const rg = document.getElementById('rg');
if (rg != null){
    rg.addEventListener('keypress', validacao_rg)
    rg.addEventListener('keypress', function(){
        if (rg.value.length == 1){
            rg.value += '.';
        }
        if (rg.value.length == 5){
            rg.value += '.';
        }
    });
}

const telefone = document.getElementById('telefone');
if (telefone != null){
    telefone.addEventListener('keypress', validar_telefone);
    telefone.addEventListener('keypress', function(){
        if (telefone.value.length == 0){
            telefone.value += '(';
        }
        if (telefone.value.length == 3){
            telefone.value += ')';
        }
        if (telefone.value.length == 9){
            telefone.value += '-';
        }
    });
}

const cpf_msg = document.getElementById('cpf_message')


//email.addEventListener('input', validacao_email);

function validacao_cpf(e){
    if (permitir_apenas_numeros()){
        return true;
    }else {
        return false;
    }
    
    /*
    if (cpf.nodeValue.length == 11){
        e.preventDefault();
    }
    */
}

function validacao_rg(e){
    if (permitir_apenas_numeros()){
        return true;
    }else {
        return false;
    }
    /*
    if (rg.nodeValue.length == 8){
        e.preventDefault();
    }
    */
} 
function validacao_email(e){
    /*MINIMO 3 CARACTERES MAXIMO 64*/
    if (email.value[0].charCodeAt(0) < 65 || email.value[0].charCodeAt(0) > 122){
        e.preventDefault();
        alert('hmm');
    }
 
    /*
    if (rg.nodeValue.length == 8){
        e.preventDefault();
    }
    */
} 

function validar_telefone(e){
    if (permitir_apenas_numeros()){
        return true;
    }else{
        return false;
    }
}

function permitir_apenas_numeros(e){
    if (event.charCode < 48 || event.charCode > 57){
        event.preventDefault();
        return true;
    }
}

function validacao_cpf_com_mensagem(e, mensagem){
    
    if (e){

        if (validacao_cpf()){
            
            document.getElementById('cpf_message').innerText=mensagem
        }else{
            
            document.getElementById('cpf_message').innerText=''
        }
    }
}

function validacao_rg_com_mensagem(e, mensagem){
    if (e){
        if (validacao_rg()){
            document.getElementById('rg_message').innerText=mensagem
        }else{
            document.getElementById('rg_message').innerText=''
        }
    }
}

function validacao_telefone_com_mensagem(e, mensagem){
    if (e){
        if (validar_telefone()){
            document.getElementById('telefone_message').innerText=mensagem
        }else{
            document.getElementById('telefone_message').innerText=''
        }
    }
}