import { addressData } from '../data/addressData';

const MapsCompany = () => {
  const lat = "-7.7536843";
  const lng = "110.4484708";
  const location = addressData.mapsname;
  const encodedLocation = encodeURIComponent(location);

  return (
    <div className="w-full rounded-2xl overflow-hidden shadow-lg border-4 border-green-500 p-2 bg-white hover:shadow-2xl">
      <iframe 
        className="w-full h-[500px] sm:h-[400px] md:h-[450px] lg:h-[300px] xl:h-[300px] 2xl:h-[600px] rounded-lg border-none"
        //src={`https://maps.google.com/maps?q=${lat},${lng}&t=&z=15&ie=UTF8&iwloc=&output=embed`} //Location lat and lang
        src={`https://maps.google.com/maps?q=${encodedLocation}&t=&z=15&ie=UTF8&iwloc=&output=embed`} //Location Name
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default MapsCompany;
