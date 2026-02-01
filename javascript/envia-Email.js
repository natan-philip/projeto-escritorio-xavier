// INICIALIZAR EMAILJS QUANDO ESTIVER DISPONÍVEL
if (typeof emailjs !== 'undefined') {
    emailjs.init("wZbzT0qomb-sLoKVd");
}

const serviceID = "service_chc8a58";
const templateID = "template_xlmwvfs";

const formulario = document.getElementById("formulario");
const btnEnviar = document.getElementById("enviar");

if (formulario) {
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
        
        if (typeof emailjs !== 'undefined') {
            console.log('EmailJS disponível, enviando...');
            console.log('Dados do formulário:', formDados);
            
            emailjs.send(serviceID, templateID, formDados)
                .then((response) => {
                    console.log('Sucesso:', response);
                    mostrarNotificacao('Mensagem enviada com sucesso!', 'sucesso');
                    formulario.reset();
                    document.querySelectorAll('.input-box').forEach(inputBox => {
                        inputBox.classList.remove('success', 'error');
                    });
                })
                .catch((error) => {
                    console.error('Erro detalhado:', error);
                    console.error('Status:', error.status);
                    console.error('Text:', error.text);
                    mostrarNotificacao('Erro ao enviar mensagem. Tente novamente.', 'erro');
                })
                .finally(() => {
                    btnEnviar.disabled = false;
                    btnEnviar.innerHTML = 'Enviar Mensagem <i class="fa-solid fa-paper-plane"></i>';
                });
        } else {
            console.error('EmailJS não está definido!');
            mostrarNotificacao('Erro: Serviço de e-mail não disponível.', 'erro');
            btnEnviar.disabled = false;
            btnEnviar.innerHTML = 'Enviar Mensagem <i class="fa-solid fa-paper-plane"></i>';
        }
    });
}
