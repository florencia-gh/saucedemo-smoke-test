class LoginPage {
  visit() {
    cy.visit('/');
  }

  enterUsername(username) {
    cy.get('[data-test="username"]').clear().type(username);
  }

  enterPassword(password) {
    cy.get('[data-test="password"]').clear().type(password);
  }

  clickLoginButton() {
    cy.get('[data-test="login-button"]').click();
  }

  login(username, password) {
    this.enterUsername(username);
    this.enterPassword(password);
    this.clickLoginButton();
  }

  assertErrorLoginMessage(expectedMessage) {
    cy.get('[data-test="error"]').should('be.visible').and('contain.text', expectedMessage);
  }

}

export default LoginPage;