const endPoint = "http://localhost:3000/api/v1/articles"

document.addEventListener("DOMContentLoaded", () =>{
  console.log("Ive been Loaded!")
  getArticles();
})

function getArticles(){
  fetch(endPoint)
  .then(response => response.json())
  .then(articles=>{
    console.log(articles);
    articles.data.forEach((article) => {
      const articleMarkup = `
      <li id=${article.attributes.id}>
        <img src=${article.attributes.image_url}>
        <a href=${article.attributes.url}>${article.attributes.title}</a>
      </li>`
      document.querySelector('#articles').innerHTML += articleMarkup
    });
    document.getElementById('#articles').style.overflow = "scroll";
  })
}

index.addEventListener("click", ()=>{
  console.log("Ive been clicked!")
})

toggle.addEventListener("click", ()=>{
  console.log("Ive been clicked!")
})
