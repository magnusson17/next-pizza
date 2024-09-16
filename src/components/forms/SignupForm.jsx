"use client";

import Link from "next/link";
import { useFormState } from "react-dom";

import { registerUserAction } from "@/app/data/actions/auth-actions";
import { ZodErrors } from "@/components/custom/ZodErrors";
import { StrapiErrors } from "@/components/custom/StrapiErrors";

const INITIAL_STATE = {
    zodErrors: null,
    strapiErrors: null,
    data: null,
    message: null,
};

export function SignupForm() {
    const [formState, formAction] = useFormState(registerUserAction, INITIAL_STATE);

    return (
        <div className="">
            <form action={formAction}>
                <div>
                    <div className="">
                        <h2 className="">Sign Up</h2>
                        <p>Enter your details to create a new account</p>
                    </div>
                    <div className="">
                        <div className="">
                            <label htmlFor="username">Username</label>
                            <input
                                id="username"
                                name="username"
                                type="text"
                                placeholder="username"
                            />
                            <ZodErrors error={formState?.zodErrors?.username} />
                        </div>
                        <div className="">
                            <label htmlFor="email">Email</label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                placeholder="name@example.com"
                            />
                            <ZodErrors error={formState?.zodErrors?.email} />
                        </div>

                        <div className="">
                            <label htmlFor="password">Password</label>
                            <input
                                id="password"
                                name="password"
                                type="password"
                                placeholder="password"
                            />
                            <ZodErrors error={formState?.zodErrors?.password} />
                        </div>
                    </div>
                    <div className="">
                        <button className="">Sign Up</button>
                        <StrapiErrors error={formState?.StrapiErrors} />
                    </div>
                </div>
                <div className="">
                    Have an account?
                    <Link className="" href="signin">
                        Sing In
                    </Link>
                </div>
            </form>
        </div>
    );
}