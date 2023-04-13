let arr5 = [
    {
        title:"Level order traversal",
        link:"https://practice.geeksforgeeks.org/problems/level-order-traversal/1",
        diff:"Medium"
    },    
    {
        title:"Reverse Level Order Traversal",
        link:"https://practice.geeksforgeeks.org/problems/reverse-level-order-traversal/1",
        diff:"Easy"
    },
    {
        title:"Height of Binary Tree",
        link:"https://practice.geeksforgeeks.org/problems/height-of-binary-tree/1",
        diff:"Easy"
    },  
    {
        title:"Diameter of a Binary Tree",
        link:"https://practice.geeksforgeeks.org/problems/diameter-of-binary-tree/1",
        diff:"Medium"
    }, 
    {
        title:"Mirror Tree",
        link:"https://practice.geeksforgeeks.org/problems/mirror-tree/1",
        diff:"Easy"
    },
    {
        title:"Inorder Tree Traversal – Iterative and Recursive",
        link:"https://practice.geeksforgeeks.org/problems/inorder-traversal/1",
        diff:"Easy"
    }, 
    {
        title:"Left View of Binary Tree",
        link:"https://practice.geeksforgeeks.org/problems/left-view-of-binary-tree/1",
        diff:"Medium"
    },
    {
        title:"Right View of Binary Tree",
        link:"https://practice.geeksforgeeks.org/problems/right-view-of-binary-tree/1",
        diff:"Easy"
    },
    {
        title:"Top View of Binary Tree",
        link:"https://practice.geeksforgeeks.org/problems/top-view-of-binary-tree/1",
        diff:"Medium"
    },
    {
        title:"Bottom view of the Binary Tree",
        link:"https://practice.geeksforgeeks.org/problems/bottom-view-of-binary-tree/1",
        diff:"Medium"
    },
    {
        title:"ZigZag Tree Traversal",
        link:"https://practice.geeksforgeeks.org/problems/zigzag-tree-traversal/1",
        diff:"Medium"
    },
    {
        title:"Check for Balanced Tree",
        link:"https://practice.geeksforgeeks.org/problems/check-for-balanced-tree/1",
        diff:"Medium"
    },
    {
        title:"Diagonal Traversal of Binary Tree",
        link:"https://practice.geeksforgeeks.org/problems/diagonal-traversal-of-binary-tree/1",
        diff:"Medium"
    },
    {
        title:"Boundary Traversal of binary tree",
        link:"https://practice.geeksforgeeks.org/problems/boundary-traversal-of-binary-tree/1",
        diff:"Medium"
    },
    {
        title:"Construct Binary Tree from String with bracket representation",
        link:"https://practice.geeksforgeeks.org/problems/construct-binary-tree-from-string-with-bracket-representation/0",
        diff:"Medium"
    },
    {
        title:"Binary Tree to DLL",
        link:"https://practice.geeksforgeeks.org/problems/binary-tree-to-dll/1",
        diff:"Hard"
    },
    {
        title:"Transform to Sum Tree",
        link:"https://practice.geeksforgeeks.org/problems/transform-to-sum-tree/1",
        diff:"Easy"
    },
    {
        title:"Construct Tree from Inorder & Preorder",
        link:"https://practice.geeksforgeeks.org/problems/construct-tree-1/1",
        diff:"Hard"
    },
    {
        title:"Minimum swap required to convert binary tree to binary search tree",
        link:"https://practice.geeksforgeeks.org/problems/minimum-swap-required-to-convert-binary-tree-to-binary-search-tree/0?page=1&sortBy=newest&query=page1sortBynewest",
        diff:"Hard"
    },
    {
        title:"Sum Tree",
        link:"https://practice.geeksforgeeks.org/problems/sum-tree/1",
        diff:"Medium"
    },
    {
        title:"Leaf at same level",
        link:"https://practice.geeksforgeeks.org/problems/leaf-at-same-level/1",
        diff:"Easy"
    },
    {
        title:"Duplicate subtree in Binary Tree",
        link:"https://practice.geeksforgeeks.org/problems/duplicate-subtree-in-binary-tree/1",
        diff:"Medium"
    },
    {
        title:"Check Mirror in N-ary tree",
        link:"https://practice.geeksforgeeks.org/problems/check-mirror-in-n-ary-tree1528/1",
        diff:"Medium"
    },
    {
        title:"Sum of the Longest Bloodline of a Tree",
        link:"https://practice.geeksforgeeks.org/problems/sum-of-the-longest-bloodline-of-a-tree/1",
        diff:"Medium"
    },
    {
        title:"Check if a given graph is tree or not",
        link:"https://www.geeksforgeeks.org/check-given-graph-tree/",
        diff:"Medium"
    },
    {
        title:"Find largest subtree sum in a tree",
        link:"https://practice.geeksforgeeks.org/problems/largest-subtree-sum-in-a-tree/1",
        diff:"Medium"
    },    
    {
        title:"Maximum sum of nodes in Binary tree such that no two are adjacent",
        link:"https://practice.geeksforgeeks.org/problems/maximum-sum-of-non-adjacent-nodes/1",
        diff:"Medium"
    },
    {
        title:"K sum path",
        link:"https://practice.geeksforgeeks.org/problems/k-sum-paths/1",
        diff:"Medium"
    },
    {
        title:"Lowest Common Ancestor in a Binary Tree",
        link:"https://practice.geeksforgeeks.org/problems/lowest-common-ancestor-in-a-binary-tree/1",
        diff:"Medium"
    },
    {
        title:"Min distance between two given nodes of a Binary Tree",
        link:"https://practice.geeksforgeeks.org/problems/min-distance-between-two-given-nodes-of-a-binary-tree/1",
        diff:"Medium"
    },
    {
        title:"Kth ancestor of a node in binary tree ",
        link:"https://practice.geeksforgeeks.org/problems/kth-ancestor-in-a-tree/1",
        diff:"Medium"
    },
    {
        title:"Duplicate Subtrees",
        link:"https://practice.geeksforgeeks.org/problems/duplicate-subtrees/1",
        diff:"Hard"
    },
    {
        title:"Check if Tree is Isomorphic",
        link:"https://practice.geeksforgeeks.org/problems/check-if-tree-is-isomorphic/1",
        diff:"Easy"
    },    
]
let table_body = document.querySelector(".table-body");

for(let i=0;i<arr5.length;i++){
    table_body.innerHTML += `
        <tr>
            <td>${i+1}</td>
            <td><a href="${arr5[i].link}">${arr5[i].title}</a></td>
            <td>${arr5[i].diff}</td>
        </tr>
    `;
}