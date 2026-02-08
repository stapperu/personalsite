import type {Route} from "./+types/blog";
import blogPosts from "../../../data/data/blogPosts.json";
// import type { article } from "~/types";
import { FiArrowUpRight } from "react-icons/fi";
import { FiBox } from "react-icons/fi";

export async function loader({request}:Route.LoaderArgs):Promise<any>{
    return blogPosts;
}

const BlogPage = ({loaderData}:Route.ComponentProps)=>{
  const {blogArticles}=loaderData;

  return (
    <>
    <FiBox className=" fixed w-1/2 h-auto top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 opacity-8 text-yellow-100"/>
      <h1>BIG articleS</h1>
    <div className="grid gap-4 md:grid-cols-2 p-4">
      {blogArticles.map((article:any)=>(
        <div key={article.id} className="bg-gray-900 m-2 pt-8 p-8 text-yellow-50 shadow-[0px_-2px_2px_yellow] z-5 opacity-85">
            <h2 className="text-yellow-300 text-xl border-yellow-300">{article.headline}</h2>
            <p className="m-2 text-sm">{article.excerpt}</p> 
            <img src={article.image} className="mt-4 mb-4"/> 
            <p className="text-sm text-yellow-200/50">Read time: {article.readTime} min</p> 
            <p className="text-sm text-yellow-200/50">Author: {article.author}</p>  
            <p className="text-sm text-yellow-200/50" >Published on: {article.date}</p> 
            
            </div>
      ))}
    </div></>
  )
}

export default BlogPage;