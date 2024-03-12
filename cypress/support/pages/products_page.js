export default {
   
    // Função para verificar se o menu hamburguer está visível e seus itens
    menuHamburguer() {
        cy.get('.bm-burger-button').should('be.visible').click();
        cy.contains('All Items').should('exist');
        cy.contains('About').should('exist');
        cy.contains('Logout').should('exist');
        cy.contains('Reset App State').should('exist');
        cy.get('.bm-cross-button').click();
    },
    // Função para verificar se o logo da página está visível
    logoPagina() {
        cy.get('.app_logo').should('be.visible');
    },

    // Função para verificar se o ícone do carrinho de compras está visível
    carrinhoCompras() {
        cy.get('#shopping_cart_container').should('be.visible');
    },

    // Função para verificar se o botão de filtro está visível, se contém quatro opções e se as opções esperadas estão presentes
    botaoFiltro() {
        cy.get('.product_sort_container').should('exist');
        cy.get('.product_sort_container').find('option').should('have.length', 4);
        cy.get('.product_sort_container').should('contain', 'Name (A to Z)');
        cy.get('.product_sort_container').should('contain', 'Name (Z to A)');
        cy.get('.product_sort_container').should('contain', 'Price (low to high)');
        cy.get('.product_sort_container').should('contain', 'Price (high to low)');
    },

    // Função para verificar se a lista de produtos na página possui pelo menos 6 itens
    listaProdutos() {
        cy.get('#inventory_container.inventory_container').find('.inventory_item').should('have.length.gte', 6);
    },

    // Função para verificar se o botão de adicionar/remover do carrinho está presente
    botaoAdcRem() {
        cy.get('.btn_inventory').should('exist');
    },
}
