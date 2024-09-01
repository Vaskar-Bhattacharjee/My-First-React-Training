import conf from "../conf/conf";
import { Client, Databases, Storage, ID  } from "appwrite";

export class Service{
client = new Client()
databases;
bucket;
constructor(){
    this.client
    .setEndpoint(conf.appwriteUrl)
    .setProject(conf.appwriteProjectId);

    this.databases = new Databases(this.client)
    this.bucket = new Storage(this.client);
}
async createPost({title, slug, content, featuredImage, status, userId}){
    try{
        return await this.databases.createDocument(
            conf.appwriteDatabaseId, 
            conf.appwriteCollectionId,
            slug,
            {
                title,
                content,
                featuredImage,
                status,
                userId,
            }

        )
    }catch{
        console.log(`error`)
    }
}
async updatePost( slug, {title, content, featuredImage, status,}){
    try{
        return await this.databases.updateDocument(
            conf.appwriteDatabaseId, 
            conf.appwriteCollectionId,
            slug,
            {
                title,
                content,
                featuredImage,
                status,
                slug,
            }

        )
    }catch{
        console.log(`error`)
    }
}
async deletePost(slug) {
    try {
        await this.databases.deleteDocument(
            conf.appwriteDatabaseId,
            conf.appwriteCollectionId,
            slug
        );
        return true;
    } catch (error) {
        console.log(error);
        return false;
        
    }
}
async getPost(slug) {
    try {
       return await this.databases.getDocument(
            conf.appwriteDatabaseId,
            conf.appwriteCollectionId,
            slug
        );
      
    } catch (error) {
        console.log(error);
        
    }
}

// file upload service

async uploadFile(file){
    try {
        return await this.bucket.createFile(
            conf.appwriteBucketId,
            ID.unique(),
            file
        )
    } catch (error) {
        console.log("Appwrite serive :: uploadFile :: error", error);
        return false
    }
}

async deleteFile(fileId){
    try {
        await this.bucket.deleteFile(
            conf.appwriteBucketId,
            fileId
        )
        return true
    } catch (error) {
        console.log("Appwrite serive :: deleteFile :: error", error);
        return false
    }
}

getFilePreview(fileId){
    return this.bucket.getFilePreview(
        conf.appwriteBucketId,
        fileId
    )
}
}
 


const appwriteService = new Service()
export default appwriteService