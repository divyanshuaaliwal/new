import Mahakaleshwar_temple from "../assets/Mahakaleshwar_temple.png";
import RamGhat from "../assets/Ram_Ghat.png";
import KalBhairav from "../assets/Kal_Bhairav_Temple.png";
import JantarMantar from "../assets/Jantar_Mantar.png";
import MangalnathTemple from "../assets/Mangalnath_Temple.png";
import kalideh from "../assets/kalideh.png";

export const attractions = [
    {
        id: 1,
        name: 'Mahakaleshwar Temple',
        slug: 'mahakaleshwar-temple-0',  
        description: 'One of the 12 Jyotirlingas in India, dedicated to Lord Shiva',
        detailedDescription: 'The Mahakaleshwar Temple is one of the most revered Shiva temples in India, housing one of the twelve Jyotirlingas. The temple is known for its unique Bhasma Aarti performed with sacred ash. The presiding deity, Lord Shiva in the lingam form is believed to be Swayambhu (self-manifested) and derives currents of power (Shakti) from within itself.',
        image: Mahakaleshwar_temple,
        location: 'Jaisinghpura, Ujjain',
        timings: '4:00 AM - 11:00 PM',
        entryFee: 'Free',
        category: 'Temple',
        rating: 4.8,
        highlights: ['Jyotirlinga', 'Bhasma Aarti', 'Spiritual Vibes'],
        address: 'Mahakaleshwar Temple, Jaisinghpura, Ujjain, Madhya Pradesh 456001',
        specialEvents: [
            {
                name: 'Bhasma Aarti',
                time: '4:00 AM',
                description: 'Sacred ritual with sacred ash',
                ticketRequired: true,
                ticketPrice: '₹500',
                bookingLink: 'https://www.mahakaleshwar.org/bhasma-aarti-booking'
            },
            {
                name: 'Mahashivratri',
                time: 'Annual',
                description: 'Grand celebration of Lord Shiva',
                ticketRequired: false,
                duration: '24 hours'
            }
        ],
        bestTimeToVisit: 'October to March',
        recommendedVisitDuration: '2-3 hours',
        peakSeason: 'November to February',
        languagesSpoken: ['Hindi', 'English', 'Sanskrit'],
        nearbyAttractions: ['Ram Ghat (0.5 km)', 'Kal Bhairav Temple (2 km)'],
        transportation: {
            byBus: 'Ujjain Bus Stand - 2 km (Auto rickshaw available)',
            byTrain: 'Ujjain Junction - 3 km (Taxi fare approx ₹100)',
            byAir: 'Indore Airport - 55 km (Taxi fare approx ₹1500)'
        },
        facilities: ['Shoe Storage', 'Prasad Counter', 'Information Desk', 'Security', 'Drinking Water'],
        rules: ['No Photography Inside', 'Dress Code Required', 'Mobile Phones Allowed', 'No Leather Items'],
        history: 'Dating back to ancient times, this temple is mentioned in various Puranas. The present structure was built by the Maratha general Ranoji Shinde in 1734. The temple was destroyed by Sultan Shams-ud-din Iltutmish in 1235 and later rebuilt.',
        significance: 'One of the 12 Jyotirlingas, believed to be self-manifested (Swayambhu). The lingam is unique as it faces south (Dakshinamurti) while most Shiva lingams face east.',
        architecture: 'Maratha architecture with intricate carvings and multiple levels. The temple has five levels, one of which is underground. The shikara (spire) is adorned with sculptural work.',
        crowd: {
            peakHours: '6:00 AM - 10:00 AM, 6:00 PM - 9:00 PM',
            leastCrowded: '11:00 AM - 4:00 PM',
            averageWaitTime: '30-45 minutes during peak hours'
        },
        photography: {
            allowed: 'Only in outer areas',
            fee: 'Free',
            restrictions: 'No photography of main deity'
        },
        dressCode: 'Traditional Indian attire preferred. No shorts or sleeveless tops.',
        visitorTips: [
            'Arrive early for Bhasma Aarti (by 3:30 AM)',
            'Winter mornings can be chilly, carry light woolens',
            'Footwear not allowed inside temple premises',
            'Mobile phones must be switched off or silent mode'
        ],
        conservationStatus: 'ASI Protected Monument',
        yearEstablished: 'Unknown (Ancient), Current structure built in 1734',
        management: 'Ujjain Municipal Corporation & Temple Trust',
        annualVisitors: 'Over 5 million',
        recognition: 'One of the 12 Jyotirlingas, Important pilgrimage site in Hindu religion'
    },
    {
        id: 2,
        name: 'Ram Ghat',
        slug: 'ram-ghat-1',  
        description: 'Famous ghat on the banks of Shipra River where sacred rituals are performed',
        detailedDescription: 'Ram Ghat is the most important bathing ghat in Ujjain, located on the banks of the sacred Shipra River. It is the focal point for the famous Kumbh Mela held every 12 years. The ghat comes alive during religious festivals with thousands of devotees taking holy dips. The evening Ganga Aarti is a spectacular sight with priests performing rituals with lamps and chants.',
        image: RamGhat,
        location: 'Near Mahakaleshwar Temple',
        timings: 'Open 24 hours',
        entryFee: 'Free',
        category: 'Ghat',
        rating: 4.6,
        highlights: ['Aarti Ceremony', 'Holy Baths', 'Religious Gatherings'],
        address: 'Ram Ghat, Shipra River, Ujjain, Madhya Pradesh 456001',
        specialEvents: [
            {
                name: 'Ganga Aarti',
                time: '7:00 PM daily',
                description: 'Evening prayer ceremony with lamps and chants',
                ticketRequired: false,
                duration: '45 minutes',
                bestViewingSpots: 'Main platform or from boats'
            },
            {
                name: 'Kumbh Mela',
                time: 'Every 12 years (Next: 2028)',
                description: 'Largest religious gathering in the world',
                ticketRequired: false,
                attendance: 'Over 50 million pilgrims'
            }
        ],
        bestTimeToVisit: 'October to March, Early morning or evening',
        recommendedVisitDuration: '1-2 hours',
        peakSeason: 'During religious festivals',
        languagesSpoken: ['Hindi', 'English'],
        nearbyAttractions: ['Mahakaleshwar Temple (0.5 km)', 'Sandipani Ashram (1 km)'],
        transportation: {
            byBus: 'Ujjain Bus Stand - 1.5 km (₹50 by auto)',
            byTrain: 'Ujjain Junction - 2.5 km (₹100 by taxi)',
            byAir: 'Indore Airport - 55 km (₹1500 by taxi)'
        },
        facilities: ['Bathing Facilities', 'Changing Rooms', 'Boat Rides (₹200 per person)', 'Food Stalls', 'Security'],
        rules: ['Maintain Cleanliness', 'No Loud Music', 'Respect Religious Sentiments', 'No Alcohol'],
        history: 'Ancient ghat mentioned in Hindu scriptures. The current structure was renovated by the Scindia rulers in the 19th century. It has been the site of royal coronations and important religious ceremonies for centuries.',
        significance: 'Sacred bathing spot on Shipra River, believed to purify sins according to Hindu beliefs. Considered as holy as the ghats of Varanasi.',
        architecture: 'Traditional stone steps leading to river with multiple platforms. The ghat stretches over 1 km with several smaller ghats adjoining it.',
        crowd: {
            peakHours: '5:00 AM - 8:00 AM (morning bath), 6:00 PM - 8:00 PM (aarti time)',
            leastCrowded: '10:00 AM - 4:00 PM',
            specialNote: 'Extremely crowded during festivals'
        },
        photography: {
            allowed: 'Yes',
            fee: 'Free',
            restrictions: 'Be respectful during religious ceremonies'
        },
        dressCode: 'Modest clothing recommended. Can change into bathing clothes at facilities.',
        visitorTips: [
            'Carry a towel and change of clothes if planning to bathe',
            'Beware of pickpockets in crowded times',
            'Best photography during golden hours',
            'Boat rides offer great views of the aarti'
        ],
        conservationStatus: 'Heritage Site maintained by Municipal Corporation',
        yearEstablished: 'Ancient (current structure 19th century)',
        management: 'Ujjain Municipal Corporation',
        annualVisitors: 'Over 2 million',
        recognition: 'Primary site for Kumbh Mela in Ujjain'
    },
    {
        id: 3,
        name: 'Kal Bhairav Temple',
        slug: 'kal-bhairav-temple-2',  
        description: 'Ancient temple dedicated to Kal Bhairav, the guardian deity of Ujjain',
        detailedDescription: 'The Kal Bhairav Temple is one of the most unique temples in India, dedicated to the fierce manifestation of Lord Shiva as Bhairav. What makes this temple extraordinary is the tradition of offering liquor to the deity. The temple houses an ancient stone idol of Kal Bhairav adorned with silver ornaments. Devotees believe that visiting this temple after Mahakaleshwar completes the spiritual journey in Ujjain.',
        image: KalBhairav,
        location: 'Bharthari Hills, Ujjain',
        timings: '5:00 AM - 9:00 PM',
        entryFee: 'Free',
        category: 'Temple',
        rating: 4.7,
        highlights: ['Liquor Offering', 'Tantric Connection', 'Ancient Idol'],
        address: 'Kal Bhairav Temple, Bharthari Hills, Ujjain, Madhya Pradesh 456001',
        specialEvents: [
            {
                name: 'Bhairav Ashtami',
                time: 'Monthly (8th day of lunar month)',
                description: 'Special worship on 8th day of lunar month',
                ticketRequired: false,
                specialFeature: 'Increased liquor offerings'
            },
            {
                name: 'Kalratri Puja',
                time: 'Annual (October/November)',
                description: 'Night-long worship ceremony',
                ticketRequired: false,
                duration: 'All night'
            }
        ],
        bestTimeToVisit: 'October to March',
        recommendedVisitDuration: '1-2 hours',
        peakSeason: 'Weekends and Bhairav Ashtami days',
        languagesSpoken: ['Hindi', 'English'],
        nearbyAttractions: ['Mahakaleshwar Temple (2 km)', 'Bharthari Caves (0.5 km)'],
        transportation: {
            byBus: 'Ujjain Bus Stand - 4 km (₹80 by auto)',
            byTrain: 'Ujjain Junction - 5 km (₹120 by taxi)',
            byAir: 'Indore Airport - 58 km (₹1600 by taxi)'
        },
        facilities: ['Prasad Shop', 'Liquor Counter (for offerings)', 'Parking Area', 'Information Board'],
        rules: ['Liquor Offering Allowed (only as prasad)', 'Photography Restricted inside sanctum', 'Maintain Silence'],
        history: 'Ancient temple dating back to medieval period. The current structure was rebuilt in the 19th century. The temple has strong connections with Tantric traditions and was an important site for Tantric practitioners.',
        significance: 'Guardian deity of Ujjain, protector of the city and devotees. The temple is one of the few where liquor is offered as prasad.',
        architecture: 'Simple stone structure with intricate carvings of Bhairav. The sanctum houses a stone idol adorned with silver ornaments.',
        crowd: {
            peakHours: '6:00 AM - 9:00 AM, 6:00 PM - 8:00 PM',
            leastCrowded: '11:00 AM - 4:00 PM',
            specialNote: 'Long queues on Bhairav Ashtami'
        },
        photography: {
            allowed: 'Outer areas only',
            fee: 'Free',
            restrictions: 'No photography of main deity'
        },
        dressCode: 'Traditional Indian attire preferred',
        visitorTips: [
            'Don\'t be alarmed by liquor offerings - it\'s part of tradition',
            'Visit early to avoid crowds',
            'Combine with Bharthari Caves visit',
            'Respect the tantric traditions'
        ],
        conservationStatus: 'State Protected Monument',
        yearEstablished: 'Medieval period (current structure 19th century)',
        management: 'Temple Trust',
        annualVisitors: 'Over 1 million',
        recognition: 'Unique temple allowing liquor offerings'
    },
    {
        id: 4,
        name: 'Jantar Mantar',
        slug: "jantar-mantar-3", 
        description: 'Historic astronomical observatory built by Maharaja Jai Singh II',
        detailedDescription: 'The Jantar Mantar in Ujjain is one of the five astronomical observatories built by Maharaja Jai Singh II in the early 18th century. This collection of architectural astronomical instruments was designed to observe astronomical positions with the naked eye. The observatory includes a sundial that can tell time accurate to within 20 seconds. Ujjain was chosen as a location due to its position on the Tropic of Cancer, making it ideal for astronomical studies.',
        image: JantarMantar,
        location: 'Near Vedh Shala Road, Ujjain',
        timings: '7:00 AM - 7:00 PM',
        entryFee: '₹10 (Indians), ₹50 (Foreigners), ₹5 (Students)',
        category: 'Observatory',
        rating: 4.3,
        highlights: ['Sundial', 'Astrological Instruments', 'Educational Site'],
        address: 'Jantar Mantar, Ved Shala Road, Ujjain, Madhya Pradesh 456001',
        specialEvents: [
            {
                name: 'Astronomy Workshop',
                time: 'Every Saturday (10 AM - 12 PM)',
                description: 'Educational workshops on astronomy for students',
                ticketRequired: true,
                ticketPrice: '₹50',
                ageGroup: '10+ years'
            },
            {
                name: 'Solar Eclipse Viewing',
                time: 'During eclipses',
                description: 'Safe eclipse viewing sessions with experts',
                ticketRequired: false,
                equipmentProvided: 'Solar filters and telescopes'
            }
        ],
        bestTimeToVisit: 'October to March, Morning hours for best light',
        recommendedVisitDuration: '1-2 hours',
        peakSeason: 'Winter months and school vacations',
        languagesSpoken: ['Hindi', 'English'],
        nearbyAttractions: ['Mahakaleshwar Temple (1.5 km)', 'Gopal Mandir (0.8 km)'],
        transportation: {
            byBus: 'Ujjain Bus Stand - 2.5 km (₹60 by auto)',
            byTrain: 'Ujjain Junction - 3.5 km (₹100 by taxi)',
            byAir: 'Indore Airport - 56 km (₹1500 by taxi)'
        },
        facilities: ['Museum', 'Guide Service (₹100 per group)', 'Audio Guide (₹50)', 'Souvenir Shop', 'Drinking Water'],
        rules: ['No Touching Instruments', 'Photography Allowed', 'Follow Guide Instructions', 'No Smoking'],
        history: 'Built in 1725 by Maharaja Jai Singh II, who built similar observatories in Delhi, Jaipur, Mathura and Varanasi. Ujjain was chosen due to its location on the Tropic of Cancer and its historical importance as a center of astronomy.',
        significance: 'UNESCO World Heritage Site candidate, demonstrates medieval India\'s advanced astronomical knowledge. Ujjain has been the prime meridian for Hindu geographers since ancient times.',
        architecture: '18th-century Rajput architecture with precise astronomical instruments made of stone and marble. The main instruments include Samrat Yantra (sundial), Nadi Valaya Yantra (equinoctial sundial) and Digamsa Yantra (azimuth instrument).',
        crowd: {
            peakHours: '10:00 AM - 12:00 PM, 4:00 PM - 6:00 PM',
            leastCrowded: '7:00 AM - 9:00 AM',
            specialNote: 'School groups frequent during weekdays'
        },
        photography: {
            allowed: 'Yes',
            fee: 'Free',
            restrictions: 'No tripods without permission'
        },
        dressCode: 'No specific dress code',
        visitorTips: [
            'Hire a guide to fully understand the instruments',
            'Morning light is best for photography',
            'Combine with visit to nearby temples',
            'Check museum for historical context'
        ],
        conservationStatus: 'ASI Protected Monument',
        yearEstablished: '1725 AD',
        management: 'Archaeological Survey of India',
        annualVisitors: 'Approx 500,000',
        recognition: 'Part of India\'s scientific heritage, Featured in NCERT textbooks'
    },
    {
        id: 5,
        name: 'Mangalnath Temple',
        slug: "mangalnath-temple-4",  
        description: 'Temple dedicated to Mars (Mangal), considered the birthplace of Mars',
        detailedDescription: 'Mangalnath Temple is a unique astrological temple dedicated to Mars (Mangal in Hindi). According to Hindu mythology, this spot is considered the birthplace of Mars. The temple is particularly significant for those suffering from \'Mangal Dosha\' in their horoscopes. Located on the banks of the Shipra River, the temple offers peaceful surroundings and is an important site for astrological remedies.',
        image: MangalnathTemple,
        location: 'Mangalnath Road, Ujjain',
        timings: '6:00 AM - 9:00 PM',
        entryFee: 'Free',
        category: 'Temple',
        rating: 4.5,
        highlights: ['Planetary Worship', 'Astrological Relevance', 'Peaceful Environment'],
        address: 'Mangalnath Temple, Mangalnath Road, Ujjain, Madhya Pradesh 456001',
        specialEvents: [
            {
                name: 'Mangal Puja',
                time: 'Every Tuesday',
                description: 'Special worship on Mars day',
                ticketRequired: false,
                significance: 'Most auspicious day for worship'
            },
            {
                name: 'Mangal Shanti Yagya',
                time: 'First Tuesday of every month',
                description: 'Fire ritual to appease Mars',
                ticketRequired: true,
                ticketPrice: '₹100-₹500 depending on participation level'
            }
        ],
        bestTimeToVisit: 'October to March, Tuesday for special significance',
        recommendedVisitDuration: '1 hour',
        peakSeason: 'Tuesdays and astrologically significant days',
        languagesSpoken: ['Hindi', 'English', 'Sanskrit'],
        nearbyAttractions: ['Shipra River (0.2 km)', 'Triveni Sangam (1 km)'],
        transportation: {
            byBus: 'Ujjain Bus Stand - 3 km (₹70 by auto)',
            byTrain: 'Ujjain Junction - 4 km (₹110 by taxi)',
            byAir: 'Indore Airport - 58 km (₹1600 by taxi)'
        },
        facilities: ['Astrology Consultation (fees vary)', 'Prasad Counter', 'Parking', 'Information Desk', 'Meditation Area'],
        rules: ['Maintain Silence', 'No Photography Inside sanctum', 'Remove Footwear', 'Follow Priest Instructions'],
        history: 'Ancient temple mentioned in Hindu scriptures. The current structure was renovated in the 19th century. Ujjain has been an important center for astronomy and astrology since ancient times, and this temple is part of that tradition.',
        significance: 'First temple dedicated to Mars globally. Believed to remove \'Mangal Dosha\' (astrological affliction caused by Mars) from horoscopes. The temple is located at what ancient astronomers considered as the exact point where Mars was born.',
        architecture: 'Simple yet elegant structure with Mars symbol prominently displayed. The temple has a small sanctum with the Mars deity and a larger hall for rituals.',
        crowd: {
            peakHours: 'Tuesday all day, 7:00 AM - 10:00 AM daily',
            leastCrowded: 'Weekdays 2:00 PM - 5:00 PM',
            specialNote: 'Astrologers available all days but more on Tuesdays'
        },
        photography: {
            allowed: 'Outer areas only',
            fee: 'Free',
            restrictions: 'No photography of main deity'
        },
        dressCode: 'Traditional Indian attire preferred',
        visitorTips: [
            'Consult temple astrologers for horoscope analysis',
            'Tuesdays are most crowded but also most auspicious',
            'Peaceful atmosphere by the river',
            'Combine with visit to nearby ghats'
        ],
        conservationStatus: 'State Protected Site',
        yearEstablished: 'Ancient (current structure 19th century)',
        management: 'Temple Trust',
        annualVisitors: 'Approx 300,000',
        recognition: 'Unique astrological temple, Important for Hindu astrology'
    },
    {
        id: 6,
        name: 'Kaliadeh Palace',
        slug: "kaliadeh-palace-5",
        description: 'Persian architecture palace located on the banks of Shipra River',
        detailedDescription: 'Kaliadeh Palace is a beautiful example of Persian architecture located on an island in the Shipra River. Built during the Sultanate period, the palace was later used by the Mughal emperors. The palace complex features beautiful water channels and fountains that were fed by an intricate hydraulic system. Though now in ruins, the palace offers picturesque views of the river and is a popular spot for photography and peaceful walks.',
        image: kalideh,
        location: 'Kaliyadeh Road, Ujjain',
        timings: '9:00 AM - 6:00 PM',
        entryFee: '₹10 (Indians), ₹100 (Foreigners), ₹5 (Students)',
        category: 'Palace',
        rating: 4.2,
        highlights: ['Historic Architecture', 'River View', 'Photography Spot'],
        address: 'Kaliadeh Palace, Kaliyadeh Road, Ujjain, Madhya Pradesh 456001',
        specialEvents: [
            {
                name: 'Heritage Walk',
                time: 'Every Saturday & Sunday (10 AM)',
                description: 'Guided tour of palace history and architecture',
                ticketRequired: true,
                ticketPrice: '₹25',
                duration: '1.5 hours'
            },
            {
                name: 'Photography Workshop',
                time: 'First Sunday of every month',
                description: 'Learn palace photography techniques from experts',
                ticketRequired: true,
                ticketPrice: '₹200',
                equipment: 'Bring your own camera'
            }
        ],
        bestTimeToVisit: 'October to March, Evening for best lighting',
        recommendedVisitDuration: '1-2 hours',
        peakSeason: 'Weekends and holidays',
        languagesSpoken: ['Hindi', 'English'],
        nearbyAttractions: ['Shipra River (on site)', 'Bharthari Caves (3 km)'],
        transportation: {
            byBus: 'Ujjain Bus Stand - 8 km (₹150 by auto)',
            byTrain: 'Ujjain Junction - 9 km (₹200 by taxi)',
            byAir: 'Indore Airport - 62 km (₹1800 by taxi)'
        },
        facilities: ['Museum (small artifacts display)', 'Garden', 'Cafeteria (basic snacks)', 'Souvenir Shop', 'Benches for resting'],
        rules: ['Photography Allowed', 'No Loud Noise', 'Stay on Designated Paths', 'No Littering'],
        history: 'Built in 1458 by Sultan Ghiyasuddin Khilji of Malwa. The palace was later visited by Mughal emperors Akbar and Jahangir. The palace was damaged during Maratha wars and fell into disrepair. The current ruins still showcase the grandeur of its original design.',
        significance: 'Example of Indo-Islamic architecture, historical importance in Malwa region. The palace was known for its advanced water management system with channels and fountains.',
        architecture: 'Persian and Islamic architecture with beautiful arches and water channels. The palace was designed as a pleasure retreat with gardens and water features.',
        crowd: {
            peakHours: '10:00 AM - 12:00 PM, 3:00 PM - 5:00 PM',
            leastCrowded: '9:00 AM - 10:00 AM, 5:00 PM - 6:00 PM',
            specialNote: 'Very peaceful on weekdays'
        },
        photography: {
            allowed: 'Yes',
            fee: 'Free (₹500 for professional shoots)',
            restrictions: 'No drones without permission'
        },
        dressCode: 'No specific dress code',
        visitorTips: [
            'Great spot for sunset photography',
            'Wear comfortable shoes as surfaces are uneven',
            'Carry water as it can get hot',
            'Visit the small museum for historical context'
        ],
        conservationStatus: 'ASI Protected Monument',
        yearEstablished: '1458 AD',
        management: 'Madhya Pradesh Tourism Department',
        annualVisitors: 'Approx 200,000',
        recognition: 'State Protected Heritage Site, Featured in several historical studies'
    }
];