<!--
 * @Author: Xing💭
 * @Date: 2020-10-26 17:13:55
 * @LastEditTime: 2020-11-09 18:17:21
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

# 两数之和

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
  双重for循环 , 判断两次相加是否相等于target,如果相等返回结果 , 注意第二层遍历 的初始值 应该是 i + 1 , 也就是要遍历 i 的后一位数开始

```javascript
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
let nums = [2, 7, 11, 15];
let target = 9;
let twoSum = function (nums, target) {
 for (let i = 0; i < nums.length; ++i) {
  for (let j = i + 1; j < nums.length; j++) {
   if (target - nums[i] === nums[j]) {
    return [i, j];
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
  hash.set(target - nums[i], i); // 把计算后的结果设为 key ： 7 ， value： 7
 }
};
```

</p>
</details>

---

# 整数反转

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
(x % 10) 取余 获取 末位数字 ， result \* 10 + (x % 10) 拼接回 result
x / 10 去除末位，| 0 强制转换为 32 位有符号整数。
通过 | 0 取整，无论正负，只移除小数点部分（正数向下取整，负数向上取整）。
result | 0 超过 32 位的整数转换结果不等于自身，可用作溢出判断。

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

# 回文数

判断一个整数是否是回文数。回文数是指正序（从左向右）和倒序（从右向左）读都是一样的整数。

示例 1：

```javascript
输入: 121;
输出: true;
```

示例 2：

```javascript
输入: -121
输出: false
解释: 从左向右读, 为 -121 。 从右向左读, 为 121- 。因此它不是一个回文数。
```

示例 3：

```javascript
输入: 10
输出: false
解释: 从右向左读, 为 01 。因此它不是一个回文数。
```

<details>
  <summary><b>答案</b></summary>
  <p>
    字符串 解题法：
      数字反转后是一摸一样的，返回 true ， 也就是说 把 负数 排除出去， 然后把 正整数反转后判断是否和 参数 一致即可。

```javascript
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
 if (x < 0 || (x % 10 == 0 && x != 0)) return false;

 let t = Number(x.toString().split('').reverse().join(''));

 if (x == t) return true;

 return false;
};
const p = isPalindrome(121);
```

不通过字符串方式 解题法:
  判断 x 是否 大于 初始值 reverseNumber （ 目的是为了判断 遍历是否到达 x 值的一半 ）, 进入循环 ，不断的取出x值的后面几位数，不断抛弃 x 值的后面几位数。
  最后 当数字长度为奇数时，我们可以通过 revertedNumber/10 去除处于中位的数字，由于处于中位的数字不影响回文（它总是与自己相等），所以我们可以简单地将其去除。

```javascript
/**
* @param {number} x
* @return {boolean}
*/
var isPalindrome = function (x) {
 if (x < 0 || (x % 10 == 0 && x != 0)) return false;

 let reverseNumber = 0;
 while (x > reverseNumber) {
  reverseNumber = reverseNumber * 10 + (x % 10);
  x = parseInt(x / 10);
 }
 // 当数字长度为奇数时，我们可以通过 revertedNumber/10 去除处于中位的数字。
 // 例如，当输入为 12321 时，在 while 循环的末尾我们可以得到 x = 12，revertedNumber = 123，
 // 由于处于中位的数字不影响回文（它总是与自己相等），所以我们可以简单地将其去除。
 return x == reverseNumber || x == parseInt(reverseNumber / 10);
};
const p = isPalindrome(121);
```

  </p>
</details>

---

# 罗马数字转整数

罗马数字包含以下七种字符: I， V， X， L，C，D 和 M。

```javascript
    字符          数值
    I             1
    V             5
    X             10
    L             50
    C             100
    D             500
    M             1000
```

例如， 罗马数字 2 写做 II ，即为两个并列的 1。12 写做 XII ，即为 X + II 。 27 写做  XXVII, 即为 XX + V + II 。

通常情况下，罗马数字中小的数字在大的数字的右边。但也存在特例，例如 4 不写做 IIII，而是 IV。数字 1 在数字 5 的左边，所表示的数等于大数 5 减小数 1 得到的数值 4 。同样地，数字 9 表示为 IX。这个特殊的规则只适用于以下六种情况：

