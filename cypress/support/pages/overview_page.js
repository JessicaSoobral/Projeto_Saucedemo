export default {
    // Função para verificar se os textos esperados estão presentes na tela
    sumarioInfoOverview() {
        // Array com os textos esperados
        const textosEsperados = ['Payment Information:', 'SauceCard', 'Shipping Information:', 'FREE PONY EXPRESS DELIVERY!', 'Item total: $', 'Tax: $', 'Total: $'];

        // Itera sobre o array de textos esperados
        textosEsperados.forEach(texto => {
            // Verifica se a div correspondente ao texto está presente na tela e é visível
            cy.contains('div', texto).should('be.visible');
        });
    },

    // Função para validar o botão Finish
    validarBotaoFinish() {
        // Valida se o botão Finish existe e seu texto é 'FINISH'
        cy.get('.btn_action')
            .should('exist') // Verifica se o botão existe
            .and('have.text', 'FINISH'); // Verifica se o texto do botão é 'FINISH'
    },

    // Função para clicar no botão Finish
    clickBotaoFinish() {
        // Clica no botão Finish
        cy.get('.btn_action').click();
    }
}
