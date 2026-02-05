import { useState } from "react";
import { NavLink } from "react-router";
import { FaEarthAmericas } from "react-icons/fa6";

const Navigation = () => {
	return (
		<>
			<nav className="w-full h-10 m-2 flex justify-between">
				<NavLink
					to="/"
					className="leftside p-3 flex w-1/2 text-2xl items-center text-yellow-300"
				>
					<FaEarthAmericas className="mr-3" />
					<span className="">Cheap Labour</span>
				</NavLink>
				<ul className="w-1/2 flex justify-around items-center">
					<li><NavLink
						to="/about"
						className={({ isActive }) =>
							`hover:text-yellow-500 ${isActive ? "text-yellow-500" : "text-blue-500"}`
						}
					>
						About
					</NavLink></li>
					<li><NavLink
						to="/blog"
						className={({ isActive }) =>
							`hover:text-yellow-500 ${isActive ? "text-yellow-500" : "text-blue-500"}`
						}
					>
						Blog
					</NavLink></li>
					<li><NavLink
						to="/projects"
						className={({ isActive }) =>
							`hover:text-yellow-500 ${isActive ? "text-yellow-500" : "text-blue-500"}`
						}
					>
						Projects
					</NavLink></li>
					<li><NavLink
						to="/contact"
						className={({ isActive }) =>
							`hover:text-yellow-500 ${isActive ? "text-yellow-500" : "text-blue-500"}`
						}
					>
						Contact
					</NavLink></li>
				
				</ul>
			</nav>
		</>
	);
};

export default Navigation;
