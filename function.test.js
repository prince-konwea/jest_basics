 const functions = require ("./function")

 test("adds 1 + 2 equals 3", () =>{
    expect(functions.add(1,2)).toBe(3);
 });