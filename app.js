// Templates (SPA)
const templates = {
    home: `
        <h2>Bem-vindo à Mão Solidária</h2>
        <p>Nosso objetivo é ajudar quem mais precisa, conectando doadores e projetos sociais.</p>
        <img src="img/mao-solidaria.jpg" alt="Mão Solidária">
    `,
    sobre: `
        <h2>Sobre Nós</h2>
        <p>A Mão Solidária nasceu da vontade de transformar o mundo através da solidariedade.</p>
    `,
    doar: `
        <h2>Faça uma Doação</h2>
        <form id="formDoacao">
            <label>Nome completo:</label>
            <input type="text" id="nome" placeholder="Seu nome completo">

            <label>Email:</label>
            <input type="email" id="email" placeholder="seu@email">

            <label>Valor da doação (R$):</label>
            <input type="number" id="valor" placeholder="Ex: 50">

            <label>Mensagem (opcional):</label>
            <textarea id="mensagem" rows="3" placeholder="Sua mensagem..."></textarea>

            <button type="submit">Enviar Doação</button>
            <p id="msgErro" class="error"></p>
            <p id="msgSucesso" style="color:green;"></p>
        </form>
    `,
    contato: `
        <h2>Fale Conosco</h2>
        <p>Email: contato@maosolidaria.org</p>
        <p>Telefone: (62) 99809-1763</p>
    `
};

// Função para renderizar templates
function render(page) {
    const app = document.getElementById('app');
    app.innerHTML = templates[page] || templates.home;

    // Se for a página de doação, ativa a verificação
    if (page === 'doar') {
        ativarValidacao();
    }
}

// Roteamento simples
document.querySelectorAll('a[data-page]').forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        const page = e.target.getAttribute('data-page');
        render(page);
        history.pushState({ page }, '', `#${page}`);
    });
});

// Suporte ao botão "voltar"
window.addEventListener('popstate', e => {
    const page = e.state?.page || 'home';
    render(page);
});

// Renderiza a página inicial
render('home');

// Validação de formulário
function ativarValidacao() {
    const form = document.getElementById('formDoacao');
    const msgErro = document.getElementById('msgErro');
    const msgSucesso = document.getElementById('msgSucesso');

    form.addEventListener('submit', e => {
        e.preventDefault();
        msgErro.textContent = '';
        msgSucesso.textContent = '';

        const nome = document.getElementById('nome').value.trim();
        const email = document.getElementById('email').value.trim();
        const valor = document.getElementById('valor').value.trim();

        if (nome.length < 3) {
            msgErro.textContent = '⚠️ Nome muito curto.';
            return;
        }
        if (!email.includes('@')) {
            msgErro.textContent = '⚠️ E-mail inválido.';
            return;
        }
        if (isNaN(valor) || valor <= 0) {
            msgErro.textContent = '⚠️ Valor da doação deve ser positivo.';
            return;
        }

        msgSucesso.textContent = '🎉 Obrigado pela sua doação!';
        form.reset();
    });
}
