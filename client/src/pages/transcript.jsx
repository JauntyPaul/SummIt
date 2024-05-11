import React from 'react';
import '.././App.css'; // Make sure this path is correct for your CSS

function TranscriptPage() {
    return (
        <div className="font-sans bg-white text-gray-800 min-h-screen">
            {/* Header */}
            <header className="bg-[#cc5a47] text-white flex justify-between items-center px-4 py-2">
  <h1 className="font-bold text-4xl">
    <span style={{ color: 'white' }}>Summ</span>
    <span style={{ color: 'black' }}>It</span>
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
            <main className="p-8">
                <div className="bg-[#D9D9D9] shadow rounded-lg p-6">
                    <h2 className="text-[#FF735C] font-bold text-xl mb-4">Here’s What Happened</h2>
                    <div className="text-gray-700 space-y-4">
                        <p><strong>P1:</strong> "Good afternoon, team. I hope everyone had a productive morning. Before we delve into the agenda, I’d like to express my gratitude for your hard work on the recent project. Your dedication and attention to detail truly reflect our commitment to excellence."</p>
                        <p><strong>P2:</strong> "Thank you, P1. It’s been a team effort, and I’m proud of what we’ve accomplished together. Moving forward, I think it’s important to discuss our next steps and how we can build upon our successes."</p>
                        <p><strong>P3:</strong> "Agreed. I believe we should focus on streamlining our communication channels and identifying any potential bottlenecks that could hinder our progress. Clear communication will be key as we tackle new challenges."</p>
                        <p><strong>P4:</strong> "I couldn’t agree more. Additionally, I’d like to propose scheduling regular check-ins to ensure we’re staying on track and addressing any issues proactively. This will help maintain momentum and keep us aligned with our goals."</p>
                        <p><strong>P1:</strong> "Excellent suggestions, P3 and P4. Let’s make sure to incorporate these ideas into our action plan. Now, let's move on to the first item on the agenda: the upcoming product launch. P5, could you please provide an update on the marketing strategy?"</p>
                    </div>
                    <button className="mt-4 bg-[#FF735C] text-white rounded-full px-10 py-2 font-semibold hover:bg-[#cc5a47] transition-colors duration-200">GET SUMMARY</button>
                </div>
            </main>

            {/* Footer */}
            <footer className="bg-[#FF735C] p-4 mt-auto">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-white">
                    <div className="space-y-2">
                        <h3 className="font-bold text-lg">SummIt</h3>
                        <p>Home</p>
                        <p>About us</p>
                        <p>Get Started</p>
                    </div>
                    <div className="space-y-2">
                        <h3 className="font-bold text-lg">Contact</h3>
                        <p>Linkedin</p>
                        <p>Instagram</p>
                        <p>Facebook</p>
                    </div>
                    <div className="space-y-2">
                        <h3 className="font-bold text-lg">STAY UP TO DATE</h3>
                        <div className="flex mt-2">
                            <input className="border-2 border-white rounded-full px-4 py-1 text-[#FF735C] mr-2 bg-white" type="email" placeholder="Enter your email" />
                            <button className="bg-white text-[#FF735C] rounded-full px-4">Submit</button>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default TranscriptPage;