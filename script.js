document.addEventListener('DOMContentLoaded', () => {

    // Inicializa a biblioteca de animação AOS
    function initAOS() {
        AOS.init({
            duration: 800,
            easing: 'ease-in-out',
            once: true,
            offset: 100
        });
    }

    // Inicializa os ícones Lucide
    function initLucide() {
        lucide.createIcons();
    }

    // Configura o menu mobile
    function setupMobileMenu() {
        const menuButton = document.getElementById('mobile-menu-button');
        const mobileMenu = document.getElementById('mobile-menu');
        if (!menuButton || !mobileMenu) return;

        menuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });

        // Fecha o menu ao clicar em um link
        mobileMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
            });
        });
    }
    
    // Configura o indicador de scroll
    function setupScrollIndicator() {
        const scrollIndicator = document.getElementById('scrollIndicator');
        if (!scrollIndicator) return;

        window.addEventListener('scroll', () => {
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            const scrollPercent = window.scrollY / docHeight;
            scrollIndicator.style.transform = `scaleX(${scrollPercent})`;
        }, { passive: true });
    }

    // Efeito de "máquina de escrever"
    function handleTypewriterEffect() {
        const typewriter = document.querySelector('.typewriter');
        if (typewriter) {
            setTimeout(() => {
                typewriter.style.borderRight = 'none';
            }, 4000); // Duração da animação + um pequeno extra
        }
    }

    // Atualiza o ano no rodapé
    function updateFooterYear() {
        const yearSpan = document.getElementById('year');
        if (yearSpan) {
            yearSpan.textContent = new Date().getFullYear();
        }
    }

    // Executa todas as funções de inicialização
    initAOS();
    initLucide();
    setupMobileMenu();
    setupScrollIndicator();
    handleTypewriterEffect();
    updateFooterYear();

});
