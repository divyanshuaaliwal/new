// app/bhasm-aarti/page.js
'use client';
import { useEffect, useState, useRef } from 'react';
import styles from './page.module.css';
import { SectionHeader } from '../MainLayouts';
import { CheckCircle, Info } from 'lucide-react';
import { useInternalPageContext } from '../contexts/InternalPagesContext';
import { bhasmAarti } from "../Data/bhasmAartiData";
import BhasmAartiBooking from '../components/bhasmAartiVideoComponent';

const v1 = "https://sin1.contabostorage.com/d1fa3867924f4c149226431ef8cbe8ee:ujjain/bhasmAarti.mp4";
const cultural_impact = "https://sin1.contabostorage.com/d1fa3867924f4c149226431ef8cbe8ee:ujjain/cultural_impact.mp4";
const ujjainLast ="https://sin1.contabostorage.com/d1fa3867924f4c149226431ef8cbe8ee:ujjain/ujjainlast.mp4";

export default function BhasmAarti() {
    
    const [activeTab, setActiveTab] = useState('');
    const tabs = ['dressCode', 'genderRestrictions', 'bookingInfo', 'offerings'
    ];

    useEffect(() => {
        setActiveTab('dressCode');
    }, []);


    const { getSubtitle, getObjectDataListOrArrayDataList, getListWithoutLines } = useInternalPageContext();

    return (
        <>

        <BhasmAartiBooking/>

            {/* <div className={styles.heroSection1}>

                <div className={styles.heroOverlay}>

                    <h1 className={styles.heroHeading}>
                        <span className={styles.om}>ॐ</span> Bhasm Aarti
                    </h1>

                    <h2 className={styles.heroSubheading}>Shri Mahakaleshwar Temple, Ujjain</h2>

                    <div className={styles.divider}></div>

                    <p className={styles.heroText}>
                        Experience the divine ritual of cosmic transformation
                    </p>

                    <button onClick={handleBookNow} className={styles.bookNowButtonHero}>
                        Book Now <CheckCircle size={16} className={styles.icon} style={{ marginRight: '6px', }} />
                    </button>

                </div>

            </div> */}

            {/* Main Content Container */}
            <div className={styles.container}>


                {/* {
                    showBookingForm && (<BhasmAartiForm setShowBookingForm={setShowBookingForm} />)
                } */}

                <div>
                    <SectionHeader title="The Soul of Mahakal" />

                    <div className={styles.heroGrid3}>

                        <div className={styles.videoWrapper}>
                            <video
                                className={styles.videoElement}
                                src={v1}
                                loop
                                autoPlay
                                muted={true}
                                playsInline
                            />
                            <div className={styles.videoOverlay}></div>
                        </div>



                        <section className={styles.section}>
                            <Info size={15} className={styles.icon} style={{ marginLeft: '-18px', verticalAlign: 'middle', color: ' #4b5563' }} />

                            <span className={styles.listItem2Heading}>
                                Feel the spiritual intensity of witnessing Lord Mahakal adorned with sacred ash, accompanied by chants, drums, and an atmosphere charged with divine energy.
                            </span>
                            {
                                getListWithoutLines(bhasmAarti["overview"])
                            }
                        </section>
                    </div>
                </div>

                <div>


                    <div className={styles.heroGrid}>

                        <div>
                            <SectionHeader title="Location" />

                            <section className={styles.section}>
                                {
                                    getListWithoutLines(bhasmAarti["location"])
                                }
                            </section>

                        </div>
                        <div>
                            <SectionHeader title="Timings" />

                            <section className={styles.section}>
                                {
                                    getListWithoutLines(bhasmAarti["timing"])
                                }
                            </section>

                        </div>
                        <div>
                            <SectionHeader title="Procedure" />

                            <section className={styles.section}>
                                {
                                    getListWithoutLines(bhasmAarti["procedure"])
                                }
                            </section> 

                        </div>

                    </div>
                </div>

                <div>
                    <SectionHeader title="Guidelines" />

                    <div className={styles.heroGrid2}>



                        <section className={styles.section}><Info size={15} className={styles.icon} style={{ marginLeft: '-18px', verticalAlign: 'middle', color: ' #4b5563' }} />

                            <span className={styles.listItem2Heading}>
                               To attend the Bhasma Aarti, devotees must follow strict rules of cleanliness, dress modestly, and arrive well before dawn for security checks and seating.
                            </span>
                            {
                                getListWithoutLines(bhasmAarti["guidelines"])
                            }
                        </section>

                        <div className={styles.videoWrapper}>
                            <video
                                className={styles.videoElement}
                                src={cultural_impact}
                                loop
                                autoPlay
                                muted={true}
                                playsInline
                            />
                            <div className={styles.videoOverlay}></div>
                        </div>
                    </div>
                </div>

                <div>
                    <SectionHeader title="Ritual Steps" />

                    <div className={styles.heroGrid3}>

                        <div className={styles.videoWrapper}>
                            <video
                                className={styles.videoElement}
                                src={ujjainLast}
                                loop
                                autoPlay
                                muted={true}
                                playsInline
                            />
                            <div className={styles.videoOverlay}></div>
                        </div>

                        <section className={styles.section}>
                            <Info size={15} className={styles.icon} style={{ marginLeft: '-18px', verticalAlign: 'middle', color: ' #4b5563' }} />

                            <span className={styles.listItem2Heading}>
                               Understand each moment of the ritual—from the preparation of the Lingam to the Abhishek, decoration, and final Aarti—bringing you closer to the divine.
                            </span>
                          
                            {
                                getListWithoutLines(bhasmAarti["ritualSteps"])
                            }
                        </section>
                    </div>
                </div>
               
                <div
                    className={styles.finalContainer}
                >
                    <div className={styles.tabContainer}>
                        {
                            tabs.map((tab) => (
                                <button
                                    key={tab}
                                    className={`${styles.tabButton} ${activeTab === tab ? styles.active : ''}`}
                                    onClick={() => setActiveTab(tab)}
                                >
                                    {getSubtitle(tab)}
                                </button>
                            ))
                        }
                    </div>

                    <section className={styles.section}>
                        <h3 className={styles.sectionTitle}>{getSubtitle(activeTab)}</h3>
                        {
                            getObjectDataListOrArrayDataList(bhasmAarti[activeTab])
                        }
                    </section>
                </div>

                {/* <BhasmAartiBooking/> */}

            </div>



        </>

    );
}