import conf from '../conf/conf'
import { Client, Account, ID } from "appwrite";

export class AuthService {
    client = new Client()    
     account;

    constructor() {
        this.client
        .setEndpoint(conf.appwriteUrl)
        .setProject(conf.appwriteProjectId);
        this.account = new Account(this.client);
       
    }
    async createAccount({email, password, name}){
        try {
        const userAccount = await this.account.create(ID.unique(), email, password, name);
    if (userAccount) {
        //call another method;
        return this.login({email, password});
       } else {
          return userAccount;
    }
        } 
        
        catch (err) {
          console.log(err)
        }
    }
    async login({email, password}){
        try {
           return await this.account.createEmailPasswordSession(email,
                 password)
        } catch (error) {
          console.log(error)
        }
        
    }
    async getCurrentUser(){
        try {
           return await this.account.get();

        } catch (error) {
           console.log(error); 
        }
        return null;


        // try {
        //    const getUser =  await this.account.get();
        //    if (getUser) {
        //     return getUser;
        //    } else {
        //        return null;
        //    }
        // } catch (error) {
        //    console.log(error); 
        // }

        
    }
    async logout(){
        try {
        return    await this.account.deleteSessions()
        } catch (error) {
            console.log('couldnot logout');
        }
    }
}

const authService = new AuthService()

export default authService