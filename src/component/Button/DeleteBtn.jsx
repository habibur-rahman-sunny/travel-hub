'use client'

import { deleteBooking } from "@/app/lib/action";
import { Button } from "@heroui/react";

const DeleteBooking = ({ id }) => {
    const handleDelete = async () => {
        await deleteBooking(id);
    };

    return (
        <Button color="danger" variant="bordered" size="sm" onPress={handleDelete}>
            Delete
        </Button>
    );
};

export default DeleteBooking;