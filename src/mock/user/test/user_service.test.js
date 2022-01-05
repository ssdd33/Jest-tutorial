const UserService = require("../user_service");
const UserClient = require("../user_client");

/*
TODO: 
1. isLogedIn의 초기값이 false인지
2. login 함수 호출 이후 isLogedIn 값이 true인지
3. login함수 호출시 StubUserClient의 호출 횟수가 1인지
4. 두번째 login 함수 호출시 StubUserClient 호출 횟수가 0인지
*/
jest.mock("../user_client");
describe("userService", () => {
  const login = jest.fn(async () => "welcome!");

  UserClient.mockImplementation(() => {
    return {
      login,
    };
  });

  let userService;

  beforeEach(() => {
    userService = new UserService(new UserClient());
  });

  it("isLogedIn should has false as init value", () => {
    expect(userService.isLogedIn).toBe(false);
  });

  it("when login called, it should change isLogedin value to true", async () => {
    await userService.login();
    expect(userService.isLogedIn).toBe(true);
    expect(login).toHaveBeenCalledTimes(1);
    //expect(login.mock.calls.length).toBe(1);
  });

  it("when login called twice, StubUserClient should called once", async () => {
    await userService.login();
    await userService.login();
    expect(login).toHaveBeenCalledTimes(1);
  });
});
