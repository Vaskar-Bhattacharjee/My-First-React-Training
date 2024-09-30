import { useDispatch } from "react-redux";
import authService from "../../appwrite/auth";
import { logout } from "../../store/authSlice";

function LogoutBtn() {
    const dispatch = useDispatch();
    const logoutHandler =  () => {
        authService.logout().then(()=>{
            dispatch(logout());
            window.location.reload();
            
        })
        
    }
    return (
        <button onClick={logoutHandler} className="px-4 py-2 font-semibold text-white
         bg-blue-500 rounded-lg shadow-md
         hover:bg-blue-600 focus:outline-none focus:ring-2
         focus:ring-blue-300"
        >
            Logout
        </button>
    )
}

export default LogoutBtn
