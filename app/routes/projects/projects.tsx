import type { Route } from "./+types/projects";
import type { Project } from "~/types";
import { FiArrowUpRight } from "react-icons/fi";
import { FiBox } from "react-icons/fi";
import { Link } from "react-router";
import { useState } from "react";

export async function loader({ request }: Route.LoaderArgs): Promise<any> {
	const url = new URL("/data/db.json", request.url);
	const res = await fetch(url);
	const db = await res.json();
	return db;
}
const ProjectsPage = ({ loaderData }: Route.ComponentProps) => {
	const { projects } = loaderData;

	const [currentPage, setCurrentPage] = useState(1);
	const itemsPerPage = 2;
	const totalPages = Math.ceil(projects.length / itemsPerPage);
	const indexOfLast = currentPage * itemsPerPage;
	const indexOfFirst = currentPage * itemsPerPage - itemsPerPage;
	const currentProjects = projects.slice(indexOfFirst, indexOfLast);

	const renderPaginationButtons = () => (
		<div className="paginationSection flex justify-center gap-2 mt-8">
			{Array.from({ length: totalPages }, (_, index) => (
				<button
					key={index + 1}
					className="px-3 py-1 cursor-pointer rounded bg-blue-950 z-10"
					onClick={() => setCurrentPage(index + 1)}
				>
					{" "}
					{index + 1}
				</button>
			))}
		</div>
  );

	return (
		<>
			<FiBox className=" fixed w-1/2 h-auto top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 opacity-8 text-yellow-100" />
			<h1>BIG PROJECTS</h1>
			<div className="grid gap-4 md:grid-cols-2 p-4">
				{currentProjects.map((project: Project) => (
					<Link to={`/projects/${project.id}`} key={project.id}>
						<div className="bg-gray-900 m-2 pt-8 p-8 text-yellow-50 shadow-[0px_-2px_2px_yellow] z-5 opacity-85">
							<h2 className="text-yellow-300 text-xl uppercase border-b-2 border-yellow-300">
								{project.title}
							</h2>
							<img src={project.image} className="mt-4 mb-4" />
							<p className="m-2 text-lg">{project.description}</p>
							<p className="text-sm text-yellow-200/50">
								Categories: {project.category}
							</p>
							<p>
								Check it out yourself at:{" "}
								<span className="text-yellow-300 text-lg font-bold">
									{project.url}
									<FiArrowUpRight className="inline-block ml-1" />
								</span>
							</p>
							<p className="text-sm text-yellow-200/50">
								Released on: {project.date}
							</p>
						</div>
					</Link>
				))}
			</div>
			{totalPages > 1 && renderPaginationButtons()}
		</>
	);
};

export default ProjectsPage;
