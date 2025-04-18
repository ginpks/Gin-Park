import { createRoot } from 'react-dom/client';
import { createHashRouter, RouterProvider } from "react-router-dom";
import Layout from './Layout.jsx';
import MainPage from './mainPage/mainPage.jsx';
import AboutPage from './aboutPage/aboutPage.jsx';
import ProjectsPage from './projectsPage/projectsPage.jsx';
import BlogPage from './blogPage/blogPage.jsx';
import RestAPI from './blogPage/restAPI/restAPI.jsx';
import BlogPostsList from './blogPage/blogPostList.jsx';

import './mainPage/mainPage.css';
import { AnimationProvider } from './animationContext.jsx';

const router = createHashRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true, // Matches #/
        element: <MainPage />,
      },
      {
        path: "about", // Matches #/about
        element: <AboutPage />,
      },
      {
        path: "projects", // Matches #/projects
        element: <ProjectsPage />,
      },
      {
        path: "blog", // Matches #/blog
        element: <BlogPage />,
        children: [
          {
            index: true, // Matches #/blog/
            element: <BlogPostsList />,
          },
          {
            path: "rest-api", // Matches #/blog/rest-api
            element: <RestAPI />
          }
        ],
      }
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <AnimationProvider>
    <RouterProvider router={router} />
  </AnimationProvider>
);