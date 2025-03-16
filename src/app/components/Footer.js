/* export default function Footer() {
    return (
        <footer className="bg-gray-800 text-white p-4 mt-8 text-center">
            © {new Date().getFullYear()} DAS TREVAS. All rights reserved.
        </footer>
    );
}
   */

'use client';

import { addressData } from '../contact/addressData';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Logo and Description */}
          <div>
            <div className="flex items-center mb-4">
              <h2 className="text-2xl font-bold">{addressData.name}</h2>
            </div>
            <p className="text-gray-400 mb-4">
              <div className="contact-info-section">
                    <div className="contact-details">
                      <div className="details-wrapper">
                        <address>
                          {addressData.address} <br/>
                          {addressData.city}<br />
                          <strong>Phone:</strong> {addressData.phone}<br />
                          <strong>Fax:</strong> {addressData.fax}<br />
                          <strong>Email:</strong> <a href={`mailto:${addressData.email}`}>{addressData.email}</a>
                        </address>
                      </div>
                    </div>
                  </div>
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
          
          {/* Navigation */}
          <div>
            <h3 className="text-lg font-bold mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li><a href="/" className="text-gray-400 hover:text-white">Home</a></li>
              <li><a href="/pages" className="text-gray-400 hover:text-white">Pages</a></li>
              <li><a href="/about-us" className="text-gray-400 hover:text-white">About Us</a></li>
              <li><a href="/contact" className="text-gray-400 hover:text-white">Contact</a></li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <div className="mt-6">
              <h3 className="text-lg font-bold mb-2">Work Hours</h3>
              <p className="text-gray-400">{addressData.hours}</p>
            </div>
            
            <div className="mt-4">
            <a href={`tel:${addressData.phone}`} className="inline-block bg-green-500 text-white py-2 px-4 rounded">
                Call Us
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-6 text-center">
          <p>© 2025 dastrevas. All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
}