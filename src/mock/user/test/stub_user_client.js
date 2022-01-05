class StubUserClient {
  async login() {
    return "welcome, login is completed!";
  }
}

module.exports = StubUserClient;
