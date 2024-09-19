import service from '../appwrite/config'
import {Link} from 'react-router-dom'
function PostCard({$id, title, featureimage}) {
    return (
        <Link to={`/post/${$id}`}>
            <div className="w-full bg-gray-100 rounded-xl p-4">
                <div className='w-full justify-center mb-4'>
                    <img
                    src={featureimage ? service.getFilePreview(featureimage) : '/path/to/default/image.jpg'}
                    alt={title}
                    className='rounded-xl'
                    />
                    <h2
                    className='text-xl font-bold'
                    >{title}</h2>

                </div>
            </div>
                
        </Link>
    )
}

export default PostCard
