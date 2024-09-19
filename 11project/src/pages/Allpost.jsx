import { useEffect, useState } from 'react'
import service from '../appwrite/config'
import { Container, PostCard } from '../components/index'

function Allpost() {
    const [posts, setPosts] = useState([]);
    const [error, setError] = useState(null);

     useEffect(() => {
        service.getPost([]).then((posts) => {
            if (posts) {
                setPosts(posts.documents);
                
                
            }
        }).catch((err) => {
            setError('Failed to load posts', err);
            console.log(error);
        });
    
     }, [error]);
  

    return (
        <div className='w-full py-8' >
            <Container>
                <div className=' flex flex-wrap'>
                    {posts.map((post) => (
                        <div className='p-2 w-1/4' key={post.$id}>
                            <PostCard {...post} />
                        </div>
                        
                    ))}

                </div>
            </Container>
        </div>
    )
}

export default Allpost
