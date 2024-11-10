// function patternPrinting(N) {
//     // Outer loop for each row
//     for (let i = 1; i <= N; i++) {
//         let row = "";
//         // Inner loop for each column
//         for (let j = N; j >= i; j--) {
//             row += "*";
//         }
//         console.log(row);  // Print each row after constructing it
//     }
// }

// patternPrinting(5);

// function isPrime(num) {
//     if (num <= 1) return false;
//     for (let i = 2; i <= Math.sqrt(num); i++) {  // Start from 2
//         if (num % i === 0) {
//             return false;
//         }
//     }
//     return true;  // Moved outside the loop
// }

// function primeSum(n) {
//     let sum = 0;
//     for (let i = 2; i <= n; i++) {
//         if (isPrime(i)) {
//             sum += i;
//         }
//     }
//     return sum;
// }

// const n = 10;
// console.log("Sum of primes up to", n, "is:", primeSum(n));


// Function to check if a number is prime


// Example usage

// function alternatePrimeSum(num)
// {
//     let sum=0;
//     let count=0;

//     for(let i=2;i<=num;i++)
//     {
//         let isPrime=true;

//         for(j=2;j<=Math.sqrt(i);j++)
//         {
//             if(i%j===0)
//             {
//                 isPrime=false;
//                 break;
//             }
//         }
//         if(isPrime)
//         {
//             if(count %2===0)
//             {
//                 sum=sum+i;
//             }
//             count ++;
//         }
//     }
//     return sum;
// }
// console.log(alternatePrimeSum(20));


// function firstBigger(n, arr, q, queries) {
//     // Sort the array in ascending order
//     arr.sort((a, b) => a - b);
  
//     // Initialize a result array to store the answers for each query
//     const results = [];
  
//     // Iterate through each query
//     for (let i = 0; i < q; i++) {
//       const k = queries[i];
  
//       // Use binary search to find the first number greater than k
//       let left = 0;
//       let right = n - 1;
//       let index = -1;
  
//       while (left <= right) {
//         const mid = Math.floor((left + right) / 2);
  
//         if (arr[mid] > k) {
//           index = mid;
//           right = mid - 1;
//         } else {
//           left = mid + 1;
//         }
//       }
  
//       results.push(index !== -1 ? arr[index] : -1);
//     }
  
//     return results;
//   }

// Sample input
// const n = 10;
// const arr = [13, 89, 81, 66, 81, 63, 71, 76, 73, 81];
// const q = 2;
// const queries = [65, 15];

// // Call the function and print the results
// const results = firstBigger(n, arr, q, queries);
// console.log(results); // Output: [66, 63]
 

// function findMinAndMax(arr) {
//     // Sort the array in ascending order
//     arr.sort((a, b) => a - b);
  
//     // Find the distinct minimum and maximum values
//     const distinctMin = new Set(arr.slice(0, 3));
//     const distinctMax = new Set(arr.slice(-3));
  
//     // Print the results based on the number of distinct values
//     if (distinctMin.size >= 3) {
//       console.log([...distinctMin].slice(0, 3).join(' '));
//     } else {
//       console.log("Not Possible");
//     }
  
//     if (distinctMax.size >= 3) {
//       console.log([...distinctMax].slice(-3).join(' '));
//     } else {
//       console.log("Not Possible");
//     }
//   }
  
//   // Example usage:
//   const arr = [1, 2, 3, 4, 2, 1, 6, 5];
//   findMinAndMax(arr);


// function findMinAndMax(arr) {
//     const sortedArr = [...arr].sort((a, b) => a - b);
//     const min3 = sortedArr.slice(0, 3);
//     const max3 = sortedArr.slice(-3);
  
//     if (min3.length === 3) {
//       console.log(min3.join(' '));
//     } else {
//       console.log("Not Possible");
//     }
  
//     if (max3.length === 3) {
//       console.log(max3.join(' '));
//     } else {
//       console.log("Not Possible");
//     }
//   }
  
//   // Example usage:
//   const arr = [1, 2, 3, 4, 2, 1, 6, 5];
//   findMinAndMax(arr);
  
function findMinAndMax(arr) {
    // Remove duplicates by converting the array to a Set, then back to an array
    const uniqueArr = [...new Set(arr)];
  
    // Sort the unique elements in ascending order
    uniqueArr.sort((a, b) => a - b);
  
    // Extract the first 3 and last 3 elements
    const min3 = uniqueArr.slice(0, 3);
    const max3 = uniqueArr.slice(-3);
  
    // Print the three smallest and three largest elements on separate lines
    console.log(min3.join(' '));
    console.log(max3.join(' '));
  }
  
  // Example usage
  findMinAndMax([1, 2, 3, 4, 2, 1, 6, 5]);
  
  
  
  
  

