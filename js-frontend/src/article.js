class Article {
  constructor(id, articleAttributes){
    this.id = id;
    this.title = articleAttributes.title;
    this.category = articleAttributes.category;
    this.author = articleAttributes.author
    this.description = articleAttributes.description
    this.news_org = articleAttributes.news_org
    this.image_url = articleAttributes.image_url
    this.url = articleAttributes.url
    this.is_top = articleAttributes.is_top
    this.published = articleAttributes.published
    this.content = articleAttributes.content
    Article.all.push(this);
    if (this.category === "health"){
      Article.health.push(this)
    }else if(this.category === "business"){
      Article.business.push(this)
    }else if(this.category === "science"){
      Article.science.push(this)
    }else if(this.category === "entertainment"){
      Article.entertainment.push(this)
    }
  }

  renderTicker(){
    return ` <div class=hitem><a id=ticker-${this.id}class="article-link" href=${this.url} onclick="toggleRedirect(${this.id})">  ${this.title}  </a></div>`
  }
  renderArticleIndexItem(){
    return `
  <div id=${this.id}>
    <img src=${this.image_url}>
    <a id=${this.id} class="article-link" href=${this.url} onclick="fetchDisplay(${this.id})" >${this.title}</a>
  </div>`

  }

  renderArticle(){
    return `
    <h2>${this.title}</h2>
      <p id="art-id" data-id=${this.id} style="display:none">${this.id}</p>
      <span><img src=${this.image_url}><button style="float: right; align:center; margin-right: 10px;"class="favorite-button" id=art-${this.id}>favorite</button></spn>
      <h3>${this.author}, ${this.news_org}</h3>
      <p>${this.content}</p>
    </li>`
  }

  renderFave(){
    return `
    <h4 style="white-space: normal">${this.title}</h4>
    <p id=fave-${this.id} class=favorites data=${this.id} stye="display:none">${this.id}</p>
    <a class="fetch" onclick="toggleRedirect(${this.id})"><img style="white-space: normal"  style="border-color: pink" class=faveimg src="${this.image_url}"></img></a>
    `
  }

  static findById(id){
    return this.all.find(article => article.id === id);
  }


}
Article.all = []
Article.health =  []
Article.science = []
Article.entertainment = []
Article.business = []
Article.topArts = []
