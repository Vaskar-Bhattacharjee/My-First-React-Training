import { useState } from 'react';
import { Container, Logo, LogoutBtn } from '../index';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const authStatus = useSelector((state) => state.auth.status);
  const navigate = useNavigate();

  const navItems = [
    { name: 'Home', slug: '/', active: true },
    { name: 'Login', slug: '/login', active: !authStatus },
    { name: 'Signup', slug: '/signup', active: !authStatus },
    { name: 'All Posts', slug: '/all-posts', active: authStatus },
    { name: 'Add Post', slug: '/add-post', active: authStatus }
  ];

  const handleNavClick = (slug) => {
    navigate(slug);
    setIsMenuOpen(false);
  };

  const renderNavItems = (isMobile = false) =>
    navItems.map((item) =>
      item.active ? (
        <li key={item.name}>
          <button
            onClick={() => handleNavClick(item.slug)}
            className={`${
              isMobile ? 'w-full' : ''
            } px-6 py-2 text-lg text-white font-medium rounded-lg bg-gradient-to-r from-gold-500 to-burgundy-600 hover:bg-gradient-to-l hover:from-gold-600 hover:to-burgundy-700 transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-gold-500 focus:ring-offset-2`}
          >
             {item.name === 'Home' ? (
              <>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 mt-[-7px] w-5 mr-2 inline-block"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9l9-7 9 7v12a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                </svg>
                Home
              </>
            ) : (
              item.name
            )}
          </button>
        </li>
      ) : null
    );


  return (
    <header className="py-4 bg-gradient-to-b from-gray-800
     to-gray-900 sticky top-0 z-50 shadow-2xl transition-all">
      <Container>
        <nav className="flex items-center justify-between">
          <div className="mr-6">
            <Link to="/">
              <Logo width="70px" />
            </Link>
          </div>

          {/* Hamburger Menu for Mobile */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-100 focus:outline-none"
            >
              <svg
                className="w-6 h-6 transition-transform duration-200"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
                />
              </svg>
            </button>
          </div>

          {/* Desktop Navigation Links */}
          <ul className="hidden lg:flex ml-auto items-center 
          space-y-4 lg:space-y-0 lg:space-x-6 mt-4 lg:mt-0">
            {renderNavItems()}
            {authStatus && (
              <li>
                <LogoutBtn />
              </li>
            )}
          </ul>
        </nav>
      </Container>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-gray-800 p-4 rounded-lg mt-2">
          <ul className="flex flex-col space-y-2">
            {renderNavItems(true)} {/* Pass true to indicate mobile styling */}
            {authStatus && (
              <li>
                <LogoutBtn />
              </li>
            )}
          </ul>
        </div>
      )}
    </header>
  );
}

export default Header;


















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




