import service from '../appwrite/config';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

function PostCard({ $id, title, content, featureimage }) {
    return (
        <Link to={`/post/${$id}`}>
            <div className="w-full h-30 bg-gray-100 rounded-xl p-4 flex mb-4">
                <div className="w-1/4  pr-2">
                    <img
                        src={featureimage ? service.getFilePreview(featureimage) : null}
                        alt={title}
                        className="rounded-xl p-3 w-full h-full object-cover"
                    />
                </div>
                <div className="w-1/3 pl-2 flex justify-center items-center ">
                <div>
                <h1 className="text-xl font-bold">{title}</h1>
                <div className="w-full">{parse(content)}</div>
                </div>

                </div>
            </div>
        </Link>
    );
}

export default PostCard;

