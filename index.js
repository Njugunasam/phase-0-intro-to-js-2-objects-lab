const employee = {
  name: "John",
  age: 30,
  role: "Engineer",
};
function updateEmployeeWithKeyAndValue(employee, key, value) {
 
  const updatedEmployee = { ...employee };
  updatedEmployee[key] = value;
  return updatedEmployee;
}
function deleteFromEmployeeByKey(employee, key) {
  const newEmployee = { ...employee };
  delete newEmployee[key];
  return newEmployee;
}
function destructivelyDeleteFromEmployeeByKey(employee, key) {
  delete employee[key];
  return employee;
}
describe('employees', function() {
  it('updateEmployeeWithKeyAndValue(employee, key, value)', function() {
    const updatedEmployee = updateEmployeeWithKeyAndValue(employee, 'salary', 50000);
    assert.deepEqual(updatedEmployee, {
      name: "John",
      age: 30,
      role: "Engineer",
      salary: 50000,
    });
  });

  it('destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value)', function() {
    destructivelyUpdateEmployeeWithKeyAndValue(employee, 'salary', 50000);
    assert.strictEqual(employee.salary, 50000);
  });

  it('deleteFromEmployeeByKey(employee, key)', function() {
    const newEmployee = deleteFromEmployeeByKey(employee, 'age');
    assert.deepEqual(newEmployee, {
      name: "John",
      role: "Engineer",
    });
  });

  it('destructivelyDeleteFromEmployeeByKey(employee, key)', function() {
    destructivelyDeleteFromEmployeeByKey(employee, 'role');
    assert.strictEqual(employee.role, undefined);
  });
});
