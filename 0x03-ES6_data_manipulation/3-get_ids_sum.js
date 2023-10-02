export default function getStudentIdsSum(students) {
  [].reduce();
  return students.reduce((idsSum, student) => idsSum + student.id, 0);
}
