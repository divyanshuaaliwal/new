import vehicle1 from "../assets/vehicle1.png";
import vehicle2 from "../assets/vehicle2.png";
import vehicle3 from "../assets/vehicle3.png";
import vehicle4 from "../assets/vehicle4.png";
import vehicle5 from "../assets/vehicle5.png";
import vehicle6 from "../assets/vehicle6.png";
import vehicle7 from "../assets/vehicle7.png";
import vehicle8 from "../assets/vehicle8.png";

import internalImage1 from "../assets/internalImage1.png";
import internalImage2 from "../assets/internalImage2.png";
import internalImage3 from "../assets/internalImage3.png";

export const vehiclePackages = [
    {
        id: 1,
        slug: "12-seater-tempo-traveller-ac-rental-1",
        category: "cars",
        gallary: [vehicle1, internalImage1, internalImage2, internalImage3],
        vehicle_type: "Tempo Traveller",
        package_name: "12-Seater Tempo Traveller AC Rental",
        overview: "Spacious and comfortable AC tempo traveller perfect for group outings and family trips with ample legroom and luggage space.",
        pricing: {
            original_price: 3700,
            current_price: 500,
            discount_percentage: 13
        },
        duration: "Per Day",
        features: ["AC", "Comfortable Seats", "Ample Legroom"],
        starting_point: "Ujjain City Limits",
        ending_point: "Ujjain City Limits",
        specifications: {
            model: "2021",
            fuel_type: "Diesel",
            transmission: "Manual",
            air_conditioning: "Yes",
            ac_type: "Dual zone AC"
        },
        km: "100 km included (extra ₹15/km)",
        luggage: "2 medium bags",
        total_person_capacity: 12,
        inclusions: [
            "Professional driver",
            "Fuel charges for included kilometers",
            "Toll taxes and parking",
            "All applicable taxes"
        ],
        exclusions: [
            "Night allowance (₹500 extra)",
            "Interstate permits if applicable",
            "Driver accommodation"
        ],
        contact: {
            phone: "+91-9999999991",
            email: "self-drive@ujjaintour.in",
            whatsapp: "https://api.whatsapp.com/send?phone=919999999991"
        },
        notes: [
            "Ideal for group travel",
            "Child seats available on request"
        ],
        rating: 4.2,
        policies: {
            cancellation_policy: "Free cancellation up to 24 hours before trip.",
            refund_policy: "Full refund if canceled before 24 hrs. 50% after.",
            driver_waiting_policy: "Extra ₹100/hour after 1 hour."
        },
        driver_details: {
            name: "Ramesh Kumar",
            experience: "5 years",
            languages: ["Hindi", "English"],
            license_number: "MP09/DR/123456"
        }
    },
    {
        id: 2,
        slug: "premium-innova-crysta-7-seater-rental-2",
        category: "cars",
        gallary: [vehicle2, internalImage1, internalImage2, internalImage3],
        vehicle_type: "Toyota Innova Crysta",
        package_name: "Premium Innova Crysta 7-Seater Rental",
        overview: "Luxurious and powerful premium SUV with automatic transmission and premium features for a comfortable travel experience.",
        pricing: {
            original_price: 7500,
            current_price: 700,
            discount_percentage: 9
        },
        duration: "Per Day",
        features: ["Automatic Transmission", "Leather Seats", "Touchscreen Infotainment"],
        starting_point: "Ujjain",
        ending_point: "Ujjain",
        specifications: {
            model: "2023",
            fuel_type: "Diesel",
            transmission: "Manual / Automatic",
            air_conditioning: "Yes",
            ac_type: "Automatic Climate Control"
        },
        km: "200 km included (extra ₹18/km)",
        luggage: "4 medium bags",
        total_person_capacity: 6,
        inclusions: [
            "Experienced chauffeur",
            "Complimentary water bottles",
            "24/7 road assistance",
            "Insurance coverage"
        ],
        exclusions: [
            "Airport pickup charges if applicable",
            "Overtime charges beyond 10 hours",
            "State tax if crossing borders"
        ],
        contact: {
            phone: "+91-9999999992",
            email: "support@ujjaintour.in",
            whatsapp: "https://api.whatsapp.com/send?phone=919999999992"
        },
        notes: [
            "Most popular premium rental option",
            "GPS navigation system included"
        ],
        rating: 4.7,
        policies: {
            cancellation_policy: "Free cancellation up to 24 hours before trip.",
            refund_policy: "Full refund if canceled before 24 hrs. 50% after.",
            driver_waiting_policy: "Extra ₹100/hour after 1 hour."
        },
        driver_details: {
            name: "Ramesh Kumar",
            experience: "5 years",
            languages: ["Hindi", "English"],
            license_number: "MP09/DR/123456"
        }
    },
    {
        id: 3,
        slug: "economy-sedan-rental-swift-dzire-3",
        category: "cars",
        gallary: [vehicle3, internalImage1, internalImage2, internalImage3],
        vehicle_type: "Maruti Swift Dzire",
        package_name: "Economy Sedan Rental (Swift Dzire)",
        overview: "Budget-friendly compact sedan offering great fuel efficiency and maneuverability for city travel and short trips.",
        pricing: {
            original_price: 5800,
            current_price: 600,
            discount_percentage: 10
        },
        duration: "Per Day",
        features: ["AC", "Fuel Efficient", "Compact Size"],
        starting_point: "Ujjain",
        ending_point: "Anywhere in Madhya Pradesh",
        specifications: {
            model: "2021",
            fuel_type: "Petrol / CNG",
            transmission: "Manual / Automatic",
            air_conditioning: "Yes",
            ac_type: "Manual AC"
        },
        km: "150 km included (extra ₹12/km)",
        luggage: "2 medium bags",
        total_person_capacity: 4,
        inclusions: [
            "Skilled driver",
            "Basic insurance",
            "24/7 customer support",
            "First aid kit"
        ],
        exclusions: [
            "Night charges (10pm-6am)",
            "Additional driver fees",
            "Damage protection waiver"
        ],
        contact: {
            phone: "+91-9999999993",
            email: "bookings@ujjaintour.in",
            whatsapp: "https://api.whatsapp.com/send?phone=919999999993"
        },
        notes: [
            "Best for budget travelers",
            "Easy maneuverability in city traffic"
        ],
        rating: 4.0,
        policies: {
            cancellation_policy: "Free cancellation up to 24 hours before trip.",
            refund_policy: "Full refund if canceled before 24 hrs. 50% after.",
            driver_waiting_policy: "Extra ₹100/hour after 1 hour."
        },
        driver_details: {
            name: "Ramesh Kumar",
            experience: "5 years",
            languages: ["Hindi", "English"],
            license_number: "MP09/DR/123456"
        }
    },
    {
        id: 4,
        slug: "suv-rental-scorpio-s11-4",
        category: "cars",
        gallary: [vehicle4, internalImage1, internalImage2, internalImage3],
        vehicle_type: "Mahindra Scorpio",
        package_name: "SUV Rental (Scorpio S11)",
        overview: "Rugged and powerful SUV with 4WD capability, perfect for adventurous trips and rough terrain travel.",
        pricing: {
            original_price: 4499,
            current_price: 500,
            discount_percentage: 11
        },
        duration: "Per Day",
        features: ["4WD Capability", "Sunroof", "Premium Audio"],
        starting_point: "Ujjain",
        ending_point: "Ujjain",
        specifications: {
            model: "2024",
            fuel_type: "Diesel",
            transmission: "Manual / Automatic",
            air_conditioning: "Yes",
            ac_type: "Automatic Climate Control"
        },
        km: "120 km included (extra ₹16/km)",
        luggage: "3 medium bags",
        total_person_capacity: 7,
        inclusions: [
            "Professional driver",
            "Off-road assistance",
            "Child seat option",
            "Roadside emergency kit"
        ],
        exclusions: [
            "Hill station charges if applicable",
            "Additional mileage beyond package",
            "Damage security deposit"
        ],
        contact: {
            phone: "+91-9999999994",
            email: "help@ujjaintour.in",
            whatsapp: "https://api.whatsapp.com/send?phone=919999999994"
        },
        notes: [
            "Perfect for adventurous trips",
            "High ground clearance for rough terrain"
        ],
        rating: 4.3,
        policies: {
            cancellation_policy: "Free cancellation up to 24 hours before trip.",
            refund_policy: "Full refund if canceled before 24 hrs. 50% after.",
            driver_waiting_policy: "Extra ₹100/hour after 1 hour."
        },
        driver_details: {
            name: "Ramesh Kumar",
            experience: "5 years",
            languages: ["Hindi", "English"],
            license_number: "MP09/DR/123456"
        }
    },
    {
        id: 5,
        slug: "20-seater-mini-bus-rental-5",
        category: "buses",
        gallary: [vehicle5, internalImage1, internalImage2, internalImage3],
        vehicle_type: "Force Traveller",
        package_name: "20-Seater Mini Bus Rental",
        overview: "Large capacity mini bus with comfortable seating and PA system, ideal for big groups, events, and pilgr//images.",
        pricing: {
            original_price: 3000,
            current_price: 500,
            discount_percentage: 17
        },
        duration: "Per Day",
        features: ["AC", "PA System", "Comfortable Seating"],
        starting_point: "Ujjain",
        ending_point: "Ujjain",
        specifications: {
            model: "2023",
            fuel_type: "Diesel or CNG",
            transmission: "Manual",
            air_conditioning: "Select variants",
            ac_type: "Manual (if equipped)"
        },
        km: "80 km included (extra ₹20/km)",
        luggage: "1 small bag",
        total_person_capacity: 20,
        inclusions: [
            "Experienced bus driver",
            "Public address system",
            "First aid facilities",
            "Seat belts for all passengers"
        ],
        exclusions: [
            "Guide charges if required",
            "Entry fees at monuments",
            "State border permits"
        ],
        contact: {
            phone: "+91-9999999995",
            email: "busrental@ujjaintour.in",
            whatsapp: "https://api.whatsapp.com/send?phone=919999999995"
        },
        notes: [
            "Ideal for large groups and events",
            "Ample storage space underneath"
        ],
        rating: 4.1,
        policies: {
            cancellation_policy: "Free cancellation up to 24 hours before trip.",
            refund_policy: "Full refund if canceled before 24 hrs. 50% after.",
            driver_waiting_policy: "Extra ₹100/hour after 1 hour."
        },
        driver_details: {
            name: "Ramesh Kumar",
            experience: "5 years",
            languages: ["Hindi", "English"],
            license_number: "MP09/DR/123456"
        }
    },
    {
        id: 6,
        slug: "6-seater-eeco-car-rental-6",
        category: "buses",
        gallary: [vehicle6, internalImage1, internalImage2, internalImage3],
        vehicle_type: "Toyota Eeco",
        package_name: "6-Seater Eeco Car Rental",
        overview: "Economical people mover with spacious interior, perfect for short distance travel with small groups.",
        pricing: {
            original_price: 5000,
            current_price: 500,
            discount_percentage: 10
        },
        duration: "Per Day",
        features: ["AC", "Spacious Interior", "Economical"],
        starting_point: "Ujjain",
        ending_point: "Ujjain",
        specifications: {
            model: "2021",
            fuel_type: "Petrol / CNG",
            transmission: "Manual",
            air_conditioning: "Yes",
            ac_type: "Manual AC"
        },
        km: "100 km included (extra ₹10/km)",
        luggage: "2 medium bags",
        total_person_capacity: 6,
        inclusions: [
            "Professional driver",
            "Basic maintenance kit",
            "Standard insurance",
            "24/7 support"
        ],
        exclusions: [
            "Waiting charges beyond 1 hour",
            "Additional pickup/drop locations",
            "Damage protection"
        ],
        contact: {
            phone: "+91-9999999996",
            email: "eecorental@ujjaintour.in",
            whatsapp: "https://api.whatsapp.com/send?phone=919999999996"
        },
        notes: [
            "Budget-friendly people mover",
            "Great for short distance travel"
        ],
        rating: 3.8,
        policies: {
            cancellation_policy: "Free cancellation up to 24 hours before trip.",
            refund_policy: "Full refund if canceled before 24 hrs. 50% after.",
            driver_waiting_policy: "Extra ₹100/hour after 1 hour."
        },
        driver_details: {
            name: "Ramesh Kumar",
            experience: "5 years",
            languages: ["Hindi", "English"],
            license_number: "MP09/DR/123456"
        }
    },
    {
        id: 7,
        slug: "electric-suv-rental-nexon-ev-7",
        category: "buses",
        gallary: [vehicle7, internalImage1, internalImage2, internalImage3],
        vehicle_type: "Tata Nexon EV",
        package_name: "Electric SUV Rental (Nexon EV)",
        overview: "Environmentally friendly electric SUV offering silent operation, modern features, and zero emissions for eco-conscious travelers.",
        pricing: {
            original_price: 2200,
            current_price: 400,
            discount_percentage: 18
        },
        duration: "8 Hours Package",
        features: ["Zero Emission", "Fast Charging", "Sunroof"],
        starting_point: "Ujjain City Center",
        ending_point: "Ujjain City Center",
        specifications: {
            model: "2020",
            fuel_type: "Electric",
            transmission: "Automatic",
            air_conditioning: "Yes",
            ac_type: "Automatic Climate Control"
        },
        km: "100 km included (extra ₹8/km)",
        luggage: "1 small bag",
        total_person_capacity: 5,
        inclusions: [
            "Eco-friendly transport",
            "Fast charging support",
            "Roadside assistance",
            "Navigation system"
        ],
        exclusions: [
            "Charging station access fees",
            "Out-of-city travel",
            "Late return penalties"
        ],
        contact: {
            phone: "+91-9999999997",
            email: "evrental@ujjaintour.in",
            whatsapp: "https://api.whatsapp.com/send?phone=919999999997"
        },
        notes: [
            "Environmentally conscious choice",
            "Silent and smooth driving experience"
        ],
        rating: 4.5,
        policies: {
            cancellation_policy: "Free cancellation up to 24 hours before trip.",
            refund_policy: "Full refund if canceled before 24 hrs. 50% after.",
            driver_waiting_policy: "Extra ₹100/hour after 1 hour."
        },
        driver_details: {
            name: "Ramesh Kumar",
            experience: "5 years",
            languages: ["Hindi", "English"],
            license_number: "MP09/DR/123456"
        }
    },
    {
        id: 8,
        slug: "24-seater-luxury-coach-rental-8",
        category: "buses",
        gallary: [vehicle8, internalImage1, internalImage2, internalImage3],
        vehicle_type: "Volvo Luxury Coach",
        package_name: "24-Seater Luxury Coach Rental",
        overview: "Premium luxury coach with recliner seats, onboard entertainment and WiFi, perfect for corporate events and luxury group travel.",
        pricing: {
            original_price: 9500,
            current_price: 1000,
            discount_percentage: 11
        },
        duration: "Per Day",
        features: ["Recliner Seats", "Onboard Entertainment", "WiFi"],
        starting_point: "Ujjain",
        ending_point: "Ujjain",
        specifications: {
            model: "Volvo 9400 XL",
            fuel_type: "Diesel",
            seating_capacity: "24 persons",
            luggage: "External compartments",
            transmission: "Automatic",
            air_conditioning: "Yes",
            ac_type: "Dual zone AC"
        },
        km: "150 km included (extra ₹25/km)",
        luggage: "4 medium bags",
        total_person_capacity: 24,
        inclusions: [
            "Professional coach driver",
            "Onboard attendant",
            "USB charging ports",
            "Complimentary refreshments"
        ],
        exclusions: [
            "Interstate travel permits",
            "Overnight parking fees",
            "Special event surcharges"
        ],
        contact: {
            phone: "+91-9999999998",
            email: "luxurycoach@ujjaintour.in",
            whatsapp: "https://api.whatsapp.com/send?phone=919999999998"
        },
        notes: [
            "Premium travel experience",
            "Ideal for corporate events and weddings"
        ],
        rating: 4.8,
        policies: {
            cancellation_policy: "Free cancellation up to 24 hours before trip.",
            refund_policy: "Full refund if canceled before 24 hrs. 50% after.",
            driver_waiting_policy: "Extra ₹100/hour after 1 hour."
        },
        driver_details: {
            name: "Ramesh Kumar",
            experience: "5 years",
            languages: ["Hindi", "English"],
            license_number: "MP09/DR/123456"
        }
    },
    {
        id: 9,
        slug: "12-seater-tempo-traveller-ac-rental-8",
        category: "travellers",
        gallary: [vehicle1, internalImage1, internalImage2, internalImage3],
        vehicle_type: "Tempo Traveller",
        package_name: "12-Seater Tempo Traveller AC Rental",
        overview: "Spacious and comfortable AC tempo traveller perfect for group outings and family trips with ample legroom and luggage space.",
        pricing: {
            original_price: 3700,
            current_price: 500,
            discount_percentage: 13
        },
        duration: "Per Day",
        features: ["AC", "Comfortable Seats", "Ample Legroom"],
        starting_point: "Ujjain City Limits",
        ending_point: "Ujjain City Limits",
        specifications: {
            model: "2021",
            fuel_type: "Diesel",
            transmission: "Manual",
            air_conditioning: "Yes",
            ac_type: "Dual zone AC"
        },
        km: "100 km included (extra ₹15/km)",
        luggage: "2 medium bags",
        total_person_capacity: 12,
        inclusions: [
            "Professional driver",
            "Fuel charges for included kilometers",
            "Toll taxes and parking",
            "All applicable taxes"
        ],
        exclusions: [
            "Night allowance (₹500 extra)",
            "Interstate permits if applicable",
            "Driver accommodation"
        ],
        contact: {
            phone: "+91-9999999991",
            email: "self-drive@ujjaintour.in",
            whatsapp: "https://api.whatsapp.com/send?phone=919999999991"
        },
        notes: [
            "Ideal for group travel",
            "Child seats available on request"
        ],
        rating: 4.2,
        policies: {
            cancellation_policy: "Free cancellation up to 24 hours before trip.",
            refund_policy: "Full refund if canceled before 24 hrs. 50% after.",
            driver_waiting_policy: "Extra ₹100/hour after 1 hour."
        },
        driver_details: {
            name: "Ramesh Kumar",
            experience: "5 years",
            languages: ["Hindi", "English"],
            license_number: "MP09/DR/123456"
        }
    },
    {
        id: 10,
        slug: "premium-innova-crysta-7-seater-rental-9",
        category: "travellers",
        gallary: [vehicle2, internalImage1, internalImage2, internalImage3],
        vehicle_type: "Toyota Innova Crysta",
        package_name: "Premium Innova Crysta 7-Seater Rental",
        overview: "Luxurious and powerful premium SUV with automatic transmission and premium features for a comfortable travel experience.",
        pricing: {
            original_price: 7500,
            current_price: 700,
            discount_percentage: 9
        },
        duration: "Per Day",
        features: ["Automatic Transmission", "Leather Seats", "Touchscreen Infotainment"],
        starting_point: "Ujjain",
        ending_point: "Ujjain",
        specifications: {
            model: "2023",
            fuel_type: "Diesel",
            transmission: "Manual / Automatic",
            air_conditioning: "Yes",
            ac_type: "Automatic Climate Control"
        },
        km: "200 km included (extra ₹18/km)",
        luggage: "4 medium bags",
        total_person_capacity: 6,
        inclusions: [
            "Experienced chauffeur",
            "Complimentary water bottles",
            "24/7 road assistance",
            "Insurance coverage"
        ],
        exclusions: [
            "Airport pickup charges if applicable",
            "Overtime charges beyond 10 hours",
            "State tax if crossing borders"
        ],
        contact: {
            phone: "+91-9999999992",
            email: "support@ujjaintour.in",
            whatsapp: "https://api.whatsapp.com/send?phone=919999999992"
        },
        notes: [
            "Most popular premium rental option",
            "GPS navigation system included"
        ],
        rating: 4.7,
        policies: {
            cancellation_policy: "Free cancellation up to 24 hours before trip.",
            refund_policy: "Full refund if canceled before 24 hrs. 50% after.",
            driver_waiting_policy: "Extra ₹100/hour after 1 hour."
        },
        driver_details: {
            name: "Ramesh Kumar",
            experience: "5 years",
            languages: ["Hindi", "English"],
            license_number: "MP09/DR/123456"
        }
    },
    {
        id: 11,
        slug: "economy-sedan-rental-swift-dzire-10",
        category: "travellers",
        gallary: [vehicle3, internalImage1, internalImage2, internalImage3],
        vehicle_type: "Maruti Swift Dzire",
        package_name: "Economy Sedan Rental (Swift Dzire)",
        overview: "Budget-friendly compact sedan offering great fuel efficiency and maneuverability for city travel and short trips.",
        pricing: {
            original_price: 5800,
            current_price: 600,
            discount_percentage: 10
        },
        duration: "Per Day",
        features: ["AC", "Fuel Efficient", "Compact Size"],
        starting_point: "Ujjain",
        ending_point: "Anywhere in Madhya Pradesh",
        specifications: {
            model: "2021",
            fuel_type: "Petrol / CNG",
            transmission: "Manual / Automatic",
            air_conditioning: "Yes",
            ac_type: "Manual AC"
        },
        km: "150 km included (extra ₹12/km)",
        luggage: "2 medium bags",
        total_person_capacity: 4,
        inclusions: [
            "Skilled driver",
            "Basic insurance",
            "24/7 customer support",
            "First aid kit"
        ],
        exclusions: [
            "Night charges (10pm-6am)",
            "Additional driver fees",
            "Damage protection waiver"
        ],
        contact: {
            phone: "+91-9999999993",
            email: "bookings@ujjaintour.in",
            whatsapp: "https://api.whatsapp.com/send?phone=919999999993"
        },
        notes: [
            "Best for budget travelers",
            "Easy maneuverability in city traffic"
        ],
        rating: 4.0,
        policies: {
            cancellation_policy: "Free cancellation up to 24 hours before trip.",
            refund_policy: "Full refund if canceled before 24 hrs. 50% after.",
            driver_waiting_policy: "Extra ₹100/hour after 1 hour."
        },
        driver_details: {
            name: "Ramesh Kumar",
            experience: "5 years",
            languages: ["Hindi", "English"],
            license_number: "MP09/DR/123456"
        }
    },
    {
        id: 12,
        slug: "suv-rental-scorpio-s11-11",
        category: "travellers",
        gallary: [vehicle4, internalImage1, internalImage2, internalImage3],
        vehicle_type: "Mahindra Scorpio",
        package_name: "SUV Rental (Scorpio S11)",
        overview: "Rugged and powerful SUV with 4WD capability, perfect for adventurous trips and rough terrain travel.",
        pricing: {
            original_price: 4499,
            current_price: 500,
            discount_percentage: 11
        },
        duration: "Per Day",
        features: ["4WD Capability", "Sunroof", "Premium Audio"],
        starting_point: "Ujjain",
        ending_point: "Ujjain",
        specifications: {
            model: "2024",
            fuel_type: "Diesel",
            transmission: "Manual / Automatic",
            air_conditioning: "Yes",
            ac_type: "Automatic Climate Control"
        },
        km: "120 km included (extra ₹16/km)",
        luggage: "3 medium bags",
        total_person_capacity: 7,
        inclusions: [
            "Professional driver",
            "Off-road assistance",
            "Child seat option",
            "Roadside emergency kit"
        ],
        exclusions: [
            "Hill station charges if applicable",
            "Additional mileage beyond package",
            "Damage security deposit"
        ],
        contact: {
            phone: "+91-9999999994",
            email: "help@ujjaintour.in",
            whatsapp: "https://api.whatsapp.com/send?phone=919999999994"
        },
        notes: [
            "Perfect for adventurous trips",
            "High ground clearance for rough terrain"
        ],
        rating: 4.3,
        policies: {
            cancellation_policy: "Free cancellation up to 24 hours before trip.",
            refund_policy: "Full refund if canceled before 24 hrs. 50% after.",
            driver_waiting_policy: "Extra ₹100/hour after 1 hour."
        },
        driver_details: {
            name: "Ramesh Kumar",
            experience: "5 years",
            languages: ["Hindi", "English"],
            license_number: "MP09/DR/123456"
        }
    },
    {
        id: 13,
        slug: "20-seater-mini-bus-rental-12",
        category: "self-drive",
        gallary: [vehicle5, internalImage1, internalImage2, internalImage3],
        vehicle_type: "Force Traveller",
        package_name: "20-Seater Mini Bus Rental",
        overview: "Large capacity mini bus with comfortable seating and PA system, ideal for big groups, events, and pilgr//images.",
        pricing: {
            original_price: 3000,
            current_price: 500,
            discount_percentage: 17
        },
        duration: "Per Day",
        features: ["AC", "PA System", "Comfortable Seating"],
        starting_point: "Ujjain",
        ending_point: "Ujjain",
        specifications: {
            model: "2023",
            fuel_type: "Diesel or CNG",
            transmission: "Manual",
            air_conditioning: "Select variants",
            ac_type: "Manual (if equipped)"
        },
        km: "80 km included (extra ₹20/km)",
        luggage: "1 small bag",
        total_person_capacity: 20,
        inclusions: [
            "Experienced bus driver",
            "Public address system",
            "First aid facilities",
            "Seat belts for all passengers"
        ],
        exclusions: [
            "Guide charges if required",
            "Entry fees at monuments",
            "State border permits"
        ],
        contact: {
            phone: "+91-9999999995",
            email: "busrental@ujjaintour.in",
            whatsapp: "https://api.whatsapp.com/send?phone=919999999995"
        },
        notes: [
            "Ideal for large groups and events",
            "Ample storage space underneath"
        ],
        rating: 4.1,
        policies: {
            cancellation_policy: "Free cancellation up to 24 hours before trip.",
            refund_policy: "Full refund if canceled before 24 hrs. 50% after.",
            driver_waiting_policy: "Extra ₹100/hour after 1 hour."
        },
        driver_details: {
            name: "Ramesh Kumar",
            experience: "5 years",
            languages: ["Hindi", "English"],
            license_number: "MP09/DR/123456"
        }
    },
    {
        id: 14,
        slug: "6-seater-eeco-car-rental-13",
        category: "self-drive",
        gallary: [vehicle6, internalImage1, internalImage2, internalImage3],
        vehicle_type: "Toyota Eeco",
        package_name: "6-Seater Eeco Car Rental",
        overview: "Economical people mover with spacious interior, perfect for short distance travel with small groups.",
        pricing: {
            original_price: 5000,
            current_price: 500,
            discount_percentage: 10
        },
        duration: "Per Day",
        features: ["AC", "Spacious Interior", "Economical"],
        starting_point: "Ujjain",
        ending_point: "Ujjain",
        specifications: {
            model: "2021",
            fuel_type: "Petrol / CNG",
            transmission: "Manual",
            air_conditioning: "Yes",
            ac_type: "Manual AC"
        },
        km: "100 km included (extra ₹10/km)",
        luggage: "2 medium bags",
        total_person_capacity: 6,
        inclusions: [
            "Professional driver",
            "Basic maintenance kit",
            "Standard insurance",
            "24/7 support"
        ],
        exclusions: [
            "Waiting charges beyond 1 hour",
            "Additional pickup/drop locations",
            "Damage protection"
        ],
        contact: {
            phone: "+91-9999999996",
            email: "eecorental@ujjaintour.in",
            whatsapp: "https://api.whatsapp.com/send?phone=919999999996"
        },
        notes: [
            "Budget-friendly people mover",
            "Great for short distance travel"
        ],
        rating: 3.8,
        policies: {
            cancellation_policy: "Free cancellation up to 24 hours before trip.",
            refund_policy: "Full refund if canceled before 24 hrs. 50% after.",
            driver_waiting_policy: "Extra ₹100/hour after 1 hour."
        },
        driver_details: {
            name: "Ramesh Kumar",
            experience: "5 years",
            languages: ["Hindi", "English"],
            license_number: "MP09/DR/123456"
        }
    },
    {
        id: 15,
        slug: "electric-suv-rental-nexon-ev-14",
        category: "self-drive",
        gallary: [vehicle7, internalImage1, internalImage2, internalImage3],
        vehicle_type: "Tata Nexon EV",
        package_name: "Electric SUV Rental (Nexon EV)",
        overview: "Environmentally friendly electric SUV offering silent operation, modern features, and zero emissions for eco-conscious travelers.",
        pricing: {
            original_price: 2200,
            current_price: 400,
            discount_percentage: 18
        },
        duration: "8 Hours Package",
        features: ["Zero Emission", "Fast Charging", "Sunroof"],
        starting_point: "Ujjain City Center",
        ending_point: "Ujjain City Center",
        specifications: {
            model: "2020",
            fuel_type: "Electric",
            transmission: "Automatic",
            air_conditioning: "Yes",
            ac_type: "Automatic Climate Control"
        },
        km: "100 km included (extra ₹8/km)",
        luggage: "1 small bag",
        total_person_capacity: 5,
        inclusions: [
            "Eco-friendly transport",
            "Fast charging support",
            "Roadside assistance",
            "Navigation system"
        ],
        exclusions: [
            "Charging station access fees",
            "Out-of-city travel",
            "Late return penalties"
        ],
        contact: {
            phone: "+91-9999999997",
            email: "evrental@ujjaintour.in",
            whatsapp: "https://api.whatsapp.com/send?phone=919999999997"
        },
        notes: [
            "Environmentally conscious choice",
            "Silent and smooth driving experience"
        ],
        rating: 4.5,
        policies: {
            cancellation_policy: "Free cancellation up to 24 hours before trip.",
            refund_policy: "Full refund if canceled before 24 hrs. 50% after.",
            driver_waiting_policy: "Extra ₹100/hour after 1 hour."
        },
        driver_details: {
            name: "Ramesh Kumar",
            experience: "5 years",
            languages: ["Hindi", "English"],
            license_number: "MP09/DR/123456"
        }
    },
    {
        id: 16,
        slug: "24-seater-luxury-coach-rental-15",
        category: "self-drive",
        gallary: [vehicle8, internalImage1, internalImage2, internalImage3],
        vehicle_type: "Volvo Luxury Coach",
        package_name: "24-Seater Luxury Coach Rental",
        overview: "Premium luxury coach with recliner seats, onboard entertainment and WiFi, perfect for corporate events and luxury group travel.",
        pricing: {
            original_price: 9500,
            current_price: 1000,
            discount_percentage: 11
        },
        duration: "Per Day",
        features: ["Recliner Seats", "Onboard Entertainment", "WiFi"],
        starting_point: "Ujjain",
        ending_point: "Ujjain",
        specifications: {
            model: "Volvo 9400 XL",
            fuel_type: "Diesel",
            seating_capacity: "24 persons",
            luggage: "External compartments",
            transmission: "Automatic",
            air_conditioning: "Yes",
            ac_type: "Dual zone AC"
        },
        km: "150 km included (extra ₹25/km)",
        luggage: "4 medium bags",
        total_person_capacity: 24,
        inclusions: [
            "Professional coach driver",
            "Onboard attendant",
            "USB charging ports",
            "Complimentary refreshments"
        ],
        exclusions: [
            "Interstate travel permits",
            "Overnight parking fees",
            "Special event surcharges"
        ],
        contact: {
            phone: "+91-9999999998",
            email: "luxurycoach@ujjaintour.in",
            whatsapp: "https://api.whatsapp.com/send?phone=919999999998"
        },
        notes: [
            "Premium travel experience",
            "Ideal for corporate events and weddings"
        ],
        rating: 4.8,
        policies: {
            cancellation_policy: "Free cancellation up to 24 hours before trip.",
            refund_policy: "Full refund if canceled before 24 hrs. 50% after.",
            driver_waiting_policy: "Extra ₹100/hour after 1 hour."
        },
        driver_details: {
            name: "Ramesh Kumar",
            experience: "5 years",
            languages: ["Hindi", "English"],
            license_number: "MP09/DR/123456"
        }
    }
];