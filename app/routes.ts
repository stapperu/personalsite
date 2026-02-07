import { type RouteConfig, index,route,layout } from "@react-router/dev/routes";

export default [
    layout('./routes/layouts/homeLayout.tsx',[index("routes/home/home.tsx")]),
    layout('./routes/layouts/mainLayout.tsx',[  route("/about","./routes/about/about.tsx"),
    route("/blog","./routes/blog/blog.tsx"),
    route("/contact","./routes/contact/contact.tsx"),
    route("/projects","./routes/projects/projects.tsx")])
  
] satisfies RouteConfig;
