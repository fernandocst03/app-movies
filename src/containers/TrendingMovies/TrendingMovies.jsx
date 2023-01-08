import React from "react"
import { useState, useEffect } from "react"
import { MovieItem } from "../../components/MovieItem/MovieItem"
import { Link } from "react-router-dom"
import "./TrendingMovies.css"
import { getTrendingMovies } from "@/services/getData"

export function TrendingMovies () {
	const [movies , setMovies] = useState([])

	useEffect(()=>{
		getTrendingMovies()
			.then(movies => {
				setMovies(movies)
			})
			.catch(err=>{
				console.log(err)
			})
	}, [])


	return (
		<>
			<div className="trendingPreview-header">
				<h1 className="trendingPreview-title">Trending Movies</h1>
				<Link
					to="/trending/movies"
					className="trendingPreviewTv-link"
				>
					See all
				</Link>
			</div>
			<div className="trendingPreview-movieList">
				{movies.map(movie => (
					<MovieItem
						key={movie.id}
						item={movie}
					/>
				))}
			</div>
		</>
	)
}
