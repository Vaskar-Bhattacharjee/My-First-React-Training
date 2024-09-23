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
        return <div>Loading...</div>; // Add a loading indicator
    }

    const isAuthor = post && userData ? post.userId === userData.$id : false;

    return post ? (
        <div className="py-8">
            <Container>
                <div className="w-full flex justify-center mb-4 relative border rounded-xl p-2">
                    <img
                        src={service.getFilePreview(post.featureimage)}
                        alt={post.title}
                        className="rounded-xl h-80 w-1/2 object-cover"
                    />

                    {isAuthor && (
                        <div className="absolute right-6 top-6">
                            <Link to={`/edit-post/${post.$id}`}>
                                <Button>Edit</Button>
                            </Link>
                            <Button onClick={deletePost}>Delete</Button>
                        </div>
                    )}
                </div>
                <div className="w-full mb-6">
                    <h1 className="text-2xl font-bold">{post.title}</h1>
                </div>
                <div className="browser-css">
                    {parse(post.content)}
                </div>
            </Container>
        </div>
    ) : null;
}
