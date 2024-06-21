"use client";

import {useRef, useState} from "react";
import SubmitButton from "./SubmitButton";
import {sendEmail} from "../_lib/actions";
import toast from "react-hot-toast";

export default function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [pending, setPending] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    try {
      event.preventDefault();
      setPending(true);
      const data = new FormData(formRef.current!);

      const formData = {
        name: data.get("name"),
        email: data.get("email"),
        message: data.get("message"),
      };

      await sendEmail(formData);
      toast.success("Message sent successfully!");
      formRef.current!.reset();
    } catch (err) {
      toast.error("Failed to send message. Please try again.");
      console.error(err);
    } finally {
      setPending(false);
    }
  };

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      className='mt-8 space-y-4 flex flex-col gap-6'>
      <div>
        <label className='block text-lg font-medium mb-2' htmlFor='name'>
          Name
        </label>
        <input
          className='w-full border p-2 rounded'
          type='text'
          id='name'
          name='name'
          required
        />
      </div>
      <div>
        <label className='block text-lg font-medium mb-2' htmlFor='email'>
          Email
        </label>
        <input
          className='w-full border p-2 rounded'
          type='email'
          id='email'
          name='email'
          required
        />
      </div>
      <div>
        <label className='block text-lg font-medium mb-2' htmlFor='message'>
          Message
        </label>
        <textarea
          className='w-full border p-2 rounded'
          id='message'
          name='message'
          rows={4}
          required></textarea>
      </div>
      <SubmitButton pendingLabel='Sending...' pending={pending}>
        Send
      </SubmitButton>
    </form>
  );
}
