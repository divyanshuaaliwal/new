"use client"
import React, { useState } from "react";
import styles from './HeroCarousel.module.css';
import VideoSlide from "./VideoSlide";
import { videoData } from "../Data/videoData";
import Link from "next/link";

const HeroCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isVideoLoaded, setIsVideoLoaded] = useState(false);

    const goToNext = () => {
        setCurrentIndex((prev) => (prev + 1) % videoData.length);
        setIsVideoLoaded(false);
    };

    const goToPrev = () => {
        setCurrentIndex((prev) => (prev - 1 + videoData.length) % videoData.length);
        setIsVideoLoaded(false);
    };

    return (
        <div className={styles.carouselContainer}>
            <VideoSlide
                video={videoData[currentIndex]}
                onLoaded={() => setIsVideoLoaded(true)}
                isActive={true}
            />


            <div className={styles.contentOverlay}>
                <h1 className={styles.title}>{videoData[currentIndex].title}</h1>
                <p className={styles.description}>{videoData[currentIndex].description}</p>

                <div className={styles.buttonGroup}>
                    <Link href="/bhasm-aarti-registration" className={styles.bookingButton}>Bhasm Aarti Booking</Link>
                    <Link href="/abhishek-booking" className={styles.bookingButton}>Abhishek Booking</Link>
                    <Link href="/vip-darshan" className={styles.bookingButton}>VIP Darshan Booking</Link>
                </div>
            </div>



            <div className={styles.controls}>
                <button onClick={goToPrev} className={styles.navButton}>⟨</button>
                <div className={styles.muteButton}>{videoData[currentIndex].slug}</div>
                <button onClick={goToNext} className={styles.navButton}>⟩</button>
            </div>

            {isVideoLoaded && <div className={styles.videoOverlay}></div>
            }
        </div>
    );
};

export default HeroCarousel;
