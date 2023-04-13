
let arr2 = [
    {
        title:"Spirally traversing a matrix",
        link:"https://practice.geeksforgeeks.org/problems/spirally-traversing-a-matrix-1587115621/1",
        diff:"Medium"
    },
    {
        title:"Search a 2D Matrix",
        link:"https://leetcode.com/problems/search-a-2d-matrix/",
        diff:"Medium"
    },
    {
        title:"Median in a row-wise sorted Matrix",
        link:"https://practice.geeksforgeeks.org/problems/median-in-a-row-wise-sorted-matrix1527/1",
        diff:"Medium"
    },
    {
        title:"Row with max 1s",
        link:"https://practice.geeksforgeeks.org/problems/row-with-max-1s0023/1",
        diff:"Medium"
    },
    {
        title:"Max rectangle",
        link:"https://practice.geeksforgeeks.org/problems/max-rectangle/1",
        diff:"Hard"
    },
    {
        title:"Find a specific pair in Matrix",
        link:"https://www.geeksforgeeks.org/find-a-specific-pair-in-matrix/",
        diff:"Hard"
    },
    {
        title:"Rotate by 90 degree",
        link:"https://practice.geeksforgeeks.org/problems/rotate-by-90-degree0356/1",
        diff:"Medium"
    },
    {
        title:"Kth element in Matrix",
        link:"https://practice.geeksforgeeks.org/problems/kth-element-in-matrix/1",
        diff:"Medium"
    },
    {
        title:"Common elements in all rows of a given matrix",
        link:"https://practice.geeksforgeeks.org/problems/common-elements1132/1",
        diff:"Medium"
    },
    {
        title:"Shortest XY distance in Grid",
        link:"https://practice.geeksforgeeks.org/problems/7366ce450d84b55391fc787a681c4d60de359e72/1",
        diff:"Medium"
    },
]

let table_body = document.querySelector(".table-body");
for(let i=0;i<arr2.length;i++){
    table_body.innerHTML += `
        <tr>
            <td>${i+1}</td>
            <td><a href="${arr2[i].link}">${arr2[i].title}</a></td>
            <td>${arr2[i].diff}</td>
        </tr>
    `;
}