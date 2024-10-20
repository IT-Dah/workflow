// cypress/e2e/logout.test.js
describe("Logout", () => {
  it("should log the user out", () => {
    cy.login(); // Assume you have a custom command for logging in
    cy.get(".logout-button").click(); // Click logout button
    cy.url().should("include", "/login"); // Ensure user is redirected to login page
  });
});
