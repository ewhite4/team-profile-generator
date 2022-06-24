const Intern = require("./lib/intern.js");

test("creates intern", () => {
    const intern = new Intern();
    expect(intern.school).toEqual(expect.any(String));
});