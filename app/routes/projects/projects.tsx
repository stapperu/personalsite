import type {Route} from "./+types/projects";
import db from "../../../data/data/db.json";
import type { Project } from "~/types";
import { FiArrowUpRight } from "react-icons/fi";
import { FiBox } from "react-icons/fi";


export async function loader({request}:Route.LoaderArgs):Promise<any>{
    return db;
}

const ProjectsPage = ({loaderData}:Route.ComponentProps)=>{
  const {projects}=loaderData;
  return (
    <>
    <FiBox className=" fixed w-1/2 h-auto top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 opacity-8 text-yellow-100"/>
      <h1>BIG PROJECTS</h1>
    <div className="grid gap-4 md:grid-cols-2 p-4">
      {projects.map((project:Project)=>(
        <div key={project.id} className="bg-gray-800 m-2 pt-8 p-8 text-yellow-50 shadow-[0px_-2px_2px_yellow] z-5 opacity-85">
            <h2 className="text-yellow-200 text-xl uppercase border-b-2 border-yellow-300">{project.title}</h2>
            <img src={project.image} className="mt-4 mb-4"/> 
            <p className="m-2 text-lg">{project.description}</p> 
            <p className="text-sm text-yellow-200/40">Categories: {project.category}</p> 
            <p>Check it out yourself at: <span className="text-yellow-300 text-lg font-bold">{project.url}<FiArrowUpRight className="inline-block ml-1" /></span></p> 
            <p className="text-sm text-yellow-200/40" >Released on: {project.date}</p> 
            
            </div>
      ))}
    </div></>
  )
}

export default ProjectsPage;