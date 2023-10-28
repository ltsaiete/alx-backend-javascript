interface Student {
	firstName: string;
	lastName: string;
	age: number;
	location: string;
}

const student1: Student = {
	firstName: 'Lewis',
	lastName: 'Senpai',
	age: 20,
	location: 'Maputo'
};

const student2: Student = {
	firstName: 'John',
	lastName: 'Doe',
	age: 28,
	location: 'US'
};

const studentsList: Array<Student> = [student1, student2];

const body = document.getElementsByTagName('body')[0];

const table = document.createElement('table');

table.innerHTML =
	'<thead><tr>\
<th>First name</th>\
<th>Last name</th>\
<th>Age</th>\
<th>Location</th>\
</tr></thead>';

studentsList.forEach((student) => {
	const row = document.createElement('tr');
	row.innerHTML = `<td>${student.firstName}</td>
	<td>${student.lastName}</td>
	<td>${student.age}</td>
	<td>${student.location}</td>
	`;
	table.appendChild(row);
});

body.appendChild(table);
