'use client';
import Link from 'next/link';
import styles from './MahakalTourPackages.module.css';
import { allHotels } from "../Data/allHotelsData";
import Image from 'next/image';
import { MapPin, Star, Sparkles, 
    // CheckCircle, Ban, Gem
} from 'lucide-react';
import { SectionHeader, Wrapper } from '../MainLayouts';
import TwoButtons from '../components/TwoButtons';

const PackageCard = ({ pkg }) => {
    return (
        <div className={styles.tourCard}>
            <Link href={`/hotels-in-ujjain/${pkg.slug}`}>

                <div className={styles.cardImageWrapper}>
                    <div className={styles.cardImage}>
                        <Image
                            src={pkg.heroImage}
                            alt={pkg.title}
                            fill
                            className={styles.imageFix}
                            sizes="(max-width: 768px) 100vw, 33vw"
                        />
                    </div>
                    <span className={styles.packageDuration}>{pkg.duration}</span>
                </div>
            </Link>
            <div className={styles.cardContent}>
                <h3 className={styles.packageTitle}>{pkg.title}</h3>
                <div className={styles.packageMeta}>
                    <p className={styles.loc}>
                        <MapPin size={16} style={{ marginRight: 6, display: 'inline' }} />
                        <strong>Location:</strong>{pkg.location}
                    </p>
                    <p>
                        <Star size={16} style={{ marginRight: 6, display: 'inline' }} />
                        <strong>Rating:</strong> {pkg.rating} ({pkg.reviews} reviews)
                    </p>
                </div>

                <div className={styles.packagePrice}>
                    <span className={styles.priceValue}>{pkg.currentPrice}</span>
                    <span className={styles.priceLabel}>per person</span>
                </div>

                <div className={styles.packageDetails}>
                    {/* <div>
                        <h4>
                            < size={16} style={{ marginRight: 6, display: 'inline' }} />
                            Includes:
                        </h4>
                        <ul>
                            {
                                pkg.amenities.slice(0, 3).map((item, idx) => (
                                    <li key={idx}>{item}</li>
                                ))
                            }
                        </ul>
                    </div> */}

                    {
                        pkg.cancellationPolicy?.length > 0 && (
                            <div>
                                <h4>
                                    <Sparkles size={16} style={{ marginRight: 6, display: 'inline' }} />
                                    Highlights:
                                </h4>
                                <ul>
                                    {
                                        pkg.cancellationPolicy.slice(0, 3).map((item, idx) => (
                                            <li className={styles.lines} key={idx}>{item}</li>
                                        ))

                                    }
                                </ul>
                            </div>
                        )
                    }

                    {/* {
                        pkg.specialServices?.length > 0 && (
                            <div>
                                <h4>
                                    <Gem size={16} style={{ marginRight: 6, display: 'inline' }} />
                                    Special Services:
                                </h4>
                                <ul>
                                    {
                                        pkg.specialServices.slice(0, 3).map((item, idx) => (
                                            <li key={idx}>{item}</li>
                                        ))

                                    }
                                </ul>
                            </div>
                        )
                    } */}
                </div>

                {/* <div className={styles.cardFooter}>
                    <Link
                        href={`/book-now?package=${pkg.id}`}
                        className={`${styles.bookButton} ${!pkg.available ? styles.disabledButton : ''}`}
                    >
                        {
                            pkg.available ? (
                                <>
                                    Book This Package{' '}
                                    <ArrowRightCircle size={18} style={{ verticalAlign: 'middle', marginLeft: 6 }} />
                                </>
                            ) : (
                                <>
                                    Currently Unavailable{' '}
                                    <Ban size={16} style={{ verticalAlign: 'middle', marginLeft: 6 }} />
                                </>
                            )
                        }
                    </Link>
                </div> */}



                <TwoButtons category={"hotels-in-ujjain"} slug={pkg.slug} />

            </div>
        </div>
    );
};

const MahakalTourPackages = () => {


    const topHotels = allHotels.filter(hotel => hotel.hotelFor === "ujjain").sort((a, b) => b.rating - a.rating).slice(0, 4);

    return (
        <Wrapper>

            <SectionHeader
                title="Mahakal Top Hotels Booking"
                description="Embark on a divine journey with our carefully curated spiritual experiences"
            />

            <div className={styles.tourGrid}>
                {
                    topHotels.map((pkg, index) => (
                        <PackageCard key={index} pkg={pkg} />
                    ))
                }
            </div>

        </Wrapper>
    );
};

export default MahakalTourPackages;