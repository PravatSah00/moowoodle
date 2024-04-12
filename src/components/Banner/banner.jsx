import React, { useState } from 'react'
import Dialog from "@mui/material/Dialog";
import Popoup from '../PopupContent/PopupContent';
import './banner.scss';

export default function banner() {
    if(localStorage.getItem('banner') != 'false'){
        localStorage.setItem("banner", true);
    }
    const [ modal, setModal ] = useState(false);
    const [ banner, setBanner ] = useState(localStorage.getItem('banner') == 'true' ? true : false);

    const handleCloseBanner = () => {
		localStorage.setItem('banner',false)
        setBanner(false);
	}

	const handleClose = () => {
        setModal(false);
	}
	const handleOpen = () => {
        setModal(true);
	}
    if(banner){
        document.addEventListener('DOMContentLoaded', function () {
            const carouselItems = document.querySelectorAll('.carousel-item');
            const totalItems = carouselItems.length;
            let currentIndex = 0;
            let interval;
        
            // Function to show the current slide and hide others
            function showSlide(index) {
                carouselItems.forEach(item => item.classList.remove('active'));
                carouselItems[index].classList.add('active');
            }
        
            // Function to go to the next slide
            function nextSlide() {
                currentIndex = (currentIndex + 1) % totalItems;
                showSlide(currentIndex);
            }
        
            // Function to go to the previous slide
            function prevSlide() {
                currentIndex = (currentIndex - 1 + totalItems) % totalItems;
                showSlide(currentIndex);
            }
        
            // Start the auto-slide interval
            function startAutoSlide() {
                interval = setInterval(nextSlide, 7000); // Change slide every 7 seconds
            }
        
            // Stop the auto-slide interval
            function stopAutoSlide() {
                clearInterval(interval);
            }
        
            // Initialize the carousel
            showSlide(currentIndex);
            startAutoSlide();
        
            // Handle next button click
            document.getElementById('nextBtn').addEventListener('click', function () {
                nextSlide();
                stopAutoSlide();
                startAutoSlide();
            });
        
            // Handle previous button click
            document.getElementById('prevBtn').addEventListener('click', function () {
                prevSlide();
                stopAutoSlide();
                startAutoSlide();
            });
        });
    }
    

    return (
        <>
            { ! appLocalizer.pro_active ?
                banner ?
                    <div className="custom-banner">
                        <Dialog
                            className="woo-module-popup"
                            open={modal}
                            onClose={handleClose}
                            aria-labelledby="form-dialog-title"
                        >	
                            <span 
                                className="admin-font font-cross stock-manager-popup-cross"
                                onClick={handleClose}
                            ></span>
                            <Popoup/>
                        </Dialog>
                        <div className="woo-carousel-container">
                            <div className="carousel-container">
                                <div class="admin-font font-cross pro-slider-cross" onClick={handleCloseBanner}></div>
                                <div class="why-go-pro-tag" onClick={handleOpen}>Why Premium</div>
                                <ul className="carousel-list">
                                    <li className="carousel-item active">
                                        <div className="woo-pro-txt-items">
                                            <h3>Single Sign-On for Moodle™ and WordPress Login</h3>
                                            <p>Seamlessly access Moodle™ and WordPress with a unified login system for convenience and efficiency.</p>
                                            <a
                                                href={appLocalizer.pro_url}
                                                className="woo-btn btn-red"
                                            >
                                                View Pricing
                                            </a>
                                        </div>
                                    </li>
                                    <li class="carousel-item">
                                        <div className="woo-pro-txt-items">
                                            <h3>Subscription-based Revenue Generation</h3>
                                            <p>Generate steady income by offering course subscriptions to users.</p>
                                            <a
                                                href={appLocalizer.pro_url}
                                                className="woo-btn btn-red"
                                            >
                                                View Pricing
                                            </a>
                                        </div>
                                    </li>
                                    <li class="carousel-item">
                                        <div className="woo-pro-txt-items">
                                            <h3>Flexible Course Offerings</h3>
                                            <p>Increase earnings by offering courses individually, in groups, or as variations.</p>
                                            <a
                                                href={appLocalizer.pro_url}
                                                className="woo-btn btn-red"
                                            >
                                                View Pricing
                                            </a>
                                        </div>
                                    </li>
                                    <li class="carousel-item">
                                        <div className="woo-pro-txt-items">
                                            <h3>Course Selection and Synchronization</h3>
                                            <p>Easily select and synchronize courses with flexibility and precision.</p>
                                            <a
                                                href={appLocalizer.pro_url}
                                                className="woo-btn btn-red"
                                            >
                                                View Pricing
                                            </a>
                                        </div>
                                    </li>
                                    <li class="carousel-item">
                                        <div className="woo-pro-txt-items">
                                            <h3>Bulk Course Synchronization</h3>
                                            <p>Synchronize courses in bulk effortlessly, saving time and streamlining operations.</p>
                                            <a
                                                href={appLocalizer.pro_url}
                                                className="woo-btn btn-red"
                                            >
                                                View Pricing
                                            </a>
                                        </div>
                                    </li>
                                    <li class="carousel-item">
                                        <div className="woo-pro-txt-items">
                                            <h3>Seamless Access Management</h3>
                                            <p>Effortlessly manage access to Moodle™ and WordPress platforms with a seamless integration.</p>
                                            <a
                                                href={appLocalizer.pro_url}
                                                className="woo-btn btn-red"
                                            >
                                                View Pricing
                                            </a>
                                        </div>
                                    </li>
                                    <li class="carousel-item">
                                        <div className="woo-pro-txt-items">
                                            <h3>Customizable User Information Sync</h3>
                                            <p>Tailor the synchronization of user information between Moodle™ and WordPress platforms according to your specific needs.</p>
                                            <a
                                                href={appLocalizer.pro_url}
                                                className="woo-btn btn-red"
                                            >
                                                View Pricing
                                            </a>
                                        </div>
                                    </li>
                                    <li class="carousel-item">
                                        <div className="woo-pro-txt-items">
                                            <h3>Automated User Synchronization</h3>
                                            <p>Streamline the process of synchronizing user accounts between Moodle™ and WordPress platforms with automated functionality.</p>
                                            <a
                                                href={appLocalizer.pro_url}
                                                className="woo-btn btn-red"
                                            >
                                                View Pricing
                                            </a>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div class="carousel-controls">
                                <button id="prevBtn"><i className='admin-font font-arrow-left'></i></button>
                                <button id="nextBtn"><i className='admin-font font-arrow-right'></i></button>
                            </div>
                        </div>
                    </div>
                : ''
            : ''
            }
        </>
    );
}
