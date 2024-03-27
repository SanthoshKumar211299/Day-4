//a)print odd numbers in an array
//anonymous function
/*var result=[];
var a=function odd(arr){
    for(var i=0;i<=arr.length-1;i=i+1){
        if(arr[i]%2!==0){
            result.push(arr[i]);

        }
    }
    return result;
}
console.log(a([1,2,3,4,5,6,7,8,9]))*/
//IIFE Function
/*var result = [];
(function (arr) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      result.push(arr[i]);
    }
  }
  console.log(result);
})([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);*/
//Arrow function
/*var result =[];
 var odd=(arr)=>{
  for(var i=0;i<arr.length;i++){
    if(arr[i]%2!==0)
    {
         result.push(arr[i])
    }
  }
  return result
}
console.log(odd([1,2,3,4,5,6,7,8,9,10]));*/
//---------------------------------------------
// b)convert all the strings to title caps in a string array
//i) anonymous function
/*var toUpperCase=function titleCase(str) {
    str = str.toLowerCase().split(' ');
    for (let i = 0; i < str.length; i++) {
        str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
    }
    return str.join(' ');
}
console.log(toUpperCase("convert titlecart into touppercase"));*/
//ii) IIFE FUNCTION
/*(function() {
    function titleCase(str) {
      str = str.toLowerCase().split(' ');
      for (var i = 0; i < str.length; i++) {
        str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
      }
      return str.join(' ');
    }
  
    var result = titleCase("convert titlecart into touppercase");
    console.log(result);
  })();*/
  //iii) Arrow function
  /*const titleCase = (str) => {
    str = str.toLowerCase().split(' ');
    for (let i = 0; i < str.length; i++) {
      str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
    }
    return str.join(' ');
  };
  
  const result = titleCase("convert titlecart into touppercase");
  console.log(result);*/
  // c)sum of all numbers in an array
  //i) anonymous function
  /*let numbers = [1, 2, 3, 4, 5];

  let sum = function(arr) {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
      total += arr[i];
    }
    return total;
  };
  
  console.log(sum(numbers));*/
  //ii)IIFE Function
/*let numbers = [1, 2, 3, 4, 5];

let sum = (function(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return total;
})(numbers);

console.log(sum);*/
  //iii)Arrow Function
/*let numbers = [1, 2, 3, 4, 5];

let sum = (arr) => {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return total;
};

console.log(sum(numbers));*/
//d)Returns  all prime numbers in an array 
//Anonymous function
/*const numbers = [2, 3, 4, 5, 6, 7, 8, 9, 10];

const primeNumbers = function(arr) {
    return arr.filter(function(num) {
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) return false;
        }
        return num > 1;
    });
};

console.log(primeNumbers(numbers));*/
//IIFE Function
/*const numbers = [2, 3, 4, 5, 6, 7, 8, 9, 10];

const primeNumbers = (function(arr) {
    return arr.filter(function(num) {
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) return false;
        }
        return num > 1;
    });
})(numbers);

console.log(primeNumbers);*/
//Arrow Function
/*const numbers = [2, 3, 4, 5, 6, 7, 8, 9, 10];

const primeNumbers = (arr) => {
    return arr.filter((num) => {
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) return false;
        }
        return num > 1;
    });
};

console.log(primeNumbers(numbers));*/
//e)Return the pallindrome in an array 
//Anonymous Function
/*const isPalindrome = function(str) {
    const reversedStr = str.split('').reverse().join('');
    return str === reversedStr;
  };
  
  const words = ['radar', 'hello', 'level', 'world', 'deified'];
  
  const palindromes = words.filter(isPalindrome);
  console.log(palindromes);*/
//IIFE Function
/*const palindromes = (function(arr) {
    const isPalindrome = function(str) {
      const reversedStr = str.split('').reverse().join('');
      return str === reversedStr;
    };
  
    return arr.filter(isPalindrome);
  })(['radar', 'hello', 'level', 'world', 'deified']);
  
  console.log(palindromes);*/
//Arrow Function
/*const palindromes = ((arr) => {
    const isPalindrome = (str) => {
      const reversedStr = str.split('').reverse().join('');
      return str === reversedStr;
    };
  
    return arr.filter(isPalindrome);
  })(['radar', 'hello', 'level', 'world', 'deified']);
  
  console.log(palindromes);*/
//f)Return  median of two sorted arrays of the same size
  //anonymous function
  /*
  const findMedianSortedArrays = function(nums1, nums2) {
    const mergedArray = [...nums1, ...nums2].sort((a, b) => a - b);
    const length = mergedArray.length;
    
    if (length % 2 === 0) {
      const midIndex = length / 2;
      return (mergedArray[midIndex - 1] + mergedArray[midIndex]) / 2;
    } else {
      const midIndex = Math.floor(length / 2);
      return mergedArray[midIndex];
    }
  };
  
  const nums1 = [1, 3, 5];
  const nums2 = [2, 4, 6];
  
  console.log(findMedianSortedArrays(nums1, nums2));
  */
//IIFE Function
/*
const median = (function(nums1, nums2) {
    const mergedArray = [...nums1, ...nums2].sort((a, b) => a - b);
    const length = mergedArray.length;
    
    if (length % 2 === 0) {
      const midIndex = length / 2;
      return (mergedArray[midIndex - 1] + mergedArray[midIndex]) / 2;
    } else {
      const midIndex = Math.floor(length / 2);
      return mergedArray[midIndex];
    }
  })([1, 3, 5], [2, 4, 6]);
  
  console.log(median);
  */
 //g)remove the duplicates of an array
 //Anonymous function
/* 
 const removeDuplicates = function(arr) {
    return arr.filter((value, index, self) => self.indexOf(value) === index);
  };
  
  const arrayWithDuplicates = [1, 2, 3, 4, 3, 2, 5, 6, 1];
  const arrayWithoutDuplicates = removeDuplicates(arrayWithDuplicates);
  console.log(arrayWithoutDuplicates); 
  */
 //IIFE Function
 /*
 const arrayWithoutDuplicates = (function(arr) {
    return arr.filter((value, index, self) => self.indexOf(value) === index);
  })([1, 2, 3, 4, 3, 2, 5, 6, 1]);
  
  */
// h)rorate an array by k times
//anonymous function
/*
  const rotateArray = function(arr, k) {
    const n = arr.length;
    const rotations = k % n;
    const rotatedArray = [...arr.slice(rotations), ...arr.slice(0, rotations)];
    return rotatedArray;
  };
  
  const arr = [1, 2, 3, 4, 5];
  const k = 2;
  const rotatedArray = rotateArray(arr, k);
  console.log(rotatedArray); */
  //IIFE function
 /* const rotatedArray = (function(arr, k) {
    const n = arr.length;
    const rotations = k % n;
    return [...arr.slice(rotations), ...arr.slice(0, rotations)];
  })([1, 2, 3, 4, 5], 2);
  
  console.log(rotatedArray); */
  
  
  
  
  

  
