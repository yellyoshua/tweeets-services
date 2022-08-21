const { main } = require("../get_tweets");

describe("Test App", () => {
  test("Hello", () => {
    let response = main({ name: "test_name" });
    expect(response.body).toEqual("Hello test_name!");
  });
});
