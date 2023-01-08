import React from "react"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { TrendingTv } from "@/containers/TrendingTv/TrendingTv"
import { getCategories } from "@/services/getData"
import "./Tv.css"


export function Tv () {
	const [category , setCategory] = useState([])

	useEffect(()=> {
		getCategories("tv").then(genre => {
			setCategory(genre)
		})
	})

	return (
		<div
			style={{
				marginTop: "100px",
			}}
		>
			<TrendingTv/>
			<div className="categories-container">
				<h1 className="categories-title">Categories</h1>
				<div className="categories-list">
					{category.map(genre => (
						<div
							className="categories-item-container"
							key={genre.id}>
							<Link
								to={`/tv/category/${genre.id}`}
								className="categories-item"
							>
								{genre.name}
							</Link>
						</div>
					))}
				</div>
			</div>
		</div>
	)
}
