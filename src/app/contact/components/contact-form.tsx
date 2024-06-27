"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  subject: z.string().min(120, {
    message: "Subject must not exceed  120 characters.",
  }),
  message: z.string().min(300, {
    message: "Message must not exceed 300 characters.",
  }),
});

const ContactForm = () => {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <h1 className="text-3xl font-bold">Connect With Us</h1>
        <p className="text-sm">
          Please fill out the form below and submit if you have any feedback or
          queries about our service.
        </p>
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  placeholder={`Enter Your Username *`}
                  {...field}
                  className=" shadow-md shadow-white/30 border border-primary/30"
                />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  placeholder="Enter Your Email *"
                  {...field}
                  className=" shadow-md shadow-white/30 border border-primary/30"
                />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="subject"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  placeholder="Enter Your Subject"
                  {...field}
                  className=" shadow-md shadow-white/30 border border-primary/30"
                />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Textarea
                  placeholder="Type your message here......"
                  {...field}
                  className=" shadow-md shadow-white/30 border border-primary/30"
                />
              </FormControl>
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full font-bold text-md">
          Submit
        </Button>
      </form>
    </Form>
  );
};

export default ContactForm;
