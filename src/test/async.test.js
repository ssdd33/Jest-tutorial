const fetchProduct = require("../async");

test("rejected", () => {
  expect.assertions(1);
  return fetchProduct("error").catch((e) => expect(e).toMatch("network error"));
});

test("resolved", () => {
  return fetchProduct().then((data) => {
    expect(data.item).toBe("milk");
  });
});
