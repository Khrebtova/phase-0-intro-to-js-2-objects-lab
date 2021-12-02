const employee = {
    name: 'Sam',
    streetAddress: '11 Broadway'
}

function updateEmployeeWithKeyAndValue(object, key, value) {
    const newEmployee = {...employee};
    newEmployee.streetAddress="11 Broadway";
    newEmployee.name="Sam";
    return newEmployee;
}

function destructivelyUpdateEmployeeWithKeyAndValue(){
    employee.streetAddress = '12 Broadway';
    return employee;
}

function beforeEach(){
    delete employee.streetAddress;
    delete employee.name;
    employee.name = 'Sam';
    employee.streetAddress= '11 Broadway';
}

function deleteFromEmployeeByKey(){
    const newEmployee = {...employee};
    delete newEmployee.name;
    return newEmployee;
}

function destructivelyDeleteFromEmployeeByKey(){
    delete employee.name;
    return employee;
}