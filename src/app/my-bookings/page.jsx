import Image from "next/image";
import { Suspense } from "react";
import { getBookings } from "../lib/data";
import { Button } from "@heroui/react";
import Link from "next/link";

const BookingList = async () => {
    const bookings = await getBookings();

    return (
        <div className="space-y-5">
            {bookings.map((booking) => (
                <div key={booking._id} className="bg-white border border-gray-200 rounded-xl p-5 flex flex-col md:flex-row gap-6 shadow-sm hover:shadow-md transition">
                    <div className="w-full md:w-64 h-48 relative rounded-lg overflow-hidden shrink-0 bg-gray-100">
                        {booking.imageUrl ? (
                            <Image
                                src={booking.imageUrl}
                                alt={booking.destinationName}
                                fill
                                className="object-cover"
                            />
                        ) : (
                            <div className="flex items-center justify-center h-full text-gray-400">
                                No Image
                            </div>
                        )}
                    </div>

                    <div className="flex-1 flex flex-col justify-between gap-4">
                        <div>
                            <div className="flex justify-between items-center mb-3">
                                <span className="badge badge-warning badge-outline">
                                    Pending
                                </span>
                                <span className="text-xs text-gray-400">
                                    ID: {booking._id}
                                </span>
                            </div>

                            <h2 className="text-2xl font-bold text-gray-800">
                                {booking.destinationName}
                            </h2>

                            <p className="text-sm text-gray-500 mt-2">
                                {booking.country} {booking.category && `• ${booking.category}`}
                            </p>

                            <div className="flex flex-wrap gap-x-6 gap-y-2 mt-4 text-sm text-gray-600">
                                <p>📅 Departure: {booking.departureDate || "Not selected"}</p>
                                {booking.duration && <p>🕒 Duration: {booking.duration}</p>}
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4 border-t pt-4">
                            <div>
                                <p className="text-xs text-gray-400">Total Price</p>
                                <p className="text-2xl font-bold text-cyan-600">
                                    ${booking.price || 0}
                                </p>
                            </div>

                            <div className="flex gap-3">
                                <Button color="danger" variant="bordered" size="sm">
                                    Cancel
                                </Button>
                                <Link
                                    href={`/my-bookings/${booking._id}`}
                                    className="..."
                                >
                                    View Details
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            ))}

            {bookings.length === 0 && (
                <div className="text-center py-20 border border-dashed rounded-xl">
                    <h2 className="text-xl font-semibold text-gray-700">
                        No Bookings Found!
                    </h2>
                    <p className="text-gray-500 mt-2">
                        You have not booked any destinations yet.
                    </p>
                </div>
            )}
        </div>
    );
};

const BookingPage = () => {
    return (
        <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-gray-800">
                    My Bookings
                </h1>
                <p className="text-gray-500 mt-2">
                    Manage and view your upcoming travel plans
                </p>
            </div>

            <Suspense fallback={
                <p className="text-center py-16 text-gray-500">
                    Loading bookings...
                </p>
            }>
                <BookingList />
            </Suspense>
        </div>
    );
};

export default BookingPage;