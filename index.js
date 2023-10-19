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