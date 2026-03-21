import React from 'react';

export default function Thanks() {
  return (
    <div className="bg-white font-sans antialiased min-h-screen flex flex-col items-center justify-center p-4">
      {/* Main Content */}
      <main className="max-w-4xl mx-auto bg-white w-full px-4 py-12 md:px-8 flex flex-col items-center text-center">
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        
        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
          Thank You for Joining Neuromax Program!
        </h1>
        
        <p className="text-lg text-gray-600 mb-8 max-w-xl">
          Your purchase was successful and you now have full access to our mental clarity and memory improvement system.
        </p>
        
        <div className="bg-[#f8f9fa] border border-gray-200 rounded-2xl p-6 md:p-8 mb-6 w-full max-w-md">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Next Steps:</h2>
          <ul className="text-left space-y-4 text-gray-700">
            <li className="flex gap-3">
              <span className="flex-shrink-0 w-6 h-6 bg-health-red text-white rounded-full flex items-center justify-center text-xs font-bold">1</span>
              <span>Check your email for login credentials.</span>
            </li>
            <li className="flex gap-3">
              <span className="flex-shrink-0 w-6 h-6 bg-health-red text-white rounded-full flex items-center justify-center text-xs font-bold">2</span>
              <span>Login to the platform using the link provided in the email.</span>
            </li>
            <li className="flex gap-3">
              <span className="flex-shrink-0 w-6 h-6 bg-health-red text-white rounded-full flex items-center justify-center text-xs font-bold">3</span>
              <span>Start your journey to a sharper mind!</span>
            </li>
          </ul>
        </div>
      </main>
    </div>
  );
}

