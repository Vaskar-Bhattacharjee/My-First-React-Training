import { useCallback, useEffect } from "react"
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
          content: post?.content || "", 
          featuredImage: post?.featuredImage || "",   
          status: post?.status || "active",
  
      }
   });
   const navigate = useNavigate();
   const userData = useSelector(state => state.auth.userData);

   const submit = async (data) => {
      if (post) {
        const file =  data.image[0]? appwriteService.uploadFile(data.image[0]) : (null)
          if (file && post.featuredImage) {
              appwriteService.deleteFile(post.featuredImage)
          }
          const dbPost = await appwriteService.updatePost(post.$id, {
              ...data,
              featuredImage: file ? file.$id : undefined,
         
          }    
      )      
       if (dbPost) {
        navigate(`/post/${dbPost.$id}`)
    }
      //update post ended here
      }
      else {
          const file =  await appwriteService.uploadFile(data.image[0]);
          if (file) {
              const fileId =file.$id
              data.featuredImage = fileId
             const dbPost =  await appwriteService.createPost({
              ...data,
                 userId : userData.$id,

             })
             if (dbPost) {
                 navigate(`/post/${dbPost.$id}`)
             }
          }
   }

}

const slugTransform = useCallback((value) => {
  if (value && typeof value === 'string') {
    return value
      .trim()
      .toLowerCase()
      .replace(/\s+/g, '-')        // Replace all spaces with hyphens
      .replace(/[^a-z0-9-]/g, '')  // Remove all non-alphanumeric characters except hyphens
      .replace(/-+/g, '-');        // Replace multiple hyphens with a single one
  }
  return '';
}, []);

useEffect(() => {
  const subscription = watch((value, {name})=>{
   if (name === 'title') {
    setValue('slug' , slugTransform(value.title,
      { shouldValidate: true }))
   }
   
  })
  return ()=>{
    subscription.unsubscribe();
  } 
}, [watch, slugTransform, setValue]);

return (
    <form onSubmit={handleSubmit(submit)} className="flex flex-wrap  p-6 rounded-lg shadow-md">
  <div className="w-2/3 px-2">
    <Input

      placeholder="Title"
      {...register("title", { required: true })}
    />
    <Input
  
      placeholder="Slug"
      {...register("slug", { required: true })}
      onInput={(e) => {
        setValue("slug", slugTransform(e.currentTarget.value), { shouldValidate: true });
      }}
    />
    <RTE label="Content :" name="content" control={control} defaultValue={getValues("content")} className="mb-4" />
  </div>
  
  <div className="w-1/3 px-2">
    <Input
      label="Featured Image :"
      type="file"
      accept="image/png, image/jpg, image/jpeg, image/gif"
      {...register("image", { required: !post })}
    />
    {post && (
      <div className="w-full mb-4">
        <img
          src={appwriteService.getFilePreview(post.featuredImage)}
          alt={post.title}
          className="rounded-lg shadow-md"
        />
      </div>
    )}
    <Select
      options={["active", "inactive"]}
      label="Status"
      className="mb-4 border border-gray-300 rounded-md focus:ring focus:ring-blue-200"
      {...register("status", { required: true })}
    />
    <Button 
      type="submit" >
      {post ? "Update" : "Submit"}
    </Button>
  </div>
</form>

  
)
  
}

 
export default PostForm;


    



