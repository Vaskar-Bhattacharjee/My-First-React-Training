import { useCallback, useEffect } from "react"
import { useForm } from "react-hook-form"
import { Button, Input, Select, RTE } from "../index";
import service from "../../appwrite/config"
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";



function PostForm({post}) {
    
  const { register, handleSubmit, watch, setValue, control,
      getValues
   } = useForm({
      defaultValues: {
          title: post?.title || "",
          slug : post?.$id || "",
          content: post?.content || "", 
          featureimage: post?.featureimage || "",   
          status: post?.status || "active",
  
      }
   });
   const navigate = useNavigate();
   const userData = useSelector(state => state.auth.userData);

   const submit = async (data) => {
      if (post) {
        const file =  data.image[0]? service.uploadFile(data.image[0]) : (null)
          if (file && post.featureimage) {
              service.deleteFile(post.featureimage)
          }
          const dbPost = await service.updatePost(post.$id, {
              ...data,
              featureimage: file ? file.$id : undefined,
         
          }    
      )      
       if (dbPost) {
        navigate(`/post/${dbPost.$id}`)
    }
      //update post ended here
      }
      else {
          const file =  await service.uploadFile(data.featureimage[0]);
          if (file) {
              let fileId = file.$id
              data.featureimage = fileId
             const dbPost =  await service.createPost({
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
    <RTE label="Content :" name="content" control={control} defaultValue={getValues("content")} className="mb-4 bg-slate-800" />
  </div>
  
  <div className="w-1/3 px-2">
    <Input
      label="Featured Image :"
      type="file"
      accept="image/png, image/jpg, image/jpeg, image/gif 1 "
      {...register("featureimage", { required: !post })}
    />
    {post && (
      <div className="w-full mb-4">
        <img
          src={service.getFilePreview(post.featureimage)}
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


    



