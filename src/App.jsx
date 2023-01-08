import React from "react"
import "@/styles/App.css"
import { Header } from "@/containers/Header/Header"
import { Home } from "@/pages/HomePage/Home"
import { Movie } from "@/pages/MoviePage/Movie"
import { Tv } from "@/pages/TvPage/Tv"
import { Routes, Route } from "react-router-dom"
import { MovieByCategory } from "./pages/MoviesByCategory/MovieByCategory"
import { TvByCategory } from "./pages/TvByCategory/TvByCategory"
import { MovieInfo } from "./pages/MovieInfo/MovieInfo"

function App () {
	return (
		<>
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/movies/" element={<Movie/>}/>
				<Route path="/tv/" element={<Tv/>} />
				<Route path="/movies/category/:id" element={<MovieByCategory />} />
				<Route path="/tv/category/:id" element={<TvByCategory />} />
				<Route path="/movie/details/:id" element={< MovieInfo/>} />
			</Routes>
		</>
	)
}

export default App
