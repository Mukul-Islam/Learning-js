import { Component, StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Root from './Components/root/Root.jsx'
import About from './Components/About/About.jsx'
import Home from './Components/Home/Home.jsx'
import Mobile from './Components/Mobile/Mobile.jsx'
import User from './Components/Users/Users.jsx'
import User2 from './Components/User2/User2.jsx'
import Users from './Components/Users/Users.jsx'
import DetailsUser from './Components/DetailsUser/DetailsUser.jsx'
import Posts from './Components/Posts/Posts.jsx'
import PostDetails from './Components/PostDetails/PostDetails.jsx'


const urlPromiseData = fetch('https://jsonplaceholder.typicode.com/users')
                      .then(res => res.json())
const router = createBrowserRouter([


  {
    path: '/',
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: 'about', element: <About></About> },
      { path: 'mobile', Component: Mobile },
      {
        path: 'users',
        loader: () => fetch('https://jsonplaceholder.typicode.com/users'),
        Component: Users
      },
      {
        path:'users/:userId',
        loader:({params})=>fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`) ,
        Component:DetailsUser
      },
      {
        path: 'user2',
        element: <Suspense fallback={<span>Loadingg.......</span>}>
          <User2 urlPromiseData={urlPromiseData}></User2>
        </Suspense>
      },
      {
        path:'posts',
        loader:()=>fetch('https://jsonplaceholder.typicode.com/posts'),
        Component:Posts
      },
      {
        path:'/posts/:postId',
        loader:({params})=>fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`),
        Component:PostDetails
      }
    ]
  }

]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
