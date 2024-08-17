import { Link, useNavigate } from "react-router-dom"
import { Container, Logo, LogoutBtn } from "../index"
import { useSelector } from "react-redux"
//import { logout } from "../../store/authSlice"


function Header() {
    const authStatus = useSelector((state)=>state.auth.status); // এটা বুঝিনি
    const navigate = useNavigate();

    const navItems = [ 
    {
        label: "Home",
        slug: '/',
        active: true
    },
     {
        label: "Login",
        slug: '/login',
        active: !authStatus,
     },
     {
        label: "Signup",
        slug: '/signup',
        active: !authStatus, 
        },
     {
        label: "All posts",
        slug: '/all-posts',
        active: !authStatus,
     },
     {
        label: "Add posts",
        slug: '/add-posts',
        active: !authStatus,
     },
     ]


    return (
       <header className=" py-3 shadow bg-gray-500">

        <Container>
            <nav className="flex">
                <div className="mr-4">
                    <Link>
                    <Logo width ='70px' />
                    </Link>
                </div>
                <ul className="flex ml-auto">
                    {navItems.map((item)=> 
                    item.active ? (
                        <li key={item.label}>
                           <button
                           onClick={() => navigate(item.slug)}
                           className=" inline-block px-6 py-2 
                           duration-200 hover:bg-blue-100 rounded-full "
                           >{item.label}</button>
                        </li>
                    ) : null
                    )}
                    {authStatus && (
                        <li key="logout">
                            <LogoutBtn  />
                        </li>
                    )}
                </ul>
            </nav>
        </Container>
             
       </header>
        
    )
            
            

     
}

export default Header




