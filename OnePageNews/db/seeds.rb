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
  article_array.map do |article|
    Article.create(
      title: article.title,
      author: article.author,
      news_org: article.name,
      description: article.description,
      url: article.url,
      image_url: article.urlToImage,
      published: article.publishedAt,
      content: article.content
    )
  end
end

user = User.create(name: "shami", zipcode: "78249")
business_array =  createArticles(business_articles)
entertainment_array = createArticles(entertainment_articles)
healt_array = createArticles(health_articles)
science_array = createArticles(science_articles)
sports_array = createArticles(sports_articles)
tech_array = createArticles(technology_articles)
top_array = createArticles(top_headlines)


#WEATHER
zip = "78249"
response_a = RestClient.get("api.openweathermap.org/data/2.5/weather?zip=#{zip.to_i},us&appid=b7bfa861214865eea90a83b5ecc80c7e")
weather = RestClient.get("https://api.openweathermap.org/data/2.5/onecall?lat=#{zip.to_lat}&lon=#{zip.to_lon}&exclude=minutely&appid=b7bfa861214865eea90a83b5ecc80c7e")
current_weather = weather["current"]
current_time = Time.at(weather["current"]["dt"]).to_datetime
current_sunrise = Time.at(weather["current"]["sunrise"]).to_datetime
current_sunset = Time.at(weather["current"]["sunset"]).to_datetime
current_uvi = weather["current"]["uvi"]
