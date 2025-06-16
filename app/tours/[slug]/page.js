'use client';

import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Alltours } from '../../Data/completeToursData';
import Image from 'next/image';
import styles from './page.module.css';
import { InternalPageHeading, InternalPageWrapper } from '../../MainLayouts';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import { Hotel, Route, Tag, Star, Info, CheckCircle, Clock9, Users } from 'lucide-react';
import { useInternalPageContext } from '@/app/contexts/InternalPagesContext';
import ItineraryAccordion from '@/app/components/ItineraryAccordion';
import Link from 'next/link';


export default function Tours() {

    const [activeTab, setActiveTab] = useState(null);
    const [activeTab2, setActiveTab2] = useState(null)
    
    const { getObjectDataListOrArrayDataList, getSubtitle } = useInternalPageContext();


    const { slug } = useParams();
    const tour = Alltours.find((tour) => tour.slug === slug);
    useEffect( () => {
         if (!tour) return; 
        setActiveTab('priceInclusive')
        setActiveTab2('bookingPolicy');
    }, [tour])

    if (!tour) {
        return <div className={styles.notFound}>Tour not found</div>;
    }

    const tabs = ['priceInclusive', 'priceExclusive', 'accommodation', 'specialAttractions']
    const tabs2 = ['bookingPolicy', 'cancellationPolicy']

    
    
    const handleTabChange = (tab) => {
        setActiveTab(tab);
    };

    const handleTabChange2 = (tab2) => {
        setActiveTab2(tab2);
    };
;



    return (
        <InternalPageWrapper>

            <InternalPageHeading title={tour.title} />

            <div className={styles.heroGrid}>
                <div className={styles.heroImageWrapper}>
                    <Image
                        src={tour.image}
                        alt={tour.title}
                        fill
                        className={styles.heroImage}
                        style={{ objectFit: 'cover' }}
                        priority
                    />
                </div>
                <div className={styles.overviewCard}>
                    <h3 className={styles.cardTitle}>Tour Overview</h3>
                    <div className={styles.overviewDetails}>
                        <p>
                            <strong><Hotel size={16} className={styles.icon} /> About:</strong> {tour.subtitle}
                        </p>
                        <p>
                            <strong><Route size={16} className={styles.icon} /> Route:</strong> {tour.route}
                        </p>


                        <p>
                            <strong><Clock9 size={16} className={styles.icon} /> Duration:</strong> {tour.duration}
                        </p>
                        <p>
                            <strong><Users size={16} className={styles.icon} /> Guests:</strong> {tour.guests}
                        </p>
                        <p className={styles.priceInfo}>
                            <strong><Tag size={16} className={styles.icon} /> Price:</strong>{' '}
                            <span className={styles.currentPrice}>₹{tour.currentPrice}</span>{' '}
                            <span className={styles.originalPrice}>₹{tour.originalPrice}</span>{' '}
                            <span className={styles.saving}>(Save ₹{tour.saving})</span>
                        </p>
                        <Stack spacing={1} direction="row" alignItems="center" className={styles.ratingParent}>
                            <Star size={16} className={styles.icon} />
                            <span className={styles.ratingLabel}> Customer Rating:</span>
                            <Rating
                                name="half-rating-read"
                                defaultValue={tour.rating}
                                precision={0.5}
                                readOnly
                                size="small"
                            />
                            <span className={styles.ratingValue}>({tour.rating})</span>
                        </Stack>
                        <p className={styles.overviewText}>
                            <Info size={16} className={styles.icon} style={{ marginRight: '6px', verticalAlign: 'middle' }} />
                            {tour.overview}
                        </p>
                    </div>

                      <Link href={`/book-now/tours/${slug}`} className={styles.bookNowButtonHero}>
                       Enquire Now  <CheckCircle size={16} className={styles.icon} style={{ marginRight: '6px', }} />
                    </Link>
                </div>
            </div>



            <div className={styles.heroGrid}>
                <div>
                    <div className={styles.tabContainer}>
                        {
                            tabs.map((tab) => (
                                <button
                                    key={tab}
                                    className={`${styles.tabButton} ${activeTab === tab ? styles.active : ''}`}
                                    onClick={() => handleTabChange(tab)}
                                >
                                    {getSubtitle(tab)}
                                </button>
                            ))
                        }
                    </div>

                    <section className={styles.section}>
                        <h3 className={styles.sectionTitle}>{getSubtitle(activeTab)}</h3>
                        {
                            getObjectDataListOrArrayDataList(tour[activeTab])
                        }
                    </section>
                </div>

                <div className={styles.rowSpan}>
                    <ItineraryAccordion itinerary={tour.itinerary}/>
                </div>
          
                <div>
                    <div className={styles.tabContainer}>
                        {
                            tabs2.map( (tab2) => (
                                <button
                                    key={tab2}
                                    className={`${styles.tabButton} ${activeTab2 === tab2 ? styles.active : ''}`}
                                    onClick={() => handleTabChange2(tab2)}
                                >
                                    {getSubtitle(tab2)}
                                </button>
                            ))
                        }
                    </div>
                    <section className={styles.section}>
                        <h3 className={styles.sectionTitle}>{getSubtitle(activeTab2)}</h3>
                        {
                            getObjectDataListOrArrayDataList(tour[activeTab2])
                        }
                    </section>

                </div>

             
             
              
            </div>

        </InternalPageWrapper>
    );
}