// For get destination packages
export const getDestinations = async () => {
    const res = await fetch('http://localhost:5000/packages', {
        cache: 'no-store'
    });
    const data = await res.json();
    return data;
};

// For get booking data
export const getBookings = async () => {
    const res = await fetch('http://localhost:5000/bookings', {
        cache: "no-store"
    });
    return res.json();
};

export const getBookingDetails = async (id) => {
    const res = await fetch(`http://localhost:5000/bookings/${id}`, {
        cache: 'no-store'
    });

    return res.json();
};

