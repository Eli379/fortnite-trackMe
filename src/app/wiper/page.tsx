'use client'
import React, { useState, ChangeEvent, FormEvent } from 'react';

const EmailFormPage: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const password = "3791";
  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Handle form submission here
    try {
      const response = await fetch('http://127.0.0.1:5000/removeTrackers', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
      if (response.ok) {
        console.log('Remove request successful');
      } else {
        console.log('Remove request failed');
        // Handle error here
      }
    } catch (error) {
      console.error('Remove request error:', error);
      // Handle error here
    }
    setEmail('');
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-4 sm:p-8">
      <div className="max-w-md mx-auto">
        <h2 className="text-2xl font-bold text-center mb-4">
          Wiper
        </h2>
        <p>Enter your email here to remove your cosmetic trackers.</p>
        <br/>
        <form onSubmit={handleSubmit} className="border border-purple-200 rounded flex">
          <input
            type="email"
            className="block w-full px-4 py-2 bg-white dark:bg-gray-900 border rounded-l-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
            value={email}
            onChange={handleEmailChange}
            placeholder="Enter your email"
            required
          />
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-r-md"
          >
            Submit
          </button>
        </form>
      </div>
    </main>
  );
};

export default EmailFormPage;
