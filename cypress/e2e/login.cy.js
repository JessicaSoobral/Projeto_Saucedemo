
import commum_page from "../support/pages/commum_page";
import login_page from "../support/pages/login_page";
const ele_login = require('../support/elements/login_elements').elements_login;
describe('Tipos e tentativas de Login', () => {

    beforeEach('Acessar pagina de login', () => {
        commum_page.acessarPaginaLogin()
    });
    it('Login com campo username vazio', () => {
        login_page.preencherSenha(ele_login.senha)
        login_page.clicarBotaoLogin()
        login_page.validarMensagemErro('Username is required')
    });
    it('Login com campo password vazio', () => {
        login_page.preencherUsername(ele_login.usuarioValido)
        login_page.clicarBotaoLogin()
        login_page.validarMensagemErro('Password is required')
    });
    it('Login com campo usuário bloqueado', () => {
        login_page.preencherUsername(ele_login.usuarioBloqueado)
        login_page.preencherSenha(ele_login.senha)
        login_page.clicarBotaoLogin()
        login_page.validarMensagemErro('Sorry, this user has been locked out.')
    });

    it(' Login com usuário válido', () => {
        login_page.preencherUsername(ele_login.usuarioValido)
        login_page.preencherSenha(ele_login.senha)
        login_page.clicarBotaoLogin()
        commum_page.validarTexto('Products')
    });



});