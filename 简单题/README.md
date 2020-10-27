<!--
 * @Author: Xing💭
 * @Date: 2020-10-26 17:13:55
 * @LastEditTime: 2020-10-27 18:12:43
 * @LastEditors: Xing💭
 * @Description:
 * @FilePath: /leetcode/简单题/README.md
 * @Xing💭
-->

<!--
 * @Author: Xing💭
 * @Date: 2020-10-26 15:28:23
 * @LastEditTime: 2020-10-26 16:49:24
 * @LastEditors: Xing💭
 * @Description:
 * @FilePath: /leetcode/每日一题/README.md
 * @Xing💭
-->

#### 两数之和?

给定一个整数数组 nums  和一个目标值 target，请你在该数组中找出和为目标值的那   两个   整数，并返回他们的数组下标。
你可以假设每种输入只会对应一个答案。但是，数组中同一个元素不能使用两遍。

示例 1：

```javascript
    给定 nums = [2, 7, 11, 15], target = 9
    因为 nums[0] + nums[1] = 2 + 7 = 9
    所以返回 [0, 1]
```

<details><summary><b>答案</b></summary>
<p>
采用暴力解题法：
  双重for循环 , 判断两次相加是否相等于target,如果相等返回结果

```javascript
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
let nums = [2, 7, 11, 15];
let target = 9;
let twoSum = function (nums, target) {
	for (let i = 0; i < nums.length; i++) {
		for (let j = 1; j < nums.length; j++) {
			if (nums[i] + nums[j] === target) {
				return [nums[i], nums[j]];
			}
		}
	}
};
```

哈希求值:
利用 map 结构存储 target - nums[i] 的值, 如果存在取值返回题目要求的值，不存在 则 set 值进入 map

```javascript
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
let nums = [2, 7, 11, 15];
let target = 9;
let twoSum = function (nums, target) {
	let hash = new Map(); // map 结构 { value: index }

	for (let i = 0; i < nums.length; ++i) {
		if (hash.has(nums[i])) {
			// 是否存在
			return [hash.get(nums[i]), i];
		}
		hash.set(target - nums[i], i); // 不存在 设置计算后的
	}
};
```

</p>
</details>

---

#### 整数反转?

给出一个 32 位的有符号整数，你需要将这个整数中每位上的数字进行反转。

示例 1：

```javascript
输入: 123;
输出: 321;
```

示例 2:

```javascript
输入: -123;
输出: -321;
```

示例 3:

```javascript
输入: 120;
输出: 21;
```

注意:

假设我们的环境只能存储得下 32 位的有符号整数，则其数值范围为  [−2^31,  2^31 − 1]。请根据这个假设，如果反转后整数溢出那么就返回 0。

<details><summary><b>答案</b></summary>
<p>
采用暴力解题法：
  利用 js 内置对象反转 x 值 , 判断 x 是否 小于 0 并且 利用 Math.pow 求幂后是否溢出

```javascript
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
	// 利用内置对象反转 x
	let now = Math.abs(x).toString().split('').reverse().join('');

	// 根据题目要求 如反转后整数溢出那么就返回 0
	if (x < 0) {
		return now <= Math.pow(2, 31) ? -now : 0;
	} else {
		return now < Math.pow(2, 31) ? now : 0;
	}
};
```

位运算 解题:
  (x % 10) 取余 获取 末位数字 ， result * 10 + (x % 10) 拼接回 result
  x / 10 去除末位，| 0 强制转换为32位有符号整数。
  通过 | 0 取整，无论正负，只移除小数点部分（正数向下取整，负数向上取整）。
  result | 0 超过32位的整数转换结果不等于自身，可用作溢出判断。

```javascript
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
	let result = 0;
	while (x !== 0) {
		result = result * 10 + (x % 10);
		x = (x / 10) | 0;
	}
	return (result | 0) === result ? result : 0;
};
```

</p>
</details>

---
