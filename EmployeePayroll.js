class EmployeePayroll {
    constructor() {
      // Default constructor
    }
  
    // Getters
    get name() {
      return this._name;
    }
  
    get id() {
      return this._id;
    }
  
    get salary() {
      return this._salary;
    }
  
    get startDate() {
      return this._startDate;
    }
  
    get department() {
      return this._department;
    }
  
    get gender() {
      return this._gender;
    }
  
    get notes() {
      return this._notes;
    }
  
    get profilePic() {
      return this._profilePic;
    }
  
    // Setters
    set name(name) {
      this._name = name;
    }
  
    set id(id) {
      this._id = id;
    }
  
    set salary(salary) {
      this._salary = salary;
    }
  
    set startDate(startDate) {
      this._startDate = startDate;
    }
  
    set department(department) {
      this._department = department;
    }
  
    set gender(gender) {
      this._gender = gender;
    }
  
    set notes(notes) {
      this._notes = notes;
    }
  
    set profilePic(profilePic) {
      this._profilePic = profilePic;
    }
  }