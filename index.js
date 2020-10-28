/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function (arr) {
	const map = new Map(); // map 结构统计 出现的次数

	for (const x of arr) {
		if (map.has(x)) {
			map.set(x, map.get(x) + 1);
		} else {
			map.set(x, 1);
		}
	}

	const times = new Set(); // 利用 set 去重特性 ， 把相同的去除
	for (const [key, value] of map) {
		times.add(value);
	}

	return times.size === map.size;
};
let arr = [1, 2, 3];

const isOnlyone = uniqueOccurrences(arr);
