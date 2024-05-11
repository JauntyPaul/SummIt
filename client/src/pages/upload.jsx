import React from 'react';
import '.././App.css'; // Ensure this path correctly points to your Tailwind CSS file
import uplaodimage from "../assets/uploadpage.jpg"

function UploadPage() {
  return (
    <div className="font-sans bg-white p-0 m-0 text-gray-800 min-h-screen">
      {/* Header */}
      <header className="bg-[#1a2e35] text-white flex justify-between items-center px-4 py-2">
  <h1 className="font-bold text-4xl">
    <span style={{ color: 'white' }}>Summ</span>
    <span style={{ color: 'red' }}>It</span>
  </h1>
  <nav className="flex flex-grow justify-end">
    <ul className="flex space-x-4">
      <li className="text-lg font-medium hover:underline cursor-pointer">Home</li>
      <li className="text-lg font-medium hover:underline cursor-pointer">About</li>
      <li className="text-lg font-medium hover:underline cursor-pointer" style={{ marginRight: '8px' }}>Contact</li> {/* Added marginRight */}
    </ul>
  </nav>
  <button className="text-white border border-white px-3 py-1 rounded-full hover:bg-gray-200 hover:text-[#1a2e35] transition-colors duration-200">Logout</button>
</header>



      {/* Main Content */}
      <main className="flex flex-col lg:flex-row items-start p-8 flex-1">
        {/* Left Side Content */}
        <div className="lg:mr-12 flex-1 ">
          <h2 className="text-[#ff735c] font-semibold text-lg mb-2">SummIt / Upload</h2>
          <p className="text-gray-700 mb-8">
            The SummIt upload page offers a seamless experience for uploading meeting audio files, ensuring effortless access to our summarization capabilities. You can easily drag and drop their audio files or select them from their device, initiating the summarization process with just a few clicks.
          </p>
          <div className="flex flex-col space-y-4">
            <button className="bg-[#11111] text-gray-500 px-10 py-2 font-semibold hover:text-gray-800">INSERT FILES</button>
            <button className="text-grey border border-black px-6 py-2 rounded-full font-semibold hover:border-gray-500 hover:text-gray-500">UPLOAD FILE</button>
            <button className="bg-[#ff735c] rounded-full px-10 py-2 text-white font-semibold hover:bg-[#cc5a47] transition-colors duration-200">GET TRANSCRIPT</button>
            <span className="text-sm font-semibold">MAX 25 MB</span>
          </div>
        </div>

        {/* Right Side Content (Meeting Illustration) */}
        <div className="flex-1">
          <img src={uplaodimage} alt="Meeting illustration" className="max-w-full h-auto" />
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white p-8 mt-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="space-y-2">
            <h3 className="font-semibold">SummIt</h3>
            <div>Home</div>
            <div>About us</div>
            <div>Get Started</div>
          </div>
          <div className="space-y-2">
            <h3 className="font-semibold">Contact</h3>
            <div>Linkedin</div>
            <div>Instagram</div>
            <div>Facebook</div>
          </div>
          <div>
            <h3 className="font-semibold">STAY UP TO DATE</h3>
            <div className="flex mt-2">
              <input className="border-2 border-[#1a2e35] rounded-full px-4 py-1 text-[#1a2e35] mr-2" type="email" placeholder="Enter your email" />
              <button className="bg-[#1a2e35] text-white rounded-full px-4">Submit</button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default UploadPage;