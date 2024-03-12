
import commum_page from "../support/pages/commum_page";
import login_page from "../support/pages/login_page";
import products_page from "../support/pages/products_page";
const ele_login = require('../support/elements/login_elements').elements_login;
const ele_products = require('../support/elements/products_elements').elements_products

describe('Validações dos elementos das páginas', () => {
    beforeEach(() => {
        commum_page.acessarPaginaLogin();
        login_page.preencherUsername(ele_login.usuarioValido);
        login_page.preencherSenha(ele_login.senha);
        login_page.clicarBotaoLogin();
    });

    context('Página de Produtos', () => {
        it('Validações elementos da página de Produtos', () => {
            commum_page.header();
            products_page.menuHamburguer();
            products_page.logoPagina();
            products_page.carrinhoCompras();
            commum_page.validarTexto('Products');
            products_page.botaoFiltro();
            products_page.listaProdutos();
            products_page.botaoAdcRem();
        });
    });
});











