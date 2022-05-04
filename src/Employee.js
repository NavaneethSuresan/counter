import React from "react";
const Employee=(props)=>{
 const{firstName,lastName,age:employeeAge}=props;
 return(
  <div>
    <h5>Employees: {firstName} {lastName} who is age: {employeeAge}</h5>
  </div>
 )
}
export default Employee;