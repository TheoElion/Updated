import { useState, useEffect } from 'react'
import axios from 'axios'

const Movies = () => {

    const apiKey = import.meta.env.VITE_TMDB_KEY
    const imgUrl = 'https://image.tmdb.org/t/p/w500/'
    const [movies, setMovies] = useState([])

    useEffect(() => {
        const getMovies = async () => {
            const options = {
                method: 'GET',
                headers: {
                    accept: 'application/json',
                    Authorization: `Bearer ${apiKey} `
                },
                url: 'https://api.themoviedb.org/3/movie/now_playing?language=pt-br&page=1'
            }
            const res = await axios(options)
            setMovies(res.data.results)
        }
        getMovies()
    }, [])

    return (
        <div className='movies'>
            <h3>Filmes em Cartaz</h3>
            {movies &&
                movies.slice(0, 10).map((movie, index) => {
                    return (
                        <div className='movies-container' key={index}>
                            <img src={imgUrl + movie.poster_path} />
                            <p>{movie.title}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Movies