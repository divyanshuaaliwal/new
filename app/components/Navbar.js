
"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Phone, Mail, ChevronDown, Menu, X } from "lucide-react";
import shivji from "../assets/shiv.avif";
import temple from "../assets/temple.jpg";
import phnLogo from "../assets/logoPhone.png";
import lapLogo from "../assets/logoLaptop.png";
import Damroo from "../assets/Damroo.png";
import omGif from "../assets/omGif.gif";
import trishulGif from "../assets/trishulGif.gif";
import bellsGif from "../assets/bellsGif.gif";
import styles from "./Navbar.module.css";
import { menuLinks, navMenu } from "../Data/navData";
import WhatsAppButton2 from "./WhatsAppButton2";
import { useMediaQuery } from "@mui/material";


export default function Navbar() {

    const [activeDropdown, setActiveDropdown] = useState(null);
    const [activeInnerDropdown, setActiveInnerDropdown] = useState(null);
    const [menuOpen, setMenuOpen] = useState(false);
    
    const isMobile = useMediaQuery("(max-width:1275px)");

    const [expandedItems, setExpandedItems] = useState({});

    const handleMouseEnter = (title) => {
        setActiveDropdown(title);
    };

    const handleMouseLeave = () => {
        setActiveDropdown(null);
        setActiveInnerDropdown(null);
    };

    const handleInnerItemsMouseEnter = (title) => {
        setActiveInnerDropdown(title);
    };

    const handleInnerItemsMouseLeave = () => {
        setActiveInnerDropdown(null);
    };



    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : "auto";
    }, [menuOpen]);

    const toggleDropdown = (itemTitle) => {
        setExpandedItems((prev) => ({
            ...prev,
            [itemTitle]: !prev[itemTitle],
        }));
    };

    const closeMobileMenu = () => {
        setMenuOpen(false);
        setExpandedItems({});
    };

    return (
        <>
            <div className={styles.navbarContainer}>

                {/* Mobile hamburger icon */}
                {
                    isMobile && (
                        <div className={styles.mobileMenuToggle}>
                           
                            <div className={styles.mobileLogoContainer}>      
                                <Image src={phnLogo} width={200} height={200} alt="Logo" />
                            </div>
                            
                            <button
                                className={styles.hamburgerButton}
                                onClick={() => setMenuOpen(!menuOpen)}
                                aria-label={menuOpen ? "Close menu" : "Open menu"}
                            >
                                {
                                    !menuOpen && <Menu size={24} />
                                }
                            </button>
                        </div>
                    )
                }

                {/* Desktop Navigation */}
                {
                    !isMobile && (
                        <div className={styles.navbars}>
                            <div className={styles.topNav}>
                                <ul className={styles.TopNavList}>
                                    {
                                        menuLinks.map((item, index) => (

                                            <li
                                                key={index}
                                                className={styles.navItem}
                                                onMouseEnter={() => handleMouseEnter(item.title)}
                                                onMouseLeave={handleMouseLeave}
                                            >
                                                <Link
                                                    href={item.path || "/"}
                                                    className={styles.navTitle}
                                                    target="_self"
                                                    rel="noopener noreferrer"
                                                    onClick={(event) => {
                                                        if (!item.path) {
                                                            event.preventDefault();
                                                        }
                                                    }}
                                                >
                                                    {item.title}
                                                    {item.dropdown && (
                                                        <svg
                                                            className={`${styles.dropdownIcon} ${activeDropdown === item.title ? styles.rotate : ""}`}
                                                            width="14"
                                                            height="14"
                                                            viewBox="0 0 24 24"
                                                            fill="none"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <path
                                                                d="M6 9L12 15L18 9"
                                                                stroke="currentColor"
                                                                strokeWidth="2"
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                            />
                                                        </svg>
                                                    )}
                                                </Link>

                                                {
                                                    item.dropdown && activeDropdown === item.title && item.dropdownItems?.length > 0 && (
                                                        <ul className={styles.dropdown}>
                                                            {
                                                                item.dropdownItems.map((subItem, subIndex) => (
                                                                    <li
                                                                        key={subIndex}
                                                                        onMouseEnter={() => handleInnerItemsMouseEnter(subItem.innr)}
                                                                        onMouseLeave={handleInnerItemsMouseLeave}
                                                                    >
                                                                        <Link
                                                                            href={subItem?.path || "/"}
                                                                            className={styles.dropdownLink}
                                                                            target="_self"
                                                                            rel="noopener noreferrer"
                                                                            onClick={(event) => {
                                                                                if (!subItem.path) {
                                                                                    event.preventDefault();
                                                                                }
                                                                            }}
                                                                        >
                                                                            {subItem.title}
                                                                            {subItem.innerDropdown && (
                                                                                <svg
                                                                                    className={`${styles.innerDropdownIcon} ${activeInnerDropdown === subItem.title ? styles.rotate : ""}`}
                                                                                    width="12"
                                                                                    height="12"
                                                                                    viewBox="0 0 24 24"
                                                                                    fill="none"
                                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                                >
                                                                                    <path
                                                                                        d="M9 6L15 12L9 18"
                                                                                        stroke="currentColor"
                                                                                        strokeWidth="2"
                                                                                        strokeLinecap="round"
                                                                                        strokeLinejoin="round"
                                                                                    />
                                                                                </svg>
                                                                            )}
                                                                        </Link>
                                                                    </li>
                                                                ))
                                                            }
                                                        </ul>
                                                    )
                                                }
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>

                            {/* Middle Part */}
                            <div className={styles.logoSection}>
                                <div className={styles.logoLeft}>
                                  <div>
  <Image src={lapLogo} width={70} height={60} alt="Logo" />
</div>

                                    <div>
                                        <div className={styles.approvedText}>Approved by</div>
                                        <div className={styles.approvedBy}>Madhya Pradesh Tourism</div>
                                    </div>
                                </div>

                                <div className={styles.middleAssets}>
                                  
                                    <Image
                                        src={trishulGif}
                                        alt="Description of GIF"
                                        width={70}
                                        height={70}
                                        unoptimized // Add this for GIFs to prevent optimization
                                    />

                                    <Image
                                        src={shivji}
                                        alt="Shiva"
                                        width={70}
                                        height={70}
                                        className={`${styles.image11} ${styles.image1}`}
                                    />
                                    <Image
                                        src={temple}
                                        alt="Temple"
                                        width={70}
                                        height={70}
                                        className={`${styles.image11} ${styles.image2}`}
                                    />

                                    <Image
                                        src={bellsGif}
                                        alt="Description of GIF"
                                        width={70}
                                        height={70}
                                        unoptimized // Add this for GIFs to prevent optimization
                                    />
                                   
                                    <Image
                                        src={Damroo}
                                        alt="Damroo"
                                        width={70}
                                        height={70}
                                        className={`${styles.image11} ${styles.image4}`}
                                    />

                                    <Image
                                        src={omGif}
                                        alt="Description of GIF"
                                        width={70}
                                        height={70}
                                        unoptimized // Add this for GIFs to prevent optimization
                                    />


                                </div>

                                <div className={styles.contactRight}>
                                   
                                    <div className={styles.contactItem}>

                                        <div className={styles.animatedBorderBox}>
                                            <span>Call Us:</span>
                                            <Phone size={16} />
                                            <a className={styles.number} href="tel:+919111452099">+91 9111452099</a>
                                        </div>
                                           <WhatsAppButton2 />

                                    </div>
                                    <div className={styles.contactItem2}>
                                        <span>Mail Us:</span>
                                        <Mail size={16} />
                                        <a className={styles.mail} href="mailto:info@ujjainmahakal.com">info@ujjainmahakal.com</a>
                                    </div>
                                </div>
                            </div>

                            <nav className={styles.bottomNav}>
                                <div className={styles.container2}>
                                    <ul className={styles.navList}>
                                        {
                                            navMenu.map((item, index) => (
                                                <li
                                                    key={index}
                                                    className={styles.navItem}
                                                    onMouseEnter={() => handleMouseEnter(item.title)}
                                                    onMouseLeave={handleMouseLeave}
                                                >
                                                    <Link
                                                        href={item.path || "/"}
                                                        className={styles.navTitle}
                                                        target="_self"
                                                        rel="noopener noreferrer"
                                                    >
                                                        {item.title}
                                                        {item.dropdown && (
                                                            <svg
                                                                className={`${styles.dropdownIcon} ${activeDropdown === item.title ? styles.rotate : ""}`}
                                                                width="14"
                                                                height="14"
                                                                viewBox="0 0 24 24"
                                                                fill="none"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                            >
                                                                <path
                                                                    d="M6 9L12 15L18 9"
                                                                    stroke="currentColor"
                                                                    strokeWidth="2"
                                                                    strokeLinecap="round"
                                                                    strokeLinejoin="round"
                                                                />
                                                            </svg>
                                                        )}
                                                    </Link>



                                                    {
                                                        item.dropdown && activeDropdown === item.title && item.dropdownItems?.length > 0 && (
                                                            <ul className={`${styles.dropdownBottom} ${item.dropdownItems.some(di => di.innerDropdown) ? '' : styles.active}`}>
                                                                {
                                                                    item.dropdownItems.map((subItem, subIndex) => (
                                                                        <li
                                                                            key={subIndex}
                                                                            onMouseEnter={() => handleInnerItemsMouseEnter(subItem.title)}
                                                                            onMouseLeave={handleInnerItemsMouseLeave}
                                                                        >
                                                                            <Link
                                                                                href={subItem.path || "/"}
                                                                                className={styles.dropdownLink}
                                                                            >
                                                                                {subItem.title}
                                                                                {subItem.innerDropdown && (
                                                                                    <svg
                                                                                        className={`${styles.innerDropdownIcon} ${activeInnerDropdown === subItem.title ? styles.rotate : ""}`}
                                                                                        width="12"
                                                                                        height="12"
                                                                                        viewBox="0 0 24 24"
                                                                                        fill="none"
                                                                                    >
                                                                                        <path
                                                                                            d="M9 6L15 12L9 18"
                                                                                            stroke="currentColor"
                                                                                            strokeWidth="2"
                                                                                            strokeLinecap="round"
                                                                                            strokeLinejoin="round"
                                                                                        />
                                                                                    </svg>
                                                                                )}
                                                                            </Link>

                                                                            {subItem.innerDropdown &&
                                                                                activeInnerDropdown === subItem.title &&
                                                                                subItem.innerDropdownItems?.length > 0 && (
                                                                                    <ul className={styles.innerDropdown}>
                                                                                        {subItem.innerDropdownItems.map((innerItem, innerIndex) => (
                                                                                            <li key={innerIndex}>
                                                                                                <Link
                                                                                                    href={innerItem.path || "/"}
                                                                                                    className={styles.innerDropdownLink}
                                                                                                >
                                                                                                    {innerItem.innerTitle}
                                                                                                </Link>
                                                                                            </li>
                                                                                        ))}
                                                                                    </ul>
                                                                                )}
                                                                        </li>
                                                                    ))
                                                                }
                                                            </ul>
                                                        )
                                                    }

                                                </li>
                                            ))
                                        }
                                    </ul>
                                </div>
                            </nav>
                        </div>
                    )
                }

                {/* Mobile Sidebar */}
                {
                    isMobile && menuOpen && (
                        <div className={`${styles.mobileSidebar} ${menuOpen ? styles.open : ""}`}>
                            <div className={styles.mobileSidebarContent}>

                                <div className={styles.mobileMenuHeader}>
                        
                                    <Image src={phnLogo} width={40} height={40} alt="Logo" />

                                    <button onClick={closeMobileMenu} className={styles.closeButton}>
                                        <X size={24} />
                                    </button>
                                </div>

                                <div className={styles.mobileNav}>

                                    {/* Main Menu */}
                                    <div className={styles.mobileSection}>
                                        <h3>Main Menu</h3>
                                        {
                                            menuLinks.map((item, index) => (
                                                <div key={index} className={styles.mobileNavItem}>
                                                    {
                                                        item.dropdown ? (
                                                            <>

                                                                <div className={styles.mobileNavTitle}>

                                                                    <Link href={item.path || '/'} className={styles.linkTags} onClick={closeMobileMenu}>
                                                                        {item.title}
                                                                    </Link>

                                                                    <ChevronDown
                                                                        onClick={() => toggleDropdown(item.title)} // Sirf Chevron ke liye
                                                                        size={18}
                                                                        className={`${styles.mobileDropdownIcon} ${expandedItems[item.title] ? styles.rotated : ""}`}
                                                                    />
                                                                </div>
                                                                {
                                                                    expandedItems[item.title] && item.dropdownItems?.length > 0 && (
                                                                        <div className={styles.mobileDropdown}>
                                                                            {
                                                                                item.dropdownItems.map((subItem, subIndex) => (
                                                                                    <div key={subIndex}>
                                                                                        <div
                                                                                            className={styles.mobileDropdownLink}

                                                                                        >
                                                                                            <Link
                                                                                                href={subItem.path || "/"}
                                                                                                onClick={closeMobileMenu}
                                                                                                className={styles.mobileDropdown2Link}
                                                                                            >
                                                                                                {subItem.title}

                                                                                            </Link>
                                                                                        </div>

                                                                                    </div>
                                                                                ))
                                                                            }
                                                                        </div>
                                                                    )
                                                                }
                                                            </>
                                                        ) : (
                                                            <Link
                                                                href={item.path || "/"}
                                                                className={styles.mobileNavLink}
                                                                onClick={closeMobileMenu}
                                                            >
                                                                {item.title}
                                                            </Link>
                                                        )}
                                                </div>
                                            ))
                                        }
                                    </div>

                                    {/* Explore */}
                                    <div className={styles.mobileSection}>
                                        <h3>Explore</h3>
                                        {
                                            navMenu.map((item, index) => (
                                                <div key={index} className={styles.mobileNavItem}>
                                                    {
                                                        item.dropdown ? (
                                                            <>
                                                                <div className={styles.mobileNavTitle}>

                                                                    <Link href={item.path || '/'} onClick={closeMobileMenu} className={styles.linkTags}>
                                                                        {item.title}
                                                                    </Link>

                                                                    <ChevronDown
                                                                        onClick={() => toggleDropdown(item.title)} // Sirf Chevron ke liye
                                                                        size={18}
                                                                        className={`${styles.mobileDropdownIcon} ${expandedItems[item.title] ? styles.rotated : ""}`}
                                                                    />
                                                                </div>

                                                                {
                                                                    expandedItems[item.title] && item.dropdownItems?.length > 0 && (
                                                                        <div className={styles.mobileDropdown}>
                                                                            {
                                                                                item.dropdownItems.map((subItem, subIndex) => (
                                                                                    <div key={subIndex}>
                                                                                        <div className={`${styles.mobileDropdownLink} ${styles.mobileDropdown2Link}`}>

                                                                                            <Link
                                                                                                href={subItem.path || "/"}
                                                                                                className={styles.mobileDropdown2Link}
                                                                                                onClick={closeMobileMenu}
                                                                                            >
                                                                                                {subItem.title}
                                                                                            </Link>

                                                                                            {
                                                                                                subItem.innerDropdown && (
                                                                                                    <ChevronDown
                                                                                                        size={16}
                                                                                                        className={`${styles.mobileDropdownIcon} ${expandedItems[subItem.title] ? styles.rotated : ""}`}
                                                                                                        onClick={() =>
                                                                                                            subItem.innerDropdown
                                                                                                                ? toggleDropdown(subItem.title)
                                                                                                                : closeMobileMenu()
                                                                                                        }
                                                                                                    />
                                                                                                )
                                                                                            }
                                                                                        </div>
                                                                                        {
                                                                                            subItem.innerDropdown &&
                                                                                            expandedItems[subItem.title] &&
                                                                                            subItem.innerDropdownItems?.length > 0 && (
                                                                                                <div className={styles.mobileInnerDropdown}>
                                                                                                    {
                                                                                                        subItem.innerDropdownItems.map((innerItem, innerIndex) => (
                                                                                                            <Link
                                                                                                                key={innerIndex}
                                                                                                                href={innerItem.path || "/"}
                                                                                                                className={styles.mobileInnerDropdownLink2}
                                                                                                                onClick={closeMobileMenu}
                                                                                                            >
                                                                                                                {innerItem.innerTitle}
                                                                                                            </Link>
                                                                                                        ))
                                                                                                    }
                                                                                                </div>
                                                                                            )
                                                                                        }
                                                                                    </div>
                                                                                ))
                                                                            }
                                                                        </div>
                                                                    )
                                                                }
                                                            </>
                                                        ) : (
                                                            <Link
                                                                href={item.path || "/"}
                                                                className={styles.mobileNavLink}
                                                                onClick={closeMobileMenu}
                                                            >
                                                                {item.title}
                                                            </Link>
                                                        )
                                                    }
                                                </div>
                                            ))
                                        }
                                    </div>
                                </div>

                                <div className={styles.mobileFooter}>
                                    <div className={styles.mobileContactItem}>
                                        <Phone size={10} />
                                        <a href="tel:+919111452099">+91 9111452099</a>
                                    </div>
                                    <div className={styles.mobileContactItem}>
                                        <Mail size={10} />
                                        <a href="mailto:info@ujjainmahakal.com">info@ujjainmahakal.com</a>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.mobileSidebarOverlay} onClick={closeMobileMenu}></div>
                        </div>
                    )
                }
            </div>
        </>
    );
}