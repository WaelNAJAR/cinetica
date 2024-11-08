"use client";
//import Image from 'next/image';
import { useState } from "react";
import { useRouter } from 'next/navigation';


export default function Home() {
  const [isLogged , setIsLogged] = useState(false);
  const [userName , setUserName] = useState('');
  const [password , setPassword] = useState('');
  const router = useRouter();

  
  const handleLogIn = async (event: { preventDefault: () => void; }) => {
    event.preventDefault();
  
    const response = await fetch('/api/authentification', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username: userName, password: password }),
    });
  
    const data = await response.json();
  
    if (data.success) {
      setIsLogged(true); // Connexion réussie
      alert(data.message);
      router.push('/home'); 
    } else {
      alert(data.message);
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gray-800">
      
    <div className="absolute inset-0 z-0">
      <img
        src="C:\public\images\netflix.jpg" 
        alt="Background"
        //layout="fill"
        //objectFit="cover"
        className="filter blur-md"
      />
    </div>

    {/* Login form */}
    <div className="relative z-10 bg-white bg-opacity-90 p-8 rounded-lg shadow-lg max-w-md w-full mx-4">
      
      {/* Logo */}
      <div className="flex justify-center mb-6">
        <img
          src="/images/netflix.png" // Logo de l'application
          alt="Logo"
          width={150}
          height={50}
          className="object-contain"
        />
      </div>

      <h2 className="text-2xl font-bold text-center mb-6">Log In</h2>
      <form onSubmit={handleLogIn}>
        <div className="mb-4">
          <label htmlFor="username" className="block text-gray-700 font-semibold mb-2">
            Username
          </label>
          <input
            type="text"
            id="username"
            name="username"
            value={userName}
            onChange={(e)=>{setUserName(e.target.value)}}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
        <div className="mb-6">
          <label htmlFor="password" className="block text-gray-700 font-semibold mb-2">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e)=>{setPassword(e.target.value)}}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-2 rounded-lg font-semibold hover:bg-indigo-700 transition duration-200"
        >
          Log In
        </button>
      </form>
    </div>
  </div>

  );}
