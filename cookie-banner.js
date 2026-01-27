// Banner de Consentimento de Cookies LGPD
document.addEventListener('DOMContentLoaded', function() {
    // Verificar se o usuário já consentiu
    const hasConsent = localStorage.getItem('cookieConsent');
    
    if (!hasConsent) {
        // Criar o banner de cookies
        const cookieBanner = document.createElement('div');
        cookieBanner.className = 'cookie-banner';
        cookieBanner.innerHTML = `
            <div class="cookie-banner-content">
                Utilizamos cookies para oferecer a melhor experiência. Ao continuar navegando, você concorda com nossa <a href="politica-de-privacidade.html">Política de Privacidade</a>.
            </div>
            <button class="cookie-banner-button" onclick="acceptCookies()">
                Concordo
            </button>
        `;
        
        // Adicionar o banner ao body
        document.body.appendChild(cookieBanner);
        
        // Ajustar o padding do footer para não ficar escondido atrás do banner
        const footer = document.querySelector('.footer');
        if (footer) {
            footer.style.paddingBottom = '120px';
        }
    }
});

// Função para aceitar cookies
function acceptCookies() {
    // Salvar consentimento no localStorage
    localStorage.setItem('cookieConsent', 'accepted');
    
    // Remover o banner
    const cookieBanner = document.querySelector('.cookie-banner');
    if (cookieBanner) {
        cookieBanner.classList.add('hidden');
        
        // Remover o banner após a animação
        setTimeout(() => {
            cookieBanner.remove();
            
            // Restaurar padding do footer
            const footer = document.querySelector('.footer');
            if (footer) {
                footer.style.paddingBottom = '0';
            }
        }, 300);
    }
}

// Função para limpar consentimento (para testes)
function clearCookieConsent() {
    localStorage.removeItem('cookieConsent');
    location.reload();
}
