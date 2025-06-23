"use client";
import React, { useEffect, useRef } from 'react';
import styles from './HeroCarousel.module.css';

const VideoSlide = ({ video }) => {
    const videoRef = useRef(null);

    useEffect(() => {
        const videoElement = videoRef.current;

        if (!video || !videoElement) return;

        // Ensure it doesn't auto-play before being ready
        videoElement.pause();
        videoElement.removeAttribute('src'); // Clear old source if any
        videoElement.load();

        const handleCanPlay = () => {
            videoElement.play().catch((error) => {
                console.error("Video playback error:", error);
            });
        };

        // Attach event listener
        videoElement.addEventListener("canplay", handleCanPlay);

        // Set new source
        videoElement.src = video.src;
        videoElement.load();

        return () => {
            videoElement.removeEventListener("canplay", handleCanPlay);
        };
    }, [video.src]);

    if (!video) return null;

    return (
        <div className={styles.videoWrapper}>
            <video
                ref={videoRef}
                className={styles.videoElement}
                loop
                autoPlay
                muted
                playsInline={true} // ✅ correct boolean syntax
                preload="auto"
                controls={false}
                disablePictureInPicture
            />
            <div className={styles.videoOverlay}></div>
        </div>
    );
};

export default VideoSlide;
