const ProductService = require("../product_service_no_di");
const ProductClient = require("../product_client");

//productService가 의존하고 있는 productClient를 mock
jest.mock("../product_client");

describe("productService", () => {
  //productClient에서 사용하는 비동기 함수 fetchItems를 mock
  const fetchItems = jest.fn(async () => [
    { item: "milk", available: true },
    { item: "banana", available: false },
  ]);

  // ProductClient mock 과 fetchItems mock 연결
  //테스트하고자 하는 유닛의 내부의 함수들의 mock을 사용함으로써 환경적인 요인(네트워크, 주입된 함수)에 영향받지 않고 필요한 로직만 테스트할 수 있다.
  ProductClient.mockImplementation(() => {
    return {
      fetchItems,
    };
  });

  let productService;

  beforeEach(() => {
    productService = new ProductService();
    //clearMocks:false 라면, 정확한 테스트를 위해 매 테스트마다 mock 초기화
    //fetchItems.mockClear();
    //ProductClient.mockClear();
  });

  it("should filter out only available items", async () => {
    const items = await productService.fetchAvailableItems();

    expect(items.length).toBe(1);
    expect(items).toEqual([{ item: "milk", available: true }]);
  });

  it("test", async () => {
    const items = await productService.fetchAvailableItems();
    //config - clearMocks:true (테스트 마다 mock 초기화, false로 설정되어있다면 mock의 호출회수는 지금까지 총 2번이다.)
    expect(fetchItems).toHaveBeenCalledTimes(1);
  });
});
