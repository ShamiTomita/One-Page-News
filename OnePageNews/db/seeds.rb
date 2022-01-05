require 'news-api'

newsapi = News.new("942d82be5ab04c0e810e412394d04c7a")
sources = newsapi.get_sources(country: 'us', language: 'en')
#business entertainment general health science sports technology
all_articles = newsapi.get_everything(sources: 'bbc-news,the-verge,nbc-news,cnn,reuters,politico,abc-news,NPR', language: 'en', from: '2021-12-20')
#use this to go through first
top_headllines = newsapi.get_top_headlines(country: 'us', language: 'en')
#scrolling on bottom
