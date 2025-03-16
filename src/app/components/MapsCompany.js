import styles from '../../styles/MapStyles.module.css';
import { addressData } from '../data/addressData';

const MapsCompany = () => {
  const lat = "-7.7536843";
  const lng = "110.4484708";
  const location = addressData.mapsname;
  const encodedLocation = encodeURIComponent(location);

  return (
    <div className={styles.mapContainer}>
      <iframe 
        className={styles.mapFrame}
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