export default function createIteratorObject(report) {
  const employees = [];

  Object.keys(report).forEach((dept) => {
    employees.push(...report[dept]);
  });

  return employees;
}
