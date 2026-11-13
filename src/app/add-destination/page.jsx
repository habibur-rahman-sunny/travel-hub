"use client";
import { Button, TextField, Label, Input, FieldError, Select, ListBox, TextArea } from "@heroui/react";
import { addDestination } from "../lib/action";

const AddDestinationPackage = () => {

    const addDestinationWrapper = (formData) => {
        const destinationData = Object.fromEntries(formData.entries());
        return addDestination(destinationData)
    };

    return (
        <div className="min-h-screen bg-white p-6">
            <h1 className="text-3xl font-light mb-12">Add New Travel Package</h1>

            <div className="max-w-md mx-auto bg-white border border-gray-100 shadow-md p-6">
                <form action={addDestinationWrapper} className="space-y-5">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-3 gap-y-3">

                        {/* Destination Name */}
                        <div className="md:col-span-2">
                            <TextField isRequired>
                                <Label className="text-xs">Destination Name</Label>
                                <Input name="destinationName" placeholder="Cumilla" className="rounded-none bg-gray-50 border border-gray-100 h-7 text-xs px-2" />
                                <FieldError />
                            </TextField>
                        </div>

                        {/* Country */}
                        <TextField isRequired>
                            <Label className="text-xs">Country</Label>
                            <Input name="country" placeholder="Bangladesh" className="rounded-none bg-gray-50 border border-gray-100 h-7 text-xs px-2" />
                            <FieldError />
                        </TextField>

                        {/* Category */}
                        <div>
                            <Select name="category" className="w-full">
                                <Label className="text-xs">Category</Label>
                                <Select.Trigger className="rounded-none bg-gray-50 border border-gray-100 h-7 text-xs px-2">
                                    <Select.Value />
                                    <Select.Indicator />
                                </Select.Trigger>
                                <Select.Popover>
                                    <ListBox>
                                        {["Beach", "Mountain", "City", "Adventure", "Cultural", "Luxury"].map((item) => (
                                            <ListBox.Item key={item} id={item} textValue={item}>
                                                {item}
                                                <ListBox.ItemIndicator />
                                            </ListBox.Item>
                                        ))}
                                    </ListBox>
                                </Select.Popover>
                            </Select>
                        </div>

                        {/* Price */}
                        <TextField type="number">
                            <Label className="text-xs">Price (Taka)</Label>
                            <Input name="price" type="number" placeholder="1299" className="rounded-none bg-gray-50 border border-gray-100 h-7 text-xs px-2" />
                            <FieldError />
                        </TextField>

                        {/* Duration */}
                        <TextField>
                            <Label className="text-xs">Duration</Label>
                            <Input name="duration" placeholder="3 days" className="rounded-none bg-gray-50 border border-gray-100 h-7 text-xs px-2" />
                            <FieldError />
                        </TextField>

                        {/* Departure Date */}
                        <div className="md:col-span-2">
                            <TextField type="date">
                                <Label className="text-xs">Departure Date</Label>
                                <Input name="departureDate" type="date" className="rounded-none bg-gray-50 border border-gray-100 h-7 text-xs px-2" />
                                <FieldError />
                            </TextField>
                        </div>

                        {/* Image URL */}
                        <div className="md:col-span-2">
                            <TextField>
                                <Label className="text-xs">Image URL</Label>
                                <Input name="imageUrl" type="url" placeholder="https://example.com/image.jpg" className="rounded-none bg-gray-50 border border-gray-100 h-7 text-xs px-2" />
                                <FieldError />
                            </TextField>
                        </div>

                        {/* Description */}
                        <div className="md:col-span-2">
                            <TextField>
                                <Label className="text-xs">Description</Label>
                                <TextArea name="description" placeholder="Describe the travel experience..." className="rounded-none bg-gray-50 border border-gray-100 text-xs p-2 h-20 resize-none" />
                                <FieldError />
                            </TextField>
                        </div>
                    </div>

                    {/* Buttons */}
                    <div className="flex justify-end gap-2 pt-1">
                        <Button type="reset" variant="outline" className="rounded-none border border-red-400 text-red-500 text-xs px-4 h-8">
                            Cancel
                        </Button>
                        <Button type="submit" className="rounded-none bg-cyan-600 text-white text-xs px-4 h-8">
                            Add Destination
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddDestinationPackage;