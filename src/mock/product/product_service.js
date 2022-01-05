class ProductService {
  //Refactoring 1. 의존성 역전: 내부에서 의존을 정의하지 않고 외부로부터 받아온다. 테스트를 작성할때는 테스트용  productClient를 주입할 수 있다.
  constructor(productClient) {
    this.productClient = productClient;
  }

  fetchAvailableItems() {
    return this.productClient
      .fetchItems()
      .then((items) => items.filter((item) => item.available));
  }
}
module.exports = ProductService;
