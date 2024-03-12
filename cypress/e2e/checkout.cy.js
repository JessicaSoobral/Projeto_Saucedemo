import commum_page from "../support/pages/commum_page";
import login_page from "../support/pages/login_page";
import your_cart_page from "../support/pages/your_cart_page";
import checkout_page from "../support/pages/checkout_page";
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
        
    });

    context('Pagina de Overview', () => {

        it('Validações elementos da página de Checkout', () => {

            commum_page.validarTexto('Checkout: Your Information');
            checkout_page.textoPlaceholderFirstName();
            checkout_page.textoPlaceholderLastName();
            checkout_page.textoPlaceholderPostalcode();
            checkout_page.validarBotaoCancel();
            checkout_page.validarBotaoContinue();
            checkout_page.clickBotaoCancel();
            commum_page.validarTexto('Your Cart');
            your_cart_page.clickbotaoCheckout();
            checkout_page.textoPlaceholderLastName();
            checkout_page.digitarFirstName('Jessica');
            checkout_page.digitarLastName('Teste');
            checkout_page.digitarPostalCode('123456');
            checkout_page.clickBotaoContinue();

        });
    });

    context('Validações Mensagens de Erro Page Checkout', () => {

        it('Erro ao tentar realizar Checkout sem First Name', () => {

            checkout_page.digitarLastName('Jessica');
            checkout_page.digitarPostalCode('123456');
            checkout_page.clickBotaoContinue();
            checkout_page.validarMensagemErro('Error: First Name is required')

        });

        it('Erro ao tentar realizar Checkout sem Last Name', () => {
            checkout_page.digitarFirstName('Teste');
            checkout_page.digitarPostalCode('123456');
            checkout_page.clickBotaoContinue();
            checkout_page.validarMensagemErro('Error: Last Name is required')

        
        });
        it('Erro ao tentar realizar Checkout sem Postal Code', () => {
           
            checkout_page.digitarLastName('Jessica');
            checkout_page.digitarFirstName('Teste');
            checkout_page.clickBotaoContinue();
            checkout_page.validarMensagemErro('Error: Postal Code is required')
        
        });
    });

    });
