import { createBrowserRouter } from "react-router";
import { LandingPage } from "./pages/landing-page";
import { DocumentationPage } from "./pages/documentation-page";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: LandingPage,
  },
  {
    path: "/docs",
    Component: DocumentationPage,
  },
  {
    path: "/docs/:section",
    Component: DocumentationPage,
  },
]);
