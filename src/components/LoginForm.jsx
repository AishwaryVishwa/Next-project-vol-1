"use client";
import React from "react";
import CustomInputs from "./ui/CustomInputs";
import Link from "next/link";
import { signIn } from "@/actions/auth.actions";
import { useFormik } from "formik";
import { loginSchema } from "@/validationSchemas/auth.schema";

const initialValues = {
  email: "",
  password: "",
};  
export default function LoginForm() {

  const handleFormSubmit = async (values) =>{
    console.log(values);
    
    const {error} = await signIn(values);
    console.log(error,'error');
    
  }
  const { handleSubmit, errors, isSubmitting, handleChange, touched } =
    useFormik({
      initialValues,  
      onSubmit: handleFormSubmit,
      validationSchema: loginSchema,
    });
  return (
    <div className="w-1/2 m-auto mt-1">
      <h3 className="text-3xl mb-10">Welcome black</h3>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
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
        <button  className="bg-slate-200 p-3 rounded-3xl mt-6 text-stone-950">
          {isSubmitting ? "Submitting" : "Submit"}
        </button>
        <p>
          Create new account <Link href="/login">Sign Up</Link>
        </p>
      </form>
    </div>
  );
}
