/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  if(x < 0) return false
  let t = x.toString().split('').reverse().join('')
  
  if(x == t) return true

  return false
};
const p = isPalindrome(121)
console.log('%c 🥞 p: ', 'font-size:20px;background-color: #B03734;color:#fff;', p);
