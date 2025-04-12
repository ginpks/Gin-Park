import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProjectPage from './projectsPage/projectsPage';
import MainPage from './mainPage/mainPage.jsx';
import AboutPage
 from './aboutPage/aboutPage.jsx';
const router = createBrowserRouter([
    {
        path: "/Gin-Park",
        element: <MainPage />
    },
    {
        path: "/Gin-Park/about",
        element: <AboutPage />
    },
    {
        path: "/Gin-Park/projects",
        element: <ProjectPage />
    }
]);

createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
);
