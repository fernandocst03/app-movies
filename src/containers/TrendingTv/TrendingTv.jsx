import React from "react"
import { Link } from "react-router-dom"
import { getTrendingTv } from "@/services/getData"
import { MovieItem } from "@/components/MovieItem/MovieItem"
import "./TrendingTv.css"

export function TrendingTv () {
	const [tvSerie, setTvSerie] = React.useState([])

	React.useEffect(() => {
		getTrendingTv().then(tvSerie => setTvSerie(tvSerie))
	}, [])

	return (
		<>
			<div className="trendingPreview-header-tv">
				<h1 className="trendingPreview-title">Trending Tv Series</h1>
				<Link
					to="/trending/tv"
					className="trendingPreviewTv-link"
				>
					See all
				</Link>
			</div>
			<div className="trendingPreview-tvList">
				{tvSerie.map(tv => (
					<MovieItem
						key={tv.id}
						item={tv}
					/>
				))}
			</div>
		</>
	)
}
