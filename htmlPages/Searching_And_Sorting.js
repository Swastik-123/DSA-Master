let arr4 = [
    {
        title:"First and last occurrences of x",
        link:"https://practice.geeksforgeeks.org/problems/first-and-last-occurrences-of-x3116/1",
        diff:"Easy"
    },
    {
        title:"Search in Rotated Sorted Array",
        link:"https://leetcode.com/problems/search-in-rotated-sorted-array/",
        diff:"Medium"
    },
    {
        title:"Count Squares",
        link:"https://practice.geeksforgeeks.org/problems/count-squares3649/1",
        diff:"Basic"
    },
    {
        title:"Middle of Three",
        link:"https://practice.geeksforgeeks.org/problems/middle-of-three2926/1",
        diff:"Basic"
    },
    {
        title:"Optimum location of point to minimize total distance",
        link:"https://practice.geeksforgeeks.org/problems/optimum-location-of-point-to-minimize-total-distance/1",
        diff:"Hard"
    },
    {
        title:"Find Missing And Repeating",
        link:"https://practice.geeksforgeeks.org/problems/find-missing-and-repeating2512/1",
        diff:"Medium"
    },
    {
        title:"Majority Element",
        link:"https://practice.geeksforgeeks.org/problems/majority-element-1587115620/1",
        diff:"Medium"
    },
    {
        title:"Searching in an array where adjacent differ by at most k",
        link:"https://practice.geeksforgeeks.org/problems/searching-in-an-array-where-adjacent-differ-by-at-most-k0456/1",
        diff:"Easy"
    },
    {
        title:"Find Pair Given Difference",
        link:"https://practice.geeksforgeeks.org/problems/find-pair-given-difference1559/1",
        diff:"Medium"
    },
    {
        title:"Find All Four Sum Numbers",
        link:"https://practice.geeksforgeeks.org/problems/find-all-four-sum-numbers1732/1",
        diff:"Medium"
    },
    {
        title:"Stickler Thief",
        link:"https://practice.geeksforgeeks.org/problems/stickler-theif-1587115621/1",
        diff:"Medium"
    },
    {
        title:"Count triplets with sum smaller than X",
        link:"https://practice.geeksforgeeks.org/problems/count-triplets-with-sum-smaller-than-x5549/1",
        diff:"Medium"
    },
    {
        title:"Merge Sorted Array",
        link:"https://leetcode.com/problems/merge-sorted-array/",
        diff:"Easy"
    },
    {
        title:"Zero Sum Subarrays",
        link:"https://practice.geeksforgeeks.org/problems/zero-sum-subarrays1825/1",
        diff:"Medium"
    },
    {
        title:"Product array puzzle",
        link:"https://practice.geeksforgeeks.org/problems/product-array-puzzle4525/1",
        diff:"Easy"
    },
    {
        title:"Sort by Set Bit Count",
        link:"https://practice.geeksforgeeks.org/problems/sort-by-set-bit-count1153/1",
        diff:"Easy"
    },
    {
        title:"Minimum Swaps to Sort",
        link:"https://practice.geeksforgeeks.org/problems/minimum-swaps/1",
        diff:"Medium"
    },
    {
        title:"Rasta and Kheshtak",
        link:"https://www.hackerearth.com/practice/algorithms/searching/binary-search/practice-problems/algorithm/rasta-and-kheshtak/",
        diff:"Medium"
    },
    {
        title:"Kth smallest number again",
        link:"https://www.hackerearth.com/practice/algorithms/searching/binary-search/practice-problems/algorithm/kth-smallest-number-again-2/",
        diff:"Medium"
    },
    {
        title:"K-th element of two sorted Arrays",
        link:"https://practice.geeksforgeeks.org/problems/k-th-element-of-two-sorted-array1317/1",
        diff:"Medium"
    },
    {
        title:"Aggressive cows",
        link:"https://www.spoj.com/problems/AGGRCOW/",
        diff:"Medium"
    },
    {
        title:"Allocate minimum number of pages",
        link:"https://practice.geeksforgeeks.org/problems/allocate-minimum-number-of-pages0937/1",
        diff:"Hard"
    },
    {
        title:"EKO - Eko",
        link:"https://www.spoj.com/problems/EKO/",
        diff:"Hard"
    },
    {
        title:"Job Scheduling Algo",
        link:"https://www.geeksforgeeks.org/weighted-job-scheduling-log-n-time/",
        diff:"Medium"
    },
    {
        title:"Arithmetic Number",
        link:"https://practice.geeksforgeeks.org/problems/arithmetic-number2815/1",
        diff:"Easy"
    },
    {
        title:"Smallest number with atleastn trailing zeroes infactorial",
        link:"https://practice.geeksforgeeks.org/problems/smallest-factorial-number5929/1",
        diff:"Medium"
    },
    {
        title:"The Painter's Partition Problem-II",
        link:"https://practice.geeksforgeeks.org/problems/the-painters-partition-problem1535/1",
        diff:"Hard"
    },
    {
        title:"Roti and Prata",
        link:"https://www.spoj.com/problems/PRATA/",
        diff:"Hard"
    },
    {
        title:"The Double HeLiX",
        link:"https://www.spoj.com/problems/ANARC05B/",
        diff:"Hard"
    },
    {
        title:"Subset Sums",
        link:"https://www.spoj.com/problems/SUBSUMS/",
        diff:"Medium"
    },
    {
        title:"Count Inversions",
        link:"https://practice.geeksforgeeks.org/problems/inversion-of-array-1587115620/1",
        diff:"Medium"
    },
    {
        title:"Place Merge Sort",
        link:"https://www.geeksforgeeks.org/in-place-merge-sort/",
        diff:"Hard"
    },
]

let t_body = document.querySelector(".table-body");
for(let i=0;i<arr4.length;i++){
    t_body.innerHTML += `
            <tr>
                <td>${i+1}</td>
                <td><a href="${arr4[i].link}">${arr4[i].title}</a></td>
                <td>${arr4[i].diff}</td>
            </tr>
        `
}


