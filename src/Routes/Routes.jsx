
import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import HomePage from "../assets/Pages/HomePage/HomePage";
import Books from "../assets/Pages/HomePage/Books/Books";
import Errorpage from "../assets/Errorpage";
import BookDetails from "../assets/Pages/HomePage/BookDetails/BookDetails";




export const router = createBrowserRouter([


    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <HomePage />
            },
            {
                path: '/Books',
                element: <Books />,
            },
            {
                path:'/BookDetails/:id',
                element: <BookDetails/>,
                loader: () => fetch("/BookData.json").then(res => res.json()).then(data => data.books),
            },
        ],
      errorElement:  <Errorpage/>,
    },
])
