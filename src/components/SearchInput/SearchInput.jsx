import React from "react"

export function SearchInput () {
	return (
		<div className="search-container">
			<input
				type="text"
				placeholder="Search..."
				name="search"
				className="search"
			/>
		</div>
	)
}
