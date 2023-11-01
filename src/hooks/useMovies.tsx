import { useEffect, useState } from "react"
import { Movie, MovieDBNowPlaying } from "../interfaces/movieInterfaces"
import movieDB from "../api/movieDB"


export const useMovies = () => {

  const [isLoading, setisLoading] = useState(true); 

  const [peliculasCine, setpeliculasCine] = useState<Movie[]>([])

  const getMovies = async () => {
    const resp = await movieDB.get<MovieDBNowPlaying>('/now_playing');
    setpeliculasCine(resp.data.results);
    setisLoading( false ); 
  }

  useEffect(() => {
    getMovies();
  }, [])


  return {
    peliculasCine,
    isLoading
  }
}

