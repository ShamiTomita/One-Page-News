require 'news-api'
require 'area'

newsapi = News.new("942d82be5ab04c0e810e412394d04c7a")
sources = newsapi.get_sources(country: 'us', language: 'en')
#business entertainment general health science sports technology
all_articles = newsapi.get_everything(sources: 'bbc-news,the-verge,nbc-news,cnn,reuters,politico,abc-news,NPR', language: 'en', from: '2021-12-20')
#use this to go through first
business_articles = newsapi.get_top_headlines(category: 'business', language: 'en', country:'us')
entertainment_articles = newsapi.get_top_headlines(category: 'entertainment', language: 'en', country:'us')
health_articles = newsapi.get_top_headlines(category:'health', language: 'en', country:'us')
science_articles = newsapi.get_top_headlines(category:'science', language: 'en', country:'us')
sports_articles = newsapi.get_top_headlines(category:'sports', language: 'en', country:'us')
technology_articles= newsapi.get_top_headlines(category:'technology', language: 'en', country:'us')

top_headlines = newsapi.get_top_headlines(country: 'us', language: 'en')
#scrolling on bottom

def createArticles(article_array)
  articles = []
  article_array.each do |article|
      a = Article.new(
        title: article.title,
        author: article.author,
        news_org: article.name,
        description: article.description,
        url: article.url,
        image_url: article.urlToImage,
        published: article.publishedAt,
        content: article.content,
        category: "category",
        is_top: "false"
      )
      if a.save
        articles << a
    end
  end
  return articles
end

user = User.create(name: "shami", zipcode: "78249")
business_array =  createArticles(business_articles)
business_array.each do |article|
  article.category = "business"
  article.save
end
entertainment_array = createArticles(entertainment_articles)
entertainment_array.each do |article|
  article.category = "entertainment"
  article.save
end
health_array = createArticles(health_articles)
health_array.each do |article|
  article.category = "health"
  article.save
end
science_array = createArticles(science_articles)
science_array.each do |article|
  article.category = "science"
  article.save
end
sports_array = createArticles(sports_articles)
sports_array.each do |article|
  article.category = "sports"
  article.save
end

tech_array = createArticles(technology_articles)
tech_array.each do |article|
  article.category = "entertainment"
  article.save
end

top_array = createArticles(top_headlines)
top_array.each do |article|
  article.is_top = true
  article.save
end



#WEATHER
