import type {Project} from "../../types"
import type { Route } from "./+types/projectPage";
import {useLoaderData,Link} from "react-router"

export async function loader ({request,params}:Route.LoaderArgs){
  const url=new URL("/data/db.json",request.url)
  const response =await fetch(url);
  const data = await response.json();
  const project=data.projects.find((p:any)=>p.id===Number(params.id));
  console.log(project);
return project
}

const ProjectPage = ({loaderData}:Route.ComponentProps)=>{
  const project=loaderData;
  return <>
  <h1>Projects Page {project.id}</h1>
  </>;
};

export default ProjectPage;
