"use client";

import React from "react";
import { useFormState } from "react-dom"
import { updateProfileAction } from "@/data/actions/profile-actions";
import { StrapiErrors } from "@/components/custom/StrapiErrors";

const INITIAL_STATE = {
    data: null,
    strapiErrors: null,
    message: null,
};

export function ProfileForm({ data, className }) {
    const updateProfileWithId = updateProfileAction.bind(null, data.id);
    const [formState, formAction] = useFormState(updateProfileWithId, INITIAL_STATE);

    return (
        <form className={className} action={formAction}>
            <div>
                <div>
                    <input
                        id="username"
                        name="username"
                        placeholder="Username"
                        defaultValue={data.username || ""}
                    />
                    <input
                        id="email"
                        name="email"
                        placeholder="Email"
                        defaultValue={data.email || ""}
                    />
                </div>

                <div>
                    <input
                        id="firstName"
                        name="firstName"
                        placeholder="First Name"
                        defaultValue={data.firstName || ""}
                    />
                    <input
                        id="lastName"
                        name="lastName"
                        placeholder="Last Name"
                        defaultValue={data.lastName || ""}
                    />
                </div>
                <textarea
                    id="bio"
                    name="bio"
                    placeholder="Write your bio here..."
                    defaultValue={data.bio || ""}
                    required
                />
            </div>
            <div>
                <button text="Update Profile">Submit</button>
                <StrapiErrors error={formState?.strapiErrors} />
            </div>
        </form>
    );
}