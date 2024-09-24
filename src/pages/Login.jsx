import React from 'react';

export default function Login() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-green-100">
      <div className="relative w-96 p-8 bg-green-600 rounded-3xl flex flex-col items-center shadow-lg">
        <form className="w-full">
          <h2 className="text-3xl text-white text-center mb-8 font-bold">Login</h2>
          
          <div className="relative mb-6">
            <input type="email" id="email" required className="w-full h-12 bg-transparent border-b-2 border-green-200 outline-none text-white px-1 py-2 focus:border-white transition-colors duration-300" />
            <label htmlFor="email" className="absolute left-1 top-12 text-green-200 pointer-events-none transition-all duration-300 ease-in-out">Email</label>
            <span className="absolute right-2 top-3 text-green-200 text-xl">✉</span>
          </div>
          
          <div className="relative mb-6">
            <input type="password" id="password" required className="w-full h-12 bg-transparent border-b-2 border-green-200 outline-none text-white px-1 py-2 focus:border-white transition-colors duration-300" />
            <label htmlFor="password" className="absolute left-1 top-12 text-green-200 pointer-events-none transition-all duration-300 ease-in-out">Password</label>
            <span className="absolute right-2 top-3 text-green-200 text-xl">🔒</span>
          </div>
          
          <div className="flex justify-between text-sm text-green-200 mb-6">
            <label className="flex items-center">
              <input type="checkbox" className="mr-1 accent-green-400" />
              Remember me
            </label>
            <a href="#" className="hover:text-white transition-colors duration-300">Forgot Password</a>
          </div>
          
          <button type="submit" className="w-full h-19 bg-green-400 hover:bg-green-500 rounded-full text-green-800 font-medium text-lg transition-colors duration-300">Login</button>
          
          <div className="text-center text-green-200 mt-4">
            <p>Don't have an account? <a href="#" className="text-white hover:underline">Register Now</a></p>
          </div>
        </form>
      </div>
    </div>
  );
}
