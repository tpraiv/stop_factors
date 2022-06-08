
export class LoginPage {

    goToTheLoginPage = () => cy.visit('http://bankon.local/login');
    
    loginButton = () => cy.get('div[data-target="#loginAuthMethod"]')

    loginField = () => cy.get('input[name="login"]')

    passwordField = () => cy.get('input[name="password"]');

    submitButton = () => cy.get('input.btn-green');
    

    loginWithoutECP(username, psw) {
        this.goToTheLoginPage();
        this.loginButton().click();
        this.loginField().type(username);
        this.passwordField().type(psw);
        this.submitButton().click();
    }
}
