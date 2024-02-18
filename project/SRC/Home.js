import React from 'react';
import './Home.html'; // Assuming you have a Home.css file for TailwindCSS styles

const Home = () => {
  return (
    <div className="container mx-auto">
      <nav className="flex justify-between items-center py-4 bg-blue-800 text-white">
        <h1 className="text-lg font-bold">Transport Management System</h1>
        <div className="flex gap-4">
          <a href="/" className="bg-purple-600 px-4 py-2 rounded-md hover:bg-purple-700">Home</a>
          <a href="/login" className="hover:bg-purple-700 px-4 py-2 rounded-md">Login</a>
          <a href="/features" className="hover:bg-purple-700 px-4 py-2 rounded-md">Features</a>
          <a href="/contact" className="bg-purple-500 px-4 py-2 rounded-md hover:bg-purple-600">Contact Us</a>
        </div>
      </nav>

      <main className="p-8">
        <section className="mb-12">
          <h2 className="text-4xl font-semibold mb-3">Welcome to Our Transport Management System</h2>
          <p className="text-gray-700 text-lg">
            Efficient, Reliable, and User-friendly
          </p>
          <p className="mt-4 text-gray-600">
            Our Transport Management System (TMS) is designed to streamline your logistics operations,
            offering real-time tracking, cost reduction, and enhanced efficiency.
          </p>
        </section>

        <section>
          <h3 className="text-2xl font-semibold mb-3">Features</h3>
          <p className="text-gray-600">
            From real-time tracking to analytics and reporting, discover how our TMS can transform your business.
          </p>
        </section>
      </main>
    </div>
  );
};

export default Home;
