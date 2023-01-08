import Axios from "axios"
import { API_KEY } from "@/config/Key"

const api = Axios.create({
	baseURL: "https://api.themoviedb.org/3/",
	headers: {
		"Content-Type": "application/json;charset=utf-8",
	},
	params: {
		api_key: API_KEY
	}
})

const getCategories = async (media) => {
	const { data : { genres } } = await api.get(`genre/${media}/list`)
	return genres
}

const getMoviesByCategory = async (id) => {
	const { data: { results } } = await api.get(`discover/movie/?with_genres=${id}`)
	return results
}

const getTvByCategory = async (id) => {
	const { data: { results } } = await api.get(`discover/tv/?with_genres=${id}`)
	return results
}

const getTrendingMovies = async () => {
	const { data : { results } } = await api.get("trending/movie/day")
	return results
}

const getTrendingTv = async () => {
	const { data: { results } } = await api.get("trending/tv/day")
	return results
}

const getDetailsMovie = async (id) => {
	const { data } = await api.get(`/movie/${id}`)
	return data
}
export { getCategories, getMoviesByCategory, getTvByCategory, getTrendingMovies, getTrendingTv , getDetailsMovie }
