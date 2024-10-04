import { useEffect, useState } from 'react'
import service from '../appwrite/config'
import { Button, Container, PostCard} from '../components'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import  blog from '../images/blog.png'
function Home() {
    const [posts, setPosts] = useState([])
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
  if (posts.length === 0 && authStatus === false) {
    return (
        <Container className="w-full ">
        <div className="flex flex-col items-center justify-center  lg:mb-10 lg:p-5 md:flex-row">
          <div className="flex flex-col items-center justify-center w-full md:w-1/2">
            <h1 className="text-6xl font-bold  mt-10 text-gray-800 text-center p-6 bg-transparent rounded-lg">
              Welcome to Blog Website!
            </h1>
            <p className=' text-1xl text-gray-600 lg:mb-1' > Passionate about exploring the world and sharing unique travel experiences. From hidden gems to travel tips, discover everything you need for your next adventure. 
              Join us as we turn journeys into stories! </p>
            {/* <h3 className="lg:text-3xl font-bold mb-[-1.3rem] 
            mt-[1.3rem] text-gray-800 text-center p-6 bg-transparent
             rounded-lg">
              Login to See Posts
            </h3> */}
            <Link to="/login">
              <Button className=' px-3 '>Login</Button>
            </Link>
          </div>
          {/* <div className="flex justify-center items-center w-full md:w-1/2">
            <img 
              src={blog} 
              alt="Blog illustration"  
              className="w-3/4 h-auto m-3" 
            />
          </div> */}
        </div>
      </Container>
      
    )
  } 
    return (
        <div className='w-full py-8 mb-[10rem] min-h-3.5' >
           
                
<Container>
    {posts.length !== 0 ? (
        <div className='flex flex-col '>
             <p className='text-4xl font-bold
             text-green-800 p-2  ' >
                Here is all mini blog for you: </p>
            {posts.map((post) => (
                <div className='p-2 w-full' key={post.$id}>
                    <PostCard {...post} />
                </div>
            ))}
        </div>
    ) : (
        <p className='text-4xl font-bold'>No posts found.</p>
    )}
</Container>

        </div>
    )
}

export default Home
