import { useEffect, useState } from 'react'
import service from '../appwrite/config'
import { Container, PostCard } from '../components'

function Home() {
    const [posts, setPosts] = useState([])
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
  if (posts.length === 0 ) {
    return (
        <Container className= "w-full">
<h1 className="w-full text-4xl font-bold text-gray-800 text-center p-6 bg-transparent rounded-lg shadow-md">
    Login to See Posts
</h1>

        </Container>
    )
  } 
    return (
        <div className='w-full py-8 min-h-lvh' >
            <p className='text-4xl font-bold
             text-green-800 p-2 mb-3' >
                Here is all mini blog for you: </p>
        <Container>
            <div className=' flex flex-wrap'>
                {posts.map((post) => (
                    <div className='p-2 w-1/4' key={post.$id}>
                        <PostCard  {... post} />
                    </div>
                    
                ))}
    
            </div>
        </Container>
    </div>
    )
  }
 



export default Home
