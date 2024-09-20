import { useEffect, useState } from 'react'
import appwriteService from '../appwrite/config'
import { Container, PostCard } from '../components'

function Home() {
    const [posts, setPosts] = useState([])
    useEffect(() => {
        appwriteService.getPost().then((posts)=>{
            if (posts) {
               setPosts(posts.documents) 
            }
        })
    });
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
    <div className='w-full py-8' >
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
