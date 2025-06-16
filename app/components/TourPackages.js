import React from 'react';
import styles from './TourPackages.module.css';

import TravelPackageCard from '../components/TourPackages/TravelPackageCard';
import {Alltours} from "../Data/completeToursData";
import {SectionHeader, Wrapper} from '../MainLayouts';
export default function Home() {
  
    const topTours = Alltours.sort((a, b) => b.rating - a.rating).slice(0, 4);
   

    return (
        <Wrapper>
           
            <SectionHeader 
                title="Mahakaleshwar Tour Packages" 
                description="Experience Ujjain's divinity with our all-in-one Mahakal tour packages."
            />

            <div className={styles.cardContainer}>
                {
                    topTours.map((pkg, index) => (
                        <TravelPackageCard key={index} pkg={pkg} />
                    ))
                }
            </div>
        </Wrapper>
    );
}
