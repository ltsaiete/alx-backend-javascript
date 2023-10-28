interface Teacher {
	readonly firstName: string;
	readonly lastName: string;
	fullTimeEmployee: boolean;
	yearsOfExperience?: number;
	location: string;
	[key: string]: any;
}

interface Directors extends Teacher {
	numberOfReports: number;
}

function printTeacher(firstName: string, lastName: string): string {
	return `${firstName}. ${lastName}`;
}

interface StudentProps {
	firstName: string;
	lastName: string;
	workOnHomework(): string;
	displayName(): string;
}

class StudentClass implements StudentProps {
	firstName: string;
	lastName: string;

	constructor(firstName: string, lastName: string) {}
	workOnHomework(): string {
		return 'Currently working';
	}
	displayName(): string {
		return this.firstName;
	}
}
