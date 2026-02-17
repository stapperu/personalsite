import type { Route } from "./+types/home";


export function meta({}: Route.MetaArgs) {
  return [
    { title: "Portfolio | HOME" },
    { name: "description", content: "Welcome to React Router! | HOME" },
  ];
}

export default function Home() {
  return <> 
<section className="flex">
  <div className="w-1/2 h-150 bg-gray-900 border-4 border-yellow-500/10">placeholder</div>
  <div className="w-1/2 h-150 bg-yellow-200/10"> <img src="/" alt="placeholder for img" className="w-7/8 h-7/8 mx-auto mt-8"/></div>
</section>
<section>
  <div className="w-full h-150 bg-blue-900/20"> placeholder</div>
</section>
  </>;
}
