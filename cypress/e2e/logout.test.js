import { logout } from "../../src/js/api/auth/logout";

describe("logout function", () => {
  it("should clear the token from localStorage", () => {
    // Set a token before testing
    localStorage.setItem("token", "mockToken123");

    // Run the logout function
    logout();

    // Check if the token is removed
    expect(localStorage.getItem("token")).toBeNull();
  });
});
