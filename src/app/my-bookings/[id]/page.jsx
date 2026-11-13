import { getBookingDetails } from "@/app/lib/data";
import { Suspense } from "react";

const BookingDetails = async ({ params }) => {
    const { id } = await params;
    const booking = await getBookingDetails(id);
    console.log(booking);

    return (
        <div className="max-w-5xl mx-auto p-10">
            <h1 className="text-3xl font-bold">
                {booking?.destinationName}
            </h1>
            <p>{booking?.country}</p>
            <p>{booking?.departureDate}</p>
            <p>{booking?.duration}</p>
            <p>${booking?.price}</p>
        </div>
    );
};

const BookingDetailsPage = ({ params }) => {
    return (
        <Suspense fallback={<p className="text-center py-20">Loading details...</p>}>
            <BookingDetails params={params} />
        </Suspense>
    );
};

export default BookingDetailsPage;