// Write your solution in this file!
const employee={name:'Joel' , streetAddress:'11th street'}

function updateEmployeeWithKeyAndValue(obj, key, value){
    const newEmployee={...obj}
    newEmployee[key]=value
    return newEmployee
}
const updatedEmployee=updateEmployeeWithKeyAndValue(employee,'name','Jose')

function destructivelyUpdateEmployeeWithKeyAndValue(obj,key,value){
    obj[key]=value
    return obj
}
const destructiveUpdate= destructivelyUpdateEmployeeWithKeyAndValue(employee,'streetAddress','10th ave')

function deleteFromEmployeeByKey(obj,key,value){
     const newDelete={...obj}
     delete newDelete.[key];
     return newDelete
}
const deleted=deleteFromEmployeeByKey(employee,'name')

function destructivelyDeleteFromEmployeeByKey(obj,key,value){
    delete obj.[key]
    return obj
}
const destructiveDeleteKey=destructivelyDeleteFromEmployeeByKey(employee,'name')
