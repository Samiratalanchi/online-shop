import Home from '../pages/home/home'
import './App.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom"

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },

  ])

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
