const endPoint = "http://localhost:3000/api/v1/articles"


document.addEventListener("DOMContentLoaded", () =>{
  console.log("Ive been Loaded!")
  getArticles();
  toggleDisplay();
})

function getArticles(){
  fetch(endPoint)
  .then(response => response.json())
  .then(articles=>{
    console.log(articles);
    articles.data.forEach((article) => {
      let id = article.id
      const articleMarkup = `
      <div id=${article.id}>
        <img src=${article.attributes.image_url}>
        <a id=${article.id} class="article-link" href=${article.attributes.url} onclick="fetchDisplay(${id})" >${article.attributes.title}</a>
      </div>`
      document.querySelector('#articles').innerHTML += articleMarkup
      stopLink();

    });
  })
}



function stopLink(){
let anchors = document.getElementsByTagName('a')
  for (let i = 0; i < anchors.length; i++){
    anchors[i].addEventListener("click",
    function (e){
            e.preventDefault();
            console.log(anchors[i])

            });
          }
}

function toggleDisplay(){
  let toggle = document.querySelector("body > div.row > div.column.middle > div.column.toggle")
  let back = document.querySelector("#myTopnav > a:nth-child(2)")
  let middleContent = document.querySelector("body > div.row > div.column.middle > div.middleContent")
  let toggledBar = document.querySelector("#toggledBar")
  let myTopnav = document.querySelector("#myTopnav")
  if (toggle.style.display === "none"){
    toggle.style.display = "block";
    toggledBar.style.display ="inline-block"
    middleContent.style.display = "none"
    myTopnav.style.display = "none"
  }else {
    toggle.style.display = "none";
    toggledBar.style.display = "none"
    middleContent.style.display = "block"
    myTopnav.style.display = "inline-block"
  }
}

function fetchDisplay(articleId){
  let toggle = document.querySelector("body > div.row > div.column.middle > div.column.toggle")
  document.querySelector("body > div.row > div.column.middle").scrollTo(0,0)
  let articleEndPoint = (endPoint+`/${articleId}`)
  fetch(articleEndPoint)
  .then(response => response.json())
  .then(article=>{
    const articleMarkup = `
    <h2>${article.title}</h2>
      <img src=${article.image_url}>
      <h3>${article.author}, ${article.news_org}</h3>
      <p>${article.content}</p>
    </li>`
    toggle.innerHTML = articleMarkup;
    toggleDisplay();
  })
  }
function toggleNavBar(){

}
