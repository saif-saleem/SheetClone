const header=document.getElementById("header");
const body=document.getElementById("body");



for(let i=65;i<=90;i++){
    let char= String.fromCharCode(i);
    const bold=document.createElement("b");
    bold.innerText=char;
    header.appendChild(bold);
}


function createrow(rn){
const row=document.createElement("div");
row.className="row";

for(let i=64;i<=90;i++){
    if(i==64){
        const b=document.createElement("b");
        b.innerText=rn;
        row.appendChild(b);
    }
    else{ 
        const cell=document.createElement("div");
        cell.id=`${String.fromCharCode(i)}${rn}`;
        cell.contentEditable="true";
        cell.addEventListener("focus", oncellfocus);
        row.appendChild(cell);
    }
}

body.appendChild(row);
}

 for(let i=1;i<=100;i++){
    createrow(i);
 }

 