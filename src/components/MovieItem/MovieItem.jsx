import React from "react"
import { Link } from "react-router-dom"
import "./MovieItem.css"

export function MovieItem ({ item }) {
	return (
		<>
			<Link
				to={`/movie/details/${item.id}`}
			>
				<div className="movie-item">
					<img src={`https://image.tmdb.org/t/p/w500${item.poster_path}`} alt={item.title} />
					<span className="like-buton">
						❤️
					</span>
				</div>
			</Link>
		</>
	)
}
