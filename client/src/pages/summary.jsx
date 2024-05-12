import React from 'react';
import logo from '../assets/SummIt-logo.png'; // Replace with the actual logo path
import illustration from '../assets/summaryimage.png'; // Replace with the actual illustration path
import facebook from '.././assets/fb.jpeg';
import insta from '.././assets/insta.jpeg';
import twitter from '.././assets/twitter.jpeg';

const SummaryPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white font-outfit">
      <Header />
    <main className="p-4 pb-0">
    <div className="flex-1 lg:mr-12 w-50 text-left">
    <h2 className="text-[#ff735c] font-regular text-lg mb-2">SummIt/Summary</h2>
    <p className="text-gray-700 mb-8">
    The 'summary' page offers a concise overview of the previously generated transcript, distilling key points and highlights for quick reference. By condensing the content into digestible segments, it facilitates efficient comprehension and decision-making for stakeholders. Users can swiftly grasp the essence of the discussion, aiding in strategic planning and follow-up actions.
    </p>
    </div> </main>
        

      <div className="flex-grow flex">
        <SummarySection />
        <IllustrationSection />
      </div>
      <Footer />
    </div>
  );
};

const Header = () => {
  return (
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
  );
};

const SummarySection = () => {
  return (
    
    <div className="w-1/2 bg-[#11111] text-gray-700 p-8 pb-14">
      <h1 className="text-3xl font-bold mb-6">Summary</h1>
      <div className='bg-gray-800 w-140 h-80'>
        
      </div>
      <button className="bg-[#ff735c] text-white m-5 py-2 px-4 rounded hover:text-gray-900">UPLOAD NEXT FILE</button>
    </div>
  );
};

const IllustrationSection = () => {
  return (
    <div className="w-1/2 flex justify-center items-center p-1">
      <img src={illustration} alt="Illustration" className="w-auto max-h-[520px]" />
    </div>
  );
};

const LogoutButton = () => {
  return (
    <button className="bg-white text-[#1a2e35] py-1 px-4 rounded-full">
      Logout
    </button>
  );
};

const Footer = () => {
  return (
    <footer className="bg-[#1a2e35] text-white py-4 mt-auto">
      <div className="max-w-7xl mx-auto px-4 flex justify-between">
        <FooterColumn title="Social Media" links={['Facebook', 'Instagram', 'LinkedIn']} />
        <FooterColumn title="SummIt" links={['Home', 'About Us', 'Get Started']} />
        <FooterColumn title="Contact" links={['LinkedIn', 'Instagram', 'Facebook']} />
        <NewsletterSubscription />
      </div>
    </footer>
  );
};

const FooterColumn = ({ title, links }) => {
  return (
    <div>
      <h3 className="font-bold mb-1">{title}</h3>
      {links.map((link, index) => (
        <a key={index} href={'#' + link.toLowerCase().replace(' ', '-')} className="block mb-2 hover:underline">
          {link}
        </a>
      ))}
    </div>
  );
};

const NewsletterSubscription = () => {
  return (
    <div>
      <h3 className="font-bold mb-3">Stay Up to Date</h3>
      <div className="flex mt-4">
        <input className="bg-white text-[#1a2e35] p-2 rounded-l-full" placeholder="Enter your email" />
        <button className="bg-white text-[#1a2e35] py-2 px-4 rounded-r-full">
          Submit
        </button>
      </div>
    </div>
  );
};

export default SummaryPage;
