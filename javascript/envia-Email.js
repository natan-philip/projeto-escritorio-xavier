emailjs.init("wZbzT0qomb-sLoKVd");

const serviceID = "service_chc8a58";
const templateID = "template_xlmwvfs";

const formulario = document.getElementById("formulario");
const btnEnviar = document.getElementById("enviar");

formulario.addEventListener("submit", function(event) {
    event.preventDefault();

    const formularioValido = validarDadosFormulario();
    if (!formularioValido) {
        mostrarNotificacao('Por favor, preencha todos os campos corretamente.', 'erro');
        return;
    }
    
    // DESABILITAR BOTÃO E MOSTRAR "ENVIANDO..."
    btnEnviar.disabled = true;
    btnEnviar.innerHTML = 'Enviando... <i class="fa-solid fa-spinner fa-spin"></i>';
    
    const formDados = {
        nome: document.getElementById("nome").value,
        sobrenome: document.getElementById("sobrenome").value,
        email: document.getElementById("email").value,
        assunto: document.getElementById("assunto").value,
        mensagem: document.getElementById("mensagem").value,
    };
    
    emailjs.send(serviceID, templateID, formDados)
        .then(() => {
            mostrarNotificacao('Mensagem enviada com sucesso!', 'sucesso');
            formulario.reset();
            document.querySelectorAll('.input-box').forEach(inputBox => {
                inputBox.classList.remove('success', 'error');
            });
        })
        .catch((error) => {
            console.error("Erro ao enviar:", error);
            mostrarNotificacao('Erro ao enviar mensagem. Tente novamente.', 'erro');
        })
        .finally(() => {
            // REABILITAR BOTÃO
            btnEnviar.disabled = false;
            btnEnviar.innerHTML = 'Enviar Mensagem <i class="fa-solid fa-paper-plane"></i>';
        });
});
