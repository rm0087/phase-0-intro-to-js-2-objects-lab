const employee = {
    name: "Sam",
    streetAddress: ""
};

function updateEmployeeWithKeyAndValue(employee, streetAddress,) {
    const copyEmployee = { ...employee};
    copyEmployee.streetAddress = `11 Broadway`;
    return copyEmployee;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, streetAddress,) {
    employee.streetAddress = `12 Broadway`;
    return employee;
}

function deleteFromEmployeeByKey(employee, name,) {
    const newEmployee = {...employee};
    newEmployee.name = undefined;
    return newEmployee;
}

function destructivelyDeleteFromEmployeeByKey(employee, name,) {
    employee.name = undefined;
    return employee;
}