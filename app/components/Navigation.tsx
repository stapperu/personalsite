import { useState, useEffect } from "react";
import { NavLink } from "react-router";
import { FaEarthAmericas } from "react-icons/fa6";
import { FaTimes, FaBars } from "react-icons/fa";

const Navigation = () => {
	const [isMenu, setIsMenu] = useState(false);

	return (
		<>
			<nav
				className={`w-full h-20 p-2 text-lg border-t-2 border-yellow-500 flex justify-between bg-gray-950 sticky top-0`}
			>
				<NavLink
					to="/"
					className="leftside p-2 flex w-1/2 text-md items-center text-yellow-500"
				>
					<FaEarthAmericas className="mr-3 min-h-8 min-w-8" />
					<span className={`text-4xl`}>Cheap Labour</span>
				</NavLink>

				<ul className="w-1/2 lg:w-3/7 hidden md:flex justify-around items-center">
					<li>
						<NavLink
							to="/about"
							className={({ isActive }) =>
								`hover:text-yellow-500 ${isActive ? "text-yellow-500" : "text-white"}`
							}
						>
							About
						</NavLink>
					</li>
					<li>
						<NavLink
							to="/blog"
							className={({ isActive }) =>
								`hover:text-yellow-500 ${isActive ? "text-yellow-500" : "text-white"}`
							}
						>
							Blog
						</NavLink>
					</li>
					<li>
						<NavLink
							to="/projects"
							className={({ isActive }) =>
								`hover:text-yellow-500 ${isActive ? "text-yellow-500" : "text-white"}`
							}
						>
							Projects
						</NavLink>
					</li>
					<li>
						<NavLink
							to="/contact"
							className={({ isActive }) =>
								`hover:text-yellow-500 ${isActive ? "text-yellow-500" : "text-white"}`
							}
						>
							Contact
						</NavLink>
					</li>
				</ul>
				<div className="menu flex items-center md:hidden">
					<button
						className={`bg-yellow-500 text-black text-2xl p-3 m-2 cursor-pointer`}
						onClick={() => setIsMenu((prev) => !prev)}
					>
						{isMenu ? <FaTimes /> : <FaBars />}
					</button>
				</div>
				{/* mobile nav dropdown */}
				{isMenu && (
					<div className="absolute top-19 w-full right-0 p-4 bg-gray-950 flex flex-column text-lg border-b border-yellow-500">
						<NavLink
							to="/about"
							className={({ isActive }) =>
								`hover:text-yellow-500 ${isActive ? "text-yellow-500" : "text-white"} p-2`
							}
						>
							About
						</NavLink>

						<hr />

						<NavLink
							to="/blog"
							className={({ isActive }) =>
								`hover:text-yellow-500 ${isActive ? "text-yellow-500" : "text-white"} p-2`
							}
						>
							Blog
						</NavLink>

						<hr />

						<NavLink
							to="/projects"
							className={({ isActive }) =>
								`hover:text-yellow-500 ${isActive ? "text-yellow-500" : "text-white"} p-2`
							}
						>
							Projects
						</NavLink>

						<hr />

						<NavLink
							to="/contact"
							className={({ isActive }) =>
								`hover:text-yellow-500 ${isActive ? "text-yellow-500" : "text-white"} p-2`
							}
						>
							Contact
						</NavLink>
					</div>
				)}
			</nav>
		</>
	);
};

export default Navigation;
