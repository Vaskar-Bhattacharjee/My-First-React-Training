import {useState}from 'react'
import { Link, useNavigate } from 'react-router-dom'
import{login as authLogin} from '../store/authSlice'
import {Button, Input, Logo} from './index'
import authService from '../appwrite/auth'
import {useForm} from 'react-hook-form'
import { useDispatch } from 'react-redux'


function Login() {
    
    const navigate = useNavigate()
    const [error, setError] = useState("")
    const dispatch = useDispatch();
    const {register, handleSubmit} = useForm()
     
      
    
    const login = async (data) => {
        setError("")
        try {
          const session = await authService.login({...data})
          if (session) {
            const userData = await authService.getCurrentUser()
            if (userData) dispatch(authLogin(userData))
            navigate('/')
          }
        } catch (error) {
            setError(error);
        }        
    }
    return (
        <section>
        <div className="flex items-center justify-center px-4 py-15 sm:px-6 sm:py-16 lg:px-8 lg:py-10">
          <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md ">
            <h2 className="text-center text-2xl font-bold leading-tight text-black">
            Log In to your account
            </h2>
            <p className="mt-2 text-center text-base text-gray-600">
              Don't have an account?{" "}
              <Link
                              to="/signup"
                              className="font-medium text-primary transition-all duration-200 hover:underline"
                          >
                              Sign Up                    
              </Link>
            </p>
            <form onSubmit={handleSubmit(login)} className="mt-8">
              <div className="space-y-5">
              
                <div>
      
                  <div className="mt-2">
                  <Input
                             
                              placeholder="Enter your email"
                              type="email"
                              {...register("email", {
                                  required: true,
                                  validate: {
                                      matchPatern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                                      "Email address must be a valid address",
                                  }
                              })}
                              />
                  </div> 
                </div> 
                <div>
                  <div className="mt-2">
                  <Input
                              
                              type="password"
                              placeholder="Enter your password"
                              {...register("password", {
                                  required: true,})}
                              />
       
                  </div>
                </div>
                <div>
                <Button type="submit" >
                                  Log In
                              </Button>
                </div>
              </div>
            </form>
      
          </div>
        </div>
      </section>
    )
}

export default Login

{/* <div
className='flex items-center justify-center w-full'
>
<div className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}>


<h2 className="text-center 
text-2xl font-bold leading-tight">Sign in to your account</h2>
<p className="mt-2 text-center text-base text-black/60">
            Don't have any account?
            <Link
                to="/signup"
                className="font-medium text-primary transition-all duration-200 hover:underline"
            >
                Sign Up
            </Link>
</p>
{error && <p className='text-red-600 mt-8 text-center'>
    {error}
</p> }
<form onSubmit={handleSubmit(login)} className='mt-8'>
    <div className='space-y-5'>
        <Input
        name='Email: '
        placeholder = 'Enter Email here'
        type='email'
        {...register("email", {
            required: true,
            validate: {
                matchPatern: (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.
                test(value) ||
                "Please enter a valid email address"
            }
            
        } )}
        />
        <Input
        name='Password: '
        placeholder = 'Enter Password here'
        type='password'
        {...register("password", {
            required: true,
        })
    }
            />
            <Button
            type='submit'
            className='w-full'
            >Sign in</Button>
    </div>
</form>


</div>
</div> */}
