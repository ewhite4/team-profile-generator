const Employee = require('./lib/employee.js');

test("creates employee", () => {

    const employee = new Employee();

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.email).toContain("@");
    expect(employee.idNumber).toEqual(expect,any(Number));
});

