import React from "react"
import { NavLink } from "react-router-dom"
import { Navbar } from "../../components/Navbar/Navbar"
import { SearchInput } from "../../components/SearchInput/SearchInput"
import "./Header.css"

export function Header () {
	return (
		<div className="header">
			<div className="navbar">
				<NavLink
					to="/"
					className="title"
				>
					App <span className="title-span">Movies</span>
				</NavLink>
				<Navbar />
			</div>
			<SearchInput/>
		</div>
	)
}
