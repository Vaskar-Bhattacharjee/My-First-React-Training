import { useEffect, useState } from 'react'
import service from '../appwrite/config'
import { Container, Login, PostCard } from '../components'
Login

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
        <p className='text-4xl p-2 mb-[-10rem]'>No posts yet</p>
    )}
</Container>

    </div>
    )
  }
 



export default Home
