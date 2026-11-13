import Link from 'next/link';
import React from 'react';

const Navbar = () => {
    return (
        <div className="w-full bg-white shadow-md px-8 py-3 flex items-center justify-between relative">

            {/* Left Navigation */}
            <div className="flex items-center gap-7 text-sm">
                <Link href="/" className="text-sky-500">Home</Link>
                <Link href="/destinations" className="hover:text-sky-500">Destinations</Link>
                <Link href="/my-bookings" className="hover:text-sky-500">My Bookings</Link>
                <Link href="/add-destination" className="hover:text-sky-500">Add DEstination</Link>
            </div>

            {/* Website Name */}
            <h1 className="absolute left-1/2 -translate-x-1/2 text-2xl font-bold text-cyan-600">
                Wanderlast
            </h1>

            {/* Right Navigation */}
            <div className="flex items-center gap-7 text-sm">
                <a href="/profile" className="flex items-center gap-1 hover:text-sky-500">
                    Profile
                </a>
                <a href="/login" className="hover:text-sky-500">Login</a>
                <a href="/signup" className="hover:text-sky-500">Sign Up</a>
            </div>

        </div>
    );
};

export default Navbar;