import { useEffect, useState } from 'react'
import service from '../appwrite/config'
import { Container, Login, PostCard, Button } from '../components'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'


function Home() {
    const [posts, setPosts] = useState([])
    const navigate = useNavigate()
    const authStatus = useSelector((state) => state.auth.status); 
    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const post = await service.getPosts(); // Change to the new method
                if (post) {
                    setPosts(post.documents); // Set the posts from the response
                }
            } catch (error) {
                console.error('Error fetching posts:', error);
            }
        };
        fetchPosts();
    }, []);
  if (posts.length === 0 && Login== true) {
    return (
        <Container className= "w-full">
<h1 className="w-full text-4xl font-bold text-gray-800 text-center p-6 bg-transparent rounded-lg shadow-md">
    Login to See Posts
</h1>

        </Container>
    )
  } 
    return (
        <div className='w-full py-8 mb-[10rem] min-h-3.5' >
            <p className='text-4xl font-bold
             text-green-800 p-2  ' >
                Here is all mini blog for you: </p>
                
<Container>
    {posts.length !== 0 ? (
        <div className='flex flex-wrap '>
            {posts.map((post) => (
                <div className='p-2 w-1/4' key={post.$id}>
                    <PostCard {...post} />
                </div>
            ))}
        </div>
    ) : (
        <div className='flex flex-wrap 	flex-col justify-center '>
        <p className='text-3xl p-2 mb-lg-[-2rem] mb-sm-[5rem]'>No posts yet.</p> 
     
        {!authStatus && ( // Conditionally render the button
                            <div className='flex justify-center flex-col mt-[5rem] mb-[-5rem]'>
                                <p className='text-4xl p-2 mt-sm-[5rem] italic'>You are not Logged in. Login to see posts</p>
                               <div className='flex justify-center items-center '>
                               <Button 
                                    onClick={() => navigate("/login")}
                                    className="w-48"
                                >
                                    Login
                                </Button>
                                
                                </div> 
                            </div>
                        )}
                    </div>
                )}
    
</Container>

    </div>
    )
  }
 



export default Home
