import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from "./Components/Home/Home.jsx";
import About from "./Components/About/About.jsx";
import User from "./Components/User/User.jsx";
import Contact from "./Components/Contact/Contact.jsx";
import {githubInfoLoader} from './Components/GithubinfoLoader/GithubInfo.jsx'
import Github from "./Components/Github/Github.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout/>}>
      <Route path='' element= {<Home/>}/>
      <Route path='about' element= {<About/>}/>
      <Route path='contact' element= {<Contact/>}/>
      <Route path='user/:userid' element= {<User/>}/>
      <Route 
      loader={githubInfoLoader}
      path='github'
      element= {<Github/>}/>
    </Route>
  )
)

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path='/' element={<Layout />}>
//       <Route path = "" element={<Home/>} />
//       <Route path="about" element={<About />}/>
//       <Route path="contact" element={<Contact />}/>

//     </Route>  
//   )
// )
// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout />,
//     children: [
//       {
//         path:"",
//         element: <Home />
//       },
//       {
//         path:"about",
//         element: <About />
//       },
//       {
//         path:"contact",
//         element: <Contact />
//       },
//     ]
//   }
// ])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
