// 1. We are managing a data structure of students -  representing a student with 'firstName' and 'age' properties.
// 2. The 'updateStudentAge' function is supposed to update the age of a student his/her first name
// 3. However, some students have the same first name !
// 4. To fix this bug, we want to add 2 properties : lastName and batch  (given a firstName + lastName + batch we do not expect duplication)

// TODO:
// - Update the data strucure and the functions to manage those new properties
const STUDENTS_DATA = [
  { firstName: "An", lastName: "Nguyen", batch: 1, age: 20 },
  { firstName: "Bình", lastName: "Tran", batch: 2, age: 22 },
  { firstName: "Cẩm", lastName: "Nguyen", batch: 1, age: 21 },
  { firstName: "An", lastName: "Pham", batch: 2, age: 19 },
];

/**
 * Update a student's age given their first name, last name, and batch
 * @param {string} firstName - The student's first name
 * @param {string} lastName - The student's last name
 * @param {number} batch - The student's batch
 * @param {number} newAge - The student's new age
 */
function updateStudentAge(firstName, lastName, batch, newAge) {
  let student = STUDENTS_DATA.find(
    (s) =>
      s.firstName === firstName &&
      s.lastName === lastName &&
      s.batch === batch
  );
  if (student) {
    student.age = newAge;
  }
}

// 1 - Update An's age to 30
updateStudentAge("An", "Nguyen", 1, 30);

// 2 - Print the updated data
console.log(JSON.stringify(STUDENTS_DATA));