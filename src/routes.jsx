import App from "./App";
import Error from "./components/Error";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import AboutMe from "./pages/AboutMe";
import MyResume from "./pages/MyResume";
import Specialties from "./pages/Specialties";
import Home from "./components/Home";

const routes = [
  {
    path: "/*",
    element:<Error/>, // Handles 404s
  },
  {
    path: "/",
    element: <App />, // Layout wrapper (Navbar + Footer + <Outlet />)
    children: [
      { index: true, element: <Home /> }, // Default landing
      { path: "projects", element: <Projects /> },
      { path: "aboutMe", element: <AboutMe /> },
      { path: "specialties", element: <Specialties /> },
      { path: "contact", element: <Contact /> },
      { path: "resume", element: <MyResume /> },
    ],
  },
];

export default routes;


