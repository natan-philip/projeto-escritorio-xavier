// MENU MOBILE
const btnMobile = document.querySelector('.btn-mobile');
const navLinks = document.getElementById('nav-links');
const icon = document.querySelector('.btn-mobile i');

    btnMobile.addEventListener('click', (event) => {
        event.stopPropagation();
        navLinks.classList.toggle('open');
        icon.classList.toggle('fa-xmark');
        icon.classList.toggle('fa-bars');
})

const menuClose = document.querySelectorAll('.menu-item a');

    menuClose.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            
            // Pegar o ID da seção do href
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            // Fechar menu mobile
            navLinks.classList.remove('open');
            icon.classList.remove('fa-xmark');
            icon.classList.add('fa-bars');
            document.body.style.overflow = 'auto';
            
            // Scroll suave para a seção
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        })
    })

// SCROLL HEADER / adicionar sombra ao rolar a pagina
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (!header) return;
    if (window.scrollY > 0) {
        header.style.boxShadow = '0px 4px 10px rgba(0, 0, 0, 0.35)';
        header.classList.add('headerscroll');
    } else {
        header.style.boxShadow = 'none';
        header.classList.remove('headerscroll');
    }
});

// SMOOTH SCROLL PARA LOGO E LINKS DO FOOTER
document.addEventListener('DOMContentLoaded', () => {
    const footerLinks = document.querySelectorAll('.footer-info a[href^="#"]');
    const logoLink = document.querySelector('.logo a');
    
    footerLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
    
    if (logoLink) {
        logoLink.addEventListener('click', (e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
});

// SELECIONAR ELEMENTOS DO FORMULÁRIO
const nome = document.getElementById('nome');
const sobrenome = document.getElementById('sobrenome');
const assunto = document.getElementById('assunto');
const email = document.getElementById('email');
const mensagem = document.getElementById('mensagem');

// FUNÇÃO PARA VALIDAR EMAIL
function validarEmail(email) {
    // Regex RFC 5322 simplificada + validações rigorosas
    const regex = /^[a-zA-Z0-9]([a-zA-Z0-9._-]*[a-zA-Z0-9])?@[a-zA-Z0-9]([a-zA-Z0-9-]*[a-zA-Z0-9])?(\.[a-zA-Z0-9]([a-zA-Z0-9-]*[a-zA-Z0-9])?)*\.[a-zA-Z]{2,}$/;
    
    if (!regex.test(email)) return false;
    
    // Validações adicionais
    if (email.includes('..')) return false; // pontos consecutivos
    if (email.split('@')[0].length > 64) return false; // parte local muito longa
    if (email.length > 254) return false; // email muito longo
    
    // Extrair domínio
    const domain = email.split('@')[1].toLowerCase();
    
    // Bloquear domínios temporários/descartáveis comuns
    const blockedDomains = ['tempmail.com', 'throwaway.email', '10minutemail.com', 'guerrillamail.com', 'mailinator.com', 'trashmail.com'];
    if (blockedDomains.includes(domain)) return false;
    
    // Verificar TLD válido (mínimo 2 caracteres)
    const tld = domain.split('.').pop();
    if (tld.length < 2) return false;
    
    return true;
}

// FUNÇÃO PARA MOSTRAR ERRO
function mostrarErro(input, mensagemErro) {
    const inputBox = input.parentElement;
    const spanErro = inputBox.querySelector('.mensagem-error');
    
    inputBox.classList.add('error');
    inputBox.classList.remove('success');
    spanErro.textContent = mensagemErro;
}

// FUNÇÃO PARA MOSTRAR SUCESSO
function mostrarSucesso(input) {
    const inputBox = input.parentElement;
    const spanErro = inputBox.querySelector('.mensagem-error');
    
    inputBox.classList.add('success');
    inputBox.classList.remove('error');
    spanErro.textContent = '';
}

// FUNÇÃO PARA VALIDAR CAMPO VAZIO
function validarCampoVazio(input, nomeCampo) {
    if (input.value.trim() === '') {
        mostrarErro(input, `Por favor, insira ${nomeCampo}`);
        return false;
    } else {
        mostrarSucesso(input);
        return true;
    }
}

// VALIDAÇÃO EM TEMPO REAL - NOME
nome.addEventListener('blur', () => {
    validarCampoVazio(nome, 'seu nome');
});

nome.addEventListener('input', () => {
    if (nome.value.trim() !== '') {
        mostrarSucesso(nome);
    }
});

// VALIDAÇÃO EM TEMPO REAL - SOBRENOME
sobrenome.addEventListener('blur', () => {
    validarCampoVazio(sobrenome, 'seu sobrenome');
});

sobrenome.addEventListener('input', () => {
    if (sobrenome.value.trim() !== '') {
        mostrarSucesso(sobrenome);
    }
});

// VALIDAÇÃO EM TEMPO REAL - ASSUNTO
assunto.addEventListener('blur', () => {
    validarCampoVazio(assunto, 'o assunto');
});

assunto.addEventListener('input', () => {
    if (assunto.value.trim() !== '') {
        mostrarSucesso(assunto);
    }
});

// VALIDAÇÃO EM TEMPO REAL - EMAIL
email.addEventListener('blur', () => {
    if (email.value.trim() === '') {
        mostrarErro(email, 'Por favor, insira seu e-mail');
    } else if (!validarEmail(email.value)) {
        mostrarErro(email, 'Por favor, insira um e-mail válido');
    }
});

email.addEventListener('input', () => {
    if (email.value.trim() !== '' && validarEmail(email.value)) {
        mostrarSucesso(email);
    }
});

// VALIDAÇÃO EM TEMPO REAL - MENSAGEM
mensagem.addEventListener('blur', () => {
    if (mensagem.value.trim() === '') {
        mostrarErro(mensagem, 'Por favor, escreva sua mensagem');
    } else if (mensagem.value.trim().length < 10) {
        mostrarErro(mensagem, 'A mensagem deve ter pelo menos 10 caracteres');
    }
});

mensagem.addEventListener('input', () => {
    if (mensagem.value.trim() !== '' && mensagem.value.trim().length >= 10) {
        mostrarSucesso(mensagem);
    }
});

// VALIDAÇÃO NO ENVIO DO FORMULÁRIO
function validarDadosFormulario() {

    const isNomeValid = validarCampoVazio(nome, 'seu nome');
    const isSobrenomeValid = validarCampoVazio(sobrenome, 'seu sobrenome');
    const isAssuntoValid = validarCampoVazio(assunto, 'o assunto');
    
    // VALIDAR EMAIL
    let isEmailValid = false;
    if (email.value.trim() === '') {
        mostrarErro(email, 'Por favor, insira seu e-mail');
    } else if (!validarEmail(email.value)) {
        mostrarErro(email, 'Por favor, insira um e-mail válido');
    } else {
        mostrarSucesso(email);
        isEmailValid = true;
    }
    
    // VALIDAR MENSAGEM
    let isMensagemValid = false;
    if (mensagem.value.trim() === '') {
        mostrarErro(mensagem, 'Por favor, escreva sua mensagem');
    } else if (mensagem.value.trim().length < 10) {
        mostrarErro(mensagem, 'A mensagem deve ter pelo menos 10 caracteres');
    } else {
        mostrarSucesso(mensagem);
        isMensagemValid = true;
    }
    
    // SE TODOS OS CAMPOS FOREM VÁLIDOS
    return (
        isNomeValid &&
        isSobrenomeValid &&
        isAssuntoValid &&
        isEmailValid &&
        isMensagemValid
    );
}

// FUNÇÃO PARA EXIBIR NOTIFICAÇÃO FLUTUANTE
function mostrarNotificacao(mensagem, tipo) {
    const notificacao = document.createElement('div');
    notificacao.className = `notificacao ${tipo}`;
    notificacao.innerHTML = `
        <i class="fa-solid ${tipo === 'sucesso' ? 'fa-circle-check' : 'fa-circle-xmark'}"></i>
        <p>${mensagem}</p>
    `;
    document.body.appendChild(notificacao);

    setTimeout(() => {
        notificacao.classList.add('hide');
        setTimeout(() => notificacao.remove(), 300);
    }, 5000);
}