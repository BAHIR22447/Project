import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  // Route,
  // BrowserRouter,
  // Routes,
} from "react-router-dom";
import Home from "./Home.tsx";
import About from './About.tsx'
import Portfolio from './Portfolio.tsx'
import News from './News.js'
import Contact_us from './Contact_us.tsx'
import Layout from "./Layout.tsx";
import NotFound from "./components/notfound.tsx";
import Trending_games_page from "./components/trending_games_page.tsx";
// import Navbar from "./components/Navbar.tsx";

  



// export default function Router() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Home />}></Route>
//         <Route path="/about" element={<About />}></Route>
//         <Route path="/portfolio" element={<Portfolio />}></Route>
//         <Route path="/news" element={<News />}></Route>
//         <Route path="/contact" element={<Contact_us />}></Route>
//         <Route path="/seeall" element={<Seeall />}></Route>
//       </Routes>
//     </BrowserRouter>
//   );
// }


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
        
      ],
    },

    {
      path: "/*",
      element: <NotFound/>,
    },
  ]);

export default Router;