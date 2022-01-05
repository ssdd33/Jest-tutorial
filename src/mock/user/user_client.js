class UserClient {
  login() {
    return fetch("http://example.com/id+password").then((res) => res.json());
  }
}

module.exports = UserClient;
