"use client";

import {useState } from "react";
import styles from "./Contact.module.css";
import { SectionHeader, Wrapper } from "../MainLayouts";
import { MapPin, Phone, Mail } from "lucide-react";
import dynamic from "next/dynamic";
const MapEmbed = dynamic(() => import("./MapEmbed"), { ssr: false });
export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
    });

    const [errors, setErrors] = useState({});
    

   

    const validate = () => {
        const newErrors = {};

        if (!formData.name.trim()) newErrors.name = "Name is required";
        if (!formData.email.trim()) {
            newErrors.email = "Email is required";
        } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)
        ) {
            newErrors.email = "Invalid email address";
        }
        if (formData.phone && !/^\+?\d{7,15}$/.test(formData.phone.trim())) {
            newErrors.phone = "Invalid phone number";
        }
        if (!formData.subject.trim()) newErrors.subject = "Subject is required";
        if (!formData.message.trim()) newErrors.message = "Message is required";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.id]: e.target.value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            alert("Form submitted successfully!");
            setFormData({
                name: "",
                email: "",
                phone: "",
                subject: "",
                message: "",
            });
            setErrors({});
        }
    };

    return (
        <Wrapper>
            <SectionHeader
                title="Contact Us"
                description="Get in touch for customized travel plans and temple visit assistance."
            />

            <div className={styles.contactContent}>
                <div className={styles.contactLeft}>
                    <div className={styles.contactInfo}>
                        <div className={styles.infoItem}>
                            <h3><MapPin size={20} /> Address</h3>
                            <p>Skye Earth Corporate Park, 1206 E, opp. Shalimar Township, Indore, Madhya Pradesh 452010</p>
                        </div>

                        <div className={styles.infoItem}>
                            <h3><Phone size={20} /> Phone</h3>
                            <p>+91 9111452099</p>
                        </div>

                        <div className={styles.infoItem}>
                            <h3><Mail size={20} /> Email</h3>
                            <p>info@ujjainmahakal.com</p>
                        </div>
                    </div>

                    <div className={styles.mapContainer}>
                        <MapEmbed />
                    </div>

                </div>

                <form className={styles.contactForm} onSubmit={handleSubmit} noValidate>
                    <div className={styles.formRow}>
                        <div className={styles.formGroup}>
                            <label htmlFor="name">Name</label>
                            <input
                                type="text"
                                id="name"
                                placeholder="Your Name"
                                value={formData.name}
                                onChange={handleChange}
                            />
                            {errors.name && <p className={styles.errorText}>{errors.name}</p>}
                        </div>
                        <div className={styles.formGroup}>
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                placeholder="Your Email"
                                value={formData.email}
                                onChange={handleChange}
                            />
                            {errors.email && <p className={styles.errorText}>{errors.email}</p>}
                        </div>
                    </div>
                    <div className={styles.formRow}>
                        <div className={styles.formGroup}>
                            <label htmlFor="phone">Phone</label>
                            <input
                                type="tel"
                                id="phone"
                                placeholder="Your Phone Number"
                                value={formData.phone}
                                onChange={handleChange}
                            />
                            {errors.phone && <p className={styles.errorText}>{errors.phone}</p>}
                        </div>
                        <div className={styles.formGroup}>
                            <label htmlFor="subject">Subject</label>
                            <input
                                type="text"
                                id="subject"
                                placeholder="Subject"
                                value={formData.subject}
                                onChange={handleChange}
                            />
                            {errors.subject && <p className={styles.errorText}>{errors.subject}</p>}
                        </div>
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="message">Message</label>
                        <textarea
                            id="message"
                            rows="5"
                            placeholder="Your Message"
                            value={formData.message}
                            onChange={handleChange}
                        ></textarea>
                        {errors.message && <p className={styles.errorText}>{errors.message}</p>}
                    </div>
                    <button type="submit" className={styles.submitButton}>
                        Send Message
                    </button>
                </form>
            </div>
        </Wrapper>
    );
}
