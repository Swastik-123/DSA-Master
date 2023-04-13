
let arr6 = [
    {
        title:"Insert a node in a BST",
        link:"https://practice.geeksforgeeks.org/problems/insert-a-node-in-a-bst/1",
        diff:"Easy"
    },
    {
        title:"Delete Node in a BST",
        link:"https://leetcode.com/problems/delete-node-in-a-bst/",
        diff:"Medium"
    },
    {
        title:"Minimum element in BST",
        link:"https://practice.geeksforgeeks.org/problems/minimum-element-in-bst/1",
        diff:"Easy"
    },
    {
        title:"Predecessor and Successor",
        link:"https://practice.geeksforgeeks.org/problems/predecessor-and-successor/1",
        diff:"Medium"
    },
    {
        title:"Check for BST",
        link:"https://practice.geeksforgeeks.org/problems/check-for-bst/1",
        diff:"Easy"
    },
    {
        title:"Populate Inorder Successor for all nodes",
        link:"https://practice.geeksforgeeks.org/problems/populate-inorder-successor-for-all-nodes/1",
        diff:"Medium"
    },
    {
        title:"Lowest Common Ancestor in a BST",
        link:"https://practice.geeksforgeeks.org/problems/lowest-common-ancestor-in-a-bst/1",
        diff:"Medium"
    },
    {
        title:"Preorder Traversal and BST",
        link:"https://practice.geeksforgeeks.org/problems/preorder-traversal-and-bst4006/1",
        diff:"Medium"
    },
    {
        title:"Binary Tree to BST",
        link:"https://practice.geeksforgeeks.org/problems/binary-tree-to-bst/1",
        diff:"Medium"
    },
    {
        title:"Normal BST to Balanced BST",
        link:"https://practice.geeksforgeeks.org/problems/normal-bst-to-balanced-bst/1",
        diff:"Medium"
    },
    {
        title:"Merge two BST 's",
        link:"https://practice.geeksforgeeks.org/problems/merge-two-bst-s/1",
        diff:"Hard"
    },
    {
        title:"Kth largest element in BST",
        link:"https://practice.geeksforgeeks.org/problems/kth-largest-element-in-bst/1",
        diff:"Easy"
    },
    {
        title:"k-th smallest element in BST",
        link:"https://practice.geeksforgeeks.org/problems/find-k-th-smallest-element-in-bst/1",
        diff:"Medium"
    },
    {
        title:"Brothers From Different Roots",
        link:"https://practice.geeksforgeeks.org/problems/brothers-from-different-root/1",
        diff:"Easy"
    },
    {
        title:"Median of BST",
        link:"https://practice.geeksforgeeks.org/problems/median-of-bst/1",
        diff:"Easy"
    },
    {
        title:"Count BST nodes that lie in a given range",
        link:"https://practice.geeksforgeeks.org/problems/count-bst-nodes-that-lie-in-a-given-range/1",
        diff:"Mediun"
    },
    {
        title:"Replace every element with the least greater element on its right",
        link:"https://practice.geeksforgeeks.org/problems/replace-every-element-with-the-least-greater-element-on-its-right/1",
        diff:"Medium"
    },
    {
        title:"Given n appointments, find all conflicting appointments",
        link:"https://www.geeksforgeeks.org/given-n-appointments-find-conflicting-appointments/",
        diff:"Hard"
    },
    {
        title:"Preorder to PostOrder",
        link:"https://practice.geeksforgeeks.org/problems/preorder-to-postorder4423/1",
        diff:"Medium"
    },
    {
        title:"Check whether BST contains Dead End",
        link:"https://practice.geeksforgeeks.org/problems/check-whether-bst-contains-dead-end/1",
        diff:"Easy"
    },
    {
        title:"Largest BST",
        link:"https://practice.geeksforgeeks.org/problems/largest-bst/1",
        diff:"Easy"
    },
    {
        title:"Flatten binary tree to linked list",
        link:"https://practice.geeksforgeeks.org/problems/flatten-binary-tree-to-linked-list/1",
        diff:"Medium"
    },

]




let table_body = document.querySelector(".table-body");

for(let i=0;i<arr6.length;i++){
    table_body.innerHTML += `
        <tr>
            <td>${i+1}</td>
            <td><a href="${arr6[i].link}">${arr6[i].title}</a></td>
            <td>${arr6[i].diff}</td>
        </tr>
    `;
}

