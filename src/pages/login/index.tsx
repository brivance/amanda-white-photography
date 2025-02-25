import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { signIn, useSession } from "next-auth/react";

import { FC } from 'react';
import { HiOutlineArrowLongRight } from "react-icons/hi2";
import Page from '../../components/navigation/Page';
import React from 'react';
import Title from '../../components/sections/Title';
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import { z } from 'zod';

const LoginParams = z.object({
  username: z.string().min(1),
  password: z.string().min(1),
});

type LoginParams = z.infer<typeof LoginParams>;

const LoginPage: FC = () => {
  const router = useRouter();
  const { callbackUrl = '/' } = router.query;
  const {
    control,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm<LoginParams>({
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<LoginParams> = async (data) => {
    const result = await signIn("credentials", {
      redirect: false,
      username: data.username,
      password: data.password,
    });

    if (result?.error) {
      toast.error("Invalid credentials");
      console.error("Login error:", result.error);
    } else {
      toast.success("Login successful");
      router.push("/");
    }
  };

  const { data: session } = useSession();
  if (session) {
    router?.push(callbackUrl as string || "/");
  }

  return (
    <Page>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex items-center justify-center">
          <div className="flex flex-col gap-4 items-center font-gotu max-w-64">
            <Title
              title="Login"
            />
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
            {errors.username && <p>{errors.username.message}</p>}
            <Controller
              control={control}
              name="password"
              render={({ field: { value, onChange } }) => (
                <input
                  placeholder="Password"
                  id="password"
                  type="password"
                  value={value}
                  onChange={onChange}
                  className="border border-gray-300 p-2 rounded min-w-64 mb-3"
                />
              )}
            />
            {errors.password && <p>{errors.password.message}</p>}
            <div className="ml-auto mr-8">
              <button
                type="submit"
                disabled={isSubmitting}
              >
                <div className="flex flex-row items-center gap-2">Sign In<HiOutlineArrowLongRight /></div>
              </button>
            </div>
          </div>
        </div>
      </form>
    </Page>
  );
};

export default LoginPage;
