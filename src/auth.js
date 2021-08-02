class Auth {
  constructor() {
    this.auhtenticated = false;
  }

  signUp(callBack) {
    this.auhtenticated = true;
    cb();
  }

  login(callBack) {
    this.auhtenticated = true;
    cb();
  }

  logout(callBack) {
    this.auhtenticated = false;
    cb();
  }

  isAuthenticated() {
    return this.auhtenticated;
  }
}

export default new Auth();
