// cypress/e2e/login.test.js
describe("Login", () => {
  it("should show error for invalid credentials", () => {
    cy.visit("/login");
    cy.get('input[name="email"]').type("invalid@example.com");
    cy.get('input[name="password"]').type("invalidPassword");
    cy.get('button[type="submit"]').click();
    cy.get(".error-message").should("be.visible"); // Check for an error message
  });
});
