import axios from "axios"
import { useEffect, useState } from "react"

//components
import NewsLinks from "./NewsLinks"

const News = () => {

  const timesApi = import.meta.env.VITE_NEWS_KEY
  const [news, setNews] = useState([])

  useEffect(() => {
    const getTimesNews = async () => {
      const res = await axios.get(`https://api.nytimes.com/svc/topstories/v2/world.json?api-key=${timesApi}`)
      setNews(res.data.results)
    }

    getTimesNews()
  }, [])

  return (
    <div>
      <div className="links-container">
        {news.slice(0, 5).map((results, index) => {
          return <NewsLinks key={index} results={results} />
        })}
      </div>
    </div>
  )
}

export default News