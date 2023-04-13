
let arr1 = [
    {
        title:"Building a Heap",
        link:"https://practice.geeksforgeeks.org/problems/operations-on-binary-min-heap/1",
        diff:"Medium"
    },
    {
        title:"Heap Sort",
        link:"https://practice.geeksforgeeks.org/problems/heap-sort/1",
        diff:"Medium"
    },
    {
        title:"IPL 2021 - Match Day 2",
        link:"https://practice.geeksforgeeks.org/problems/deee0e8cf9910e7219f663c18d6d640ea0b87f87/1",
        diff:"Medium"
    },
    {
        title:"k largest elements",
        link:"https://practice.geeksforgeeks.org/problems/k-largest-elements4206/1",
        diff:"Medium"
    },
    {
        title:"Kth smallest element",
        link:"https://practice.geeksforgeeks.org/problems/kth-smallest-element5635/1",
        diff:"Medium"
    },
    {
        title:"Merge k Sorted Arrays",
        link:"https://practice.geeksforgeeks.org/problems/merge-k-sorted-arrays/1",
        diff:"Medium"
    },
    {
        title:"Merge two binary Max heaps",
        link:"https://practice.geeksforgeeks.org/problems/merge-two-binary-max-heap0144/1",
        diff:"Easy"
    },
    {
        title:"K-th Largest Sum Contiguous Subarray",
        link:"https://practice.geeksforgeeks.org/problems/k-th-largest-sum-contiguous-subarray/1",
        diff:"Medium"
    },
    {
        title:"Reorganize String",
        link:"https://leetcode.com/problems/reorganize-string/",
        diff:"Medium"
    },
    {
        title:"Merge K sorted linked lists",
        link:"https://practice.geeksforgeeks.org/problems/merge-k-sorted-linked-lists/1",
        diff:"Medium"
    },
    {
        title:"Smallest range in K lists",
        link:"https://practice.geeksforgeeks.org/problems/find-smallest-range-containing-elements-from-k-lists/1",
        diff:"Hard"
    },
    {
        title:"Find median in a stream",
        link:"https://practice.geeksforgeeks.org/problems/find-median-in-a-stream-1587115620/1",
        diff:"Hard"
    },
    {
        title:"Is Binary Tree Heap",
        link:"https://practice.geeksforgeeks.org/problems/is-binary-tree-heap/1",
        diff:"Hard"
    },
    {
        title:"Minimum Cost of ropes",
        link:"https://practice.geeksforgeeks.org/problems/minimum-cost-of-ropes-1587115620/1",
        diff:"Easy"
    },
    {
        title:"Convert BST to Min Heap",
        link:"https://www.codingninjas.com/codestudio/problems/convert-bst-to-min-heap_920498",
        diff:"Hard"
    },
    {
        title:"Convert Min Heap to Max Heap",
        link:"https://practice.geeksforgeeks.org/problems/convert-min-heap-to-max-heap-1666385109/1?page=1&sortBy=newest&query=page1sortBynewest",
        diff:"Medium"
    },
    {
        title:"Rearrange characters",
        link:"https://practice.geeksforgeeks.org/problems/rearrange-characters4649/1",
        diff:"Medium"
    },
    {
        title:"Minimum sum",
        link:"https://practice.geeksforgeeks.org/problems/minimum-sum4058/1",
        diff:"Medium"
    }
]


let table_body = document.querySelector(".table-body");

for(let i=0;i<arr1.length;i++){
    table_body.innerHTML += `
        <tr>
            <td>${i+1}</td>
            <td><a href="${arr1[i].link}">${arr1[i].title}</a></td>
            <td>${arr1[i].diff}</td>
        </tr>
    `;
}