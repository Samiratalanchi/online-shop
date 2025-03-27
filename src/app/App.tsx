import Home from '../pages/home/home'
import ProductGrid from '../pages/productGrid/productGrid'
import './App.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom"

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/productGrid",
      element: <ProductGrid />,
    },

  ])

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
