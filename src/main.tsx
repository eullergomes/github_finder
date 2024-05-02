import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

//configuring router
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

//route pages
import Home from './routes/Home.tsx';
import UserRepositories from './routes/UserRepositories.tsx'
import ErrorPage from './routes/ErrorPage.tsx';

//objetos que serão as rotas
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children:[
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/repos/:userName',
        element: <UserRepositories/>,
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
