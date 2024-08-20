"use client";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { Checkbox } from "@radix-ui/react-checkbox";
import { ArrowBigLeft } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  fullname: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  email: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  password: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  confirmPassword: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
});

const SignupPage = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      fullname: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }
  const router = useRouter();
  return (
    <div className=" flex flex-col justify-center items-center h-screen">
      {" "}
      <Link
        href="/home"
        className="flex items-center gap-2 mb-4 font-bold text-black hover:text-black/20 transition-all duration-150 ease-in-out hover:scale-125"
      >
        <ArrowBigLeft />
        Back to Home Page
      </Link>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 ">
          <h1 className="font-bold text-primary  text-3xl ">Sign Up</h1>
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="Full Name" {...field} />
                </FormControl>
                <FormControl>
                  <Input placeholder="Username" {...field} />
                </FormControl>{" "}
                <FormControl>
                  <Input placeholder="Email" {...field} />
                </FormControl>{" "}
                <FormControl className="relative">
                  <>
                    <Input
                      type="password"
                      placeholder="Password"
                      {...field}
                      className="relative"
                      id="password"
                    ></Input>
                  </>
                </FormControl>{" "}
                <FormControl>
                  <Input placeholder="Confirm Password" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex items-center  space-x-2">
            <Checkbox id="terms" />
            <label
              htmlFor="terms"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              I accept terms and conditions
            </label>
          </div>
          <Button type="submit" className="w-full">
            Sign Up
          </Button>
          <p className="text-sm">
            Already have an account?{" "}
            <span
              className="text-blue-400 hover:underline cursor-pointer "
              onClick={() => router.push("/login")}
            >
              Sign In!
            </span>
          </p>{" "}
        </form>
      </Form>
    </div>
  );
};

export default SignupPage;
