/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
	if (s.length % 2) return false;
	let map = new Map([
		['(', ')'],
		['{', '}'],
		['[', ']'],
	]);

	let stack = [];

	for (let i = 0; i < s.length; i++) {
		if (map.has(s[i])) {
			// 左边的括号直接push 入栈
			stack.push(s[i]);
		} else {
			// 判断栈内的最后一个元素是否存在map中
			if (s[i] === map.get(stack[stack.length - 1])) {
				stack.pop();
			} else {
				return false;
			}	
		}
	}
	
	return !stack.length
};

const res = isValid('({[]})[]');

