

import {  useState } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom'; 
import { Button, Input } from './index';
import service from '../appwrite/auth';
import { useForm } from 'react-hook-form';


function ConfirmPassword() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams(); // Get URL parameters
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const { register, handleSubmit, watch } = useForm();
  const [loading, setLoading] = useState(false);

  // Get userId and secret from URL parameters
  const userId = searchParams.get('userId');
  const secret = searchParams.get('secret');

  const newPassword = watch("newPassword"); // Watch for password field to validate confirm password

  const setNewPassword = async (data) => {
    setError("");
    setMessage("");
    setLoading(true);
  
    // Check if userId and secret are missing from URL
    if (!userId || !secret) {
      setError("Invalid password recovery link.");
      setLoading(false);
      return;
    }
  
    try {
      // Update the password using the recovery token
      await service.updateRecovery(userId, secret, data.newPassword);
      setMessage("Your password has been successfully updated.");
      setTimeout(() => {
        navigate('/login'); // Redirect to login after 3 seconds
      }, 3000);
    } catch (error) {
      setError("Failed to update the password. Please try again.");
    } finally {
      setLoading(false);
    }
  };
  

  return (
    <section>
      <div className="flex items-center justify-center px-4 py-15 sm:px-6 sm:py-16 lg:px-8 lg:py-10">
        <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
          <h2 className="text-center text-2xl font-bold leading-tight text-black">
            Set New Password
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
          <form onSubmit={handleSubmit(setNewPassword)} className="mt-8">
            <div className="space-y-5">
              <div>
                <Input
                  placeholder="New Password"
                  type="password"
                  autoComplete="new-password"
                  {...register("newPassword", {
                    required: "New password is required",
                    minLength: {
                      value: 6,
                      message: "Password must be at least 6 characters long",
                    },
                  })}
                />
              </div>
              <div>
                <Input
                  placeholder="Confirm New Password"
                  type="password"
                  autoComplete="new-password"
                  {...register("confirmPassword", {
                    required: "Please confirm your new password",
                    validate: (value) =>
                      value === newPassword || "Passwords do not match",
                  })}
                />
              </div>
              <div>
                <Button type="submit" className="w-full" disabled={loading}>
                  {loading ? 'Updating...' : 'Set New Password'}
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

export default ConfirmPassword;



