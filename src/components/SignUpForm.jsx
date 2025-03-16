"use client";
import React from "react";
import CustomInputs from "./ui/CustomInputs";
import Link from "next/link";
import { signUp } from "@/actions/auth.actions";
import { useFormik } from "formik";
import { SignupSchema } from "@/validationSchemas/auth.schema";

const initialValues = {
  name: "",
  username: "",
  email: "",
  password: "",
};
export default function SignUpForm() {
  const { handleSubmit, errors, isSubmitting, handleChange, touched } =
    useFormik({
      initialValues,
      onSubmit: signUp,
      validationSchema: SignupSchema,
    });
  return (
    <div className="w-fit m-auto mt-1">
      <h3 className="text-3xl mb-10">Create new account</h3>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div className="flex gap-8">
          <CustomInputs
            inputType="formField"
            error={errors}
            touched={touched}
            onChange={handleChange}
            label="Name"
            name="name"
          />
          <CustomInputs
            inputType="formField"
            touched={touched}
            error={errors}
            onChange={handleChange}
            label="Username"
            name="username"
          />
        </div>
        <CustomInputs
          inputType="formField"
          error={errors}
          touched={touched}
          onChange={handleChange}
          label="Email"
          name="email"
        />
        <CustomInputs
          inputType="formField"
          touched={touched}
          error={errors}
          onChange={handleChange}
          label="Password"
          name="password"
        />
        <button className="bg-slate-200 p-3 rounded-3xl mt-6 text-stone-950">
          {isSubmitting ? "Submitting" : "Submit"}
        </button>
        <p>
          Already have an account ? <Link href="/login">Login</Link>
        </p>
      </form>
    </div>
  );
}
