

const conf = {
    appwriteUrl: import.meta.env.VITE_APP_APPWRITE_URL,  // No need to use String()
    appwriteProjectId: import.meta.env.VITE_APP_APPWRITE_PROJECT_ID,
    appwriteDatabaseId: import.meta.env.VITE_APP_APPWRITE_DATABASE_ID,
    appwriteCollectionId: import.meta.env.VITE_APP_APPWRITE_COLLECTION_ID,
    appwriteBucketId: import.meta.env.VITE_APP_APPWRITE_BUCKET_ID,
};

console.log(conf.appwriteProjectId); // Log this to verify it's correctly assigned

//THERE was an issue with the import.meta.env.VITE_APPWRITE_URL


export default conf