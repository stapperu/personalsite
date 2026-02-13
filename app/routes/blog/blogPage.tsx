import type {Project} from "../../types"
import type {Route} from "./+types/blogPage";
import {useLoaderData,Link} from "react-router"

export async function loader ({request,params}:Route.LoaderArgs){
    const url=new URL("/data/blogPosts.json",request.url);
  const response =await fetch(url);
  const data = await response.json();
  const article=data.blogArticles.find((p:any)=>p.id===Number(params.id));
return article
}

const BlogPage = ({loaderData}:Route.ComponentProps) => {
  const article=loaderData;
  return <>
  <h1>Blog Page {article.id}</h1>
  </>;
};

export default BlogPage;
