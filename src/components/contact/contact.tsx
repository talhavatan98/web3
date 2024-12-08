"use client";

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";

export function Contact() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8 bg-gray-50">
      <div className="text-center p-10 bg-white rounded-lg shadow-md mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Contact Us</h1>
        <p className="text-gray-600">We&apos;re here to help and answer any questions you might have. We look forward to hearing from you!</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-10">
        <div className="bg-white p-8 rounded-lg shadow-md text-center transform transition-transform hover:-translate-y-1">
          <FontAwesomeIcon icon={faPhone} className="text-2xl text-sky-500 mb-4" />
          <h3 className="text-xl font-bold text-gray-800 mb-2">Phone</h3>
          <p className="text-gray-600">+1 (555) 123-4567</p>
          <p className="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM</p>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-md text-center transform transition-transform hover:-translate-y-1">
          <FontAwesomeIcon icon={faEnvelope} className="text-2xl text-sky-500 mb-4" />
          <h3 className="text-xl font-bold text-gray-800 mb-2">Email</h3>
          <p className="text-gray-600">info@yourhealthcare.com</p>
          <p className="text-gray-600">support@yourhealthcare.com</p>
        </div>
      </div>

      <div className="bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Send Us a Message</h2>
        <p className="text-gray-600 mb-6">Have questions about our services or interested in collaboration? We&apos;d love to hear from you!</p>
        
        <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500"
            />
          </div>

          <div>
            <label htmlFor="subject" className="block text-gray-700 font-bold mb-2">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-gray-700 font-bold mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={6}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500 resize-none"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full md:w-auto px-6 py-3 bg-sky-500 text-white font-bold rounded-md hover:bg-sky-600 transition-colors duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
