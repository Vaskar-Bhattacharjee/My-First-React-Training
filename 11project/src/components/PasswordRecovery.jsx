import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // useNavigate will now be used
import { Button, Input } from './index';
import service from '../appwrite/auth';
import { useForm } from 'react-hook-form';

function PasswordRecovery() {
  //const navigate = useNavigate(); // Initialize useNavigate
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const { register, handleSubmit } = useForm();

  const [loading, setLoading] = useState(false);

  const recoverPassword = async (data) => {
      setError("");
      setMessage("");
      setLoading(true);
      try {
          await service.passwordRecover(data.email);
          setMessage("A password recovery link has been sent to your email.");
     
      } catch (error) {
          setError("Failed to send recovery email. Please try again.");
      } finally {
          setLoading(false);
      }
  };
  
  <Button type="submit" className="w-full" disabled={loading}>
      {loading ? 'Sending...' : 'Send Recovery Link'}
  </Button>



  
  return (
    <section>
      <div className="flex items-center justify-center px-4 py-15 sm:px-6 sm:py-16 lg:px-8 lg:py-10">
        <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
          <h2 className="text-center text-2xl font-bold leading-tight text-black">
            Password Recovery
          </h2>
          <p className="mt-2 text-center text-base text-gray-600">
            Remembered your password?{" "}
            <Link
              to="/login"
              className="font-medium text-primary transition-all duration-200 hover:underline"
            >
              Log In
            </Link>
          </p>
          <form onSubmit={handleSubmit(recoverPassword)} className="mt-8">
            <div className="space-y-5">
              <div>
                <div className="mt-2">
                  <Input
                    placeholder="Enter your email"
                    type="email"
                    autoComplete="email"
                    {...register("email", {
                      required: true,
                      validate: {
                        matchPattern: (value) =>
                          /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                          "Email address must be a valid address",
                      },
                    })}
                  />
                </div>
              </div>
              <div>
                <Button type="submit" className="w-full">
                  Send Recovery Link
                </Button>
              </div>
            </div>
            {error && <p className="text-red-600 mt-4">{error}</p>}
            {message && (
              <p className="text-green-600 mt-4">
                {message}. Redirecting to login...
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

export default PasswordRecovery;


