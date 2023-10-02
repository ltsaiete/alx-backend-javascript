export default function cleanSet(set, startString) {
  if (!startString) return '';
  const finalString = [];

  Array.from(set.values()).forEach((value) => {
    if (value.startsWith(startString)) {
      finalString.push(value.replace(startString, ''));
    }
  });
  return finalString.join('-');
}
