emailjs.init("wZbzT0qomb-sLoKVd");

const serviceID = "service_chc8a58";
const templateID = "template_xlmwvfs";

const formulario = document.getElementById("formulario")

formulario.addEventListener("submit", function(event) {
    event.preventDefault();

    const formularioValido = validarDadosFormulario();
    if (!formularioValido) {
        alert("Por favor, preencha todos os campos corretamente.");
        return;
    }
    
    const formDados = {
        nome: document.getElementById("nome").value,
        sobrenome: document.getElementById("sobrenome").value,
        email: document.getElementById("email").value,
        assunto: document.getElementById("assunto").value,
        mensagem: document.getElementById("mensagem").value,
    };
    
    console.log("Dados capturados:", formDados);
    
    emailjs.send(serviceID, templateID, formDados)
        .then(() => {
            console.log("Email enviado com sucesso!");
            alert("Mensagem enviada com sucesso!");
            formulario.reset();

            document.querySelectorAll('.input-box').forEach(inputBox => {
                inputBox.classList.remove('success', 'error');
            });
        })
        .catch((error) => {
            console.error("Erro ao enviar:", error);
            alert("Erro ao enviar mensagem: " + error.text);
        });
});
