import { login } from "../src/js/api/auth/login";

describe("login function", () => {
  it("should store a token when provided with valid credentials", () => {
    const validCredentials = { username: "testuser", password: "testpassword" };
    const token = "mockToken123";

    // Mock the fetch API to return a successful login response
    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve({ token }),
      }),
    );

    return login(validCredentials).then(() => {
      // Check if the token is stored
      expect(localStorage.getItem("token")).toEqual(token);
    });
  });
});
