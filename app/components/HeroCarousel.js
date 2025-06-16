"use client"
import React, { useState } from "react";
import styles from './HeroCarousel.module.css';
import VideoSlide from "./VideoSlide";
import { videoData } from "../Data/videoData";
import Link from "next/link";

const HeroCarousel = () => {

    const [currentIndex, setCurrentIndex] = useState(0);

    const goToNext = () => {
        setCurrentIndex((prev) => (prev + 1) % videoData.length);
    };

    const goToPrev = () => {
        setCurrentIndex((prev) => (prev - 1 + videoData.length) % videoData.length);
    };

    return (
        <div className={styles.carouselContainer}>

            <VideoSlide video={videoData[currentIndex]} />

            {/* Overlay */}
            <div className={styles.contentOverlay}>
                <h1 className={styles.title}>{videoData[currentIndex].title}</h1>
                <p className={styles.description}>{videoData[currentIndex].description}</p>

                <div className={styles.buttonGroup}>
                    <Link href={"/bhasm-aarti-registration"} className={styles.bookingButton}>Bhasm Aarti Booking</Link>
                    <Link href={"/abhishek-booking"} className={styles.bookingButton}>Abhishek Booking</Link>
                    <Link href={"/vip-darshan"} className={styles.bookingButton}>VIP Darshan Booking</Link>

                </div>
            </div>


            {/* buttons directly below video */}
            <div className={styles.controls}>
                <button onClick={goToPrev} className={styles.navButton}>⟨</button>
                <div className={styles.muteButton}>
                    {videoData[currentIndex].slug}
                </div>
                <button onClick={goToNext} className={styles.navButton}>⟩</button>
            </div>

        </div>
    );
};

export default HeroCarousel;
