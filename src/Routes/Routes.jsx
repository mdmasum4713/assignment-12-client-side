import {
    createBrowserRouter,

  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import AddArticle from "../pages/AddArticle/AddArticle";
import AllArticles from "../pages/AllArticles/AllArticles";
import Subscription from "../pages/Subscription/Subscription";
import Premium from "../pages/Premium/Premium";
import Login from "../Components/Login/Login";
import PrivateRoute from "./PrivateRoute";
import Register from "../Components/Register/Register";
import Dashboard from "../Layout/Dashboard";
import AllUsers from "../pages/Dashboard/AllUsers/AllUsers";
import AllArticleDetails from "../pages/AllArticles/AllArticleDetails";
import MyArticles from "../pages/MyArticles/MyArticles";
import MyProfile from "../pages/MyProfile/MyProfile";


 export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
            path: '/',
            element: <Home></Home>,
            loader: () => fetch('http://localhost:5000/newsCart')
        },
        {
            path: '/addArticles',
            element: <PrivateRoute><AddArticle></AddArticle></PrivateRoute>
        },
        {
            path: '/allArticles',
            element: <PrivateRoute> <AllArticles></AllArticles></PrivateRoute>,
            loader: () => fetch('http://localhost:5000/news')
        },
        {
               path: '/articlesDetails/:_id',
               element: <PrivateRoute><AllArticleDetails></AllArticleDetails></PrivateRoute>

        },
        {
            path: '/subscription',
            element: <Subscription></Subscription>
        },
        {
          path: '/myArticles',
          element: <MyArticles></MyArticles>
          
        },
        {
          path: '/myProfile',
          element: <MyProfile></MyProfile>

        },
        {
            path: '/premium',
            element: <PrivateRoute><Premium></Premium></PrivateRoute>
        },
        {
        path: '/login',
        element: <Login></Login>
        },
         {
          path: '/register',
          element: <Register></Register>
         }
      ]
    },
    {
      path: 'dashboard',
      element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
      children: [
        {
          path: 'users',
          element: <AllUsers></AllUsers>
        }

      ]
    
    }
  ]);