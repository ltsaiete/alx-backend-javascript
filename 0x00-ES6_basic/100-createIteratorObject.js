export default function createIteratorObject(report) {
  const employees = [];

  Object.keys(report.allEmployees).forEach((dept) => {
    employees.push(...report.allEmployees[dept]);
  });

  return employees;
}
