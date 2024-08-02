import UserContext from "./UserContext.js";
import React from "react";


const UserContextProvider = ({children})=>{
    const [user, setUser] = React.useState(null)
    return (
        <UserContext.Provider value={{user, setUser}}>
        {children}
        </UserContext.Provider>
    )
}
export default UserContextProvider