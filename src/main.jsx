import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import Projects from "./components/Projects";
// import Contact from "./components/Contact";
// import About from "./components/About";

// const router = createBrowserRouter([
//   { path: "/", element: <App /> },
//   { path: "/about", element: <About /> },
//   { path: "/projects", element: <Projects /> },
//   { path: "/contact", element: <Contact /> },
// ]);

// createRoot(document.getElementById("root")).render(
//   <RouterProvider router={router} />
// );

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
