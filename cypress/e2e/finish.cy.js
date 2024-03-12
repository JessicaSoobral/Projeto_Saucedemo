import commum_page from "../support/pages/commum_page";
import login_page from "../support/pages/login_page";
import checkout_page from "../support/pages/checkout_page";
import your_cart_page from "../support/pages/your_cart_page";
import overview_page from "../support/pages/overview_page";
import products_page from "../support/pages/products_page";

const ele_login = require('../support/elements/login_elements').elements_login;
describe('Validações dos elementos das páginas', () => {
    beforeEach(() => {
        commum_page.acessarPaginaLogin();
        login_page.preencherUsername(ele_login.usuarioValido);
        login_page.preencherSenha(ele_login.senha);
        login_page.clicarBotaoLogin();
        your_cart_page.clickbotaoAdcRem();
        your_cart_page.clickCarrinhoCompras();
        your_cart_page.clickbotaoCheckout();
        checkout_page.digitarFirstName('Jessica');
        checkout_page.digitarLastName('Teste');
        checkout_page.digitarPostalCode('123456');
        checkout_page.clickBotaoContinue();
        overview_page.clickBotaoFinish();
    });

    context('Pagina de Finish', () => {

        it('Validações elementos da página Finish', () => {

            commum_page.validarTexto('Finish');
            commum_page.validarTexto('THANK YOU FOR YOUR ORDER');
            commum_page.validarTexto('Your order has been dispatched, and will arrive just as fast as the pony can get there!');
            commum_page.validarImagem();
            commum_page.clickMenuHamburguer();
            commum_page.logout();    
        });

    });

});
