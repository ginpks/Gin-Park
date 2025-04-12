import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from './App.jsx'
import ProjectPage from './projectsPage/projectsPage';
const router = createBrowserRouter([
    {
        path: "/Gin-Park",
        element: <App />
    },
    {
        path: "/Gin-Park/projects",
        element: <ProjectPage />
    }
]);

createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
);
