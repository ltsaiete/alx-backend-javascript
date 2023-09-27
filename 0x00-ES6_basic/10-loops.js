export default function appendToEachArrayValue(array, appendString) {
	const aux = [];
	for (let value of array) {
		value = `${appendString}${value}`;
		aux.push(value);
	}

	return aux;
}
