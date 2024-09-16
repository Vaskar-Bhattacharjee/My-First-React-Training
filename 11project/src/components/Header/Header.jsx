import {Container, Logo, LogoutBtn} from '../index'
import { Link } from 'react-router-dom'
import {useSelector} from 'react-redux'
import { useNavigate } from 'react-router-dom'

function Header() {
  const authStatus = useSelector((state) => state.auth.status)
  const navigate = useNavigate()

  const navItems = [
    {
      name: 'Home',
      slug: "/",
      active: true
    }, 
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
  },
  {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
  },
  {
      name: "All Posts",
      slug: "/all-posts",
      active: authStatus,
  },
  {
      name: "Add Post",
      slug: "/add-post",
      active: authStatus,
  },
  ]


  return (
    <header className='py-4 shadow-lg bg-gradient-to-r from-gray-700 to-gray-900 sticky top-0 z-50'>
    <Container>
      <nav className='flex items-center'>
        <div className='mr-6'>
          <Link to='/'>
            <Logo width='70px' />
          </Link>
        </div>
        <ul className='flex ml-auto items-center space-x-6'>
          {navItems.map((item) =>
            item.active ? (
              <li key={item.name}>
                <button
                  onClick={() => navigate(item.slug)}
                  className='inline-block px-6 py-2 text-gray-100 font-medium rounded-full 
                  bg-gradient-to-r from-gold-500 to-burgundy-600 hover:bg-gradient-to-l
                  hover:from-gold-600 hover:to-burgundy-700 transition-all duration-300 ease-in-out
                  focus:outline-none focus:ring-2 focus:ring-gold-500 focus:ring-offset-2'
                >
                  {item.name}
                </button>
              </li>
            ) : null
          )}
          {authStatus && (
            <li>
              <LogoutBtn />
            </li>
          )}
        </ul>
      </nav>
    </Container>
  </header>
  
  )
}

export default Header















// import {Container, Logo, LogoutBtn} from '../index'
// import { Link } from 'react-router-dom'
// import {useSelector} from 'react-redux'
// import { useNavigate } from 'react-router-dom'

// function Header() {
//   const authStatus = useSelector((state) => state.auth.status)
//   const navigate = useNavigate()

//   const navItems = [
//     {
//       name: 'Home',
//       slug: "/",
//       active: true,
//     }, 
//     {
//       name: "Login",
//       slug: "/login",
//       active: !authStatus,
//   },
//   {
//       name: "Signup",
//       slug: "/signup",
//       active: !authStatus,
//   },
//   {
//       name: "All Posts",
//       slug: "/all-posts",
//       active: authStatus,
//   },
//   {
//       name: "Add Post",
//       slug: "/add-post",
//       active: authStatus,
//   },
//   ]


//   return (
//     <header className='py-3 shadow bg-gray-500'>
//       <Container>
//         <nav className='flex'>
//           <div className='mr-4'>
//             <Link to='/'>
//               <Logo width='70px'   />

//               </Link>
//           </div>
//           <ul className='flex ml-auto'>
//             {navItems.map((item) => 
//             item.active ? (
//               <li key={item.name}>
//                 <button
//                 onClick={() => navigate(item.slug)}
//                 className='inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'
//                 >{item.name}</button>
//               </li>
//             ) : null
//             )}
//             {authStatus && (
//               <li>
//                 <LogoutBtn />
//               </li>
//             )}
//           </ul>
//         </nav>
//         </Container>
//     </header>
//   )
// }

// export default Header














// import { Link, useNavigate } from "react-router-dom"
// import { Container, Logo, LogoutBtn } from "../index"
// import { useSelector } from "react-redux"

// import {Container, Logo, LogoutBtn} from '../index'
// import { Link } from 'react-router-dom'
// import {useSelector} from 'react-redux'
// import { useNavigate } from 'react-router-dom'


//import { useDispatch } from "react-redux"
//import { logout } from "../../store/authSlice"
//import { logout } from "../../store/authSlice"


// function Header() {
//     const authStatus = useSelector((state) => state.auth.status) // এটা বুঝিনি
//     const navigate = useNavigate();

//     const navItems = [ 
//     {
//         label: "Home",
//         slug: '/',
//         active: true
//     },
//      {
//         label: "Login",
//         slug: '/login',
//         active: !authStatus,
//      },
//      {
//         label: "Signup",
//         slug: '/signup',
//         active: !authStatus, 
//         },
//      {
//         label: "All posts",
//         slug: '/all-posts',
//         active: authStatus,
//      },
//      {
//         label: "Add posts",
//         slug: '/add-posts',
//         active: authStatus,
//      },
//      ]


//     return (
//        <header className=" py-3 shadow bg-gray-500">

//         <Container>
//             <nav className="flex">
//                 <div className="mr-4">
//                     <Link to="/"> 
//                     <Logo width ='70px' />
//                     </Link>
//                 </div>
//                 <ul className="flex ml-auto">
//                     {navItems.map((item)=> 
//                     item.active ? (
//                         <li key={item.label}>
//                            <button
//                            onClick={() => navigate(item.slug)}
//                            className=" inline-block px-6 py-2 
//                            duration-200 hover:bg-blue-100 rounded-full "
//                            >{item.label}</button>
//                         </li>
//                     ) : null
//                     )}
//                     {authStatus && (
//                         <li key="logout">
//                             <LogoutBtn  />
//                         </li>
//                     )}
//                 </ul>
//             </nav>
//         </Container>
             
//        </header>
        
//     )
            
            

     
// }

// export default Header




