// class EmployeePayroll {
//     constructor() {
//       // Default constructor
//     }
  
//     // Getters
//     get name() {
//       return this._name;
//     }
  
//     get id() {
//       return this._id;
//     }
  
//     get salary() {
//       return this._salary;
//     }
  
//     get startDate() {
//       return this._startDate;
//     }
  
//     get department() {
//       return this._department;
//     }
  
//     get gender() {
//       return this._gender;
//     }
  
//     get notes() {
//       return this._notes;
//     }
  
//     get profilePic() {
//       return this._profilePic;
//     }
  
//     // Setters
//     set name(name) {
//       let nameRegex = RegExp("^[A-Z]{1}[a-z]{3,}$");
//     if (nameRegex.test(name)) {
//       this._name = name;
//     } else {
//       throw "Invalid name format!";
//     }
//     }
  
//     set id(id) {
//       this._id = id;
//     }
  
//     set salary(salary) {
//       this._salary = salary;
//     }
  
//     set startDate(startDate) {
//       this._startDate = startDate;
//     }
  
//     set department(department) {
//       this._department = department;
//     }
  
//     set gender(gender) {
//       this._gender = gender;
//     }
  
//     set notes(notes) {
//       this._notes = notes;
//     }
  
//     set profilePic(profilePic) {
//       this._profilePic = profilePic;
//     }

//     toString() {
//       const options = { year:'numeric',month:'long',day:'numeric'};
//       const empDate = !this.startDate ? "undefined":
//                       this.startDate.toLocaleDateString("en-US",options);
//       return (
//         "Name: " +
//         this.name +
//         ", ID: " +
//         this.id +
//         ", Salary: " +
//         this.salary +
//         ", Start Date: " +
//         this.startDate +
//         ", Department: " +
//         this.department +
//         ", Gender: " +
//         this.gender +
//         ", Notes: " +
//         this.notes +
//         ", Profile Pic: " +
//         this.profilePic
//       );
//     }
//   }



//   const save = () => {
//     try {
//         let employeePayrollData = createEmployeePayroll();
//         createAndUpdateStorage(employeePayrollData);
//     } catch (e) {
//         return;
//     }
// }

// const createEmployeePayroll = () => {
//     let employeePayrollData = new EmployeePayrollData();
//     try {
//         employeePayrollData.name = getInputValueById('#name');
//     } catch (e) {
//         setTextValue('.text-error',e);
//         throw e;
//     }
//     employeePayrollData.profilePic = getSelectedValues('[name=profile]').pop();
//     employeePayrollData.gender = getSelectedValues('[name=gender]').pop();
//     employeePayrollData.department = getSelectedValues('[name=department]');
//     employeePayrollData.salary = getInputValueById('#salary');
//     employeePayrollData.note = getInputValueById('#notes');
//     let date = getInputValueById('#day')+""+getInputValueById('#month')+""+getInputValueById('#year');
//     employeePayrollData.date = Date.parse(date);
//     alert(employeePayrollData.toString());
//     return employeePayrollData;
// }

// const getSelectedValues = (propertyValue) => {
//     let allItems = document.querySelectorAll(propertyValue);
//     let selItems = [];
//     allItems.forEach(item => {
//         if(item.checked) selItems.push(item.value);

//     });
//     return selItem
// }

// const getInputValueById = (id) => {
//     let value = document.querySelector(id).value;
//     return value;
// }

// const getInputElementValue = (id) => {
//     let value = document.getElementById(id).value;
//     return value;
// }

// function createAndUpdateStorage(employeePayrollData) {
//     let employeePayrollList = JSON.parse(localStorage.getItem("EmployeePayrollList"));
//     if(employeePayrollList != undefined) {
//         employeePayrollList.push(employeePayrollData);
//     } else {
//         employeePayrollList = [employeePayrollData]
//     }
//     alert(employeePayrollList.toString());
//     localStorage.setItem("EmployeePayrollList",JSON.stringify(employeePayrollList))
// }
