'use client';

import { useState } from 'react';
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import countries from './ContactDropdown'; // Adjust the path as necessary

function Signup() {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [selectedCountry, setSelectedCountry] = useState(countries[0]); // Default to first country

    const togglePasswordVisibility = () => {
        setShowPassword((prev) => !prev);
    };

    const toggleConfirmPasswordVisibility = () => {
        setShowConfirmPassword((prev) => !prev);
    };

    return (
        <div className="flex w-full h-screen overflow-hidden">
            <div className="w-1/2" style={{
                backgroundImage: "url('/background1.jpg')",
                backgroundSize: 'cover',
                backgroundPosition: 'right'
            }}>
                <div className="flex flex-col w-full mx-auto text-black mt-8">
                    <h1 className="text-3xl mx-auto my-2 font-poppins_regular">Sign Up</h1>

                    <label htmlFor="name" className="my-1 font-poppins_regular text-lg mx-20">Full Name</label>
                    <input
                        id="name"
                        className="border-2 rounded-lg border-black/5 shadow-md mb-3 px-3 py-2 font-poppins_regular mx-20 w-3/4" // Reduced width
                        type="text"
                        placeholder="Enter your Name"
                    />

                    <label htmlFor="contact" className="my-1 font-poppins_regular text-lg mx-20">Contact No.</label>
                    <div className="flex items-center border-2 rounded-lg border-black/5 shadow-md mx-20 mb-3 w-3/4"> {/* Reduced width */}
                        <div className="relative flex items-center">
                            <select
                                className="appearance-none h-full pl-6 pr-3 bg-transparent border-r border-gray-300 rounded-l-lg"
                                value={selectedCountry.code}
                                onChange={(e) => {
                                    const selected = countries.find(country => country.code === e.target.value);
                                    setSelectedCountry(selected);
                                }}
                                style={{
                                    backgroundImage: `url(${selectedCountry.flag})`,
                                    backgroundRepeat: 'no-repeat',
                                    backgroundPosition: 'center left 6px',
                                    backgroundSize: '18px 12px'
                                }}
                            >
                                {countries.map(country => (
                                    <option key={country.code} value={country.code} style={{
                                        backgroundImage: `url(${country.flag})`,
                                        backgroundRepeat: 'no-repeat',
                                        backgroundPosition: 'center',
                                        backgroundSize: '18px 12px',
                                    }}>
                                        &nbsp;
                                    </option>
                                ))}
                            </select>
                        </div>
                        <input
                            id="contact"
                            className="flex-1 px-3 py-2 font-poppins_regular rounded-r-lg"
                            type="tel"
                            placeholder="Enter your Contact no."
                        />
                    </div>

                    {/* New City Input Field */}
                    <label htmlFor="city" className="my-1 font-poppins_regular text-lg mx-20">City</label>
                    <input
                        id="city"
                        className="border-2 rounded-lg border-black/5 shadow-md mb-3 px-3 py-2 font-poppins_regular mx-20 w-3/4" // Reduced width
                        type="text"
                        placeholder="Enter your City"
                    />

                    <label htmlFor="password" className="my-1 font-poppins_regular text-lg mx-20">Password</label>
                    <div className="relative mx-20 w-3/4"> {/* Reduced width */}
                        <input
                            id="password"
                            className="border-2 rounded-lg border-black/5 shadow-md mb-3 px-3 py-2 font-poppins_regular w-full"
                            type={showPassword ? 'text' : 'password'}
                            placeholder="Enter your password"
                        />
                        <button
                            type="button"
                            onClick={togglePasswordVisibility}
                            className="absolute right-3 top-2"
                        >
                            <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} className='text-gray-500' />
                        </button>
                    </div>

                    <label htmlFor="confirmPassword" className="my-1 font-poppins_regular text-lg mx-20">Confirm Password</label>
                    <div className="relative mx-20 w-3/4"> {/* Reduced width */}
                        <input
                            id="confirmPassword"
                            className="border-2 rounded-lg border-black/5 shadow-md mb-5 px-3 py-2 font-poppins_regular w-full"
                            type={showConfirmPassword ? 'text' : 'password'}
                            placeholder="Confirm your password"
                        />
                        <button
                            type="button"
                            onClick={toggleConfirmPasswordVisibility}
                            className="absolute right-3 top-2"
                        >
                            <FontAwesomeIcon icon={showConfirmPassword ? faEyeSlash : faEye} className='text-gray-500' />
                        </button>
                    </div>

                    <Link href="/login" className="mx-20 my-1">
                        <button
                            type="button"
                            className="bg-gradient-to-b from-[#D91010] to-[#C11010] rounded-xl h-10 text-white text-xl my-4 font-poppins_regular w-[95%]"
                        >
                            Sign Up
                        </button>
                    </Link>

                    <Link href="https://www.google.com" className="mx-auto my-1 text-lg flex items-center">
                        <span>or Signup with</span>
                        <Image src="/google.png" width={42} height={42} alt="Google Icon" className="ml-1" /> {/* Slightly larger */}
                    </Link>

                    <hr className="border-t border-gray-400 my-2 mx-[20%]" /> {/* Narrowed horizontal line */}

                    <div className="flex justify-center mb-6 text-lg mx-auto"> {/* Slightly larger text */}
                        <h3 className="font-poppins_regular mb-2">Already have an account?</h3>
                        <Link href="/login" className="font-poppins_regular text-red-700 ml-1">Login</Link>
                    </div>
                </div>
            </div>

            <div className="w-1/2 relative rounded-3xl">
                <Image 
                    src="/login_batsman.png" 
                    alt="Signup Illustration"
                    fill
                    style={{ objectFit: "cover" }}
                />
            </div>
        </div>
    );
}

export default Signup;
