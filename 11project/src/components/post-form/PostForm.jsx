import { useCallback } from "react"
import { useForm } from "react-hook-form"
import { Button, Input, Select, RTE } from "../index";
import appwriteService from "../../appwrite/config"
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
function PostForm({post}) {
    const { register, handleSubmit, watch, setValue, control,
        getValues
     } = useForm({
        defaultValues: {
            title: post?.title || "",
            slug : post?.content || "",
            status: post?.status || "active",
    
        },
     })
     const navigate = useNavigate()
     const userData = useSelector(state => state.auth.userData)
     const submit = async (data) => {
        if (post) {
          const file =  data.image[0]? appwriteService.uploadFile(data.image[0]) : (null)
            if (file) {
                appwriteService.deleteFile(post.feturedImage)
            }
            const dbPost = await appwriteService.updatePost(post.$id, {
                ...data,
                featuredImage: file ? file.$id : undefined,
                if (dbPost) {
                    navigate(`/post/${dbPost.$id}`)
                }
            }
        )
        }
        else {
            const file =  await appwriteService.uploadFile(data.image[0]);
            if (file) {
                const fileId =file.$id
                data.featuredImage = fileId
                await appwriteS
            }
     }
    return (
        
    )
}

export default PostForm