- I 可以放在 V (5) 和 X (10) 的左边，来表示 4 和 9。
- X 可以放在 L (50) 和 C (100) 的左边，来表示 40 和 90。
- C 可以放在 D (500) 和 M (1000) 的左边，来表示 400 和 900。

给定一个罗马数字，将其转换成整数。输入确保在 1 到 3999 的范围内。

示例 1：

```javascript
输入: "III"
输出: 3
```

示例 2：

```javascript
输入: "IV"
输出: 4
```

示例 3：

```javascript
输入: "IX"
输出: 9
```

示例 4：

```javascript
输入: "LVIII"
输出: 58
解释: L = 50, V= 5, III = 3.
```

示例 5：

```javascript
输入: "MCMXCIV"
输出: 1994
解释: M = 1000, CM = 900, XC = 90, IV = 4.
```

<details>
  <summary><b>答案</b></summary>
  <p>
    遍历：
        通过示例 寻找到规则 , 字符串 IV , 右边的字符值大于左边的话 ，应该是减法 ， 反之是加法

```javascript
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
  // 罗马数字包含的 七种字符对应的值
  let map = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
 };
 let result = 0;
 for (let i = 0; i < s.length; i++) {
    // 遍历 字符串 ， 判断当前字符 是否小于它的下一位的值
    if(map[s[i]] < map[s[i + 1]]){
      result -= map[s[i]]
    }else{
      result += map[s[i]]
    }
  }
 return result;
};
```

  </p>
</details>

---

# 最长公共前缀

编写一个函数来查找字符串数组中的最长公共前缀。

如果不存在公共前缀，返回空字符串 ""。

示例 1：

```javascript
输入: ["flower","flow","flight"]
输出: "fl"
```

示例 2：

```javascript
输入: ["dog","racecar","car"]
输出: ""
解释: 输入不存在公共前缀。
```

说明:
  所有输入只包含小写字母 a-z 。

<details>
  <summary><b>答案</b></summary>
  <p>

  解题思路:
      双层遍历暴力破解 , 遍历数组中的第一个元素作为前缀的参照物, 第二层遍历从第二个元素开始, 判断是否相等，拼接得到结果(注意 ： 拼接工作应该是在第一层循环处，而不是在第二层里面工作)

```javascript
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
 let res = '';
 if (!strs.length) return res;

 for (let j = 0; j < strs[0].length; j++) {
  for (let i = 1; i < strs.length; i++) {
   if (strs[i][j] != strs[0][j]) return res;
  }
  res += strs[0][j];
 }

 return res;
};

let strs = ['flower', 'flow', 'flight'];

const res = longestCommonPrefix(strs);
```

  </p>
</details>

---

# 有效的括号

给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串是否有效。

有效字符串需满足：

1. 左括号必须用相同类型的右括号闭合。
2. 左括号必须以正确的顺序闭合。
3. 注意空字符串可被认为是有效字符串。

示例 1：

```javascript
输入: "()"
输出: true
```

示例 2：

```javascript
输入: "()[]{}"
输出: true
```

示例 3：

```javascript
输入: "(]"
输出: false
```

示例 4：

```javascript
输入: "([)]"
输出: false
```

示例 5：

```javascript
输入: "{[]}"
输出: true
```

说明:
  所有输入只包含小写字母 a-z 。

