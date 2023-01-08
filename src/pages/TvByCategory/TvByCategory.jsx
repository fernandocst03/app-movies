import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { MovieItem } from "../../components/MovieItem/MovieItem"
import { getTvByCategory } from "@/services/getData"

export function TvByCategory () {
	const { id } = useParams()
	const [tv, setTv] = useState([])

	useEffect(() => {
		getTvByCategory(id).then(tv => {
			setTv(tv)
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
			{tv.map(tv => {
				return (
					<MovieItem
						key={tv.id}
						item={tv}
					/>
				)
			})}
		</div>
	)
}
