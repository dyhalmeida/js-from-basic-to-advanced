class UserController {
  constructor() {
    this.app = {};
  }
  store() {
    console.log('store');
  }
}

module.exports = new UserController();