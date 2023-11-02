import { useEffect, useState } from "react"
import { Movie, MovieDBRespose } from "../interfaces/movieInterfaces"
import movieDB from "../api/movieDB";


interface MoviesState {
  nowPlaying: Movie[]
  popular: Movie[]
  topRated: Movie[]
  upcoming: Movie[]
}


export const useMovies = () => {

  const [isLoading, setisLoading] = useState(true);
  const [movieState, setMovieState] = useState<MoviesState>({
    nowPlaying: [],
    popular: [],
    topRated: [],
    upcoming: []
  });

  const getMovies = async () => {

    const nowPlayingPromise = movieDB.get<MovieDBRespose>('/now_playing');
    const popularPromise = movieDB.get<MovieDBRespose>('/popular');
    const topRatedPromise = movieDB.get<MovieDBRespose>('/top_rated');
    const upcomingPromise = movieDB.get<MovieDBRespose>('/upcoming');

    const response = await Promise.all([
      nowPlayingPromise,
      popularPromise,
      topRatedPromise,
      upcomingPromise
    ])

    setMovieState({
      nowPlaying: response[0].data.results,
      popular: response[1].data.results,
      topRated: response[2].data.results,
      upcoming: response[3].data.results,
    })

    setisLoading(false);
  }

  useEffect(() => {
    getMovies();
  }, [])


  return {
    ...movieState,
    isLoading
  }
}

