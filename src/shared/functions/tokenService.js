export default class TokenStorage {
  static isAuthenticated() {
    return this.getToken !== null;
  }

  static clear() {
    localStorage.removeItem("auth");
  }

  static setToken(token) {
    return localStorage.setItem("auth", JSON.stringify(token));
  }

  static getToken() {
    const auth = JSON.parse(localStorage.getItem("auth"));
    return auth?.token;
  }

  static getUser() {
    const auth = JSON.parse(localStorage.getItem("auth"));
    return auth?.user;
  }
}
