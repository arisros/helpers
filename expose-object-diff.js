export default (a, b) => {
	const diff = {};
	const aKey = Object.keys(a);
	for (let index = 0; index < aKey.length; index += 1) {
		if (a[aKey[index]] !== b[aKey[index]]) {
			diff[`${aKey[index]}`] = b[aKey[index]];
		}
	}
	return diff;
};
