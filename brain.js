
let arr = ["Array","Matrix","String","LinkedList","Searching sorting","Binary Tree","Binary Search Tree","Backtracking","Greedy",
    "Trie","Bit Manipulation","Graph","Stack Queue","Heap","Dynamic Programming"];

let container = document.querySelector(".container");

for(let i=0;i<arr.length;i++){
    container.innerHTML += `
        <div class="boxes">
            <div class="box-content">
                <h2>${arr[i]}</h2>
                <p>Not started yet</p>
            </div>
        </div>
    `;
}

let enam = document.getElementsByClassName("boxes");
for(let i=0;i<enam.length;i++){
    enam[i].addEventListener('click',function(e){
        let val = document.getElementsByTagName("h2");
        switch(val[i].innerHTML){
            case "Array":
                window.location.href = `htmlPages/${val[i].innerHTML}.html`;
            case "Matrix":
                window.location.href = `htmlPages/${val[i].innerHTML}.html`;
            case "String":
                window.location.href = `htmlPages//${val[i].innerHTML}.html`;
            case "LinkedList":
                window.location.href = `htmlPages//${val[i].innerHTML}.html`;
            case "Searching sorting":
                window.location.href = `htmlPages//${val[i].innerHTML}.html`;
            case "Binary Tree":
                window.location.href = `htmlPages//${val[i].innerHTML}.html`;
            case "Binary Search Tree":
                window.location.href = `htmlPages//${val[i].innerHTML}.html`;
            case "Backtracking":
                window.location.href = `htmlPages//${val[i].innerHTML}.html`; 
            case "Greedy":
                window.location.href = `htmlPages//${val[i].innerHTML}.html`;
            case "Trie":
                window.location.href = `htmlPages//${val[i].innerHTML}.html`;
            case "Bit Manipulation":
                window.location.href = `htmlPages//${val[i].innerHTML}.html`;
            case "Heap":
                window.location.href = `htmlPages//${val[i].innerHTML}.html`;
            case "Stack Queue":
                window.location.href = `htmlPages//${val[i].innerHTML}.html`;
            case "Graph":
                window.location.href = `htmlPages//${val[i].innerHTML}.html`;
            case "Dynamic Programming":
                window.location.href = `htmlPages//${val[i].innerHTML}.html`;
        default :
            console.log("Nothing happend - Don't Worry");
                
        }
        
        
    })
}


