
let arr1 = [
    {
        title:"Trie | (Insert and Search)",
        link:"https://practice.geeksforgeeks.org/problems/trie-insert-and-search0651/1",
        diff:"Medium"
    },
    {
        title:"Shortest Unique prefix for every word",
        link:"https://practice.geeksforgeeks.org/problems/shortest-unique-prefix-for-every-word/1",
        diff:"Hard"
    },
    {
        title:"Word Break (Trie)",
        link:"https://practice.geeksforgeeks.org/problems/d857113143f69fab217cf5dab978535542f3cbb1/1",
        diff:"Hard"
    },
    {
        title:"Print Anagrams Together",
        link:"https://practice.geeksforgeeks.org/problems/print-anagrams-together/1",
        diff:"Medium"
    },
    {
        title:"Phone directory",
        link:"https://practice.geeksforgeeks.org/problems/phone-directory4628/1",
        diff:"Hard"
    },
    {
        title:"Unique rows in boolean matrix",
        link:"https://practice.geeksforgeeks.org/problems/unique-rows-in-boolean-matrix/1",
        diff:"Easy"
    },

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
