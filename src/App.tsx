
import Test from './page/_Test'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import One from './page/one'
import Two from './page/two'
import Three from './page/three'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Test />,
  },
{
  path: '/one',
  element: <One />,
},
{
  path: '/two',
  element: <Two />,
},
{
  path: '/three',
  element: <Three />,
},
])

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
