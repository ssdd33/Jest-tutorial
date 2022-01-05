class UserService {
  constructor(userClient) {
    this.userClient = userClient;
    this.isLogedIn = false;
  }

  login() {
    if (!this.isLogedIn) {
      //userClient로 비동기 로직을 분리하는 이유: 테스트를 위해 네트워크(환경적인 변수) 의존을 외부로 옮긴다.
      return this.userClient.login().then((data) => (this.isLogedIn = true));
    }
  }
}

module.exports = UserService;
