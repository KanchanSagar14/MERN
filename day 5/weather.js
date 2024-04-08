function fetchAPI(){
    const url="https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/delhi?key=MUTA96785RBX2LM2FC287VKUY"
fetch(url)
.then((res)=>res.json())
.then(renderUI);
}
fetchAPI()
const root=document.getElementById("root");

function renderUI(data){
    const days= data.days;
    console.log(days)
    // console.log(data)
    const row = document.createElement("tr");
    let cell1= document.createElement("th");
    cell1.innerText='Date'; 
    row.appendChild(cell1);  
    // let cell2= document.createElement("th");
    // cell2.innerText="Max Temperature";
    // row.appendChild(cell2);
    // let cell3= document.createElement("th");
    // cell3.innerText="Min Temperature";
    // row.appendChild(cell3);
    root.append(row);
    const childRow=document.createElement("tr");
    const c1=document.createElement("td");
    c1.innerText='07-04-24';
    childRow.appendChild(c1);
    const c2=document.createElement("td");
    c2.innerText='90 F';
    childRow.appendChild(c2);
    root.appendChild(childRow);
}
renderUI();