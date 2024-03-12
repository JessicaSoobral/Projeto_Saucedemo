// Importando a página com funções comuns
import commum_page from "./commum_page";

export default {
    // Função para verificar se o campo 'First Name' possui o texto do placeholder correto
    textoPlaceholderFirstName() {
        cy.get('#first-name').should('have.attr', 'placeholder', 'First Name');
    },

    // Função para verificar se o campo 'Last Name' possui o texto do placeholder correto
    textoPlaceholderLastName() {
        cy.get('#last-name').should('have.attr', 'placeholder', 'Last Name');
    },

    // Função para verificar se o campo 'Zip/Postal Code' possui o texto do placeholder correto
    textoPlaceholderPostalcode() {
        cy.get('#postal-code').should('have.attr', 'placeholder', 'Zip/Postal Code');
    },

    // Função para validar a existência do botão 'Cancel'
    validarBotaoCancel() {
        cy.get('.cart_cancel_link').should('exist');
    },

    // Função para validar a existência do botão 'Continue'
    validarBotaoContinue() {
        cy.get('.cart_button').should('exist');
    },

    // Função para clicar no botão 'Cancel'
    clickBotaoCancel() {
        cy.get('.cart_cancel_link').click();
    },

    // Função para clicar no botão 'Continue'
    clickBotaoContinue() {
        cy.get('.cart_button').click();
    },

    // Função para digitar o primeiro nome
    digitarFirstName(firstName) {
        cy.get('#first-name').type(firstName);
    },

    // Função para digitar o sobrenome
    digitarLastName(lastName) { 
        cy.get('#last-name').type(lastName);
    },

    // Função para digitar o código postal
    digitarPostalCode(postalCode) { 
        cy.get('#postal-code').type(postalCode);
    },

    // Função para validar a mensagem de erro
    validarMensagemErro(mensagem) {
        cy.get('[data-test="error"]').should('have.text', mensagem);
    }
}
