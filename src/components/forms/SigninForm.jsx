"use client";

import Link from "next/link";
import { useFormState } from "react-dom";

import { loginUserAction } from "@/app/data/actions/auth-actions";
import { ZodErrors } from "@/components/custom/ZodErrors";
import { StrapiErrors } from "@/components/custom/StrapiErrors";

const INITIAL_STATE = {
    zodErrors: null,
    strapiErrors: null,
    data: null,
    message: null,
};

export function SigninForm() {
    const [formState, formAction] = useFormState(loginUserAction, INITIAL_STATE);

    return (
        <div className="">
            <form action={formAction}>
                <div>
                    <div className="">
                        <h2 className="">Sign In</h2>
                        <p>Enter your details to sign in to your account</p>
                    </div>
                    <div className="">
                        <div className="">
                            <label htmlFor="email">Email</label>
                            <input
                                id="identifier"
                                name="identifier"
                                type="text"
                                placeholder="username or email"
                            />
                            <ZodErrors error={formState?.zodErrors?.identifier} />
                        </div>
                        <div className="">
                            <label htmlFor="password">Password</label>
                            <input
                                id="password"
                                name="password"
                                type="password"
                                placeholder="password"
                            />
                            <ZodErrors error={formState.zodErrors?.password} />
                        </div>
                    </div>
                    <div className="">
                        <button className="">Sign In</button>
                        <StrapiErrors error={formState?.StrapiErrors} />
                    </div>
                </div>
                <div className="">
                    Don't have an account?
                    <Link className="" href="signup">
                        Sign Up
                    </Link>
                </div>
            </form>
        </div>
    );
}