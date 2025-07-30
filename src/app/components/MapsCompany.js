import { addressData } from '../data/addressData';

const MapsCompany = () => {
  const location = addressData.mapsname;
  const encodedLocation = encodeURIComponent(location);

  return (
    <div className="w-full rounded-xl overflow-hidden shadow-lg">
      <iframe 
        className="w-full h-[300px] md:h-[400px] lg:h-[450px]"
        src={`https://maps.google.com/maps?q=${encodedLocation}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default MapsCompany;