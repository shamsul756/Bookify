
import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import HomePage from "../assets/Pages/HomePage/HomePage";
import Books from "../assets/Pages/HomePage/Books/Books";
// import Errorpage from "../assets/Errorpage";




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
        ],
    //   errorElement:  <Errorpage/>,
    },
])
