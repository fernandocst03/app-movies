import React, { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { getDetailsMovie } from "@/services/getData"
import arrowLetf from "@/assets/arrow-left.png"
import "./MovieInfo.css"
import { MovieItem } from "../../components/MovieItem/MovieItem"

export function MovieInfo () {
	const [movie, setMovie] = useState([])
	const navigate = useNavigate()
	const { id } = useParams()

	useEffect(() => {
		getDetailsMovie(id).then((data) => {
			setMovie(data)
		})
	}, [])

	const returnToBlog = () => {
		navigate(-1)
	}

	console.log(movie)
	return (
		<div className="movieInfo-container">
			<div className="movieInfo-image">
				<span className="return-buton"
					onClick={returnToBlog}
				>
					<img src={arrowLetf} alt="" className="arrow-icon" />
				</span>
				<img src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} alt={movie.title} className="img-background" />
			</div>

			<div
				style={{
					display: "flex",
					padding: "0 40px",
					marginTop: "40px",
					justifyContent: "space-between",
				}}
			>
				<div className="movieInfo-content">
					<h2>
						{movie.title}
					</h2>
					<ul className="movie-detail">
						<li>
							{movie.runtime} min
						</li>
						<li>
							{movie.original_language}
						</li>
						<li>
							{movie.vote_average}
						</li>
						{movie.dault ? <li>+18</li> : <li>+13</li>}
						<li>{movie.release_date}</li>
					</ul>
					<p className="movie-overview">
						{movie.overview}
					</p>
					<div className="genres-container">
						<p className="genres-title">Genres</p>
						<ul className="genres-list">
							{movie.genres && movie.genres.map((genre) => (
								<li key={genre.id}>{genre.name}</li>
							))}
						</ul>
					</div>
				</div>
				<MovieItem item={movie} />
			</div>
		</div>
	)
}
