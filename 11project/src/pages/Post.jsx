import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import service from "../appwrite/config";
import { Button, Container } from "../components";
import parse from "html-react-parser";
import { useSelector } from "react-redux";

export default function Post() {
    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);
    const { slug } = useParams();
    const navigate = useNavigate();
    const userData = useSelector((state) => state.auth.userData);

    useEffect(() => {
        const fetchPost = async () => {
            setLoading(true);
            try {
                if (slug) {
                    const postData = await service.getPost(slug);
                    if (postData) {
                        setPost(postData);
                    } else {
                        navigate("/");
                    }
                } else {
                    navigate("/");
                }
            } catch (error) {
                console.error("Failed to fetch post:", error);
                navigate("/");
            } finally {
                setLoading(false);
            }
        };

        fetchPost();
    }, [slug, navigate]);

    const deletePost = async () => {
        if (!post) return; 
        try {
            const status = await service.deletePost(post.$id);
            if (status) {
                await service.deleteFile(post.featureimage);
                navigate("/");
            }
        } catch (error) {
            console.error("Failed to delete post:", error);
        }
    };

    if (loading) {
        return <div className="text-center py-10">Loading...</div>;
    }

    const isAuthor = post && userData ? post.userId === userData.$id : false;

    return post ? (
        <div className="py-8 bg-gray-100">
            <Container>
                <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
                    <div className="relative">
                        <img
                            src={service.getFilePreview(post.featureimage)}
                            alt={post.title}
                            className="w-full h-80 object-cover rounded-t-lg"
                        />
                    </div>
                    <div className="p-6">
                        <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
                        <div className="text-gray-700 mb-4">
                            <span className="text-sm">By {post.authorName || "Unknown"} | {new Date(post.createdAt).toLocaleDateString()}</span>
                        </div>
                        <div className="mb-6">
                            {parse(post.content)}
                        </div>
                        {isAuthor && (
                            <div className="flex justify-center space-x-4">
                               <div className='w-full' >
                               <Link to={`/edit-post/${post.$id}`} className="w-full">
                                    <Button className="bg-green-500 hover:bg-green-600 text-white w-full">Edit</Button>
                                </Link>
                                </div> 
                                <div className='w-full' >
                                <Button onClick={deletePost} className="bg-red-500 hover:bg-red-600 text-white w-full">Delete</Button>
                                </div>
                                
                            </div>
                        )}
                    </div>
                </div>
            </Container>
        </div>
    ) : null;
}

