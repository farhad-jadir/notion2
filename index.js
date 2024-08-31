// 1
function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
    }
    
    console.log(celsiusToFahrenheit(0)); // 32
    console.log(celsiusToFahrenheit(25)); // 77

// 2
function isEven(num) {
    return num % 2 === 0;
    }
    
    console.log(isEven(4)); // true
    console.log(isEven(7)); // false

// 3
function sum(a, b) {
    return a + b;
    }
    
    console.log(sum(3, 4)); // 7
    console.log(sum(10, 20)); // 30

// 4
function findSmallestNum(arr) {
    return Math.min(...arr);
    }
    
    console.log(findSmallestNum([3, 5, 1, 9])); // 1
    console.log(findSmallestNum([-1, -5, 0, 10])); // -5

// 5
function countVowels(str) {
    let vowels = 'aeiouAEIOU';
    let count = 0;
    for (let char of str) {
    if (vowels.includes(char)) {
    count++;
    }
    }
    return count;
    }
    
    console.log(countVowels("hello world")); // 3
    console.log(countVowels("Javascript")); // 3

// 6
function getFirstElement(arr) {
    return arr[0];
    }
    
    console.log(getFirstElement([1, 2, 3])); // 1
    console.log(getFirstElement(["a", "b", "c"])); // "a"

// 7
function isArrayEmpty(arr) {
    return arr.length === 0;
    }
    
    console.log(isArrayEmpty([])); // true
    console.log(isArrayEmpty([1, 2, 3])); // false

// 8
function factorialize(num) {
    if (num === 0 || num === 1) return 1;
    return num * factorialize(num - 1);
    }
    
    console.log(factorialize(5)); // 120
    console.log(factorialize(7)); // 5040

// 9
function reverseString(str) {
    return str.split('').reverse().join('');
    }
    
    console.log(reverseString("hello")); // "olleh"
    console.log(reverseString("world")); // "dlrow"

// 10
function toLowerCase(str) {
    return str.toLowerCase();
    }
    
    console.log(toLowerCase("HELLO WORLD")); // "hello world"
    console.log(toLowerCase("JavaScript")); // "javascript"