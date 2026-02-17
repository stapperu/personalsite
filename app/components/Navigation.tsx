import { useState, useEffect } from "react";
import { NavLink } from "react-router";
import { FiCpu } from "react-icons/fi";
import { FaTimes, FaBars } from "react-icons/fa";

const Navigation = () => {
	const [isMenu, setIsMenu] = useState(false);

	return (
		<>
			<nav
				className={`w-full h-20 p-2 text-lg border-t-2 border-yellow-400 flex justify-between bg-gray-900/95 sticky top-0 z-100`}
			>
				<NavLink
					to="/"
					className="leftside p-2 flex w-1/2 text-md items-center text-yellow-300"
				>
					<FiCpu className="mr-3 min-h-8 min-w-8" />
					<span className={`text-4xl`}>Cheap Labour</span>
				</NavLink>

				<ul className="w-1/2 lg:w-3/7 hidden md:flex justify-around items-center">
					<li>
						<NavLink
							to="/about"
							className={({ isActive }) =>
								`hover:text-yellow-300 ${isActive ? "text-yellow-300" : "text-white"}`
							}
						>
							About
						</NavLink>
					</li>
					<li>
						<NavLink
							to="/blog"
							className={({ isActive }) =>
								`hover:text-yellow-300 ${isActive ? "text-yellow-300" : "text-white"}`
							}
						>
							Blog
						</NavLink>
					</li>
					<li>
						<NavLink
							to="/projects"
							className={({ isActive }) =>
								`hover:text-yellow-300 ${isActive ? "text-yellow-300" : "text-white"}`
							}
						>
							Projects
						</NavLink>
					</li>
					<li>
						<NavLink
							to="/contact"
							className={({ isActive }) =>
								`hover:text-yellow-300 ${isActive ? "text-yellow-300" : "text-white"}`
							}
						>
							Contact
						</NavLink>
					</li>
				</ul>
				<div className="menu flex items-center md:hidden">
					<button
						className={`bg-yellow-400 text-black text-2xl p-3 m-2 cursor-pointer`}
						onClick={() => setIsMenu((prev) => !prev)}
					>
						{isMenu ? <FaTimes /> : <FaBars />}
					</button>
				</div>
				{/* mobile nav dropdown */}
				{isMenu && (
					<div className="absolute top-19 w-full right-0 p-4 bg-gray-950 flex flex-column text-lg border-b border-yellow-400">
						<NavLink
							to="/about"
							className={({ isActive }) =>
								`hover:text-yellow-300 ${isActive ? "text-yellow-300" : "text-white"} p-2`
							}
						>
							About
						</NavLink>

						<hr />

						<NavLink
							to="/blog"
							className={({ isActive }) =>
								`hover:text-yellow-300 ${isActive ? "text-yellow-300" : "text-white"} p-2`
							}
						>
							Blog
						</NavLink>

						<hr />

						<NavLink
							to="/projects"
							className={({ isActive }) =>
								`hover:text-yellow-300 ${isActive ? "text-yellow-300" : "text-white"} p-2`
							}
						>
							Projects
						</NavLink>

						<hr />

						<NavLink
							to="/contact"
							className={({ isActive }) =>
								`hover:text-yellow-300 ${isActive ? "text-yellow-300" : "text-white"} p-2`
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
