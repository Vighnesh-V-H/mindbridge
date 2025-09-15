"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SignupForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      setIsLoading(false);
      return;
    }

    if (formData.password.length < 6) {
      setError("Password must be at least 6 characters long");
      setIsLoading(false);
      return;
    }

    try {
      const response = await fetch("/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          password: formData.password,
        }),
      });

      if (response.ok) {
        router.push("/signin");
      } else {
        const data = await response.json();
        setError(data.message || "Signup failed");
      }
    } catch (err) {
      setError("An error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className='max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-md'>
      <h2 className='text-2xl text-blue-400 font-bold mb-6 text-center'>
        Sign Up
      </h2>

      <form onSubmit={handleSubmit} className='space-y-4'>
        <div className='grid grid-cols-2 gap-4'>
          <div>
            <label
              htmlFor='firstName'
              className='block text-sm font-medium text-gray-700 mb-1'>
              First Name
            </label>
            <input
              type='text'
              id='firstName'
              name='firstName'
              value={formData.firstName}
              onChange={handleChange}
              required
              className='w-full text-black  px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
              placeholder='First name'
            />
          </div>

          <div>
            <label
              htmlFor='lastName'
              className='block text-sm font-medium text-black mb-1'>
              Last Name
            </label>
            <input
              type='text'
              id='lastName'
              name='lastName'
              value={formData.lastName}
              onChange={handleChange}
              required
              className='w-full text-black  px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
              placeholder='Last name'
            />
          </div>
        </div>

        <div>
          <label
            htmlFor='email'
            className='block text-sm font-medium text-black mb-1'>
            Email
          </label>
          <input
            type='email'
            id='email'
            name='email'
            value={formData.email}
            onChange={handleChange}
            required
            className='w-full text-black  px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
            placeholder='Enter your email'
          />
        </div>

        <div>
          <label
            htmlFor='password'
            className='block text-sm font-medium text-black mb-1'>
            Password
          </label>
          <input
            type='password'
            id='password'
            name='password'
            value={formData.password}
            onChange={handleChange}
            required
            className='w-full text-black  px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
            placeholder='Create a password'
          />
        </div>

        <div>
          <label
            htmlFor='confirmPassword'
            className='block text-sm font-medium text-black mb-1'>
            Confirm Password
          </label>
          <input
            type='password'
            id='confirmPassword'
            name='confirmPassword'
            value={formData.confirmPassword}
            onChange={handleChange}
            required
            className='w-full text-black px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
            placeholder='Confirm your password'
          />
        </div>

        {error && (
          <div className='text-red-600 text-sm text-center'>{error}</div>
        )}

        <button
          type='submit'
          disabled={isLoading}
          className='w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed'>
          {isLoading ? "Creating Account..." : "Sign Up"}
        </button>
      </form>
      <div className='mt-5 text-center'>
        <Link href={"/signin"} className='text-black '>
          Signin
        </Link>
      </div>
    </div>
  );
}
