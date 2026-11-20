import Home from "./pages/Home";
import About from "./pages/About";
import Blog from "./pages/Blog";
import BlogArticle from "./pages/BlogArticle";
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import MainLayout from "./layouts/MainLayout";
import AuthLayout from "./layouts/AuthLayout";
import NotFound from "./pages/NotFound";



const router = createBrowserRouter([
  {
    path: '', element: <MainLayout />, children: [
      { index: true, element: <Home /> },
      { path: 'blog', element: <Blog /> },
      { path: 'blog/:slug', element: <BlogArticle /> },
      { path: 'about', element: <About /> },
      { path: '*', element: <NotFound /> }
    ]
  },
  {
        path: 'auth', element: <AuthLayout />, children: [
        ]
  }
])

export default function App() {

  return (
    <>
      <RouterProvider router={router}></RouterProvider>


    </>
  )
}

