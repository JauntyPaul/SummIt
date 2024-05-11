import React from 'react';
import loginimage from "../assets/LoginImage.jpg"
import facebook from "../assets/facebook-removebg-preview.png"
import instagram from "../assets/instagram-removebg-preview.png"
import twitter from "../assets/twitter-removebg-preview.png"

// Header component remains the same
const Header = () => {
  return (
    <header className="bg-red-600 text-white py-4 px-12 flex justify-between items-center">
      <h1 className="text-3xl font-bold">SummIt</h1>
      <nav>
        <a href="#" className="text-lg px-4">Home</a>
        <a href="#" className="text-lg px-4">About</a>
        <a href="#" className="text-lg px-4">Contact</a>
      </nav>
    </header>
  );
};

// Login form component with a slight change for aesthetic purpose
const LoginForm = () => {
  return (
    <div className="w-full max-w-xs p-8 ml-auto"> {/* Adjusted margin-left */}
      <div className="mb-4">
        <h2 className="text-center text-2xl text-red-600 font-bold">LOGIN</h2>
      </div>
      <div className="mb-6">
        <input type="email" className="w-full p-3 rounded border border-gray-300" placeholder="Email" />
      </div>
      <div className="mb-6">
        <input type="password" className="w-full p-3 rounded border border-gray-300" placeholder="Password" />
      </div>
      <div className="mb-6 text-right">
        <a href="#" className="text-sm text-red-600">Forgot your password?</a>
      </div>
      <button className="w-full bg-red-600 text-white p-3 rounded">LOGIN</button>
      <div className="flex items-center my-4">
        <div className="flex-grow border-t border-gray-300"></div>
        <span className="flex-shrink mx-4 text-gray-600">OR</span>
        <div className="flex-grow border-t border-gray-300"></div>
      </div>
    </div>
  );
};

// Footer component remains the same
const Footer = () => {
  return (
    <footer className="bg-gray-200 p-4 flex justify-center items-center">
      <a href="#"><img src={facebook} alt="Facebook" className="mx-2 w-8 h-8" /></a>
      <a href="#"><img src={twitter} alt="Twitter" className="mx-2 w-8 h-8" /></a>
      <a href="#"><img src={instagram} alt="Instagram" className="mx-2 w-8 h-8" /></a>
    </footer>
  );
};

// Main Page layout change with image and login form side by side
const LoginPage = () => {
  return (
    <div className="font-sans">
      <Header />
      <main className="flex flex-row justify-center items-center my-12 mx-auto px-4 max-w-6xl">
        <div className="flex-1">
          <img src={loginimage} alt="Speaker" className="w-full h-auto md:w-auto" /> {/* Adjusted image size */}
        </div>
        <div className="flex-1">
          <LoginForm />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default LoginPage;
