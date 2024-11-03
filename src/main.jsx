import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root.jsx';
import Error from './components/Error/Error.jsx';
import Home from './components/Home/Home.jsx';
import Dashboard from './components/Dashboard/Dashboard.jsx';
import BookDetails from './components/BookDetails/BookDetails.jsx';
import ListedBooks from './components/ListedBooks/ListedBooks.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children:[
      {
        path:'/',
        element: <Home></Home>
      },
      {
        path: '/books/:bookId',
        loader: ()=> fetch('/data/booksData.json'),
        element:<BookDetails></BookDetails>
      },
      {
        path:'/listedBooks',
        element: <ListedBooks></ListedBooks>,
        loader: ()=>fetch('/data/booksData.json'),
      },
      {
        path:'/dashboard',
        element:<Dashboard></Dashboard>
      }
    ]
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
