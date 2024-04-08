console.log("... app started");

function callAPI(){
    fetch("https://newsapi.org/v2/top-headlines?country=in&apiKey=0d5f9d6c46014c5aaf305ebbe7f2d216")
    .then((res) => res.json())
    .then((data) => renderUI(data))
}
// return res.json();
//     }).then((data)=>{
//         renderUI(data);
//     })
// }

function renderUI(data){
    const articles=data.articles;

    console.log(articles);
const root=document.getElementById("root");
for(let i=0; i<articles.length;i++){
const ar= articles[i];
console.log(ar);
const div=document.createElement("div");
div.setAttribute("class","news-card")
// div.innerText=ar.title;
const h3=document.createElement("h3");
h3.innerText=ar.title;
const img=document.createElement("img");
const p=document.createElement("p");
p.innerText=ar.description;
img.src=ar.urlToImage;
div.appendChild(h3);

div.appendChild(img);
const a= document.createElement("a"); 
a.innerText= "Read More"
a.href=ar.url;
a.target= "_blank";
div.appendChild(a);
div.appendChild(p);


root.appendChild(div);
}}
// renderUI();
callAPI();
