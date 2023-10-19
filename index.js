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
