import LoginPage from "../pages/LoginPage";

describe("SauceDemo Login Smoke Test", () => {
  const loginPage = new LoginPage();

  beforeEach(() => {
    cy.fixture("users").as("users");
    loginPage.visit();
  });

  it("Login successfull with valid credentials", function () {
    loginPage.login(
      this.users.validUser.username,
      this.users.validUser.password
    );

    cy.url().should("include", "/inventory.html");
    cy.get('[data-test="title"]').should("have.text", "Products");
  });
});