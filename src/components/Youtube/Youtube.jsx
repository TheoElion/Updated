import { useState, useEffect } from "react"
import axios from "axios"

const Youtube = () => {

  const [videos, setVideos] = useState([])
  const apiKey = import.meta.env.VITE_YOUTUBE_KEY

  useEffect(() => {
    const getVideos = async () => {
      const res = await axios.get(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&hl=pt-br&maxResults=3&regionCode=br&key=${apiKey}`)
      const data = res.data
      setVideos(data.items)
    }
    getVideos()
  }, [])
  
  return (
    <div className="youtube-container">
      {videos &&
        videos.map((video, index) => {
          return (
            <div key={index}>
              <a href={`https://www.youtube.com/watch?v=${video.id}`}>
                <img src={video.snippet.thumbnails.maxres.url}/>
                <p>{video.snippet.title}</p>
              </a>
            </div>
          )
        })}
    </div>
  )
}

export default Youtube