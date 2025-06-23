import styles from './VehiclesPackages.module.css';
import Image from 'next/image';
import { vehiclePackages } from '../Data/vehiclePackagesData';
import { MapPin, Briefcase, Users } from 'lucide-react';
import { SectionHeader, Wrapper } from '../MainLayouts';
import Link from 'next/link';
import TwoButtons from '../components/TwoButtons';

const Card = ({ tour }) => {
    const {
        category,
        slug,
        vehicle_type,
        pricing,
        km,
        luggage,
        total_person_capacity,
        gallary,
    } = tour;

    return (
        <div className={styles.card}>

            <Link  href={`/taxi-booking/${category}/${slug}`}>
                <div className={styles.imageWrapper}>
                    <Image
                        src={gallary[0]}
                        alt={vehicle_type}
                        fill
                        style={{ objectFit: 'cover' }}
                    />
                </div>
             </Link>
            <div className={styles.cardContent}>
                <h2 className={styles.title}>{vehicle_type}</h2>
               

             <p className={styles.details}>
                        <MapPin size={16} style={{ marginRight: '6px' }} />
                        {km}    
                    </p>
                <div className={styles.innerData}>
                   
                    <p className={styles.details}>
                        <Briefcase size={16} style={{ marginRight: '6px' }} />
                        {luggage}
                    </p>
                    <p className={styles.details}>
                        <Users size={16} style={{ marginRight: '6px' }} />
                        {total_person_capacity} persons
                    </p>
                </div>

                <div className={styles.priceBox}>
                    <span className={styles.currentPrice}>₹{pricing.current_price}</span>
                    <span className={styles.originalPrice}>₹{pricing.original_price}</span>
                    <span className={styles.discount}>{pricing.discount_percentage}% OFF</span>
                </div>
                
                

                <TwoButtons category={`taxi-booking/${category}`} slug={slug} />
            </div>
        </div>
    );
};

export default function Page() {

    const topRatedVehicles = vehiclePackages.sort((a, b) => b.rating - a.rating).slice(0, 4); 
    
    return (
        <Wrapper>
            
                <SectionHeader
                    title="Vehicle Booking"
                    description="Comfortable and affordable vehicle packages for your Ujjain journey"
                />
                <div className={styles.cardGrid}>
                    {
                        topRatedVehicles.map((tour) => (
                            <Card key={tour.id} tour={tour} />
                        ))
                    }
                </div>
            
        </Wrapper>
    );
}
