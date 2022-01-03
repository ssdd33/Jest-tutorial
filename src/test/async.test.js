const fetchProduct = require("../async");

describe("Async", () => {
  it("async-done", (done) => {
    fetchProduct().then((data) => {
      expect(data).toEqual({ item: "milk", price: 2000 });
      done();
    });
  });

  it("async-return", () => {
    return fetchProduct().then((data) => {
      expect(data).toEqual({ item: "milk", price: 2000 });
    });
  });

  it("async-await", async () => {
    const product = await fetchProduct();
    expect(product).toEqual({ item: "milk", price: 2000 });
  });

  it("async-resolves", () => {
    return expect(fetchProduct()).resolves.toEqual({
      item: "milk",
      price: 2000,
    });
  });

  it("async-reject", () => {
    return expect(fetchProduct("error")).rejects.toBe("network error");
  });
});

test("rejected", () => {
  return fetchProduct("error").catch((e) => expect(e).toMatch("network error"));
});
