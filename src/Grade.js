// Grade.js
const Grade = ({ score }) => {
    let grade;
  
    if (score >= 70) {
      grade = "A";
    } else if (score >= 60) {
      grade = "B";
    } else if (score >= 50) {
      grade = "C";
    } else if (score >= 45) {
      grade = "D";
    } else if (score >= 40) {
      grade = "E";
    } else {
      grade = "F";
    }
  
    return <span>{grade}</span>; // Return the grade
  };
  
  export default Grade;
  