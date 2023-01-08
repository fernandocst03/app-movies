import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { MovieItem } from "../../components/MovieItem/MovieItem"
import { getMoviesByCategory } from "../../services/getData"

export function MovieByCategory () {
	const { id } = useParams()
	const [movies, setMovies] = useState([])

	useEffect(() => {
		getMoviesByCategory(id).then(movies => {
			setMovies(movies)
		})
	}, [])

	return (
		<div style={{
			display: "flex",
			flexWrap: "wrap",
			gap: "10px",
			marginTop: "120px",
			justifyContent: "center",
			alignItems: "center",
			paddingBottom: "60px",
		}}>
			{movies.map(movie => {
				return (
					<MovieItem
						key={movie.id}
						item={movie}
					/>
				)
			})}
		</div>
	)
}
