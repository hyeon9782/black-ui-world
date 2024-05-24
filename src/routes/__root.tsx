import { createRootRouteWithContext } from "@tanstack/react-router";
import Layout from "../components/layouts";

export const Route = createRootRouteWithContext()({
  component: Layout,
});
