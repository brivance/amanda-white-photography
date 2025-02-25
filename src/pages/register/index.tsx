import { Controller, SubmitHandler, useForm } from "react-hook-form";

import { FC } from 'react';
import Page from '../../components/navigation/Page';
import React from 'react';
import { toast } from 'react-toastify';
import { useRouter } from 'next/compat/router';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

export const RegisterParams = z.object({
  email: z.string().min(1, { message: "Email is required" }).email({ message: "Invalid email address" }),
  registrationCode: z.string().min(1, { message: "Registration code is required" }),
  username: z.string().min(1, { message: "Username is required" }),
  password: z.string().min(1, { message: "Password is required" }),
});

type RegisterParams = z.infer<typeof RegisterParams>;

const RegisterPage: FC = () => {

  const {
    control,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm<RegisterParams>({
    resolver: zodResolver(RegisterParams),
    defaultValues: {
      username: "",
      password: "",
      email: "",
      registrationCode: "",
    },
  });

  const router = useRouter();

  const onSubmit: SubmitHandler<RegisterParams> = async (data) => {
    try {
      const response = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Failed to register");
      }

      await response.json(); // Ensure this is awaited

      toast.success("Registration successful");
      router?.push("/login");
    } catch (error) {
      toast.error("Failed to register");
      console.error("Error:", error);
    }
  };

  return (
    <Page>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col items-center justify-center font-gotu gap-8 mt-32">
          <p>A registration code is required to continue.</p>
          <div className="flex flex-col gap-4 items-center max-w-64">
            <Controller
              control={control}
              name="email"
              render={({ field: { value, onChange } }) => (
                <input
                  placeholder="Email"
                  type="text"
                  value={value}
                  onChange={onChange}
                  className="border border-gray-300 p-2 rounded min-w-64"
                />
              )}
            />
            {errors.email && <p className="text-red-500 text-xs -mt-3">{errors.email.message}</p>}
            <Controller
              control={control}
              name="registrationCode"
              render={({ field: { value, onChange } }) => (
                <input
                  placeholder="Registration Code"
                  id="registrationCode"
                  type="text"
                  value={value}
                  onChange={onChange}
                  className="border border-gray-300 p-2 rounded min-w-64 mb-3"
                />
              )}
            />
            {errors.registrationCode && <p className="text-red-500 text-xs -mt-6">{errors.registrationCode.message}</p>}
            <Controller
              control={control}
              name="username"
              render={({ field: { value, onChange } }) => (
                <input
                  placeholder="Username"
                  type="text"
                  value={value}
                  onChange={onChange}
                  className="border border-gray-300 p-2 rounded min-w-64"
                />
              )}
            />
            {errors.username && <p className="text-red-500 text-xs -mt-3">{errors.username.message}</p>}
            <Controller
              control={control}
              name="password"
              render={({ field: { value, onChange } }) => (
                <input
                  placeholder="Password"
                  title="Password"
                  id="password"
                  type="password"
                  value={value}
                  onChange={onChange}
                  className="border border-gray-300 p-2 rounded min-w-64 mb-3"
                />
              )}
            />
            {errors.password && <p className="text-red-500 text-xs -mt-6">{errors.password.message}</p>}
            <div className="">
              <button
                disabled={isSubmitting}
                type="submit"
                className="border-4 border-light-brown bg-white text-light-brown p-2 rounded"
              >
                <div className="flex flex-row items-center gap-2"><strong>Register</strong></div>
              </button>
            </div>
          </div>
        </div>
      </form>
    </Page>
  );
};

export default RegisterPage;
