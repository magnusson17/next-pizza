"use server";

import qs from "qs";
import { mutateData } from "@/data/services/mutate-data";

export async function updateProfileAction(userId, prevState, formData) {
    // per convertire in un semplice js obj
    const rawFormData = Object.fromEntries(formData);

    // vedi src/data/services/get-user-me-loader.js
    const query = qs.stringify({
        populate: "*",
    });

    const payload = {
        username: rawFormData.username,
        email: rawFormData.email,
        firstName: rawFormData.firstName,
        lastName: rawFormData.lastName,
        bio: rawFormData.bio,
    };

    const responseData = await mutateData("PUT", `/api/users/${userId}?${query}`, payload);

    if (!responseData) {
        return {
            ...prevState,
            strapiErrors: null,
            message: "Ops! Something went wrong. Please try again.",
        };
    }

    if (responseData.error) {
        return {
            ...prevState,
            strapiErrors: responseData.error,
            message: "Failed to Register.",
        };
    }

    return {
        ...prevState,
        message: "Profile Updated",
        data: responseData,
        strapiErrors: null,
    };
}