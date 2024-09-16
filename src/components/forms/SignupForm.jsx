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
         <div>
            <form action={formAction}>
                <div>
                     <div>
                        <h2 >Sign Up</h2>
                        <p>Enter your details to create a new account</p>
                    </div>
                     <div>
                         <div>
                            <label htmlFor="username">Username</label>
                            <input
                                id="username"
                                name="username"
                                type="text"
                                placeholder="username"
                            />
                            <ZodErrors error={formState?.zodErrors?.username} />
                        </div>
                         <div>
                            <label htmlFor="email">Email</label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                placeholder="name@example.com"
                            />
                            <ZodErrors error={formState?.zodErrors?.email} />
                        </div>

                         <div>
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
                     <div>
                        <button >Sign Up</button>
                        <StrapiErrors error={formState?.StrapiErrors} />
                    </div>
                </div>
                 <div>
                    Have an account?
                    <Link  href="signin">
                        Sing In
                    </Link>
                </div>
            </form>
        </div>
    );
}