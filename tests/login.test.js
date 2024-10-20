import { login } from "../src/js/api/auth/login"; // Adjust the path according to your project structure

// Mocking localStorage
beforeAll(() => {
  const localStorageMock = (function () {
    let store = {};
    return {
      getItem(key) {
        return store[key] ? JSON.parse(store[key]) : null; // Parse JSON string back to object
      },
      setItem(key, value) {
        store[key] = value.toString();
      },
      removeItem(key) {
        delete store[key];
      },
      clear() {
        store = {};
      },
    };
  })();

  Object.defineProperty(window, "localStorage", {
    value: localStorageMock,
  });
});

describe("login function", () => {
  it("should store a token when provided with valid credentials", async () => {
    const validCredentials = {
      email: "test@example.com",
      password: "password",
    };
    const expectedToken = "mockToken123"; // This token is expected to be returned from the mock fetch response

    // Mocking the fetch response
    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve({ accessToken: expectedToken }),
      }),
    );

    await login(validCredentials.email, validCredentials.password);

    // Check if the token is stored in localStorage
    expect(localStorage.getItem("token")).toEqual(expectedToken);
  });
});
