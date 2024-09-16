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
         <div className="page">
            <form action={formAction}>
                <div>
                    <div>
                        <h2 >Sign In</h2>
                        <p>Enter your details to sign in to your account</p>
                    </div>
                    <div>
                        <div className="form-item form-type-textfield">
                            <label htmlFor="email">Email</label>
                            <input
                                id="identifier"
                                name="identifier"
                                type="text"
                                placeholder="username or email"
                            />
                            <ZodErrors error={formState?.zodErrors?.identifier} />
                        </div>
                         <div>
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
                     <div>
                        <button >Sign In</button>
                        <StrapiErrors error={formState?.StrapiErrors} />
                    </div>
                </div>
                 <div>
                    Don't have an account?
                    <Link  href="signup">
                        Sign Up
                    </Link>
                </div>
            </form>
        </div>
    );
}