import React from "react"
import { TrendingMovies } from "../../containers/TrendingMovies/TrendingMovies"
import { TrendingTv } from "../../containers/TrendingTv/TrendingTv"
export function Home () {
	return (
		<div
			style={{
				paddingTop: "100px",
			}}
		>
			<TrendingMovies/>
			<TrendingTv/>
		</div>
	)
}
