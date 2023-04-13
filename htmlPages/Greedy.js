
let arr = [
    {
        title:"Activity Selection",
        link:"https://practice.geeksforgeeks.org/problems/activity-selection-1587115620/1",
        diff:"Medium"
    },
    {
        title:"Job Sequencing Problem",
        link:"https://practice.geeksforgeeks.org/problems/job-sequencing-problem-1587115620/1",
        diff:"Medium"
    },
    {
        title:"Huffman Encoding",
        link:"https://practice.geeksforgeeks.org/problems/huffman-encoding3345/1",
        diff:"Medium"
    },
    {
        title:"Water Connection Problem",
        link:"https://practice.geeksforgeeks.org/problems/water-connection-problem5822/1",
        diff:"Medium"
    },
    {
        title:"Fractional Knapsack",
        link:"https://practice.geeksforgeeks.org/problems/fractional-knapsack-1587115620/1",
        diff:"Medium"
    },
    {
        title:"Choose and Swap",
        link:"https://practice.geeksforgeeks.org/problems/choose-and-swap0531/1",
        diff:"Easy"
    },
    {
        title:"Maximum trains for which stoppage can be provided",
        link:"https://practice.geeksforgeeks.org/problems/bb917adb320fba36a9d68fd64c83ef322632a094/1",
        diff:"Medium"
    },
    {
        title:"Minimum Platforms",
        link:"https://practice.geeksforgeeks.org/problems/minimum-platforms-1587115620/1",
        diff:"Medium"
    },
    {
        title:"Buy Maximum Stocks if i stocks can be bought on i-th day",
        link:"https://practice.geeksforgeeks.org/problems/buy-maximum-stocks-if-i-stocks-can-be-bought-on-i-th-day/1",
        diff:"Medium"
    },
    {
        title:"Shop in Candy Store",
        link:"https://practice.geeksforgeeks.org/problems/shop-in-candy-store1145/1",
        diff:"Easy"
    },
    {
        title:"Minimize Cash Flow",
        link:"https://practice.geeksforgeeks.org/problems/minimize-cash-flow/0?page=1&sortBy=newest&query=page1sortBynewest",
        diff:"Hard"
    },
    {
        title:"Minimum Cost to cut a board into squares",
        link:"https://practice.geeksforgeeks.org/problems/minimum-cost-to-cut-a-board-into-squares/1",
        diff:"Medium"
    },
    {
        title:"Check if it is possible to survive on Island",
        link:"https://practice.geeksforgeeks.org/problems/check-if-it-is-possible-to-survive-on-island4922/1",
        diff:"Easy"
    },
    {
        title:"N meetings in one room",
        link:"https://practice.geeksforgeeks.org/problems/n-meetings-in-one-room-1587115620/1",
        diff:"Easy"
    },
    {
        title:"Maximum product subset of an array",
        link:"https://practice.geeksforgeeks.org/problems/maximum-product-subset-of-an-array/1",
        diff:"Medium"
    },
    {
        title:"Maximize sum after K negations",
        link:"https://practice.geeksforgeeks.org/problems/maximize-sum-after-k-negations1149/1",
        diff:"Easy"
    },
    {
        title:"Maximize sum(arr[i]*i) of an Array",
        link:"https://practice.geeksforgeeks.org/problems/maximize-arrii-of-an-array0026/1",
        diff:"Basic"
    },
    {
        title:"Maximum sum difference",
        link:"https://practice.geeksforgeeks.org/problems/maximum-sum-difference2545/1",
        diff:"Easy"
    },
    {
        title:"Swap and Maximize",
        link:"https://practice.geeksforgeeks.org/problems/swap-and-maximize5859/1",
        diff:"Easy"
    },
    {
        title:"Minimum Sum of Absolute Differences of Pairs",
        link:"https://practice.geeksforgeeks.org/problems/minimum-sum-of-absolute-differences-of-pairs/1",
        diff:"Easy"
    },
    {
        title:"Program for Shortest Job First (or SJF)",
        link:"https://www.geeksforgeeks.org/program-for-shortest-job-first-or-sjf-cpu-scheduling-set-1-non-preemptive/",
        diff:"Easy"
    },
    {
        title:"Page Faults in LRU",
        link:"https://practice.geeksforgeeks.org/problems/page-faults-in-lru5603/1",
        diff:"Medium"
    },
    {
        title:"Smallest Subset with Greater Sum",
        link:"https://practice.geeksforgeeks.org/problems/smallest-subset-with-greater-sum/1",
        diff:"Easy"
    },
    {
        title:"Chocolate Distribution Problem",
        link:"https://practice.geeksforgeeks.org/problems/chocolate-distribution-problem3825/1",
        diff:"Easy"
    },
    {
        title:"Defense of a Kingdom",
        link:"https://www.spoj.com/problems/DEFKIN/",
        diff:"Hard"
    },
    {
        title:"DIEHARD - DIE HARD",
        link:"https://www.spoj.com/problems/DIEHARD/",
        diff:"Hard"
    },
    {
        title:"GERGOVIA - Wine trading in Gergovia",
        link:"https://www.spoj.com/problems/GERGOVIA/",
        diff:"Hard"
    },
    {
        title:"GCJ101BB - Picking Up Chicks",
        link:"https://www.spoj.com/problems/GCJ101BB/",
        diff:"Hard"
    },
    {
        title:"ARRANGE - Arranging Amplifiers",
        link:"https://www.spoj.com/problems/ARRANGE/",
        diff:"Hard"
    },
    {
        title:"K Centers Problem",
        link:"https://practice.geeksforgeeks.org/problems/k-centers-problem/1",
        diff:"Hard"
    },
    {
        title:"Minimum Cost of ropes",
        link:"https://practice.geeksforgeeks.org/problems/minimum-cost-of-ropes-1587115620/1",
        diff:"Easy"
    },
    {
        title:"Smallest number",
        link:"https://practice.geeksforgeeks.org/problems/smallest-number5829/1",
        diff:"Medium"
    },
    {
        title:"Find Maximum Equal sum of Three Stacks",
        link:"https://practice.geeksforgeeks.org/problems/find-maximum-equal-sum-of-three-stacks/1",
        diff:"Medium"
    },
]


let table_body = document.querySelector(".table-body");

for(let i=0;i<arr.length;i++){
    table_body.innerHTML += `
        <tr>
            <td>${i+1}</td>
            <td><a href="${arr[i].link}">${arr[i].title}</a></td>
            <td>${arr[i].diff}</td>
        </tr>
    `;
}