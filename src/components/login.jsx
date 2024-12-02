'use client';

import { useState } from 'react'; 
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

function Login() {
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword((prev) => !prev);
    };

    return (
        <div className="flex w-full h-screen">
            <div className="w-1/2" style={{
                backgroundImage: "url('/background1.jpg')",
                backgroundSize: 'cover',
                backgroundPosition: 'right'
            }}>
                <div className="flex flex-col w-full mx-auto ">
                    <h1 className="text-3xl mx-auto my-14 font-poppins_regular ">Login Here</h1>

                        <label htmlFor="contact" className="my-3 font-poppins_regular text-xl mx-28 ">Contact No.</label>
                        
                            <input
                                id="contact"
                                className="border-2 rounded-lg border-black/5 shadow-xl mb-10 px-4 py-2 font-poppins_regular mx-28"
                                type="number"
                                placeholder="Enter your Contact no."
                            />
                      

                        <label htmlFor="password" className="my-3 font-poppins_regular text-xl mx-28">Password</label>
                        <div className="relative mx-28">
                            <input
                                id="password"
                                className="border-2 rounded-lg border-black/5 shadow-xl mb-10 px-4 py-2 font-poppins_regular w-full"
                                type={showPassword ? 'text' : 'password'}
                                placeholder="Enter your password"
                            />
                            <button
                                type="button"
                                onClick={togglePasswordVisibility}
                                className="absolute right-4 top-2"
                            >
                                <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} className='text-gray-500'  />
                            </button>
                        </div>

                        <Link href="/signup" className='mx-28 my-2 hover:shadow-l' >
                            <button
                                type="button"
                                className="bg-gradient-to-b from-[#D91010] to-[#C11010] rounded-xl h-12 text-white text-2xl my-5 font-poppins_regular w-full"
                            >
                             Sign Up
                            </button>
                        </Link>

                    <Link href="https://www.google.com" className="mx-auto my-2 text-xl flex items-center">
                        or Signup with
                        <Image src="/google.png" width={40} height={40} alt="Google Icon" className="ml-1" />
                    </Link>

                    <hr className="border-t border-gray-400 my-2 mx-28" />
                    <div className="flex mx-auto">
                        <h3 className="font-poppins_regular mb-4 my-2">Not a member Yet?</h3>
                        <Link href="/signup" className="font-poppins_regular text-red-700 ml-1 my-2">Signup</Link>
                    </div>
                </div>
            </div>

            <div className="w-1/2 relative rounded-3xl"> {/* Set position to relative */}
                <Image 
                    src="/login_batsman.png" 
                    layout="fill" // Use fill layout
                    objectFit="cover" // Cover the container
                    alt="Login Batsman" 
                />
            </div>
        </div>
    );
}

export default Login;
