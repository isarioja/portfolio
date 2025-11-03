import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { AboutPage, ErrorPage, HomePage, Layout, ProjectsPage } from "./pages"
import { loader as loaderHome } from './pages/HomePage'
import { loader as loaderLayout } from './pages/Layout'
import { loader as loaderProject } from './pages/ProjectsPage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
    loader: loaderLayout,
    children: [
      {
        index: true,
        element: <HomePage />,
        loader: loaderHome
      },
      {
        path: 'about',
        element: <AboutPage />
      },
      {
        path: 'projects',
        element: <ProjectsPage />,
        loader: loaderProject
      }
    ]
  }
])

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
