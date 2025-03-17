import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaPhoenixFramework } from 'react-icons/fa';
import { addressData } from '../data/addressData';

const ContactInfo = () => {
  return (
    <div className="contact-info p-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-[#0A1E2B] p-4 rounded-2xl text-center shadow-lg">
          <FaPhone className="w-6 h-6 mx-auto mb-2 text-white" /> {/* Phone Icon */}
          <p className="font-semibold text-white">CALL US</p>
          <p className="text-white">{addressData.phone}</p>
        </div>
        <div className="bg-[#4A6B8C] p-4 rounded-2xl text-center shadow-lg">
          <FaEnvelope className="w-6 h-6 mx-auto mb-2 text-[#0A1E2B]" /> {/* Email Icon */}
          <p className="font-semibold text-[#0A1E2B]">CONTACT US</p>
          <p className="text-[#0A1E2B]">{addressData.email}</p>
        </div>
        <div className="bg-white-500 p-4 rounded-2xl text-center shadow-lg">
          <FaMapMarkerAlt className="w-6 h-6 mx-auto mb-2 text-[#1F3D57]" /> {/* Location Icon */}
          <p className="font-semibold text-[#1F3D57]">VISIT US</p>
          <p className="text-[#1F3D57]">{addressData.address} {addressData.city}</p>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;