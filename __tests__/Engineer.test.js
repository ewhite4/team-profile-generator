const Engineer = require("./lib/engineer.js");

test("creates engineer", () => {
     const engineer = new Engineer();
     expext(engineer.github).toEqual(expect.any(String));
});
