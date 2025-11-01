import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { AboutPage, ErrorPage, HomePage, Layout, ProjectsPage } from "./pages"



const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />
      },
      {
        path: 'about',
        element: <AboutPage />
      },
      {
        path: 'projects',
        element: <ProjectsPage />
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
