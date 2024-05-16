import React, { useEffect } from 'react';
import logo from '../assets/SummIt-logo.png'; // Replace with the actual logo path
import illustration from '../assets/summaryimage.png'; // Replace with the actual illustration path
import facebook from '.././assets/fb.jpeg';
import insta from '.././assets/insta.jpeg';
import twitter from '.././assets/twitter.jpeg';

const SummaryPage = () => {
    useEffect(() => {
      fetchSummary();
    }, []);
  
    const fetchSummary = async () => {
  try {
    const response = await fetch('http://127.0.0.1:5000/summary');
    const data = await response.text();
    console.log(data); // Should log "test"
  } catch (error) {
    console.error('Error fetching summary:', error);
  }
};

// Call fetchSummary in useEffect or any other relevant place in your component

  
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
    <header className="bg-[#1a2e35] text-white flex justify-between items-center px-9 py-4">
  <h1 className="font-bold text-3xl">
    <span className="text-white">Summ</span>
    <span className="text-[#ff735c]">It</span>
  </h1>
  <nav className="flex flex-grow justify-end">
    <ul className="flex space-x-6">
      <li className="text-lg font-regular hover:text-gray-300 cursor-pointer">Home</li>
      <li className="text-lg font-regular hover:text-gray-300 cursor-pointer">About</li>
      <li className="text-lg font-regular hover:text-gray-300 cursor-pointer" style={{ marginRight: '40px' }}>Contact</li> {/* Added marginRight */}
    </ul>
  </nav>
  <button className="text-white border border-white px-5 py-1 rounded-full hover:bg-gray-200 hover:text-[#1a2e35] transition-colors duration-200">Logout</button>
</header>
  );
};

const SummarySection = () => {
  return (
    
    <div className="w-1/2 bg-[#11111] text-gray-800 p-8 pb-14">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Summary</h1>
      <div className='bg-gray-800 w-140 h-80'>
        
      </div>
      <button className="text-gray-800 border border-gray-800 px-6 py-2 rounded-full font-semibold hover:border-gray-500 hover:text-gray-500 mt-5">UPLOAD NEXT FILE</button>
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
        <input className="bg-white text-[#1a2e35] p-2 " placeholder="Enter your email" />
        <button className="bg-white text-[#1a2e35] py-2 px-4 ">
          Submit
        </button>
      </div>
    </div>
  );
};

export default SummaryPage;
