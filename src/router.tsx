import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  // Route,
  // BrowserRouter,
  // Routes,
} from "react-router-dom";
import Home from "./Home.tsx";
import About from "./About.tsx";
import Portfolio from "./Portfolio.tsx";
import News from "./News.js";
import Contact_us from "./Contact_us.tsx";
import Layout from "./Layout.tsx";
import NotFound from "./components/notfound.tsx";
import Trending_games_page from "./components/trending_games_page.tsx";
import Designs from "./components/designsPage.tsx";
import RecentProjects from "./components/recentProjectsPage.tsx";


const Router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/portfolio",
        element: <Portfolio />,
      },
      {
        path: "/news",
        element: <News />,
      },
      {
        path: "/contact",
        element: <Contact_us />,
      },

      {
        path: "/trinding",
        element: <Trending_games_page />,
      },

      {
        path: "/designs",
        element: <Designs/>,
      },
      {
        path: "/recentprojects",
        element: <RecentProjects/>,
      },
    ],
  },

  {
    path: "/*",
    element: <NotFound />,
  },
]);

export default Router;
