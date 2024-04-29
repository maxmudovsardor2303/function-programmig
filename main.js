// 68-masala  


// function box_item(arr) {
//     const truthy = arr.filter(item => item);
//     const falsy = arr.filter(item => !item);
//     return { truthy, falsy };
// }
// const inputArr = [false, 1, 10, "", null, "sultonqul", 1.13, 0];
// const output = box_item(inputArr);
// console.log(output);


// 69-masala 

// Array.prototype.sum = function() {
//     return this.reduce((acc, curr) => acc + curr, 0);
// };

// const arr = [1, 2, 3, 4, 5 ];
// console.log(arr.sum()); 



// 70- masala 


// String.prototype.item = function() {
//     const vowels = /[aeiouAEIOU]/g;
//     const matches = this.match(vowels);
//     return matches ? matches.length : 0;
// };

// const str = "Hello, World!";
// console.log(str.item());



// 71-masala 

// String.prototype.item = function() {
//     return this.length;
// };

// const str = "Hello World!";
// console.log(str.item()); 


// // 72-masala 


// function exist(board, word) {
//     const rows = board.length;
//     const cols = board[0].length;
//     function dfs(row, col, index) {
//         if (index === word.length) return true;
//         if (row < 0 || col < 0 || row >= rows || col >= cols || board[row][col] !== word[index]) return false;
//         const temp = board[row][col];
//         board[row][col] = '#'; 
//         const found = dfs(row + 1, col, index + 1) ||
//                       dfs(row - 1, col, index + 1) ||
//                       dfs(row, col + 1, index + 1) ||
//                       dfs(row, col - 1, index + 1);
//         board[row][col] = temp; 
//         return found;
//     }
    
//     for (let i = 0; i < rows; i++) {
//         for (let j = 0; j < cols; j++) {
//             if (dfs(i, j, 0)) return true;
//         }
//     }
    
//     return false;
// }

// const board1 = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]];
// const word1 = "ABCCED";
// console.log(exist(board1, word1)); 

// const board2 = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]];
// const word2 = "SEE";
// console.log(exist(board2, word2)); 


// 73-masala 


// 74-masala  

// function rotateMatrix(matrix) {
//     const n = matrix.length;
//     const rotatedMatrix = new Array(n).fill(0).map(() => new Array(n).fill(0));
//     for (let i = 0; i < n; i++) {
//         for (let j = 0; j < n; j++) {
//             rotatedMatrix[j][n - 1 - i] = matrix[i][j];
//         }
//     }
//     return rotatedMatrix;
// }
// const testCases = [
//     [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]],
//     [[1,2,3],[4,5,6],[7,8,9]]
// ];
// testCases.forEach(matrix => {
//     console.log("Input:", matrix);
//     console.log("Output:", rotateMatrix(matrix));
//     console.log();
// });


// 75-masala 

// function item(p, q) {
//     if (p.length !== q.length) {
//         return false;
//     }
//     for (let i = 0; i < p.length; i++) {
//         if (p[i] !== q[i]) {
//             return false;
//         }
//     }
//     return true;
// }
// const testCases = [
//     [[1,2,3], [1,2,3]],
//     [[1,2], [1,null,2]],
//     [[1,2,1], [1,1,2]]
// ];
// testCases.forEach(([p, q]) => {
//     console.log("Input: p =", p, "q =", q);
//     console.log("Output:", item(p, q));
//     console.log();
// });



