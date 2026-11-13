"use server";
export const addDestination = async (formData) => {
    const res = await fetch('http://localhost:5000/packages', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body:JSON.stringify(formData)
    })
    const data = await res.json()
    console.log(data);
    return data;
}


export const addBooking = async (data) => {
    const res = await fetch('http://localhost:5000/bookings', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    });

    const result = await res.json();
    return result;
};




