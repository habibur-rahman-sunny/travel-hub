import { getDestinations } from "../lib/data";
import { Suspense } from "react";
import DestinationCard from "@/component/UI/Card/DestinationCard";

const DestinationList = async () => {
    const destination = await getDestinations();

    return destination.map((item) => (
        <DestinationCard key={item._id} item={item} />
    ));
};

const DestinationPage = async () => {
    return (
        <div className="w-full max-w-none px-10 py-8">
            <div className="mb-7">
                <h1 className="text-4xl font-normal tracking-tight">
                    Explore All Destinations
                </h1>
                <p className="text-sm text-gray-500 mt-3">
                    Find your perfect travel experience from our curated collection
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 border border-gray-300 mb-3">
                <select className="px-4 py-3 text-sm border-r border-gray-300 outline-none">
                    <option>CATEGORY</option>
                    <option>Beach</option>
                    <option>Mountain</option>
                    <option>Adventure</option>
                </select>
                <select className="px-4 py-3 text-sm border-r border-gray-300 outline-none">
                    <option>PRICE RANGE</option>
                    <option>Low to High</option>
                    <option>High to Low</option>
                </select>
                <select className="px-4 py-3 text-sm outline-none">
                    <option>SORT BY</option>
                    <option>Latest</option>
                    <option>Oldest</option>
                </select>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-5">
                <Suspense fallback={<p>Loading destinations...</p>}>
                    <DestinationList></DestinationList>
                </Suspense>
            </div>
        </div>
    );
};

export default DestinationPage;