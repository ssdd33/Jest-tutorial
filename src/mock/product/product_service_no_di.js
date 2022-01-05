// no dependency injection version :mock을 남용하는 사례
const ProductClient = require("./product_client");

class ProductService {
  constructor() {
    /*
    Bad case 1. class 내부에서 스스로의 의존을 정의하는 것은 dependency injection 원칙에 어긋난다.   
    테스트 코드의 독립성이 지켜지지 않는다 :  
      productService를 테스트하면서 productClient 내부의 fetch함수도 함께 테스트 된다.
      네트워크나,  fetch함수 로직의 문제로 productService의 테스트가 실패할 수도 있음.
      -> productClient를 mock함으로써 productService의 독립성을 지킬 수 있다. */
    this.productClient = new ProductClient();
  }

  fetchAvailableItems() {
    return this.productClient
      .fetchItems()
      .then((items) => items.filter((item) => item.available));
  }
}

module.exports = ProductService;
