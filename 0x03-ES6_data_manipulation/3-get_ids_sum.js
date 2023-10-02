export default function getStudentIdsSum(students) {
  return students.reduce((idsSum, student) => idsSum + student.id, 0);
}
