import type {Route} from "./+types/projects";
import db from "../../../data/data/db.json";

export async function loader({request}:Route.LoaderArgs):Promise<any>{
    return {projects:db};
}
console.log(db);
const ProjectsPage = ({loaderData}:Route.ComponentProps)=>{
  const {projects}=loaderData;
  return (
    <div>
      <h1>BIG PROJECTS</h1>
      
    </div>
  )
}

export default ProjectsPage;