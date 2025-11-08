import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider, createBrowserRouter} from 'react-router-dom'
import Home from './pages/Home.jsx'
import { store } from './app/store.js'
import { Provider } from 'react-redux'
import ShowResults from './pages/ShowResults.jsx'
import ContentDetails from './pages/ContentDetails.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: 'show-results',
        element: <ShowResults />
      },
      {
        path: 'content/:type/:id',
        element: <ContentDetails />
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  // <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  // </StrictMode>
)
