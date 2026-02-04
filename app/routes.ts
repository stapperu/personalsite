import { type RouteConfig, index,route } from "@react-router/dev/routes";

export default [index("routes/home/home.tsx"),
    route("/about","./routes/about/about.tsx"),
    route("/blog","./routes//blog/blog.tsx"),
    route("/contact","./routes/contact/contact.tsx")
] satisfies RouteConfig;
