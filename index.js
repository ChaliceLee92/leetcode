/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums , val) {
	if (nums.length == 0) return 0;

	let i = 0;
	for (let j = 0; j < nums.length; j++) {
		if (nums[j] != val) {
			nums[i] = nums[j];
			i++;
		}
	}
	return i;
};

const a = removeDuplicates([3, 2, 2, 3], 3);
console.log('%c 🥞 a: ', 'font-size:20px;background-color: #EA7E5C;color:#fff;', a);