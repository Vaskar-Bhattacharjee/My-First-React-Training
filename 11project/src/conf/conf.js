

const conf = {
    appwriteUrl: String(import.meta.env.VITE_APP_APPWRITE_URL),
    appwriteProjectId: String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
    appwriteDatabaseId: String(import.meta.env.VITE_APP_APPWRITE_DATABASE_ID),
    appwriteCollectionId: String(import.meta.env.VITE_APP_APPWRITE_COLLECTION_ID),    
    appwriteBucketId: String(import.meta.env.VITE_APP_APPWRITE_BUCKET_ID)
}
//THERE was an issue with the import.meta.env.VITE_APPWRITE_URL


export default conf