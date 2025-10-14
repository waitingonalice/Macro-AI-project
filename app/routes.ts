import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("real-or-ai", "routes/real-or-ai/index.tsx"),
  route("best-practices", "routes/best-practices/index.tsx"),
] satisfies RouteConfig;
