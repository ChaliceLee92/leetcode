/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
	if (nums.length == 0) return 0;
	let i = 0;
	for (let j = 1; j < nums.length; j++) {
		if (nums[j] != nums[i]) {
			i++;
			nums[i] = nums[j];
		}
		console.log(i,'....');
	}
	return i + 1;
};

const a  = removeDuplicates([1,1,2])
console.log('%c 🥞 a: ', 'font-size:20px;background-color: #EA7E5C;color:#fff;', a);