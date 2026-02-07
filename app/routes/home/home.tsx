import type { Route } from "./+types/home";


export function meta({}: Route.MetaArgs) {
  return [
    { title: "Portfolio | HOME" },
    { name: "description", content: "Welcome to React Router! | HOME" },
  ];
}

export default function Home() {
  return <> 
  <h1 className="p-6 m-6 text-4xl text-center">Gello!</h1> 
  <h2>Homepage</h2>
  <h1 className="p-6 m-6 text-4xl text-center">Gello!</h1> 
  <h2>Homepage</h2>
  <h1 className="p-6 m-6 text-4xl text-center">Gello!</h1> 
  <h2>Homepage</h2>
  <h1 className="p-6 m-6 text-4xl text-center">Gello!</h1> 
  <h2>Homepage</h2>

  </>;
}
