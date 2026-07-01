import LoginPage from "../pages/LoginPage";

describe("SauceDemo Login Smoke Test", () => {
  const loginPage = new LoginPage();

  beforeEach(() => {
    cy.fixture("users").as("users");
    loginPage.visit();
  });

  it("login successfull with valid credentials", function () {
    loginPage.login(
      this.users.validUser.username,
      this.users.validUser.password
    );

    cy.url().should("include", "/inventory.html");
    cy.get('[data-test="title"]').should("have.text", "Products");
  });

  it("error message when password is incorrect", function () {
    loginPage.login(
      this.users.invalidPasswordUser.username,
      this.users.invalidPasswordUser.password
    );

    loginPage.assertErrorLoginMessage(
      "Username and password do not match any user in this service"
    );
  }); 
  
  it("error message when required fields are empty", () => {
    loginPage.clickLoginButton();

    loginPage.assertErrorLoginMessage("Username is required");
  });
});