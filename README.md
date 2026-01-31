# ⚖️ Xavier & Montalban Advocacia - Landing Page

Esta é uma landing page institucional desenvolvida para o escritório Xavier & Montalban Advocacia. O projeto foca em conversão através de uma interface sóbria, elegante e totalmente responsiva, transmitindo a autoridade e seriedade necessárias para o setor jurídico

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

## 📖 Sobre o Projeto

O website foi desenvolvido para o escritório Xavier & Montalban Advocacia, com o objetivo de estabelecer presença digital profissional e facilitar o contato entre o escritório e seus clientes. O site apresenta informações sobre as áreas de atuação, equipe de advogados e oferece múltiplos canais de comunicação.

## 🚀 Funcionalidades Principais

### 🔹 Design Responsivo: 
- Adaptável para Mobile, Tablet e Desktop através de Media Queries avançadas

### 🔹 Validação de Formulário:
- Validação desenvolvida em JavaScript para validação de campos obrigatórios, regex de e-mail e bloqueio de domínios temporários.

### 🔹 Integração EmailJS:
- Envio de mensagens diretamente do formulário para o e-mail do escritório sem necessidade de um backend dedicado.
- Criação de um template de e-mail personalizado com base na interface do website

### 🔹 Interface Dinâmica:
- Menu Mobile estilo "Hamburger".
- Header dinâmico que altera a elevação (box-shadow) e opacidade ao scroll, efeitos de glassmorphism e gradientes lineares.
- Animações de entrada (Fade-in) para melhorar a retenção visual.

### 🔹 Navegação Suave:
- Implementação de Smooth Scroll para todas as seções.

### 🔹 Formulário de Contato
- Validação em tempo real dos campos
- Validação rigorosa de e-mail (RFC 5322)
- Bloqueio de e-mails temporários/descartáveis
- Feedback visual de sucesso/erro
- Integração com EmailJS para envio de mensagens
- Notificações flutuantes de status

### 🔹 Integrações
- **WhatsApp** para contato direto
- **Assistente** virtual via Botpress
- **EmailJS** para envio de formulários

## 🛠️ Tecnologias e Bibliotecas
O projeto foi construído utilizando a metodologia **Mobile First** e uma estruturação de pastas para uma melhor organização dos arquivos facilitando a manutenção posterior.

### Front-end
- **HTML5**: Estruturação semântica para melhor SEO.
- **CSS3**: Utilização de variáveis globais (:root), Flexbox e CSS Grid para layouts complexos e animações.
- **JavaScript**: Lógica de interação, validações e manipulação de DOM.

### Bibliotecas e APIs
- **Font Awesome 7.0.1**: Ícones profissionais para os cards de serviços.
- **Botpress**: Assistente virtual/chatbot.
- **Google Fonts**: Tipografia "Poppins" para legibilidade moderna.
- **EmailJS**: Configurado para processar formulários no lado do cliente (Client-side), enviando notificações em tempo real para o escritório sem a necessidade de um servidor backend complexo.

### Otimizações
- Imagens em formato WebP para melhor performance.
- Meta tags Open Graph para compartilhamento em redes sociais.
- Favicon personalizado.
### UX de Feedback
- Utilização de notificações flutuantes dinâmicas para informar o status de envio do formulário, aumentando a confiança do usuário no site.

## 💻 Como Executar

### Pré-requisitos
- Navegador web moderno
- Servidor local (opcional, mas recomendado)

### Instalação

1. Clone o repositório:
```bash
git clone https://github.com/natan-philip/projeto-escritorio-xavier.git
```

2. Navegue até o diretório:
```bash
cd xavier-montalban-advocacia/
```

3. Abra o arquivo `index.html` no navegador ou utilize um servidor local:

**Live Server (VS Code)**
- Instale a extensão Live Server
- Clique com botão direito em `index.html`
- Selecione "Open with Live Server"

## 📧 Configuração do EmailJS

Para configurar o envio de e-mails via formulário:

1. Crie uma conta em [EmailJS](https://www.emailjs.com/)

2. Configure um serviço de e-mail (Gmail, Outlook, etc.)

3. Crie um template de e-mail

4. Atualize as credenciais no arquivo `javascript/envia-Email.js`:

```javascript
emailjs.init("SUA_PUBLIC_KEY");

const serviceID = "SEU_SERVICE_ID";
const templateID = "SEU_TEMPLATE_ID";
```

### Variáveis do Template EmailJS

O template deve incluir as seguintes variáveis:
- `{{nome}}`
- `{{sobrenome}}`
- `{{email}}`
- `{{assunto}}`
- `{{mensagem}}`

## 🎨 Características de Design

- **Paleta de Cores**: Tons profissionais (dourado, preto, branco)
- **Tipografia**: Fontes legíveis e hierarquia clara
- **Layout**: Design moderno e clean
- **UX**: Navegação intuitiva e call-to-actions estratégicos

## 🔒 Validações Implementadas

### Formulário de Contato
- ✅ Validação de campos vazios
- ✅ Validação de e-mail (RFC 5322)
- ✅ Bloqueio de e-mails temporários
- ✅ Validação de comprimento mínimo (mensagem)
- ✅ Feedback visual em tempo real
- ✅ Prevenção de envios duplicados

## 👨‍💻 Autor

Desenvolvido com ❤️ por **Natan Philip**

[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/natan-philip)
[![LinkedIn Badge](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/natanphilip/)
[![Email Badge](https://img.shields.io/badge/Email-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:natanphilip99@gmail.com)
---

Gostou deste projeto? Não esqueça de deixar uma ⭐ no repositório!