let arr3 = [
    {
        title:"Reverse a linked list",
        link:"https://practice.geeksforgeeks.org/problems/reverse-a-linked-list/1",
        diff:"Easy"
    },
    {
        title:"Reverse a Linked List in groups of given size",
        link:"https://practice.geeksforgeeks.org/problems/reverse-a-linked-list-in-groups-of-given-size/1",
        diff:"Medium"
    },
    {
        title:"Detect Loop in linked list",
        link:"https://practice.geeksforgeeks.org/problems/detect-loop-in-linked-list/1",
        diff:"Medium"
    },
    {
        title:"Remove loop in Linked List",
        link:"https://practice.geeksforgeeks.org/problems/remove-loop-in-linked-list/1",
        diff:"Medium"
    },
    {
        title:"Find first node of loop in a linked list",
        link:"https://practice.geeksforgeeks.org/problems/44bb5287b98797782162ffe3d2201621f6343a4b/1",
        diff:"Medium"
    },
    {
        title:"Remove duplicate element from sorted Linked List",
        link:"https://practice.geeksforgeeks.org/problems/remove-duplicate-element-from-sorted-linked-list/1",
        diff:"Easy"
    },
    {
        title:"Remove duplicates from an unsorted linked list",
        link:"https://practice.geeksforgeeks.org/problems/remove-duplicates-from-an-unsorted-linked-list/1",
        diff:"Easy"
    },
    {
        title:"Move last element to front of a given Linked List",
        link:"https://practice.geeksforgeeks.org/problems/move-last-element-to-front-of-a-linked-list/1",
        diff:"Basic"
    },
    {
        title:"Add 1 to a number represented as linked list",
        link:"https://practice.geeksforgeeks.org/problems/add-1-to-a-number-represented-as-linked-list/1",
        diff:"Easy"
    },
    {
        title:"Add two numbers represented by linked lists",
        link:"https://practice.geeksforgeeks.org/problems/add-two-numbers-represented-by-linked-lists/1",
        diff:"Medium"
    },
    {
        title:"Intersection of two sorted Linked lists",
        link:"https://practice.geeksforgeeks.org/problems/intersection-of-two-sorted-linked-lists/1",
        diff:"Easy"
    },
    {
        title:"Intersection Point in Y Shaped Linked Lists",
        link:"https://practice.geeksforgeeks.org/problems/intersection-point-in-y-shapped-linked-lists/1",
        diff:"Medium"
    },
    {
        title:"Merge Sort for Linked List",
        link:"https://practice.geeksforgeeks.org/problems/sort-a-linked-list/1",
        diff:"Medium"
    },
    {
        title:"Quick Sort on Linked List",
        link:"https://practice.geeksforgeeks.org/problems/quick-sort-on-linked-list/1",
        diff:"Medium"
    },
    {
        title:"Find the middle Element of a linked list.",
        link:"https://leetcode.com/problems/middle-of-the-linked-list/",
        diff:"Easy"
    },
    {
        title:"Check If Circular Linked List",
        link:"https://practice.geeksforgeeks.org/problems/circular-linked-list/1",
        diff:"Easy"
    },
    {
        title:"Split a Circular Linked List into two halves",
        link:"https://practice.geeksforgeeks.org/problems/split-a-circular-linked-list-into-two-halves/1",
        diff:"Easy"
    },
    {
        title:"Check if Linked List is Palindrome",
        link:"https://practice.geeksforgeeks.org/problems/check-if-linked-list-is-pallindrome/1",
        diff:"Medium"
    },
    {
        title:"Deletion from a Circular Linked List",
        link:"https://practice.geeksforgeeks.org/problems/deletion-and-reverse-in-linked-list/1",
        diff:"Easy"
    },
    {
        title:"Reverse a Doubly Linked List",
        link:"https://practice.geeksforgeeks.org/problems/reverse-a-doubly-linked-list/1",
        diff:"Easy"
    },
    {
        title:"Find pairs with given sum in doubly linked list",
        link:"https://practice.geeksforgeeks.org/problems/find-pairs-with-given-sum-in-doubly-linked-list/1",
        diff:"Easy"
    },
    {
        title:"Count Triplets",
        link:"https://practice.geeksforgeeks.org/problems/87f12e5c728d69a5322634776b54c75897d14daa/1",
        diff:"Medium"
    },
    {
        title:"Sort a k sorted doubly linked list",
        link:"https://www.codingninjas.com/codestudio/problems/sort-a-k-sorted-doubly-linked-list_1118118",
        diff:"Hard"
    },
    {
        title:"Rotate Doubly linked list by N nodes",
        link:"https://practice.geeksforgeeks.org/problems/rotate-a-linked-list/1",
        diff:"Medium"
    },
    {
        title:"Flattening a Linked List",
        link:"https://practice.geeksforgeeks.org/problems/flattening-a-linked-list/1",
        diff:"Medium"
    },
    {
        title:"Given a linked list of 0s, 1s and 2s, sort it.",
        link:"https://practice.geeksforgeeks.org/problems/given-a-linked-list-of-0s-1s-and-2s-sort-it/1",
        diff:"Medium"
    },
    {
        title:"Clone a linked list with next and random pointer",
        link:"https://practice.geeksforgeeks.org/problems/clone-a-linked-list-with-next-and-random-pointer/1",
        diff:"Hard"
    },
    {
        title:"Merge K sorted linked lists",
        link:"https://practice.geeksforgeeks.org/problems/merge-k-sorted-linked-lists/1",
        diff:"Medium"
    },
    {
        title:"Multiply two linked lists",
        link:"https://practice.geeksforgeeks.org/problems/multiply-two-linked-lists/1",
        diff:"Easy"
    },
    {
        title:"Delete nodes having greater value on right",
        link:"https://practice.geeksforgeeks.org/problems/delete-nodes-having-greater-value-on-right/1",
        diff:"Medium"
    },
    {
        title:"Segregate even and odd nodes in a Link List",
        link:"https://practice.geeksforgeeks.org/problems/segregate-even-and-odd-nodes-in-a-linked-list5035/1",
        diff:"Medium"
    },
    {
        title:"Nth node from end of linked list",
        link:"https://practice.geeksforgeeks.org/problems/nth-node-from-end-of-linked-list/1",
        diff:"Easy"
    },
    {
        title:"First non-repeating character in a stream",
        link:"https://practice.geeksforgeeks.org/problems/first-non-repeating-character-in-a-stream1216/1",
        diff:"Medium"
    }    
]



let table_body = document.querySelector(".table-body");
for(let i=0;i<arr3.length;i++){
    table_body.innerHTML += `
        <tr>
            <td>${i+1}</td>
            <td><a href="${arr3[i].link}">${arr3[i].title}</a></td>
            <td>${arr3[i].diff}</td>
        </tr>

    `
}
