const employee ={
    name: "Sam",
    streetAddres: "11 Broadway"
}

function updateEmployeeWithKeyAndValue(object, key, value) {
    const newEmployee = {...employee};
    newEmployee.streetAddress="11 Broadway";
    newEmployee.name="Sam";
    return newEmployee;
}

function beforeEach(){
    delete employee.streetAddress;
    delete employee.name;
    employee.name = 'Sam';
    employee.streetAddress= '11 Broadway';
}


function destructivelyUpdateEmployeeWithKeyAndValue (object, key, value){
    employee.streetAddress = '12 Broadway';
    return employee;
}

function deleteFromEmployeeByKey(object, key){
    const newEmployee ={...employee};
    delete newEmployee.name;
    return newEmployee;
}

function destructivelyDeleteFromEmployeeByKey(object, key){
    delete employee.name;
    return employee;
}