import Image from "next/image";

export default function Home() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-1">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">Welcome to my Website</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
          This is the simple, clean website built with Next.js and Tailwind CSS. Perfect for beginnerslearning web development.
        </p>
      <div className="space-x-4">
        <button className="bg-blue-600 text-white px-3 py-3 rounded-lg hover:bg-blue-700 transition-color font-semibold">
          Get Started
        </button>
        <button className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors">
          Learn More
        </button>
      </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"> 
        <div className="text-center p-10 bg-white rounded-lg shadow-sm border border-gray-200">
          <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
            <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-3">Reliable</h3>
          <p className="italic text-gray-600">Built with modern tech for optimal performance.</p>
        </div>

        <div className="text-center p-10 bg-white rounded-lg shadow-sm border border-gray-200">
          <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
            <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-3">Secure</h3>
          <p className="italic text-gray-600">Built with modern tech for optimal performance.</p>
        </div>

        <div className="text-center p-10 bg-white rounded-lg shadow-sm border border-gray-200">
          <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
            <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-3">Fast</h3>
          <p className="italic text-gray-600">Built with modern tech for optimal performance.</p>
        </div>

      </div>
    </div>
  );
}
