'use client';

import React from 'react';
import styles from './page.module.css';
const v1 = "https://sin1.contabostorage.com/d1fa3867924f4c149226431ef8cbe8ee:ujjain/helicopterVideo.mp4";

const Page = () => {
    return (
        <div className={styles.container}>
            <video
    className={styles.video}
    src={v1}
    loop
    autoPlay
    muted
    playsInline="true"
    preload="auto"
    controls={false}
    disablePictureInPicture
/>

            <div className={styles.overlay}>
                <h1>Coming Soon</h1>
            </div>
        </div>
    );
};

export default Page;
