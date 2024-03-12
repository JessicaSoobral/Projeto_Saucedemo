export default {
    // Função para acessar a página de login
    acessarPaginaLogin() {
        cy.visit('/');
        cy.get('.login_logo');
    },

    // Função para validar a visibilidade de um texto na página
    validarTexto(texto) {
        cy.contains(texto).should('be.visible');
    },

    // Função para validar se a imagem exite na página
    validarImagem() {
        cy.get('img').should('be.visible');
    },

    // Função para clicar no menu hamburguer
    clickMenuHamburguer() {
        cy.get('.bm-burger-button').should('be.visible').click();
    },
    // Função para verificar se o header possui 2 itens
    header() {
        cy.get('#header_container').children().should('have.length', 2);
    },
    // Função para realizar logout 
    logout() {
        cy.get('#logout_sidebar_link').click();
    }







}
