import conf from "../conf/conf.js";
import { Client, Databases, Storage, ID, Query } from "appwrite";

export class Service{
client = new Client()
databases;
bucket;
constructor(){
    this.client
    .setEndpoint('https://cloud.appwrite.io/v1') 
    .setProject('66ab0c1c00300941795a');

    this.databases = new Databases(this.client)
    this.bucket = new Storage(this.client);
}
async createPost({title, slug, content, featuredImage, status, userId}){
    try{
        return await this.databases.createDocument(
           "66ab13b30035f032768b", //conf.appwriteDatabaseId, 
            '66ab13ee002bcff940cb', //conf.appwriteCollectionId,
            slug,
            {
                title,
                content,
                featuredImage,
                status,
                userId,
            }

        )
    }catch(error){
        console.log("Appwrite serive :: createPost :: error", error)
    }
}
async updatePost( slug, {title, content, featuredImage, status,}){
    try{
        return await this.databases.updateDocument(
           "66ab13b30035f032768b",  //conf.appwriteDatabaseId, 
           '66ab13ee002bcff940cb',  //conf.appwriteCollectionId,
            slug,
            {
                title,
                content,
                featuredImage,
                status,
                slug,
            }

        )
    }catch(error){
        console.log("Appwrite service :: updatePost :: error", error)
    }
}
async deletePost(slug) {
    try {
        await this.databases.deleteDocument(
            "66ab13b30035f032768b",  //conf.appwriteDatabaseId, 
            '66ab13ee002bcff940cb',  //conf.appwriteCollectionId,
            slug
        );
        return true;
    } catch (error) {
        console.log("Appwrite service :: deletePost :: error", error);
        return false;
        
    }
}
async getPost(slug) {
    try {
       return await this.databases.getDocument(
        "66ab13b30035f032768b",  //conf.appwriteDatabaseId, 
          '66ab13ee002bcff940cb',  //conf.appwriteCollectionId,
            slug
        );
      
    } catch (error) {
        console.log('error', error);
        return false;
    }
}

async getPosts(queries = [Query.equal("status", "active")]){
    try {
        return await this.databases.listDocuments(
            conf.appwriteDatabaseId,
            conf.appwriteCollectionId,
            queries,
            

        )
    } catch (error) {
        console.log("Appwrite service :: getPosts :: error", error);
        return false
    }
}

// file upload service

async uploadFile(file){
    try {
        return await this.bucket.createFile(
            "66ab16560023f4aa7578" ,
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