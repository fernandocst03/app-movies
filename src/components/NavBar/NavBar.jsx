import React from "react"
import { NavLink } from "react-router-dom"
import "./NavBar.css"

const routes = [
	{
		path: "/movies",
		name: "Movies",
	},
	{
		path: "/tv",
		name: "TV",
	}
]

export function Navbar () {
	return (
		<nav className="navbar">
			<ul className="nav-list">
				{routes.map((route) => {
					return (
						<li key={route.path}
						>
							<NavLink
								to={route.path}
								className= {({ isActive }) => isActive ? "nav-item active" : "nav-item"}
							>
								{route.name}
							</NavLink>
						</li>
					)
				})}
			</ul>
		</nav>
	)
}
