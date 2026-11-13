"use client"
import { addBooking } from "@/app/lib/action";
import { Button } from "@heroui/react";
import Image from "next/image";

const DestinationCard = ({ item }) => {

    const handleBooking =(myBooking)=>{
        addBooking(myBooking)
    }

    return (
        <div className="group">
            <div className="relative h-48 overflow-hidden bg-gray-100">
                {item.imageUrl && (
                    <Image
                        src={item.imageUrl}
                        alt={item.destinationName}
                        fill
                        className="object-cover group-hover:scale-105 transition duration-300"
                    />
                )}
            </div>

            <div className="pt-3">
                <p className="text-sm text-gray-500">
                    {item.country}
                </p>

                <div className="flex justify-between items-center mt-1">
                    <h2 className="text-lg font-medium capitalize">
                        {item.destinationName}
                    </h2>
                    <p className="text-base">
                        {item.price && `$${item.price}`}
                        <span className="text-xs text-gray-500">/Person</span>
                    </p>
                </div>

                <p className="text-xs text-gray-500 mt-1">
                    {item.duration}
                </p>

                <Button onClick={()=>handleBooking(item)} className="text-sm text-white mt-3">
                    BOOK NOW ↗
                </Button>
            </div>
        </div>
    );
};

export default DestinationCard;