import {useEffect, useState} from "react";
import { Transition } from "@headlessui/react";
import { Link } from "react-router-dom";
import { app, configUi } from "../firebaseConf";
import firebase from "firebase/compat/app";
import 'firebase/compat/auth';
import { ThisIsStatusAuth } from "./ThisIsStatusAuth";

function Navbar(){
    const [isOpen, setIsOpen] = useState(false);
    return(
            <nav className="bg-gray-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex items-center">
                            <div className="flex-shrink-0">
                                <img
                                className="h-8 w-8"
                                src="https://media-exp1.licdn.com/dms/image/C4D03AQFkg0CIGZwJlQ/profile-displayphoto-shrink_800_800/0/1620110706178?e=1652313600&v=beta&t=jYJAFEp38bJbrq9fla50-cSjASdwn0Tc5ZvOIXlBBp4"
                                alt="Me"
                                />
                            </div>
                            <div className="hidden md:block">
                                <div className="ml-10 flex items-baseline space-x-4">
                                    <ThisIsStatusAuth />
                                    <Link style={{color: "white"}} to="/add_project">Ajouter un projet</Link>
                                </div>
                                
                        </div>
                    </div>
                    <div className="-mr-2 flex md:hidden">
                    <h1>authentification</h1>
                    <div id="firebaseui-auth-container"></div>
                    <div id="loader">Loading...</div>
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        type="button"
                        className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                        aria-controls="mobile-menu"
                        aria-expanded="false"
                    >
                        <span className="sr-only">Open main menu</span>
                        {!isOpen ? (
                        <svg
                            className="block h-6 w-6"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            aria-hidden="true"
                        >
                            <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                        ) : (
                        <svg
                            className="block h-6 w-6"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            aria-hidden="true"
                        >
                            <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                        )}
                    </button>
                    </div>
                </div>
                </div>

                <Transition
                    show={isOpen}
                    enter="transition ease-out duration-100 transform"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="transition ease-in duration-75 transform"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                >
                {(ref) => (
                    <div className="md:hidden" id="mobile-menu">
                    <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <a
                        href="#"
                        className="hover:bg-gray-700 text-white block px-3 py-2 rounded-md text-base font-medium"
                        >
                        <Link to="/login">Login</Link>
                        </a>

                        <a
                        href="#"
                        className="hover:bg-gray-700 text-white block px-3 py-2 rounded-md text-base font-medium"
                        >
                       <Link to="/register">Register</Link>
                        </a>                      
                        
                    </div>
                    </div>
                )}
                </Transition>
            </nav>
    )
}

export default Navbar;