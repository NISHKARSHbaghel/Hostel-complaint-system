import React from 'react';

const StudentGrievancePortal = () => {
  return (
    <div className="bg-gray-50 font-[Inter]">
      {/* Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center">
                <img
                  className="h-8 w-auto"
                  src="https://ai-public.creatie.ai/gen_page/logo_placeholder.png"
                  alt="Logo"
                />
              </div>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-6">
              <a href="#" className="border-custom text-custom inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                Dashboard
              </a>
              <a href="#" className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                Submit Grievance
              </a>
              <a href="#" className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                AI
              </a>
            </div>
            <div className="flex items-center">
              <button className="!rounded-button bg-custom text-white px-4 py-2 text-sm font-medium hover:bg-custom/90">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <div className="relative bg-white overflow-hidden">
          <div className="max-w-8xl mx-auto">
            <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:pb-28 xl:pb-32">
              <div className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28 relative z-20">
                <div className="sm:text-center lg:text-left lg:w-1/2">
                  <h1 className="text-4xl tracking-tight font-bold text-gray-900 sm:text-5xl md:text-6xl">
                    <span className="block">Your Voice Matters!</span>
                    <span className="block text-custom">Quick Resolution Platform</span>
                  </h1>
                  <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                    Submit and track your grievances easily. We're here to help you get your concerns addressed quickly and efficiently.
                  </p>
                  <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                    <div className="rounded-md shadow">
                      <button className="!rounded-button w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium text-white bg-custom hover:bg-custom/90 md:py-4 md:text-lg md:px-10">
                        Sign In
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 hidden lg:block">
                <img
                  className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full opacity-90"
                  src="https://creatie.ai/ai/api/search-image?query=A 3D vector-style image with a clean, solid background color showing friendly student characters interacting with laptops and mobile devices, featuring modern design elements and a positive atmosphere"
                  alt="Hero"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="bg-gray-50 py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
              {/* Submit Card */}
              <div className="bg-white overflow-hidden shadow rounded-lg hover:shadow-lg transition-shadow duration-300">
                <div className="px-4 py-5 sm:p-6">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 bg-custom/10 rounded-md p-3">
                      <i className="fas fa-edit text-custom text-xl"></i>
                    </div>
                    <div className="ml-5">
                      <h3 className="text-lg font-medium text-gray-900">Submit</h3>
                      <p className="mt-2 text-sm text-gray-500">File a new grievance quickly and easily</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Resolved Card */}
              <div className="bg-white overflow-hidden shadow rounded-lg hover:shadow-lg transition-shadow duration-300">
                <div className="px-4 py-5 sm:p-6">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 bg-custom/10 rounded-md p-3">
                      <i className="fas fa-check-circle text-custom text-xl"></i>
                    </div>
                    <div className="ml-5">
                      <h3 className="text-lg font-medium text-gray-900">Resolved</h3>
                      <p className="mt-2 text-sm text-gray-500">View your resolved grievances</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Floating Action Button */}
        <div className="fixed bottom-4 right-4">
          <button className="!rounded-button bg-[#FF6B6B] text-white w-14 h-14 flex items-center justify-center text-2xl shadow-lg hover:bg-[#FF6B6B]/90">
            <i className="fas fa-plus"></i>
          </button>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {/* Footer Sections */}
            {['Emergency', 'Resources', 'Legal', 'Connect'].map((section) => (
              <div key={section}>
                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">{section}</h3>
                <div className="mt-4 space-y-4">
                  {section === 'Emergency' && <p className="text-base text-gray-500">24/7 Helpline: 1800-123-4567</p>}
                  {section === 'Resources' && (
                    <>
                      <a href="#" className="text-base text-gray-500 hover:text-gray-900">Help Center</a>
                      <a href="#" className="text-base text-gray-500 hover:text-gray-900">FAQs</a>
                    </>
                  )}
                  {section === 'Legal' && (
                    <>
                      <a href="#" className="text-base text-gray-500 hover:text-gray-900">Privacy Policy</a>
                      <a href="#" className="text-base text-gray-500 hover:text-gray-900">Terms of Service</a>
                    </>
                  )}
                  {section === 'Connect' && (
                    <>
                      <a href="#" className="text-base text-gray-500 hover:text-gray-900">Contact Us</a>
                      <a href="#" className="text-base text-gray-500 hover:text-gray-900">Social Media</a>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 border-t border-gray-200 pt-8">
            <p className="text-base text-gray-400 text-center">
              © 2024 Student Grievance Portal. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default StudentGrievancePortal;