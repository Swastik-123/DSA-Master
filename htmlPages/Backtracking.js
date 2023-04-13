
let arr7 = [
    {
        title:"Rat in a Maze Problem",
        link:"https://practice.geeksforgeeks.org/problems/rat-in-a-maze-problem/1",
        diff:"Medium"
    },
    {
        title:"N-Queen Problem",
        link:"https://practice.geeksforgeeks.org/problems/n-queen-problem0315/1",
        diff:"Hard"
    },
    {
        title:"Word Break - Part 2",
        link:"https://practice.geeksforgeeks.org/problems/word-break-part-23249/1",
        diff:"Hard"
    },
    {
        title:" Remove Invalid Parentheses",
        link:"https://leetcode.com/problems/remove-invalid-parentheses/",
        diff:"Hard"
    },
    {
        title:"Solve the Sudoku",
        link:"https://practice.geeksforgeeks.org/problems/solve-the-sudoku-1587115621/1",
        diff:"Hard"
    },
    {
        title:"M-Coloring Problem",
        link:"https://practice.geeksforgeeks.org/problems/m-coloring-problem-1587115620/1",
        diff:"Medium"
    },
    {
        title:"Find all possible palindromic partitions of a String",
        link:"https://practice.geeksforgeeks.org/problems/find-all-possible-palindromic-partitions-of-a-string/1",
        diff:"Hard"
    },
    {
        title:"Partition Equal Subset Sum",
        link:"https://practice.geeksforgeeks.org/problems/subset-sum-problem2014/1",
        diff:"Medium"
    },
    {
        title:"Knight Walk",
        link:"https://practice.geeksforgeeks.org/problems/knight-walk4521/1",
        diff:"Medium"
    },
    {
        title:"Tug of War",
        link:"https://www.codingninjas.com/codestudio/problems/tug-of-war_985253",
        diff:"Medium"
    },
    {
        title:"Find shortest safe route in a matrix",
        link:"https://practice.geeksforgeeks.org/problems/find-shortest-safe-route-in-a-matrix/0?page=1&sortBy=newest&query=page1sortBynewest",
        diff:"Medium"
    },
    {
        title:"Combination Sum",
        link:"https://practice.geeksforgeeks.org/problems/combination-sum-1587115620/1",
        diff:"Medium"
    },
    {
        title:"Largest number in K swaps",
        link:"https://practice.geeksforgeeks.org/problems/largest-number-in-k-swaps-1587115620/1",
        diff:"Medium"
    },
    {
        title:"Permutations of a given string",
        link:"https://practice.geeksforgeeks.org/problems/permutations-of-a-given-string2041/1",
        diff:"Hard"
    },
    {
        title:"Path of greater than equal to k length",
        link:"https://practice.geeksforgeeks.org/problems/path-of-greater-than-equal-to-k-length1034/1",
        diff:"Hard"
    },
    {
        title:"Longest Possible Route in a Matrix with Hurdles",
        link:"https://practice.geeksforgeeks.org/problems/longest-possible-route-in-a-matrix-with-hurdles/1",
        diff:"Hard"
    },
    {
        title:"Print all possible paths from top left to bottom right of a mXn matrix",
        link:"https://www.geeksforgeeks.org/print-all-possible-paths-from-top-left-to-bottom-right-of-a-mxn-matrix/",
        diff:"Medium"
    },
    {
        title:"Partition array to K subsets",
        link:"https://practice.geeksforgeeks.org/problems/partition-array-to-k-subsets/1",
        diff:"Hard"
    },
    {
        title:"Find the K-th Permutation Sequence of first N natural numbers",
        link:"https://www.codingninjas.com/codestudio/problems/k-th-permutation-sequence-of-first-n-natural-numbers_1164403",
        diff:"Hard"
    }
]




let table_body = document.querySelector(".table-body");

for(let i=0;i<arr7.length;i++){
    table_body.innerHTML += `
        <tr>
            <td>${i+1}</td>
            <td><a href="${arr7[i].link}">${arr7[i].title}</a></td>
            <td>${arr7[i].diff}</td>
        </tr>
    `;
}

