
let arr1 = [
    {
        title:"Number of 1 Bits",
        link:"https://practice.geeksforgeeks.org/problems/set-bits0143/1",
        diff:"Easy"
    },
    {
        title:"Non Repeating Numbers",
        link:"https://practice.geeksforgeeks.org/problems/finding-the-numbers0215/1",
        diff:"Medium"
    },
    {
        title:"Bit Difference",
        link:"https://practice.geeksforgeeks.org/problems/bit-difference-1587115620/1",
        diff:"Easy"
    },
    {
        title:"Count total set bits",
        link:"https://practice.geeksforgeeks.org/problems/count-total-set-bits-1587115620/1",
        diff:"Medium"
    },
    {
        title:"Program to find whether a no is power of two",
        link:"https://practice.geeksforgeeks.org/problems/power-of-2-1587115620/1",
        diff:"Easy"
    },
    {
        title:"Find position of set bit",
        link:"https://practice.geeksforgeeks.org/problems/find-position-of-set-bit3706/1",
        diff:"Easy"
    },

    {
        title:"Copy Set Bits in Range",
        link:"https://practice.geeksforgeeks.org/problems/copy-set-bits-in-range0623/1",
        diff:"Easy"
    },
    {
        title:"Division without using multiplication, division and mod operator",
        link:"https://practice.geeksforgeeks.org/problems/division-without-using-multiplication-division-and-mod-operator/1",
        diff:"Medium"
    },
    {
        title:"Power Set",
        link:"https://practice.geeksforgeeks.org/problems/power-set4302/1",
        diff:"Easy"
    },
    {
        title:"Square Numbers",
        link:"https://practice.geeksforgeeks.org/problems/square-numbers1954/1",
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
