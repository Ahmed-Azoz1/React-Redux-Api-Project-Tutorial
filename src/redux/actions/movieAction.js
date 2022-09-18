import { AllMovies ,MovieApi , MovieSearch } from "../types/moviesType"
import axios from "axios"


export const getAllMovie = ()=>{
    return async(dispatch)=>{
        const res = await axios.get(MovieApi)
        dispatch({type:AllMovies,data:res.data.results,pages:res.data.total_pages})
    }
}

export const getMovieSearch = (word)=>{
    return async(dispatch)=>{
        const res = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=388eeabb27a03fd6e3a4eecc4231596b&query=${word}&language=ar`)
        dispatch({type:AllMovies,data:res.data.results,pages:res.data.total_pages})
    }
}

export const getPage = (page)=>{
    return async(dispatch)=>{
        const res = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=388eeabb27a03fd6e3a4eecc4231596b&language=ar&page=${page}`)
        dispatch({type:AllMovies,data:res.data.results,pages:res.data.total_pages})
    }
}