<details>
  <summary><b>答案</b></summary>
  <p>

  解题思路:
    维护一个栈
    如果是奇数 ， 一定是 false
    把成对的符合存储成哈希， key 是 左边括号， value 是 右边括号
    遍历字符，首先判断是否是 左边括号， 也就是哈希中的key
    如果是左边括号 压入栈内存
    如果不是 ， 判断当前元素是否跟已经压入栈的元素成一对（别忘了， map中的元素存储为 ： 左边括号 => 右边括号 ， 所以， 只需要取出栈中最后压入的元素去哈希中拿value）
    匹配为一对的话 ， 把栈中最后的元素删除。(例如: '({[]})[]' , 前面三个字符都是左边的括号，那么他们会被依次压入栈中， 遇到第4个字符发现没有，便会进入是否跟最后压入的字符匹配，也就是 [ ， 如果不匹配 ， 整个程序结束，如果匹配， 删除 [ , 进入下一轮遍历,知道栈为空)
    否则 返回false
    最后 判断栈中是否为空， 返回值

```javascript
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
```

  </p>
</details>

---

# 合并两个有序链表

将两个升序链表合并为一个新的 升序 链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。

示例 1：

```javascript
输入：1->2->4, 1->3->4
输出：1->1->2->3->4->4
```

<details>
  <summary><b>答案</b></summary>
  <p>

  解题思路:
    双指针解题。
    循环遍历 , 判断大小归并。

```javascript
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
 // 初始化 一个新的链表
 let newListNode = {
  val: 0,
  next: null
 };
 // 指针
 let pre = newListNode;

 // l1 和 l2 链表不为 null
 while (l1 && l2) {
  // 进入 循环 ， 判断 l1 是否小于 l2
  if(l1.val < l2.val){
   pre.next = l1;
   l1 = l1.next;
  }else {
   pre.next = l2;
   l2 = l2.next;
  }
  // 第二个指针 ， 指向 next 的 内存地址
  pre = pre.next;
 }
 // 最后一个节点要设置 ， 原因： l1 或者 l2 其中一个 为null 的时候就会停止进入循环体， 所以要拿到最后一层
 pre.next = l1 || l2
 // 返回 新链表 的 next
 return newListNode.next
};

let ListNode1 = {
 val: 1,
 next: {
  val: 2,
  next: {
   val: 4,
   next: null,
  },
 },
};

let ListNode2 = {
 val: 1,
 next: {
  val: 3,
  next: {
   val: 4,
   next: null,
  },
 },
};

const res = mergeTwoLists(ListNode1, ListNode2);
```

  解题思路:
    递归解题 , l1 或者 l2 为 null 的时候 结束递归。

```javascript
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

var mergeTwoLists = function (l1, l2) {
 if(!l1) return l2;
 if(!l2) return l1;

 if(l1.val < l2.val){
  l1.next = mergeTwoLists(l1.next , l2)
  return l1
 }else{
  l2.next = mergeTwoLists(l1, l2.next);
  return l2
 }
};



let ListNode1 = {
 val: 1,
 next: {
  val: 2,
  next: {
   val: 4,
   next: null,
  },
 },
};

let ListNode2 = {
 val: 1,
 next: {
  val: 3,
  next: {
   val: 4,
   next: null,
  },
 },
};

const res = mergeTwoLists(ListNode1, ListNode2);
```

  </p>
</details>

---

# 删除排序数组中的重复项

给定一个排序数组，你需要在 原地 删除重复出现的元素，使得每个元素只出现一次，返回移除后数组的新长度。

不要使用额外的数组空间，你必须在 原地 修改输入数组 并在使用 O(1) 额外空间的条件下完成。

示例 1：

```javascript
给定数组 nums = [1,1,2],

函数应该返回新的长度 2, 并且原数组 nums 的前两个元素被修改为 1, 2。

你不需要考虑数组中超出新长度后面的元素。
```

示例 2：

```javascript
给定 nums = [0,0,1,1,1,2,2,3,3,4],

函数应该返回新的长度 5, 并且原数组 nums 的前五个元素被修改为 0, 1, 2, 3, 4。

你不需要考虑数组中超出新长度后面的元素。
```

说明:

为什么返回数值是整数，但输出的答案是数组呢?

请注意，输入数组是以「引用」方式传递的，这意味着在函数里修改输入数组对于调用者是可见的。

你可以想象内部操作如下:

```javascript
// nums 是以“引用”方式传递的。也就是说，不对实参做任何拷贝
int len = removeDuplicates(nums);

// 在函数里修改输入数组对于调用者是可见的。
// 根据你的函数返回的长度, 它会打印出数组中该长度范围内的所有元素。
for (int i = 0; i < len; i++) {
    print(nums[i]);
}
```

<details>
  <summary><b>答案</b></summary>
  <p>

  解题思路:
    双指针解题: 前指针 与 后指针 对比 , 如果相等 前指针不变 ， 后指针继续向后查找， 如果相等， 前后指针向后移动， 并把后指针的值复制给前指针.
    遍历结束后返回数组长度 , 因为 i 是索引位置 ， 所以要加 1 ，才是数组长度

```javascript
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
 }
 return i + 1;
};

const res  = removeDuplicates([1,1,2])
```

  </p>
</details>
