import React, { useEffect } from "react"
import { Link, Outlet } from "react-router-dom"
import { TrendingMovies } from "@/containers/TrendingMovies/TrendingMovies"
import { getCategories } from "@/services/getData"
import "./Movie.css"


export function Movie () {
	const [category , setCategory] = React.useState([])

	useEffect(()=> {
		getCategories("movie").then(genre => {
			setCategory(genre)
		})
	})
	return (
		<div
			style={{
				marginTop: "100px",
			}}
		>
			<TrendingMovies />
			<div className="categories-container">
				<h1 className="categories-title">Categories</h1>
				<div className="categories-list">
					{category.map(genre => (
						<div
							className="categories-item-container"
							key={genre.id}>
							<Link
								to={`category/${genre.id}`}
								className="categories-item"
							>
								{genre.name}
							</Link>
						</div>
					))}
				</div>
			</div>
			<Outlet/>
		</div>
	)
}
