
import Test from './page/_Test'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Test />,
  },

])

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
