import commum_page from "./commum_page";

export default {
    // Função para clicar no primeiro botão de adicionar ou remover um produto
    clickbotaoAdcRem() {
        cy.get('.btn_inventory').first().click();
    },

    // Função para clicar no ícone do carrinho de compras
    clickCarrinhoCompras() {
        cy.get('.shopping_cart_link ').click();
    },

    // Função para verificar se o título "Quantidade" está presente
    divQuantidade() {
        cy.get('.cart_quantity_label').should('contain', 'QTY');
    },

    // Função para verificar se o título "Descrição" está presente
    divDescricao() {
        cy.get('.cart_desc_label').should('contain', 'DESCRIPTION');
    },

    // Função para verificar se o nome do produto está presente
    nomeProduto() {
        cy.get('.inventory_item_name').should('exist');
    },

    // Função para verificar se a descrição do produto está presente
    descricaoProduto() {
        cy.get('.inventory_item_desc').should('exist');
    },

    // Função para verificar se o preço do produto está presente
    precoProduto() {
        cy.get('.inventory_item_price').should('exist');
    },

    // Função para verificar se o botão "REMOVE" está presente
    botaoRemover() {
        cy.get('.cart_button').should('contain', 'REMOVE');
    },

    // Função para verificar se a quantidade de itens de compras é igual a 1
    quantidadeItensProdutos() {
        cy.get('.cart_quantity').should('contain', '1');
    },

    // Função para verificar se o ícone do carrinho de compras mostra a quantidade igual a 1
    quantidadeItensCarrinho() {
        cy.get('.shopping_cart_badge').should('contain', '1');
    },

    // Função para verificar se o footer existe e contém 2 itens
    footer() {
        cy.get('.cart_footer').should('exist');
        cy.get('.cart_footer').children().should('have.length', 2);
    },

    // Função para verificar se o botão "Continue Shopping" está presente
    botaoContinueShopping() {
        cy.get('.cart_footer .btn_secondary').should('contain', 'Continue Shopping');
    },

    // Função para verificar se o botão "CHECKOUT" está presente
    botaoCheckout() {
        cy.get('.checkout_button').should('contain', 'CHECKOUT');
    },

    // Função para verificar se ao clicar no botão "Continue Shopping" sou redirecionada para a página de produtos
    acaoBotaoContinueShopping() {
        cy.get('.cart_footer .btn_secondary').click();
        commum_page.validarTexto('Products');
        cy.get('.shopping_cart_link ').click();
    },

    // Função para verificar se ao clicar no botão "CHECKOUT" sou redirecionada para a página de Overview
    clickbotaoCheckout() {
        cy.get('.checkout_button').click();
    },

    // Função para verificar se ao clicar no botão "REMOVE" a quantidade de itens do carrinho fica zerada
    acaobotaoRemover() {
        cy.get('.cart_button').should('contain', 'REMOVE').click();
        cy.get('.shopping_cart_badge').should('not.exist');
    },
}
