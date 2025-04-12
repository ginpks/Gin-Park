import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from './Layout.jsx'; 
import MainPage from './mainPage/mainPage.jsx';
import AboutPage from './aboutPage/aboutPage.jsx';
import ProjectsPage from './projectsPage/projectsPage.jsx';
import BlogPage from './blogPage/blogPage.jsx';
import './mainPage/mainPage.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <MainPage />,
      },
      {
        path: "about", 
        element: <AboutPage />,
      },
      {
        path: "projects", 
        element: <ProjectsPage />,
      },
      {
        path: "blog", 
        element: <BlogPage />,
      }
    ],
  },

], {
  basename: "/Gin-Park", 
});

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
