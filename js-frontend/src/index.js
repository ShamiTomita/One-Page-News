const endPoint = "http://localhost:3000/api/v1/articles"


document.addEventListener("DOMContentLoaded", () =>{
  console.log("Ive been Loaded!")
  getArticles();
  toggleDisplay();
})

function getArticles(){
  let health= []
  let science = []
  let entertainment = []
  let business = []
  let top = []
  let all = []
  fetch(endPoint)
  .then(response => response.json())
  .then(articles=>{
    articles.data.forEach((article) => {
      let id = article.id
      if (article.attributes.is_top === "true"){
        top.push(article)
        all.push(article)
      }
      if (article.attributes.category === "health"){
        health.push(article)
        all.push(article)
      }
      if (article.attributes.category === "science") {
        science.push(article)
        all.push(article)
      }
      if (article.attributes.category === "entertainment"){
        entertainment.push(article)
        all.push(article)
      }
      if (article.attributes.category === "business") {
        business.push(article)
        all.push(article)
      }

      let articleMarkup = `
      <div id=${article.id}>
        <img src=${article.attributes.image_url}>
        <a id=${article.id} class="article-link" href=${article.attributes.url} onclick="fetchDisplay(${id})" >${article.attributes.title}</a>
      </div>`
      document.querySelector('#articles').innerHTML += articleMarkup
      stopLink();
    });

    let healthButton = document.querySelector("#myTopnav > a:nth-child(2)")
    let scienceButton = document.querySelector("#myTopnav > a:nth-child(3)")
    let entertainmentButton = document.querySelector("#myTopnav > a:nth-child(4)")
    let businessButton = document.querySelector("#myTopnav > a:nth-child(5)")
    let art = document.querySelector('#articles')
    let index = document.querySelector("#index")

    buttons = []
    buttons.push(healthButton, scienceButton, entertainmentButton, businessButton, index)

    buttons.forEach(function(button){
      button.addEventListener("click", e => {
        if (button === index ){
          art.innerHTML = ""
          all.forEach(article => {
            let id = article.id
            const articleMarkup = `
            <div id=${article.id}>
              <img src=${article.attributes.image_url}>
              <a id=${article.id} class="article-link" href=${article.attributes.url} onclick="fetchDisplay(${id})">${article.attributes.title}</a>
            </div>`
            art.innerHTML += articleMarkup
            stopLink();
          });
        }
        if (button === healthButton){
          console.log('health')
          art.innerHTML = ""
          health.forEach(article => {
            let id = article.id
            const articleMarkup = `
            <div id=${article.id}>
              <img src=${article.attributes.image_url}>
              <a id=${article.id} class="article-link" href=${article.attributes.url} onclick="fetchDisplay(${id})">${article.attributes.title}</a>
            </div>`
            art.innerHTML += articleMarkup
            stopLink();
          });
        }
        if (button === entertainmentButton){
          console.log('entertainment')
          art.innerHTML = ""
          entertainment.forEach(article => {
            let id = article.id
            const articleMarkup = `
            <div id=${article.id}>
              <img src=${article.attributes.image_url}>
              <a id=${article.id} class="article-link" href=${article.attributes.url} onclick="fetchDisplay(${id})">${article.attributes.title}</a>
            </div>`
            art.innerHTML += articleMarkup
            stopLink();
          });

        }
        if (button === scienceButton){
          console.log('science')
          art.innerHTML = ""
          science.forEach(article => {
            let id = article.id
            const articleMarkup = `
            <div id=${article.id}>
              <img src=${article.attributes.image_url}>
              <a id=${article.id} class="article-link" href=${article.attributes.url} onclick="fetchDisplay(${id})">${article.attributes.title}</a>
            </div>`
            art.innerHTML += articleMarkup
            stopLink();
          });
        }
        if (button === businessButton){
          console.log('business')
          art.innerHTML = ""
          business.forEach(article => {
            let id = article.id
            const articleMarkup = `
            <div id=${article.id}>
              <img src=${article.attributes.image_url}>
              <a id=${article.id} class="article-link" href=${article.attributes.url} onclick="fetchDisplay(${id})">${article.attributes.title}</a>
            </div>`
            art.innerHTML += articleMarkup
            stopLink();
          });
        }
        console.log('I should be one single button')
      })
    });
  })

}



function stopLink(){
let anchors = document.getElementsByTagName('a')
  for (let i = 0; i < anchors.length; i++){
    anchors[i].addEventListener("click",
    function (e){
            e.preventDefault();

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
  let indextog = document.querySelector("#indextog")
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
    indextog.innerHTML = `${article.news_org}`
    toggleDisplay();
  })
  }
