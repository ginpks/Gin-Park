import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from './Layout.jsx'; 
import MainPage from './mainPage/mainPage.jsx';
import AboutPage from './aboutPage/aboutPage.jsx';
import ProjectsPage from './projectsPage/projectsPage.jsx';
import BlogPage from './blogPage/blogPage.jsx';
import RestAPI from './blogPage/restAPI/restAPI.jsx';
import BlogPostsList from './blogPage/blogPostList.jsx'; // The Index component

import './mainPage/mainPage.css';
import { AnimationProvider } from './animationContext.jsx';


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
        children: [
          {
            index: true,
            element: <BlogPostsList />,
          },
          {
            path: "rest-api",
            element: <RestAPI />
          }
        ],
      }
    ],
  },

], {
  basename: "/Gin-Park", 
});

createRoot(document.getElementById('root')).render(
  <AnimationProvider>
    <RouterProvider router={router} />
  </AnimationProvider>
);
