import {useContext} from 'react'
import userContext from '../Context/UserContext';


function Profile() {
const {user} = useContext(userContext)
if (!user){
return <div>Please Log-in first </div>
} 
else {
    return <div>Welcome {user.username}</div>
}
}

export default Profile
