const Manager = require("./lib/manager.js");

test("creates manager", () => {
    const manager = new Manager();
    expect(manager.officeNumber).toEqual(expect.and(Number));
});
