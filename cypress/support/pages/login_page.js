export default {
    // Função para preencher o campo de usuário
    preencherUsername(Username) {
        cy.get('#user-name')
            .should('have.attr', 'placeholder', 'Username')
            .type(Username);
    },

    // Função para preencher o campo de senha
    preencherSenha(senha) {
        cy.get('#password')
            .should('have.attr', 'placeholder', 'Password')
            .type(senha);
    },

    // Função para clicar no botão de login
    clicarBotaoLogin() {
        cy.get('#login-button')
            .contains('LOGIN')
            .click();
    },

    // Função para validar a mensagem de erro
    validarMensagemErro(mensagem) {
        cy.get('[data-test="error"]').invoke('text').then((text) => {
            expect(text).to.contain(mensagem);
        });
    },
}
