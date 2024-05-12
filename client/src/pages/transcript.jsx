import React from 'react';
import '.././App.css'; // Make sure this path is correct for your CSS

function TranscriptPage() {
    return (
        <div className="font-sans bg-white text-gray-800 min-h-screen">
            {/* Header */}
            <header className="bg-[#ff735c] text-white flex justify-between items-center px-9 py-4">
  <h1 className="font-bold text-3xl">
    <span className="text-white">Summ</span>
    <span className="text-gray-800">It</span>
  </h1>
  <nav className="flex flex-grow justify-end">
    <ul className="flex space-x-6">
      <li className="text-lg font-regular hover:text-gray-300 cursor-pointer">Home</li>
      <li className="text-lg font-regular hover:text-gray-300 cursor-pointer">About</li>
      <li className="text-lg font-regular hover:text-gray-300 cursor-pointer" style={{ marginRight: '40px' }}>Contact</li> {/* Added marginRight */}
    </ul>
  </nav>
  <button className="text-white border border-white px-5 py-1 rounded-full hover:bg-white hover:text-[#1a2e35] transition-colors duration-200">Logout</button>
</header>

            {/* Main Content */}
            <main className="p-8">
            <div className="flex-1 lg:mr-12 text-left">
    <h2 className="text-[#ff735c] font-regular text-lg mb-2">SummIt/Transcript</h2>
    <p className="text-gray-700 mb-8">
        The 'transcript' page provides a detailed written account of the meeting audio, meticulously identifying speakers along with their respective names. This feature enhances accessibility and clarity, ensuring seamless comprehension of the discussion. Users can easily navigate and reference specific moments within the conversation.
    </p>
</div>
<h2 className="text-gray-800 font-bold text-xl mb-4">Here’s What Happened</h2>
<div className="bg-[#D9D9D9] shadow p-6">
    <div className="text-gray-700 space-y-4">
        <p><strong>P1:</strong> "Good afternoon, team. I hope everyone had a productive morning. Before we delve into the agenda, I’d like to express my gratitude for your hard work on the recent project. Your dedication and attention to detail truly reflect our commitment to excellence."</p>
        <p><strong>P2:</strong> "Thank you, P1. It’s been a team effort, and I’m proud of what we’ve accomplished together. Moving forward, I think it’s important to discuss our next steps and how we can build upon our successes."</p>
        <p><strong>P3:</strong> "Agreed. I believe we should focus on streamlining our communication channels and identifying any potential bottlenecks that could hinder our progress. Clear communication will be key as we tackle new challenges."</p>
        <p><strong>P4:</strong> "I couldn’t agree more. Additionally, I’d like to propose scheduling regular check-ins to ensure we’re staying on track and addressing any issues proactively. This will help maintain momentum and keep us aligned with our goals."</p>
        <p><strong>P1:</strong> "Excellent suggestions, P3 and P4. Let’s make sure to incorporate these ideas into our action plan. Now, let's move on to the first item on the agenda: the upcoming product launch. P5, could you please provide an update on the marketing strategy?"</p>
    </div>
</div>


<button className="mt-4 bg-gray-800 text-white rounded-full px-10 py-2 font-semibold hover:bg-[#cc5a47] transition-colors duration-200">GET SUMMARY</button>

            </main>

            {/* Footer */}
            <footer className="bg-[#ff735c] p-8 mt-auto">
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
              <input className="border-2 border-[#1a2e35]  px-4 py-1 text-[#1a2e35] " type="email" placeholder="Enter your email" />
              <button className="bg-[#1a2e35] text-white  px-4">Submit</button>
            </div>
          </div>
        </div>
      </footer>
        </div>
    );
}

export default TranscriptPage;