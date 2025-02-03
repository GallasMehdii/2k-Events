import React, { useEffect, useState } from 'react';
import NavBar from '../components/Navbar/NavBar';
import Footer from '../components/Footer';
import { useDocTitle } from '../components/CustomHook';
import DatePicker from 'react-datepicker';
import emailjs from '@emailjs/browser';
import Notiflix from 'notiflix';
import 'react-datepicker/dist/react-datepicker.css';
import "../../src/custom-datepicker.css";

const Contact = () => {
    // States remain the same...
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');
    const [selectedDate, setSelectedDate] = useState(null);
    const [guestsNumber, setGuestsNumber] = useState('');
    const [venue, setVenue] = useState('');
    const [eventType, setEventType] = useState('');
    const [errors, setErrors] = useState([]);

    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth' });
      }, []);


    // Event types and functions remain the same...
    const eventTypes = [
        'Wedding',
        'Engagement',
        'Corporate Event',
        'Birthday Party',
        'Anniversary',
        'Graduation',
        'Other'
    ];

    // Existing functions remain the same...
    const clearErrors = () => setErrors([]);
    const clearInput = () => {
        setFirstName('');
        setLastName('');
        setEmail('');
        setPhone('');
        setMessage('');
        setSelectedDate(null);
        setGuestsNumber('');
        setVenue('');
        setEventType('');
    };
    const validateForm = () => {
        const newErrors = {};
    
        if (!firstName.trim()) {
            newErrors.first_name = 'First name is required';
            Notiflix.Notify.failure('First name is required', { 
                position: 'right-top',
                distance: '30px',
                fontSize: '18px',
                width: '400px',
                cssAnimationStyle: 'zoom',
                cssAnimationDuration: 400,
                timeout: 3000,
                useIcon: true,
                borderRadius: '12px',
            });
        }
    
        if (!lastName.trim()) {
            newErrors.last_name = 'Last name is required';
            Notiflix.Notify.failure('Last name is required', { 
                position: 'right-top',
                distance: '30px',
                fontSize: '18px',
                width: '400px',
                cssAnimationStyle: 'zoom',
                cssAnimationDuration: 400,
                timeout: 3000,
                useIcon: true,
                borderRadius: '12px',
            });
        }
    
        if (!email.trim()) {
            newErrors.email = 'Email is required';
            Notiflix.Notify.failure('Email is required', { 
                position: 'right-top',
                distance: '30px',
                fontSize: '18px',
                width: '400px',
                cssAnimationStyle: 'zoom',
                cssAnimationDuration: 400,
                timeout: 3000,
                useIcon: true,
                borderRadius: '12px',
            });
        }
    
        if (!phone.trim()) {
            newErrors.phone_number = 'Phone number is required';
            Notiflix.Notify.failure('Phone number is required', { 
                position: 'right-top',
                distance: '30px',
                fontSize: '18px',
                width: '400px',
                cssAnimationStyle: 'zoom',
                cssAnimationDuration: 400,
                timeout: 3000,
                useIcon: true,
                borderRadius: '12px',
            });
        }
    
        if (!message.trim()) {
            newErrors.message = 'Message is required';
            Notiflix.Notify.failure('Message is required', { 
                position: 'right-top',
                distance: '30px',
                fontSize: '18px',
                width: '400px',
                cssAnimationStyle: 'zoom',
                cssAnimationDuration: 400,
                timeout: 3000,
                useIcon: true,
                borderRadius: '12px',
            });
        }
    
        if (!selectedDate) {
            newErrors.date = 'Event date is required';
            Notiflix.Notify.failure('Event date is required', { 
                position: 'right-top',
                distance: '30px',
                fontSize: '18px',
                width: '400px',
                cssAnimationStyle: 'zoom',
                cssAnimationDuration: 400,
                timeout: 3000,
                useIcon: true,
                borderRadius: '12px',
            });
        }
    
        if (!guestsNumber.trim()) {
            newErrors.guests_number = 'Number of guests is required';
            Notiflix.Notify.failure('Number of guests is required', { 
                position: 'right-top',
                distance: '30px',
                fontSize: '18px',
                width: '400px',
                cssAnimationStyle: 'zoom',
                cssAnimationDuration: 400,
                timeout: 3000,
                useIcon: true,
                borderRadius: '12px',
            });
        }
    
        if (!venue.trim()) {
            newErrors.venue = 'Venue details are required';
            Notiflix.Notify.failure('Venue details are required', { 
                position: 'right-top',
                distance: '30px',
                fontSize: '18px',
                width: '400px',
                cssAnimationStyle: 'zoom',
                cssAnimationDuration: 400,
                timeout: 3000,
                useIcon: true,
                borderRadius: '12px',
            });
        }
    
        if (!eventType) {
            newErrors.event_type = 'Event type is required';
            Notiflix.Notify.failure('Event type is required', { 
                position: 'right-top',
                distance: '30px',
                fontSize: '18px',
                width: '400px',
                cssAnimationStyle: 'zoom',
                cssAnimationDuration: 400,
                timeout: 3000,
                useIcon: true,
                borderRadius: '12px',
            });
        }
    
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };
    const sendEmail = (e) => {
        e.preventDefault();
        if (!validateForm()) return;

        document.getElementById('submitBtn').disabled = true;
        document.getElementById('submitBtn').innerHTML = 'Loading...';

        const templateParams = {
            to_email: 'mehdi.gallas.98@gmail.com',
            from_name: `${firstName} ${lastName}`,
            from_email: email,
            phone_number: phone,
            message: message,
            event_date: selectedDate ? selectedDate.toDateString() : '',
            guests_number: guestsNumber,
            venue: venue,
            event_type: eventType,
            reply_to: email,
        };

        emailjs.send(
            'service_c1xz4dh',
            'template_ptlw371',
            templateParams,
            'SdGgF6PZa0vbc7YeL'
        )
            .then((response) => {
                document.getElementById('submitBtn').disabled = false;
                document.getElementById('submitBtn').innerHTML = 'Send Message';
                clearInput();
                Notiflix.Report.success(
                    'Success',
                    'Your message has been sent successfully!',
                    'Okay'
                );
            })
            .catch((error) => {
                document.getElementById('submitBtn').disabled = false;
                document.getElementById('submitBtn').innerHTML = 'Send Message';
                Notiflix.Report.failure(
                    'An error occurred',
                    'Failed to send message. Please try again later.',
                    'Okay'
                );
            });
    };

    return (
        <>
            <div>
                <NavBar />
            </div>
            <div className="min-h-screen bg-gradient-to-b from-white to-gray-100">
                <div className="container mx-auto px-4 py-16">
                    <div className="max-w-4xl mx-auto">
                        <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
                            <div className="p-8 lg:p-12">
                                <div className="text-center mb-12">
                                    <h1 className="text-4xl font-bold text-gray-800 mb-2 font-serif">Let's Plan Your Event</h1>
                                    <p className="text-gray-600">Tell us about your special day</p>
                                </div>

                                <form onSubmit={sendEmail} className="space-y-8">
                                    {/* Personal Information Section */}
                                    <div className="bg-white p-6 rounded-xl border border-gray-200">
                                        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Personal Information</h2>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                                                <input
                                                    className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-300 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
                                                    type="text"
                                                    placeholder="Your first name"
                                                    value={firstName}
                                                    onChange={(e) => setFirstName(e.target.value)}
                                                    onKeyUp={clearErrors}
                                                />
                                                {errors.first_name && <p className="mt-1 text-red-500 text-sm">{errors.first_name}</p>}
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                                                <input
                                                    className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-300 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
                                                    type="text"
                                                    placeholder="Your last name"
                                                    value={lastName}
                                                    onChange={(e) => setLastName(e.target.value)}
                                                    onKeyUp={clearErrors}
                                                />
                                                {errors.last_name && <p className="mt-1 text-red-500 text-sm">{errors.last_name}</p>}
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                                                <input
                                                    className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-300 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
                                                    type="email"
                                                    placeholder="Your email"
                                                    value={email}
                                                    onChange={(e) => setEmail(e.target.value)}
                                                    onKeyUp={clearErrors}
                                                />
                                                {errors.email && <p className="mt-1 text-red-500 text-sm">{errors.email}</p>}
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                                                <input
                                                    className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-300 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
                                                    type="tel"
                                                    placeholder="Your phone number"
                                                    value={phone}
                                                    onChange={(e) => setPhone(e.target.value)}
                                                    onKeyUp={clearErrors}
                                                />
                                                {errors.phone_number && <p className="mt-1 text-red-500 text-sm">{errors.phone_number}</p>}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Event Information Section */}
                                    <div className="bg-white p-6 rounded-xl border border-gray-200">
                                        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Event Details</h2>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-2">Event Type</label>
                                                <select
                                                    className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-300 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
                                                    value={eventType}
                                                    onChange={(e) => setEventType(e.target.value)}
                                                >
                                                    <option value="">Select Event Type</option>
                                                    {eventTypes.map((type) => (
                                                        <option key={type} value={type}>{type}</option>
                                                    ))}
                                                </select>
                                                {errors.event_type && <p className="mt-1 text-red-500 text-sm">{errors.event_type}</p>}
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-2">Event Date</label>
                                                <DatePicker
                                                    selected={selectedDate}
                                                    onChange={(date) => setSelectedDate(date)}
                                                    className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-300 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
                                                    placeholderText="Select date"
                                                    dateFormat="dd/MM/yyyy"
                                                />
                                                {errors.date && <p className="mt-1 text-red-500 text-sm">{errors.date}</p>}
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-2">Number of Guests</label>
                                                <input
                                                    className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-300 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
                                                    type="number"
                                                    placeholder="Expected number of guests"
                                                    value={guestsNumber}
                                                    onChange={(e) => setGuestsNumber(e.target.value)}
                                                    onKeyUp={clearErrors}
                                                />
                                                {errors.guests_number && <p className="mt-1 text-red-500 text-sm">{errors.guests_number}</p>}
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-2">Venue</label>
                                                <input
                                                    className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-300 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
                                                    type="text"
                                                    placeholder="Venue details"
                                                    value={venue}
                                                    onChange={(e) => setVenue(e.target.value)}
                                                    onKeyUp={clearErrors}
                                                />
                                                {errors.venue && <p className="mt-1 text-red-500 text-sm">{errors.venue}</p>}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Message Section */}
                                    <div className="bg-white p-6 rounded-xl border border-gray-200">
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Additional Details</label>
                                        <textarea
                                            className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-300 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
                                            rows="4"
                                            placeholder="Tell us more about your event..."
                                            value={message}
                                            onChange={(e) => setMessage(e.target.value)}
                                            onKeyUp={clearErrors}
                                        ></textarea>
                                        {errors.message && <p className="mt-1 text-red-500 text-sm">{errors.message}</p>}
                                    </div>

                                    {/* Submit Button */}
                                    <div className="text-center">
                                        <button
                                            type="submit"
                                            id="submitBtn"
                                            className="inline-flex items-center px-8 py-4 text-lg font-semibold rounded-lg text-white bg-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-200"
                                        >
                                            Send Message
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Contact;