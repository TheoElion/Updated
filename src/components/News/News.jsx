import axios from "axios"
import { useEffect, useState } from "react"

//components
import NewsLinks from "./NewsLinks"

const News = () => {

  const newsApi = import.meta.env.VITE_GOOGLE_NEWS
  const [news, setNews] = useState([])

  useEffect(() => {
    const getNews = async () => {
      const res = await axios.get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${newsApi}`)
      setNews(res.data.articles)
    }
    getNews()

  }, [])

  return (
    <div>
      <div className="links-container">
        {news.slice(0, 5).map((article, index) => {
          return <NewsLinks key={index} article={article} />
        })}
      </div>
    </div>
  )
}

export default News