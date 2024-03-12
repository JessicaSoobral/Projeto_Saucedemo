import commum_page from "../support/pages/commum_page";
import login_page from "../support/pages/login_page";
import your_cart_page from "../support/pages/your_cart_page";
const ele_login = require('../support/elements/login_elements').elements_login;
describe('Validações dos elementos das páginas', () => {
    beforeEach(() => {
        commum_page.acessarPaginaLogin();
        login_page.preencherUsername(ele_login.usuarioValido);
        login_page.preencherSenha(ele_login.senha);
        login_page.clicarBotaoLogin();
        your_cart_page.clickbotaoAdcRem();
        your_cart_page.clickCarrinhoCompras();
    });

    context('Pagina de Carrinho de compras', () => {

        it('Validações dos elementos da página de Carrinho de Compras', () => {

            commum_page.validarTexto('Your Cart');
            your_cart_page.divQuantidade();
            your_cart_page.divDescricao();
            your_cart_page.nomeProduto();
            your_cart_page.descricaoProduto();
            your_cart_page.precoProduto();
            your_cart_page.botaoRemover();
            your_cart_page.quantidadeItensProdutos();
            your_cart_page.quantidadeItensCarrinho();
            your_cart_page.footer();
            your_cart_page.botaoContinueShopping();
            your_cart_page.botaoCheckout();
            your_cart_page.acaoBotaoContinueShopping();
            your_cart_page.clickbotaoCheckout();
            commum_page.validarTexto('Checkout: Your Information');
            your_cart_page.clickCarrinhoCompras();
            your_cart_page.acaobotaoRemover();























        });
    });


});
