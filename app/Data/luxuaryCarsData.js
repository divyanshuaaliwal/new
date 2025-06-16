import rollesRoyal from "../assets/rollesRoyal.png";



export const cars = [
    {
        id: 1,
        image: rollesRoyal,
        slug: "rolls-royce-phantom-celebrity-edition-0",
        category: "luxury-cars",
        gallary: ["phantom_exterior", "phantom_interior1", "phantom_interior2", "phantom_rear"],
        vehicle_type: "Rolls-Royce Phantom",
        package_name: "Rolls-Royce Phantom Celebrity Edition",
        overview: "The epitome of luxury, offering unmatched elegance and bespoke customization for an elite driving experience.",
        pricing: {
            original_price: 550000,
            current_price: 500000,
            discount_percentage: 9
        },
        duration: "Per Day Rental",
        features: ["Bespoke Leather Interiors", "Starlight Headliner", "Rear Privacy Suite"],
        starting_point: "Mumbai City Limits",
        ending_point: "Mumbai City Limits",
        specifications: {
            model: "2024",
            fuel_type: "Petrol",
            transmission: "Automatic",
            air_conditioning: "Yes",
            ac_type: "Quad-zone Climate Control"
        },
        km: "100 km included (extra ₹500/km)",
        luggage: "4 large bags",
        total_person_capacity: 4,
        inclusions: [
            "Chauffeur service",
            "Fuel charges for included kilometers",
            "Toll taxes and parking",
            "Complimentary refreshments"
        ],
        exclusions: [
            "Night allowance (₹1000 extra)",
            "Interstate permits if applicable",
            "Additional security detail"
        ],
        contact: {
            phone: "+91-9999999991",
            email: "luxury@celebrityrides.in",
            whatsapp: "https://api.whatsapp.com/send?phone=919999999991"
        },
        notes: [
            "Ideal for red-carpet events",
            "Custom paint options available"
        ],
        rating: 4.8,
        policies: {
            cancellation_policy: "Free cancellation up to 48 hours before rental.",
            refund_policy: "Full refund if canceled before 48 hrs. 50% after.",
            driver_waiting_policy: "Extra ₹200/hour after 1 hour."
        },
        driver_details: {
            name: "Vikram Singh",
            experience: "8 years",
            languages: ["Hindi", "English", "Marathi"],
            license_number: "MH01/DR/789012"
        }
    },
    {
        id: 2,
        image: rollesRoyal,
        slug: "lamborghini-aventador-svj-rental-1",
        category: "luxury-cars",
        gallary: ["aventador_exterior", "aventador_interior1", "aventador_engine", "aventador_side"],
        vehicle_type: "Lamborghini Aventador",
        package_name: "Lamborghini Aventador SVJ Rental",
        overview: "A high-performance supercar with scissor doors and breathtaking acceleration, perfect for making a statement.",
        pricing: {
            original_price: 450000,
            current_price: 400000,
            discount_percentage: 11
        },
        duration: "Per Day Rental",
        features: ["Scissor Doors", "Carbon Fiber Body", "Advanced Aerodynamics"],
        starting_point: "Delhi City Limits",
        ending_point: "Delhi City Limits",
        specifications: {
            model: "2023",
            fuel_type: "Petrol",
            transmission: "Automatic",
            air_conditioning: "Yes",
            ac_type: "Dual-zone Climate Control"
        },
        km: "80 km included (extra ₹600/km)",
        luggage: "2 small bags",
        total_person_capacity: 2,
        inclusions: [
            "Professional driver",
            "Fuel charges for included kilometers",
            "Toll taxes and parking",
            "Vehicle maintenance"
        ],
        exclusions: [
            "Night allowance (₹800 extra)",
            "Track usage fees",
            "Driver accommodation"
        ],
        contact: {
            phone: "+91-9999999992",
            email: "supercar@celebrityrides.in",
            whatsapp: "https://api.whatsapp.com/send?phone=919999999992"
        },
        notes: [
            "Ideal for high-profile photoshoots",
            "Not suitable for narrow roads"
        ],
        rating: 4.7,
        policies: {
            cancellation_policy: "Free cancellation up to 48 hours before rental.",
            refund_policy: "Full refund if canceled before 48 hrs. 50% after.",
            driver_waiting_policy: "Extra ₹250/hour after 1 hour."
        },
        driver_details: {
            name: "Arjun Sharma",
            experience: "6 years",
            languages: ["Hindi", "English"],
            license_number: "DL01/DR/456789"
        }
    },
    {
        id: 3,
        image: rollesRoyal,
        slug: "mercedes-maybach-s-580-vip-rental-2",
        category: "luxury-cars",
        gallary: ["maybach_exterior", "maybach_interior1", "maybach_rear_seat", "maybach_side"],
        vehicle_type: "Mercedes-Benz Maybach S 580",
        package_name: "Mercedes-Maybach S 580 VIP Rental",
        overview: "A luxurious sedan with advanced technology and executive comfort, ideal for celebrity travel.",
        pricing: {
            original_price: 300000,
            current_price: 270000,
            discount_percentage: 10
        },
        duration: "Per Day Rental",
        features: ["Massaging Seats", "Panoramic Sunroof", "Burmester Audio"],
        starting_point: "Mumbai City Limits",
        ending_point: "Mumbai City Limits",
        specifications: {
            model: "2024",
            fuel_type: "Petrol",
            transmission: "Automatic",
            air_conditioning: "Yes",
            ac_type: "Quad-zone Climate Control"
        },
        km: "100 km included (extra ₹400/km)",
        luggage: "3 large bags",
        total_person_capacity: 4,
        inclusions: [
            "Chauffeur service",
            "Fuel charges for included kilometers",
            "Toll taxes and parking",
            "Wi-Fi onboard"
        ],
        exclusions: [
            "Night allowance (₹700 extra)",
            "Interstate permits if applicable",
            "Additional refreshments"
        ],
        contact: {
            phone: "+91-9999999993",
            email: "luxury@celebrityrides.in",
            whatsapp: "https://api.whatsapp.com/send?phone=919999999993"
        },
        notes: [
            "Perfect for business meetings",
            "Privacy screens included"
        ],
        rating: 4.6,
        policies: {
            cancellation_policy: "Free cancellation up to 48 hours before rental.",
            refund_policy: "Full refund if canceled before 48 hrs. 50% after.",
            driver_waiting_policy: "Extra ₹150/hour after 1 hour."
        },
        driver_details: {
            name: "Rahul Verma",
            experience: "7 years",
            languages: ["Hindi", "English", "Gujarati"],
            license_number: "MH02/DR/123789"
        }
    },
    {
        id: 4,
        image: rollesRoyal,
        slug: "bentley-continental-gt-luxury-rental-3",
        category: "luxury-cars",
        gallary: ["continental_exterior", "continental_interior1", "continental_dashboard", "continental_rear"],
        vehicle_type: "Bentley Continental GT",
        package_name: "Bentley Continental GT Luxury Rental",
        overview: "A grand tourer combining luxury and performance, favored by celebrities for its refined style.",
        pricing: {
            original_price: 400000,
            current_price: 360000,
            discount_percentage: 10
        },
        duration: "Per Day Rental",
        features: ["Handcrafted Interiors", "Naim Audio System", "Adaptive Cruise Control"],
        starting_point: "Bangalore City Limits",
        ending_point: "Bangalore City Limits",
        specifications: {
            model: "2023",
            fuel_type: "Petrol",
            transmission: "Automatic",
            air_conditioning: "Yes",
            ac_type: "Dual-zone Climate Control"
        },
        km: "100 km included (extra ₹450/km)",
        luggage: "3 medium bags",
        total_person_capacity: 4,
        inclusions: [
            "Professional driver",
            "Fuel charges for included kilometers",
            "Toll taxes and parking",
            "Complimentary water"
        ],
        exclusions: [
            "Night allowance (₹800 extra)",
            "Interstate permits if applicable",
            "Driver accommodation"
        ],
        contact: {
            phone: "+91-9999999994",
            email: "luxury@celebrityrides.in",
            whatsapp: "https://api.whatsapp.com/send?phone=919999999994"
        },
        notes: [
            "Ideal for scenic drives",
            "Custom rims available"
        ],
        rating: 4.9,
        policies: {
            cancellation_policy: "Free cancellation up to 48 hours before rental.",
            refund_policy: "Full refund if canceled before 48 hrs. 50% after.",
            driver_waiting_policy: "Extra ₹200/hour after 1 hour."
        },
        driver_details: {
            name: "Karthik Reddy",
            experience: "6 years",
            languages: ["Hindi", "English", "Kannada"],
            license_number: "KA01/DR/456123"
        }
    },
    {
        id: 5,
        image: rollesRoyal,
        slug: "ferrari-488-pista-celebrity-rental-4",
        category: "luxury-cars",
        gallary: ["488_exterior", "488_interior1", "488_engine", "488_side"],
        vehicle_type: "Ferrari 488 Pista",
        package_name: "Ferrari 488 Pista Celebrity Rental",
        overview: "A track-inspired supercar with stunning design and blistering speed, perfect for thrill-seeking celebrities.",
        pricing: {
            original_price: 480000,
            current_price: 430000,
            discount_percentage: 10
        },
        duration: "Per Day Rental",
        features: ["Carbon Fiber Components", "Aerodynamic Design", "Racing Seats"],
        starting_point: "Delhi City Limits",
        ending_point: "Delhi City Limits",
        specifications: {
            model: "2023",
            fuel_type: "Petrol",
            transmission: "Automatic",
            air_conditioning: "Yes",
            ac_type: "Dual-zone Climate Control"
        },
        km: "80 km included (extra ₹600/km)",
        luggage: "2 small bags",
        total_person_capacity: 2,
        inclusions: [
            "Professional driver",
            "Fuel charges for included kilometers",
            "Toll taxes and parking",
            "Vehicle maintenance"
        ],
        exclusions: [
            "Night allowance (₹900 extra)",
            "Track usage fees",
            "Driver accommodation"
        ],
        contact: {
            phone: "+91-9999999995",
            email: "supercar@celebrityrides.in",
            whatsapp: "https://api.whatsapp.com/send?phone=919999999995"
        },
        notes: [
            "Ideal for high-speed events",
            "Not suitable for city traffic"
        ],
        rating: 4.8,
        policies: {
            cancellation_policy: "Free cancellation up to 48 hours before rental.",
            refund_policy: "Full refund if canceled before 48 hrs. 50% after.",
            driver_waiting_policy: "Extra ₹250/hour after 1 hour."
        },
        driver_details: {
            name: "Suresh Yadav",
            experience: "5 years",
            languages: ["Hindi", "English"],
            license_number: "DL02/DR/789456"
        }
    },
    {
        id: 6,
        image: rollesRoyal,
        slug: "range-rover-sv-celebrity-rental-5",
        category: "luxury-cars",
        gallary: ["rangerover_exterior", "rangerover_interior1", "rangerover_rear", "rangerover_side"],
        vehicle_type: "Land Rover Range Rover SV",
        package_name: "Range Rover SV Celebrity Rental",
        overview: "A luxurious SUV with off-road capability and premium comfort, popular among celebrities for versatility.",
        pricing: {
            original_price: 350000,
            current_price: 320000,
            discount_percentage: 8
        },
        duration: "Per Day Rental",
        features: ["Meridian Audio System", "Heated Seats", "Terrain Response System"],
        starting_point: "Mumbai City Limits",
        ending_point: "Mumbai City Limits",
        specifications: {
            model: "2024",
            fuel_type: "Petrol",
            transmission: "Automatic",
            air_conditioning: "Yes",
            ac_type: "Quad-zone Climate Control"
        },
        km: "100 km included (extra ₹400/km)",
        luggage: "4 large bags",
        total_person_capacity: 5,
        inclusions: [
            "Chauffeur service",
            "Fuel charges for included kilometers",
            "Toll taxes and parking",
            "Wi-Fi onboard"
        ],
        exclusions: [
            "Night allowance (₹700 extra)",
            "Interstate permits if applicable",
            "Additional refreshments"
        ],
        contact: {
            phone: "+91-9999999996",
            email: "luxury@celebrityrides.in",
            whatsapp: "https://api.whatsapp.com/send?phone=919999999996"
        },
        notes: [
            "Perfect for long road trips",
            "Child seats available"
        ],
        rating: 4.7,
        policies: {
            cancellation_policy: "Free cancellation up to 48 hours before rental.",
            refund_policy: "Full refund if canceled before 48 hrs. 50% after.",
            driver_waiting_policy: "Extra ₹150/hour after 1 hour."
        },
        driver_details: {
            name: "Anil Patil",
            experience: "6 years",
            languages: ["Hindi", "English", "Marathi"],
            license_number: "MH03/DR/123456"
        }
    },
    {
        id: 7,
        image: rollesRoyal,
        slug: "bugatti-chiron-hypercar-rental-6",
        category: "luxury-cars",
        gallary: ["chiron_exterior", "chiron_interior1", "chiron_engine", "chiron_side"],
        vehicle_type: "Bugatti Chiron",
        package_name: "Bugatti Chiron Hypercar Rental",
        overview: "A hypercar with unparalleled speed and exclusivity, a favorite among elite celebrities.",
        pricing: {
            original_price: 600000,
            current_price: 550000,
            discount_percentage: 8
        },
        duration: "Per Day Rental",
        features: ["W16 Engine", "Carbon Fiber Chassis", "Custom Interiors"],
        starting_point: "Delhi City Limits",
        ending_point: "Delhi City Limits",
        specifications: {
            model: "2023",
            fuel_type: "Petrol",
            transmission: "Automatic",
            air_conditioning: "Yes",
            ac_type: "Dual-zone Climate Control"
        },
        km: "80 km included (extra ₹700/km)",
        luggage: "2 small bags",
        total_person_capacity: 2,
        inclusions: [
            "Professional driver",
            "Fuel charges for included kilometers",
            "Toll taxes and parking",
            "Vehicle maintenance"
        ],
        exclusions: [
            "Night allowance (₹1000 extra)",
            "Track usage fees",
            "Driver accommodation"
        ],
        contact: {
            phone: "+91-9999999997",
            email: "supercar@celebrityrides.in",
            whatsapp: "https://api.whatsapp.com/send?phone=919999999997"
        },
        notes: [
            "Ideal for exclusive events",
            "Limited availability"
        ],
        rating: 4.9,
        policies: {
            cancellation_policy: "Free cancellation up to 48 hours before rental.",
            refund_policy: "Full refund if canceled before 48 hrs. 50% after.",
            driver_waiting_policy: "Extra ₹300/hour after 1 hour."
        },
        driver_details: {
            name: "Ravi Kumar",
            experience: "8 years",
            languages: ["Hindi", "English"],
            license_number: "DL03/DR/456789"
        }
    },
    {
        id: 8,
        image: rollesRoyal,
        slug: "tesla-model-s-plaid-electric-rental-7",
        category: "luxury-cars",
        gallary: ["tesla_exterior", "tesla_interior1", "tesla_dashboard", "tesla_rear"],
        vehicle_type: "Tesla Model S Plaid",
        package_name: "Tesla Model S Plaid Electric Rental",
        overview: "An electric supercar with cutting-edge technology and eco-friendly appeal, favored by environmentally conscious celebrities.",
        pricing: {
            original_price: 250000,
            current_price: 230000,
            discount_percentage: 8
        },
        duration: "Per Day Rental",
        features: ["Yoke Steering", "17-inch Touchscreen", "Tri-Motor All-Wheel Drive"],
        starting_point: "Bangalore City Limits",
        ending_point: "Bangalore City Limits",
        specifications: {
            model: "2024",
            fuel_type: "Electric",
            transmission: "Automatic",
            air_conditioning: "Yes",
            ac_type: "Tri-zone Climate Control"
        },
        km: "100 km included (extra ₹300/km)",
        luggage: "3 medium bags",
        total_person_capacity: 5,
        inclusions: [
            "Professional driver",
            "Charging for included kilometers",
            "Toll taxes and parking",
            "Wi-Fi onboard"
        ],
        exclusions: [
            "Night allowance (₹600 extra)",
            "Interstate permits if applicable",
            "Additional charging fees"
        ],
        contact: {
            phone: "+91-9999999998",
            email: "electric@celebrityrides.in",
            whatsapp: "https://api.whatsapp.com/send?phone=919999999998"
        },
        notes: [
            "Eco-friendly luxury option",
            "Charging stations required"
        ],
        rating: 4.6,
        policies: {
            cancellation_policy: "Free cancellation up to 48 hours before rental.",
            refund_policy: "Full refund if canceled before 48 hrs. 50% after.",
            driver_waiting_policy: "Extra ₹150/hour after 1 hour."
        },
        driver_details: {
            name: "Prakash Rao",
            experience: "5 years",
            languages: ["Hindi", "English", "Kannada"],
            license_number: "KA02/DR/789123"
        }
    },
    {
        id: 9,
        image: rollesRoyal,
        slug: "porsche-taycan-turbo-s-electric-rental-8",
        category: "luxury-cars",
        gallary: ["taycan_exterior", "taycan_interior1", "taycan_dashboard", "taycan_side"],
        vehicle_type: "Porsche Taycan Turbo S",
        package_name: "Porsche Taycan Turbo S Electric Rental",
        overview: "A high-performance electric sedan with sporty dynamics and luxurious interiors, ideal for celebrity city travel.",
        pricing: {
            original_price: 280000,
            current_price: 260000,
            discount_percentage: 7
        },
        duration: "Per Day Rental",
        features: ["Electric Performance", "Porsche Active Aerodynamics", "Premium Leather Seats"],
        starting_point: "Mumbai City Limits",
        ending_point: "Mumbai City Limits",
        specifications: {
            model: "2024",
            fuel_type: "Electric",
            transmission: "Automatic",
            air_conditioning: "Yes",
            ac_type: "Dual-zone Climate Control"
        },
        km: "100 km included (extra ₹350/km)",
        luggage: "3 medium bags",
        total_person_capacity: 4,
        inclusions: [
            "Professional driver",
            "Charging for included kilometers",
            "Toll taxes and parking",
            "Wi-Fi onboard"
        ],
        exclusions: [
            "Night allowance (₹700 extra)",
            "Interstate permits if applicable",
            "Additional charging fees"
        ],
        contact: {
            phone: "+91-9999999999",
            email: "electric@celebrityrides.in",
            whatsapp: "https://api.whatsapp.com/send?phone=919999999999"
        },
        notes: [
            "Perfect for urban mobility",
            "Charging infrastructure needed"
        ],
        rating: 4.7,
        policies: {
            cancellation_policy: "Free cancellation up to 48 hours before rental.",
            refund_policy: "Full refund if canceled before 48 hrs. 50% after.",
            driver_waiting_policy: "Extra ₹150/hour after 1 hour."
        },
        driver_details: {
            name: "Sanjay Desai",
            experience: "6 years",
            languages: ["Hindi", "English", "Marathi"],
            license_number: "MH04/DR/123789"
        }
    },
    {
        id: 10,
        image: rollesRoyal,
        slug: "aston-martin-db11-amr-celebrity-rental-9",
        category: "luxury-cars",
        gallary: ["db11_exterior", "db11_interior1", "db11_engine", "db11_side"],
        vehicle_type: "Aston Martin DB11 AMR",
        package_name: "Aston Martin DB11 AMR Celebrity Rental",
        overview: "A sophisticated grand tourer with a powerful V12 engine, ideal for celebrities seeking elegance and performance.",
        pricing: {
            original_price: 420000,
            current_price: 380000,
            discount_percentage: 9
        },
        duration: "Per Day Rental",
        features: ["V12 Engine", "Hand-stitched Leather", "Bang & Olufsen Audio"],
        starting_point: "Delhi City Limits",
        ending_point: "Delhi City Limits",
        specifications: {
            model: "2023",
            fuel_type: "Petrol",
            transmission: "Automatic",
            air_conditioning: "Yes",
            ac_type: "Dual-zone Climate Control"
        },
        km: "100 km included (extra ₹450/km)",
        luggage: "3 medium bags",
        total_person_capacity: 4,
        inclusions: [
            "Professional driver",
            "Fuel charges for included kilometers",
            "Toll taxes and parking",
            "Complimentary water"
        ],
        exclusions: [
            "Night allowance (₹800 extra)",
            "Interstate permits if applicable",
            "Driver accommodation"
        ],
        contact: {
            phone: "+91-9999999910",
            email: "luxury@celebrityrides.in",
            whatsapp: "https://api.whatsapp.com/send?phone=919999999910"
        },
        notes: [
            "Ideal for film shoots",
            "Custom color options available"
        ],
        rating: 4.8,
        policies: {
            cancellation_policy: "Free cancellation up to 48 hours before rental.",
            refund_policy: "Full refund if canceled before 48 hrs. 50% after.",
            driver_waiting_policy: "Extra ₹200/hour after 1 hour."
        },
        driver_details: {
            name: "Rakesh Gupta",
            experience: "7 years",
            languages: ["Hindi", "English"],
            license_number: "DL04/DR/456123"
        }
    }
]